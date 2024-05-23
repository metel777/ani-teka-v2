'use server'

import { MediaForHome } from "@/types/media"




export async function getManga(page?: string, search?: string): Promise<MediaForHome> {

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
    $type: MediaType = MANGA
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
       
        tags {
          id
          name
          description
          isMediaSpoiler
        } 
        trailer {
          id
          site
        }
  
        relations {
          edges {
            relationType
            id
            node {
              id
              status
              format
              coverImage {
                extraLarge
                large
                medium
                color
              }
              type
              title {
                english
                romaji
              }
            }
          }
        }
        staff(sort: ROLE_DESC) {
          edges {
            id
            role
            node {
              id
              image {
                large
                medium
              }
              name {
                first
                last
                userPreferred
              }
            }
          }
        }
        characters {
          edges {
            id
            role
            
            node {
              id
              description
              favourites
              name {
                full
                userPreferred
              }
              image {
                large
                medium
              }
            }
          }
        }
        recommendations(sort: RATING) {
          edges {
            node {
              rating
              mediaRecommendation {
                id
                type
                title {
                  romaji
                  english
                }
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
        type
        id
        chapters 
        volumes 
        season
        seasonYear
        format 
        status 
        episodes 
        genres
        description 
        averageScore 
        duration 
        source 
        popularity
        favourites 
      }
    }
  }
  
  `
  const variables = {
    page,
    search
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