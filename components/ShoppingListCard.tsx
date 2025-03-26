import { ShoppingLists } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';

const ShoppingListCard = ({ name, products, emoji, color }: ShoppingLists) => {
  return (
    <View className='flex-row items-center gap-3'>
      <View
        className='flex items-center justify-center w-12 h-12 rounded-md'
        style={{ backgroundColor: color }}
      >
        <Text className='text-3xl'>{emoji}</Text>
      </View>
      <View>
        <Text className='text-lg text-white'>{name}</Text>
        <Text className='text-sm text-textFaded'>{products.length} Items</Text>
      </View>
    </View>
  );
};

export default ShoppingListCard;
