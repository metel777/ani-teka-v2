import { Key } from "react"

export type Studio = {
    [key: string]: {
        Studio: {
            name: string
            id: string
            favourites: string
            media: Media
        }
    }
}
type Media = {

    pageInfo: pageInfo
    nodes: studioNodes[]
}

type pageInfo = {
    total: number
    perPage: number
    currentPage: number
    lastPage: number
    hasNextPage: boolean
}
interface studioNodes  {
    id: Key | number
    title: {
        romaji: string
        english: string
        native: string
    }
    startDate: {
        year: number
        month: number
        day: number
    }
    endDate: {
        year: number
        month: number
        day: number
    }
    type: 'MANGA' | 'ANIME'
    season: string
    seasonYear: number
    format: string
    status: string
    episodes: number
    genres: string
    description: string
    averageScore: number
    coverImage: {
        extraLarge: string
        large: string
        medium: string
        color: string
    }
}