import DropDownMenuComponent from '@/components/DropDownMenu';
import Fab from '@/components/Fab';
import ItemCard from '@/components/ItemCard';
import { items, lists } from '@/db/schema';
import { Product } from '@/types';
import { eq } from 'drizzle-orm';
import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React from 'react';
import { FlatList } from 'react-native';

const Page = () => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: currentList } = useLiveQuery(
    drizzleDb
      .select()
      .from(lists)
      .where(eq(lists.id, Number(id)))
      .limit(1)
  );

  const { data: listItems = [] } = useLiveQuery(
    drizzleDb
      .select()
      .from(items)
      .where(eq(items.list_id, Number(id)))
      .orderBy(items.date_added)
  );

  const transformedItems: Product[] = listItems.map((item) => ({
    ...item,
    isChecked: Boolean(item.isChecked),
    quantity: 1, // Adding default quantity since it's optional in the Product type
  }));

  const handlePress = () => {
    router.push('/list/new');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: currentList?.[0]?.name || 'List',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerRight: () => <DropDownMenuComponent />,
        }}
      />
      <FlatList
        contentContainerClassName='mt-4'
        data={transformedItems}
        renderItem={({ item }) => <ItemCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16 }}
      />
      <Fab onPress={handlePress} />
    </>
  );
};

export default Page;
