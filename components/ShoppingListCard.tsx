import { ShoppingLists } from '@/types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ShoppingListCard = ({ id, name, icon, color }: ShoppingLists) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/list/${id}`)}>
      <View className='flex-row items-center gap-3'>
        <View
          className='flex items-center justify-center w-12 h-12 rounded-md'
          style={{ backgroundColor: color }}
        >
          <Text className='text-3xl'>{icon}</Text>
        </View>
        <View>
          <Text className='text-lg text-white'>{name}</Text>
          <Text className='text-sm text-textFaded'>Items</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingListCard;
