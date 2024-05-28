'use server'

import { FullPersonInfo } from "@/types/person"

export default async function getPerson(id: any): Promise<FullPersonInfo> {
    const query = `
    query ($id: Int, $perPage: Int = 50) {
        Staff(id: $id) {
          id
          description(asHtml: true)
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          favourites
          image {
            large
            medium
          } 
          primaryOccupations
          staffMedia(perPage: $perPage, sort: [START_DATE_DESC]) {
            edges {
              node {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                    large
                    medium
                    color
                }
                type
                id
                chapters
                season
                seasonYear
                format
                status
                episodes
                genres
                description
                averageScore
                duration
                popularity
                favourites
                startDate {
                  year
                  month
                  day
                }
                endDate {
                  year
                  month
                  day
                }
                studios(isMain: true) {
                  nodes {
                    id
                    name
                  }
                }
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