'use server'

import { MediaForHome } from "../types/media"


export async function getMedia(page?: string, search?: string, order?: string, genre?: string | string[], tag?: string | string[]): Promise<MediaForHome> {

  const query = `
  query (
    $id: Int
    $page: Int
    $perPage: Int = 25
    $sortValue: [MediaSort] = [SCORE_DESC]
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
        description 
        averageScore 
      }
    }
  }
  
  `
  const variables = {
    page,
    search,
    sortValue: order,
    genre,
    tag_in: tag
  }

  const results = await fetch("https://graphql.anilist.co/", {
    next: { revalidate: 5, tags: ['media'] },
    
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