import { int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);

export const users = sqliteTable('users', {
    id: text('id').notNull().primaryKey(),
    username: text('username'),
    email: text('email'),
    passwordHash: text('password_hash'),
})

export const userLists = sqliteTable('users_lists', {
    userId: text('user_id').references(() => users.id),
    mediaType: text('media_type', { enum: ['anime', 'manga'] }),
    media_id: int('media_id'),
    list: text('list', { enum: ['planning', 'watching', 'paused', 'dropped', 'completed'] }).notNull(),
    score: int('score'),
    watchedEpisodes: int('watched_episodes')
})


export const sessionsTable = sqliteTable("session", {
    id: text("id").notNull().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    expiresAt: integer("expires_at").notNull(),
    username: text("username"),
});


