import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import DropDownMenuComponent from '@/components/DropDownMenu';
import { Product } from '@/types';
import ItemCard from '@/components/ItemCard';

const dummydata: Product[] = [
  {
    id: 1,
    name: 'strawberries',
    isChecked: false,
    quantity: 1,
    date_added: '123',
    date_updated: '123',
  },
  {
    id: 2,
    name: 'oranges',
    isChecked: false,
    quantity: 1,
    date_added: '123',
    date_updated: '123',
  },
];

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          title: id as string,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerRight: () => <DropDownMenuComponent />,
        }}
      />
      <FlatList
        contentContainerClassName='mt-4'
        data={dummydata}
        renderItem={({ item }) => <ItemCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16 }}
      />
    </>
  );
};

export default Page;
