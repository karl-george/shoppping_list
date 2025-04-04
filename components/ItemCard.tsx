import { items } from '@/db/schema';
import { Product } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ReanimatedSwipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ItemCard = ({ id, name, isChecked }: Product) => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db);

  const [checked, setChecked] = useState<boolean>(false);
  const reanimatedRef = useRef<SwipeableMethods>(null);

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
    await drizzleDb.delete(items).where(eq(items.id, id));
  };

  const markAsComplete = async () => {
    if (isChecked === 1) {
      await drizzleDb
        .update(items)
        .set({ isChecked: 0 })
        .where(eq(items.id, id));
    } else {
      await drizzleDb
        .update(items)
        .set({ isChecked: 1 })
        .where(eq(items.id, id));
    }
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
        <View className='flex-row w-full p-4 rounded-md bg-bgItem'>
          <View>
            <BouncyCheckbox
              isChecked={isChecked === 1}
              onPress={markAsComplete}
              size={25}
              iconStyle={{ borderRadius: 4 }}
              innerIconStyle={{ borderRadius: 4 }}
              //! Edit fillColor if a different accent colour is needed
              fillColor='#B2860C'
              textComponent={
                <Text
                  className={
                    isChecked === 0
                      ? 'ml-3 text-lg text-white capitalize'
                      : 'ml-3 text-lg text-textFaded capitalize line-through'
                  }
                >
                  {name}
                </Text>
              }
            />
          </View>
        </View>
      </ReanimatedSwipeable>
    </Reanimated.View>
  );
};

export default ItemCard;
