import { items } from '@/db/schema';
import { Ionicons } from '@expo/vector-icons';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const db = useSQLiteContext();
  const drizzleDB = drizzle(db);
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const [value, setValue] = useState('');

  const addItem = async () => {
    await drizzleDB.insert(items).values({
      name: value,
      isChecked: 0,
      date_added: Date.now(),
      date_updated: Date.now(),
      list_id: Number(id),
    });
    router.back();
  };

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
          value={value}
          onChangeText={setValue}
          autoFocus
        />
      </View>

      {/* Create Button */}
      <TouchableOpacity
        className='self-center justify-center w-48 p-4 mt-8 rounded-md bg-accent'
        onPress={addItem}
      >
        <Text className='text-lg text-center text-white'>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
