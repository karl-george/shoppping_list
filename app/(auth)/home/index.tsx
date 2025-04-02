import Fab from '@/components/Fab';
import ShoppingListCard from '@/components/ShoppingListCard';
import { lists } from '@/db/schema';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React from 'react';
import { FlatList, View } from 'react-native';

const Page = () => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db);
  useDrizzleStudio(db);

  const { data } = useLiveQuery(drizzleDb.select().from(lists));

  const router = useRouter();

  const handleFab = () => {
    router.push('/home/new-list');
  };

  return (
    <>
      <FlatList
        contentContainerClassName='mt-4'
        data={data}
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
