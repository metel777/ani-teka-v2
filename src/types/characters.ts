import { media, otherCoverImage } from "./media"


export type CharactersEdges = {
    edges:
    [{
        id: Number
        role: string
        voiceActors: VoiceActors
        node: CharacterNode
    }]
}
interface CharacterNode {

    id: Number
    description: string
    favourites: Number
    name: {
        full: string
        userPreferred: string
    }
    image: otherCoverImage
}


interface VoiceActors {
    id: Number
    image: otherCoverImage
}

export type FullCharacterInfo = {
    data: {
        Character: {
            id: number
            description: string
            image: otherCoverImage
            name: {
                first: string
                middle: string
                last: string
                full: string
                native: string
                userPreferred: string
            }
            media: {
                edges: [
                    {
                        id: number
                        node: media
                    }
                ]
            }
        }

    }
}

