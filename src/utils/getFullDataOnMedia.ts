'use server'

import { MediaForFullDetail } from "../types/full-media"



export async function getFullDataOnMedia(id?: string, mediaType?: 'MANGA' | 'ANIME'): Promise<MediaForFullDetail> {

  const query = `
  query (
    $id: Int = 154587
    $sortValue: [MediaSort] = [SCORE_DESC]
    $search: String
    $seasonYear: Int
    $genre: [String]
    $tag_in: [String]
    $type: MediaType = ANIME
  ) {
   
      Media(
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
              episodes
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
        staff {
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
            voiceActors(language: JAPANESE) {
              id
              image {
                large
                medium
              }
            }
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
        recommendations {
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
      GenreCollection
       MediaTagCollection {
      id
      name
      description
      isAdult
      isGeneralSpoiler
    }
    }
  

  
  `
  const variables = {
    id,
    type: mediaType
    
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