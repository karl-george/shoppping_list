import { Product } from '@/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ReanimatedSwipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Reanimated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  // const styleAnimation = useAnimatedStyle(() => {
  //   console.log('showRightProgress:', prog.value);
  //   console.log('appliedTranslation:', drag.value);
  //   return {
  //     transform: [{ translateX: drag.value + 50 }],
  //   };
  // });
  // return (
  //   <Reanimated.View style={styleAnimation}>
  //     <Text>Text</Text>
  //   </Reanimated.View>
  // );
}

const ItemCard = ({
  id,
  name,
  isChecked,
  quantity,
  date_added,
  date_updated,
}: Product) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Reanimated.View className='flex-row p-4 rounded-md bg-bgItem'>
      <ReanimatedSwipeable
      // friction={2}
      // rightThreshold={100}
      // renderRightActions={RightAction}
      >
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
      </ReanimatedSwipeable>
    </Reanimated.View>
  );
};

export default ItemCard;
