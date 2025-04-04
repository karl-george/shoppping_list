import { LIST_COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

const Page = () => {
  const [selectedColor, setSelectedColor] = useMMKVString('selectedColor');
  const router = useRouter();

  return (
    <View className='px-4 mt-4'>
      <View className='flex-row items-center justify-center'>
        <Text className='text-xl text-white'>Pick a Background Color</Text>
        <TouchableOpacity onPress={router.back} className='absolute right-0'>
          <Ionicons name='close' size={28} color={'white'} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={LIST_COLORS}
        numColumns={4}
        contentContainerStyle={{ gap: 16, paddingTop: 38, paddingBottom: 38 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedColor(item);
              router.back();
            }}
          >
            <View
              className='flex-wrap items-center justify-center w-20 h-20 rounded-full'
              style={{ backgroundColor: item }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Page;
