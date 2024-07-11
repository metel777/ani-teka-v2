'use server'


import { db, userLists } from "@/db/schema";
import { validateSession } from "./auth";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addToList(formData: FormData) {
    revalidatePath('/user/library')

    const mediaId = Number(formData.get('mediaId'))
    const maxEpisodes = Number(formData.get('maxEpisodes'))
    const watchedEpisodes = Number(formData.get('watchedEpisodes'))
    const validateWatchedEpisodes = watchedEpisodes > maxEpisodes ? maxEpisodes : watchedEpisodes

    const score = Number(formData.get('score'))
    const mediaType = formData.get('mediaType') as 'anime' | 'manga'
    const list = formData.get('list') as 'planning' | 'watching' | 'paused' | 'dropped'

    const session = await validateSession()

    try {
        const existingMediaInList = await db.select().from(userLists).where(eq(userLists.media_id, mediaId))

        if (existingMediaInList.length > 0) {
            await db.update(userLists)
                .set({
                    score: score > 10 ? 10 : score,
                    list: list || 'planning',
                    watchedEpisodes: validateWatchedEpisodes
                })
                .where(and(eq(userLists.userId, session.user?.id as string), eq(userLists.media_id, mediaId)))
        } else {
            await db.insert(userLists).values({
                userId: session.user?.id,
                media_id: mediaId,
                score: score > 10 ? 10 : score,
                list: list || 'planning',
                mediaType,
                watchedEpisodes: validateWatchedEpisodes,
            })
        }
    } catch (error) {
        console.log('ERROR ADDING TO LIST')
    }

}

export async function deleteFromList(formData: FormData) {
    const session = await validateSession()
    const userId = session?.user?.id as string
    
    const mediaId = Number(formData.get('mediaId'))

    console.log('DELETE ACTION::::::::::::::::::::', mediaId)
    await db.delete(userLists).where(and(eq(userLists.userId, userId), eq(userLists.media_id, mediaId )))
}

export async function getAllItemsFromUserList() {
    const session = await validateSession()
    const userId = session?.user?.id as string

    return await db.select().from(userLists).where(eq(userLists.userId, userId))

}

