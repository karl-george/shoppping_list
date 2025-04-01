import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const router = useRouter();

  return (
    <View className='px-4 mt-4'>
      {/* Header */}
      <View className='flex-row items-center justify-center'>
        <Text className='text-xl text-white'>Add New Item</Text>
        <TouchableOpacity onPress={router.back} className='absolute right-0'>
          <Ionicons name='close' size={28} color={'white'} />
        </TouchableOpacity>
      </View>
      {/* Text Input */}
      <View className='p-4 mt-8 rounded-md bg-bg'>
        <TextInput
          placeholder='Strawberries...'
          placeholderTextColor={'#626262'}
          className='text-white'
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
