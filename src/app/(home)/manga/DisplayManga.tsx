import { Page } from "@/types/page"
import MediaCard from "@/components/MediaCard"
import { Suspense } from "react"
import { getManga } from "@/utils/getManga"

export default async function DisplayManga({ searchParams }: Page) {
  const page = searchParams?.page
  const search = searchParams?.search

  const data = await getManga(page, search)
  const anime = data?.data?.Page?.media
  return (
    <div className="grid grid-cols-5  gap-4 gap-y-10">
      {anime?.map((item) => <MediaCard item={item} key={item.id} />)}
    </div>
  )
}
