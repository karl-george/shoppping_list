import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const lists = sqliteTable('lists', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  color: text('color').notNull(),
  date_added: integer('date_added').notNull(),
  date_updated: integer('date_updated').notNull(),
});

export const items = sqliteTable('items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  isChecked: integer('isChecked').notNull(),
  date_added: integer('date_added').notNull(),
  date_updated: integer('date_updated').notNull(),
  list_id: integer('list_id')
    .notNull()
    .references(() => lists.id),
});
