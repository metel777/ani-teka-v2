import { Key } from "react"
import {  CharactersEdges } from "./characters"


// Characters
// Recommendations
// Relations
// Staff

export type SingleData = {
    data: SingleMedia
}
export type Data = {
    data: Page
}
type Page = {
    Page: Media
   
}
export type AnimeCardEdges = {
    relationType: string
    id: Key
    node: RelationNode
}

export type Media = {
    [key: string]: Content[]
    
}


export type SingleMedia = {
    [key: string]: Content

}
export type MediaPromise = {
    [key: string]: [Content]

}

type RelationEdges = {
    edges: [
        {
            relationType: string
            id: Key
            node: RelationNode
        }
    ]
}

export type RelationNode = {

    id: Number
    status: string
    format: string
    coverImage: CoverImage
    type: 'ANIME' | 'MANGA'
    title: Title
    episodes: number
    startDate: Date
    endDate: Date

}
type StaffEdges = {
    id: Key
    role: string
    node: StaffNode
}

type StaffNode = {

    id: Number
    image: CoverImage
    name: {
        first: string
        last: string
        userPreferred: string
    }
}

type RecommendationsNode = {
    node: {

        rating: Number
        mediaRecommendation: {
            id: Number 
            type: "ANIME" | "MANGA"
            title: Title
            coverImage: CoverImage
        }
    }
}

export type Content = {
   
    relations: RelationEdges

    staff: {
        edges: StaffEdges[]
    }

    characters: CharactersEdges

    recommendations: {
        edges: RecommendationsNode[]
    }


    title: Title
    coverImage: CoverImage
    startDate: Date
    endDate: Date
    type: 'ANIME' | 'MANGA'
    tags: Tags
    id: Key
    chapters: Number
    volumes: Number
    season: string
    seasonYear: Number
    format: string
    status: string
    episodes: Number
    genres: [String]
    description: string
    averageScore: Number
    duration: Number
    source: string
    popularity: Number
    favourites: Number
    studios: {
        nodes: {
            id: Number
            name: string
        }
    }
}
type Title = {
    english: string
    romaji: string
}

type CoverImage = {
    large: string
    extraLarge: string
    medium: string
    color: string
}
export type CoverImagePerson = {
    large: string
    extraLarge: string
    medium: string
}
type Date = {
    year: number
    month: number
    day: number
}
type Tags = {
    id: Number
    name: string
    description: string
    isMediaSpoiler: boolean
}





