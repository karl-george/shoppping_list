import { items, lists } from '@/db/schema';
import { ShoppingLists } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { eq } from 'drizzle-orm';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useRef } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import ReanimatedSwipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ShoppingListCard = ({ id, name, icon, color }: ShoppingLists) => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db);

  const reanimatedRef = useRef<SwipeableMethods>(null);
  const router = useRouter();

  const { data: listItems = [] } = useLiveQuery(
    drizzleDb.select().from(items).where(eq(items.list_id, id))
  );

  const itemCount = listItems.length;

  const RightAction = (
    prog: SharedValue<number>,
    drag: SharedValue<number>
  ) => {
    const styleAnimation = useAnimatedStyle(() => ({
      transform: [{ translateX: drag.value + 200 }],
    }));

    return (
      <Pressable
        onPress={handleDelete}
        className='items-center justify-center w-40 h-full rounded-md bg-accent'
      >
        <Reanimated.View
          style={styleAnimation}
          className='items-start justify-center w-full h-full'
        >
          <Ionicons name='trash-outline' size={24} color='white' />
        </Reanimated.View>
      </Pressable>
    );
  };

  const handleDelete = async () => {
    await drizzleDb.delete(items).where(eq(items.list_id, id));
    await drizzleDb.delete(lists).where(eq(lists.id, id));
  };

  return (
    <Reanimated.View>
      <ReanimatedSwipeable
        ref={reanimatedRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={RightAction}
        overshootRight={false}
      >
        <View className='w-full p-4 rounded-md bg-bgItem'>
          <TouchableOpacity onPress={() => router.push(`/list/${id}`)}>
            <View className='flex-row items-center gap-3'>
              <View
                className='flex items-center justify-center w-12 h-12 rounded-md'
                style={{ backgroundColor: color }}
              >
                <Text className='text-3xl'>{icon}</Text>
              </View>
              <View>
                <Text className='text-lg text-white'>{name}</Text>
                <Text className='text-sm text-textFaded'>
                  {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ReanimatedSwipeable>
    </Reanimated.View>
  );
};

export default ShoppingListCard;
