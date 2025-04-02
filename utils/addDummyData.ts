import { items, lists } from '@/db/schema';
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite';
import AsyncStorage from 'expo-sqlite/kv-store';

// Utility file for adding some dummy data to the database for testing

export const addDummyData = async (db: ExpoSQLiteDatabase) => {
  const value = AsyncStorage.getItemSync('initialized');
  if (value) return;

  await db.insert(lists).values([
    {
      name: 'Groceries',
      icon: '🍓',
      color: '#123421',
      date_added: Date.now(),
      date_updated: Date.now(),
    },
    {
      name: 'Cottage Pie',
      icon: '🥔',
      color: '#342432',
      date_added: Date.now(),
      date_updated: Date.now(),
    },
  ]);

  await db.insert(items).values([
    {
      name: 'Milk',
      isChecked: 0,
      date_added: Date.now(),
      date_updated: Date.now(),
      list_id: 1,
    },
    {
      name: 'Eggs',
      isChecked: 0,
      date_added: Date.now(),
      date_updated: Date.now(),
      list_id: 1,
    },
    {
      name: 'Bread',
      isChecked: 0,
      date_added: Date.now(),
      date_updated: Date.now(),
      list_id: 2,
    },
  ]);
  AsyncStorage.setItemSync('initialized', 'true');
};
