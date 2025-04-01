import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const router = useRouter();

  return (
    <View className='px-4 mt-4'>
      {/* Header */}
      <View className='flex-row items-center justify-center'>
        <Text className='text-xl text-white'>Add a New List</Text>
        <TouchableOpacity onPress={router.back} className='absolute right-0'>
          <Ionicons name='close' size={28} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;
