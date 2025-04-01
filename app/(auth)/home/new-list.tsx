import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

const Page = () => {
  const router = useRouter();
  const [selectedColor, selectSelectedColor] = useMMKVString('selectedColor');

  return (
    <View className='px-4 mt-4'>
      {/* Header */}
      <View className='flex-row items-center justify-center'>
        <Text className='text-xl text-white'>Add a New List</Text>
        <TouchableOpacity onPress={router.back} className='absolute right-0'>
          <Ionicons name='close' size={28} color={'white'} />
        </TouchableOpacity>
      </View>
      {/* Text Input */}
      <View className='p-4 mt-8 rounded-md bg-bg'>
        <TextInput
          placeholder='List Name'
          placeholderTextColor={'#716F6F'}
          className='text-white'
        />
      </View>

      {/* Icon and Colour picker */}
      <View className='flex-row mt-6'>
        <View className='w-8 h-8 bg-red-600'></View>
        <TouchableOpacity
          className='w-8 h-8 bg-yellow-600'
          onPress={() => router.push('/home/color-select')}
          style={{ backgroundColor: selectedColor ? selectedColor : 'red' }}
        />
      </View>

      {/* Create Button */}
      <TouchableOpacity className='self-center justify-center w-48 p-4 mt-8 rounded-md bg-accent'>
        <Text className='text-lg text-center text-white'>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
