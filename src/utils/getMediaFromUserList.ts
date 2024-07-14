'use server'

import { validateSession } from "@/actions/auth"
import { getMediaByIdInArray, MediaForUserList } from "@/actions/media"
import { db, userLists } from "@/db/schema"
import { userListOptions } from "@/types/userList"
import { and, eq } from "drizzle-orm"

interface Media {
    list: userListOptions | null
    userScore: number | null
    watchedEpisodes: number | null
    data: MediaForUserList
}

export async function getMediaFromUserList(list: userListOptions | 'all', mediaType: "ANIME" | "MANGA") {
    const session = await validateSession()
    const userId = session?.user?.id as string

    if (list === "all") {
        const allItems = await db.select().from(userLists)
            .where(and(
                eq(userLists.userId, userId),
                eq(userLists.mediaType, mediaType.toLowerCase() as any)))

        const mediaIdsArray = allItems.map((item) => {
            return item.media_id
        })

        const query = await getMediaByIdInArray(mediaIdsArray, mediaType)
        const rawMedia = query.data.Page.media

        const media = [] as Media[]
        const mergeMediaWithUserData = allItems.map((item) => {
            const f = rawMedia.filter((media) => media.id === item.media_id)

            const datadd = {
                list: item.list,
                userScore: item.score,
                watchedEpisodes: item.watchedEpisodes,
                data: f[0],
            }
            media.push(datadd as any)
        })

        return media
    } else {
        const userList = await db.select().from(userLists)
            .where(and(
                eq(userLists.userId, userId),
                eq(userLists.list, list as any),
                eq(userLists.mediaType, mediaType.toLowerCase() as any)))

        const UserListItemsId = userList.map((item) => {
            return item.media_id
        })

        const query = await getMediaByIdInArray(UserListItemsId, mediaType)
        const rawMedia = query.data.Page.media

        const media = [] as Media[]

        userList.map((item) => {
            //filter current item.id in rawMedia
            const f = rawMedia.filter((media) => media.id === item.media_id)

            //push filtered from query media data in array 
            const datadd = {
                list: item.list,
                userScore: item.score,
                watchedEpisodes: item.watchedEpisodes,
                data: f[0],
            }
            media.push(datadd as any)
        })

        return media
    }


}