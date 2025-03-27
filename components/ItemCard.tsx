import { Product } from '@/types';
import { Ionicons } from '@expo/vector-icons';
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

const ItemCard = ({
  id,
  name,
  isChecked,
  quantity,
  date_added,
  date_updated,
}: Product) => {
  const [checked, setChecked] = useState<boolean>(false);
  const reanimatedRef = useRef<SwipeableMethods>(null);

  const markAsComplete = () => {
    // TODO: Update the product in the database
  };

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
        className='items-center justify-center w-40 h-full bg-red-500 rounded-md'
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

  const handleDelete = () => {
    console.log('delete');
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
        enableContextMenu
      >
        <View className='flex-row w-full p-4 rounded-md bg-bgItem'>
          <View>
            <BouncyCheckbox
              isChecked={checked}
              onPress={() => setChecked((prevState) => !prevState)}
              size={25}
              iconStyle={{ borderRadius: 4 }}
              innerIconStyle={{ borderRadius: 4 }}
              //! Edit fillColor if a different accent colour is needed
              fillColor='#B2860C'
              textComponent={
                <Text
                  className={
                    !checked
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
