import { text, integer, pgTable, timestamp } from 'drizzle-orm/pg-core'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const db = drizzle(sql);

export const users = pgTable('users', {
    id: text('id').notNull().primaryKey(),
    username: text('username'),
    email: text('email'),
    passwordHash: text('password_hash'),
})

export const userLists = pgTable('users_lists', {
    userId: text('user_id').references(() => users.id),
    mediaType: text('media_type', { enum: ['anime', 'manga'] }),
    media_id: integer('media_id'),
    list: text('list', { enum: ['planning', 'watching', 'paused', 'dropped', 'completed'] }).notNull(),
    score: integer('score'),
    watchedEpisodes: integer('watched_episodes')
})

export const sessionsTable = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});

