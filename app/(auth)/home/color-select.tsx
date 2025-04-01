import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ColorPicker, { Panel5 } from 'reanimated-color-picker';
import { useMMKVString } from 'react-native-mmkv';

const Page = () => {
  const [selectedColor, selectSelectedColor] = useMMKVString('selectedColor');

  const onSelectColor = ({ hex }: { hex: string }) => {
    'worklet';
    console.log(hex);
    selectSelectedColor(hex);
  };
  return (
    <View className='px-4 mt-4'>
      <ColorPicker
        value='red'
        onComplete={onSelectColor}
        style={{
          width: '100%',
        }}
      >
        <Panel5 />
      </ColorPicker>

      <TouchableOpacity className='self-center justify-center w-48 p-4 mt-8 rounded-md bg-accent'>
        <Text className='text-lg text-center text-white'>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
