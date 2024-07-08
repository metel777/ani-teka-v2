'use server'

import { db } from "@/db/db";
import { userLists } from "@/db/schema";

export async function addToList(formData: FormData) {
    const mediaId = formData.get('mediaId') as string
    const mediaType = formData.get('mediaType') as 'anime' | 'manga'
    const watchedEpisodes = formData.get('watchedEpisodes') as string
    const score = formData.get('score') as string
    const list = formData.get('list') as 'planning' | 'watching' | 'paused' | 'dropped'

    await db.insert(userLists).values({
        userId: '1',
        list: list,
        media_id: Number(mediaId),
        mediaType: mediaType,
        score: Number(score),
        watchedEpisodes: Number(watchedEpisodes)
    })
}