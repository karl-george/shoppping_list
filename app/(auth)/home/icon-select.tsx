import { icons } from '@/constants/Icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

const Page = () => {
  const [selectedIcon, setSelectedIcon] = useMMKVString('selectedIcon');
  const router = useRouter();

  return (
    <View className='px-4 mt-4'>
      <View className='flex-row items-center justify-center'>
        <Text className='text-xl text-white'>Pick an Icon</Text>
        <TouchableOpacity onPress={router.back} className='absolute right-0'>
          <Ionicons name='close' size={28} color={'white'} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={icons}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 18, paddingTop: 38, paddingBottom: 38 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedIcon(item);
              router.back();
            }}
          >
            <Text className='text-[40px]'>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Page;
