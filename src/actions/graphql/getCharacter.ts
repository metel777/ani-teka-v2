'use server'

import { FullCharacterInfo } from "@/types/characters"

export async function getCharacter(id: any): Promise<FullCharacterInfo> {
    const query = `
    query ($id: Int ) {
        Character(id: $id) {
          id
          description
          favourites
          image {
            large
            medium
          }
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          media {
            edges {
              id
              node {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                description
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                type
                averageScore
                status
                episodes
                format
                
                startDate {
                  year
                  month
                  day
                }
                chapters
              }
            }
          }
        }
      }
`

    const variables = {
        id
    }

    const results = await fetch("https://graphql.anilist.co/", {
        next: { revalidate: 5 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables
        }),
    })

    if (!results) {
        throw new Error("Failed to fetch")
    }

    return results.json()
}


