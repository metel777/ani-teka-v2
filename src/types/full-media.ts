import { Key } from "react"
import { MediaTagCollection } from "./tags-genres"
import { mediaCoverImage, mediaDate, otherCoverImage, title } from "./media"
import { CharactersEdges } from "@/types/characters"

export type MediaForFullDetail = {
    data: {
        Media: media
        GenreCollection: string[]
        MediaTagCollection: MediaTagCollection
    }
}

interface media {
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
    tags: MediaTagCollection

    trailer: {
        id: string
        site: string
    }

    relations: RelationEdges
    staff: {
        edges: StaffEdges[]
    } 
    characters: CharactersEdges
    recommendations: {
        edges: RecommendationsNode[]
    }
 
    type: 'ANIME' | 'MANGA'
    id: Key
    chapters: Number
    volumes: Number
    season: string
    seasonYear: Number
    format: string
    status: string
    episodes: Number
    genres: string[]
    description: string
    averageScore: number
    duration: Number
    source: string
    popularity: Number
    favourites: Number
    GenreCollection: string[]
}


// RELATION =====
interface RelationEdges {
    edges: [
        {
            relationType: string
            id: Key
            node: RelationNode
        }
    ]
}
interface RelationNode {
    id: Number
    status: string
    format: string
    coverImage: mediaCoverImage
    type: 'ANIME' | 'MANGA'
    title: title
    episodes: number
    startDate: mediaDate
    endDate: mediaDate
}
// STAFF =====
interface StaffEdges {
        id: Key
        role: string
        node: StaffNode
}

interface StaffNode {

    id: Number
    image: otherCoverImage
    name: {
        first: string
        last: string
        userPreferred: string
    }
}
// RECCOMENDATION =====
interface RecommendationsNode {
    node: {
        rating: Number
        mediaRecommendation: {
            id: Number
            type: "ANIME" | "MANGA"
            title: title
            coverImage: mediaCoverImage
        }
    }
}













