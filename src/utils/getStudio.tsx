"use server"

import { Studio } from "@/types/studio"

export async function getStudio( id?: string, page?: string,): Promise<Studio> {
  const query = `
  query (
    $studioId: Int 
    $perPage: Int = 25
    $page: Int = 1
    $sort: [MediaSort] = [START_DATE_DESC]
  ) {
    Studio(id: $studioId) {
      name
      id
      favourites
      media(isMain: true, perPage: $perPage, page: $page, sort: $sort) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        nodes {
          id
          title {
            romaji
            english
            native
          }
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
          season
          type
          seasonYear
          format
          status
          episodes
          genres
          description
          averageScore
          coverImage {
            extraLarge
            large
            medium
            color
          }
          
        }
      }
    }
  }
  
  `
  const variables = {
    studioId: id,
  }

  const results = await fetch("https://graphql.anilist.co/", {
    next: { revalidate: 5 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (!results) {
    throw new Error("Failed to fetch")
  }

  // const anime = await results.json()
  return results.json()
}
