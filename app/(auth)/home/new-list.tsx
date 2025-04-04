import { icons } from '@/constants/Icons';
import { lists } from '@/db/schema';
import { Ionicons } from '@expo/vector-icons';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

const Page = () => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db);

  const [value, setValue] = useState<string>('');
  const [selectedColor, setSelectedColor] = useMMKVString('selectedColor');
  const [selectedIcon, setSelectedIcon] = useMMKVString('selectedIcon');
  const router = useRouter();

  if (!selectedIcon) setSelectedIcon(icons[0]);

  // TODO: Handle deleting a list and all of the items inside of it

  const createList = async () => {
    await drizzleDb.insert(lists).values({
      name: value,
      icon: selectedIcon || icons[0],
      color: selectedColor || '#123421',
      date_added: Date.now(),
      date_updated: Date.now(),
    });
    router.back();
  };

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
          value={value}
          onChangeText={setValue}
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
      <TouchableOpacity
        className='self-center justify-center w-48 p-4 mt-8 rounded-md bg-accent'
        onPress={createList}
      >
        <Text className='text-lg text-center text-white'>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
