import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: text('id').primaryKey(),
    email: text('email'),
    name: text('name'),
})

export const userLists = sqliteTable('users_lists', {
    userId: text('user_id').references(() => users.id),
    mediaType: text('media_type', { enum: ['anime', 'manga'] }),
    media_id: int('media_id'),
    list: text('list', { enum: ['planning', 'watching', 'paused', 'dropped'] }),
    score: int('score'),
    watchedEpisodes: int('watched_episodes')
})
