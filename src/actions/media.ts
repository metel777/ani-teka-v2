'use server'

interface ListMedia {
  data: {
    Page: {
      media: MediaForUserList[]
    }
  }
}

export interface MediaForUserList {
  title: {
    romaji: string
    english: string
  }
  coverImage: {
    extraLarge: string
    large: string
    medium: string
    color: string
  }
  type: 'ANIME' | 'MANGA'
  id: number
  chapters: number
  seasonYear: number
  episodes: number
  averageScore: number
}

export async function getMediaById(id: (number | null)[]): Promise<ListMedia> {
  const query = `
  query (
    $id: [Int]
    $type: MediaType
  ) {
    Page (page: 1) {
      media(
        id_in: $id
        type: $type
        isAdult: false
      ) {
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
        type
        id
        chapters  
        seasonYear
        episodes 
        averageScore 
      }
    }
  }
  
  `
  const variables = {
    id,
    type: 'ANIME'
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

  return results.json()
}