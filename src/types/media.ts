export type MediaForHome = {
    data: {
        Page: mediaData

    }
}

interface mediaData {
    media: media[]
    pageInfo: {
        total: number
        currentPage: number
        lastPage: number
        hasNextPage: boolean
        perPage: number
    }
}
export interface media {
    title: title
    coverImage: mediaCoverImage
    startDate: mediaDate
    endDate: mediaDate
    studios: {
        nodes: [
            {
                id: number
                name: string
            }
        ]
    }
    type: 'ANIME' | 'MANGA'
    id: number
    chapters: number
    season: string
    seasonYear: number
    format: string
    status: string
    episodes: number
    genres: string[]
    description: string
    averageScore: number
    duration: number
    popularity: number
    favourites: number
}


export interface title {
    english: string
    romaji: string
    native: string
}

export interface otherCoverImage {
    extraLarge: string
    large: string
    medium: string

}

export interface mediaCoverImage {
    extraLarge: string
    large: string
    medium: string
    color: string
}
export interface mediaDate {
    year: number
    month: number
    day: number
}
