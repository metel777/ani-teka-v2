export type TagsAndGenres = {
  data: {
    GenreCollection: string[]
    MediaTagCollection: MediaTagCollection[]
  }
}
export interface MediaTagCollection {
  id: number
  name: string
  description: string
  isAdult: boolean
  isGeneralSpoiler: boolean
}
