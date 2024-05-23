'use server'

import { TagsAndGenres } from "../types/tags-genres"

export async function getTagsAndGenres(): Promise<TagsAndGenres> {

  const query = `
  query ($id: Int = 1) {
    Media(id: $id) {
      id
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

  const results = await fetch("https://graphql.anilist.co/", {
    next: { revalidate: 5 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query
    }),
  })

  if (!results) {
    throw new Error("Failed to fetch")
  }

  // const anime = await results.json()
  return results.json()
}