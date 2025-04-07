import Fab from '@/components/Fab';
import ShoppingListCard from '@/components/ShoppingListCard';
import { lists } from '@/db/schema';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// Todo: Add haptics
// Todo: Add list reorganising (Let user change the order of the lists (via long press and drag?))

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
        contentContainerClassName='flex-1'
        data={data}
        renderItem={({ item }) => <ShoppingListCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16, marginTop: 4 }}
        ListEmptyComponent={() => (
          <View className='items-center justify-center h-full -mt-4'>
            <TouchableOpacity onPress={() => router.push('/home/new-list')}>
              <Text className='text-2xl text-accent'>
                Get started with your first list
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Fab onPress={handleFab} />
    </>
  );
};

export default Page;
