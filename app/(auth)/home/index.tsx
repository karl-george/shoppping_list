import Fab from '@/components/Fab';
import ShoppingListCard from '@/components/ShoppingListCard';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, View } from 'react-native';

const Page = () => {
  const router = useRouter();

  const handleFab = () => {
    router.push('/home/new-list');
  };

  const dummyData = [
    {
      id: 1,
      name: 'Big list of food',
      products: [],
      emoji: '🍕',
      color: '#157E1C',
    },
    {
      id: 2,
      name: 'Small list of food',
      products: [],
      emoji: '🥫',
      color: '#32288D',
    },
  ];

  return (
    <>
      <FlatList
        contentContainerClassName='mt-4'
        data={dummyData}
        renderItem={({ item }) => <ShoppingListCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        ItemSeparatorComponent={() => (
          <View className='h-0.5 bg-textFaded mt-3' />
        )}
      />
      <Fab onPress={handleFab} />
    </>
  );
};

export default Page;
