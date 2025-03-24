import ShoppingListCard from '@/components/ShoppingListCard';
import React from 'react';
import { Text, View } from 'react-native';

const Page = () => {
  return (
    // Flatlist of shopping list cards with a itemseperator
    <View>
      <ShoppingListCard />
    </View>
  );
};

export default Page;
