import { icons } from '@/constants/Icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

const Page = () => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useMMKVString('selectedColor');
  const [selectedIcon, setSelectedIcon] = useMMKVString('selectedIcon');

  if (!selectedIcon) setSelectedIcon(icons[0]);

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
      <Text className='mt-8 text-lg text-white'>List Name</Text>
      <View className='p-4 mt-2 rounded-md bg-bg'>
        <TextInput
          placeholder='Enter your list name...'
          placeholderTextColor={'#716F6F'}
          className='text-white'
        />
      </View>

      {/* Icon and Colour picker */}
      <View className='flex-row items-center justify-center gap-10 mt-6'>
        <View className='flex-row items-center'>
          <Text className='text-lg text-white'>Icon:</Text>
          <TouchableOpacity
            className='w-12 h-12 rounded-full'
            onPress={() => router.push('/home/icon-select')}
          >
            <Text className='text-4xl'>{selectedIcon}</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center'>
          <Text className='text-lg text-white'>Color:</Text>
          <TouchableOpacity
            className='w-12 h-12 ml-2 rounded-full'
            onPress={() => router.push('/home/color-select')}
            style={{ backgroundColor: selectedColor ? selectedColor : 'red' }}
          />
        </View>
      </View>

      {/* Create Button */}
      <TouchableOpacity className='self-center justify-center w-48 p-4 mt-8 rounded-md bg-accent'>
        <Text className='text-lg text-center text-white'>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
