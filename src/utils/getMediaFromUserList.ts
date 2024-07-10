'use server'

import { validateSession } from "@/actions/auth"
import { getAllItemsFromUserList } from "@/actions/list"
import { getMediaById, MediaForUserList } from "@/actions/media"
import { db, userLists } from "@/db/schema"
import { userListOptions } from "@/types/userList"
import { and, eq } from "drizzle-orm"

interface Media {
    list: userListOptions | null
    userScore: number | null
    watchedEpisodes: number | null
    data: MediaForUserList
}

export async function getMediaFromUserList(list: userListOptions | 'all') {



    if (list === "all") {
        const allItems = await getAllItemsFromUserList()

        const mediaIdsArray = allItems.map((item) => {
            return item.media_id
        })

        const data = await getMediaById(mediaIdsArray)

        const rawMedia = data.data.Page.media

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
        const session = await validateSession()
        const userId = session?.user?.id as string

        const items = await db.select().from(userLists).where(and(eq(userLists.userId, userId), eq(userLists.list, list as any)))

        const mediaIdsArray = items.map((item) => {
            return item.media_id
        })

        const data = await getMediaById(mediaIdsArray)

        const rawMedia = data.data.Page.media

        const media = [] as Media[]
        const mergeMediaWithUserData = items.map((item) => {
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
    }


}