

'use server'

import { MediaForHome } from "../types/media"





export async function getMediaForHome( search?: string): Promise<MediaForHome> {

  const query = `
  query (
    $id: Int
    $page: Int
    $perPage: Int = 30
    $sortValue: [MediaSort] = [TRENDING_DESC]
    $search: String
    $seasonYear: Int
    $genre: [String]
    $tag_in: [String]
    $type: MediaType = ANIME
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(
        id: $id
        type: $type
        sort: $sortValue
        search: $search
        seasonYear: $seasonYear
        genre_in: $genre
        tag_in: $tag_in
        isAdult: false
      ) {
        title {
          romaji
          english
          native
        } 
        coverImage {
          extraLarge
          large
          medium
          color
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
        studios(isMain: true) {
          nodes {
            id
            name
          }
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
      }
    }
  }
  
  `
  const variables = {
    search,
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

  // const anime = await results.json()
  return results.json()
}