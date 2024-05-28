import { media } from "./media"

export type FullPersonInfo = {
    data: {
        Staff: {
            id: number
            description: string
            name: {
                first: string
                middle: string
                last: string
                full: string
                native: string
                userPreferred: string
            }
            favourites: number
            image: {
                large: string
                medium: string
            }
            primaryOccupations: string
            staffMedia: {
                edges: [
                    {
                        node: media
                    }
                ]
            }
        }
    }

}

