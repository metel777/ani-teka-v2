import { CoverImagePerson } from "./anime"


export type CharactersEdges = {
    edges:
    [{
        id: Number
        role: string
        voiceActors: VoiceActors
        node: CharacterNode
    }]
}
type CharacterNode = {

    id: Number
    description: string
    favourites: Number
    name: {
        full: string
        userPreferred: string
    }
    image: CoverImagePerson
}


type VoiceActors = {
    id: Number
    image: CoverImagePerson
}

