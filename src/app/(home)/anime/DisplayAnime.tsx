import { Page } from "@/types/page"
import { getAnime } from "@/utils/getAnime"
import MediaCard from "@/components/MediaCard"
import { Suspense } from "react"
import NavigatePagination from "@/components/Pagination"

export default async function DisplayAnime({ searchParams }: Page) {
  const page = searchParams?.page
  const search = searchParams?.search

  const data = await getAnime(page, search)
  const anime = data?.data?.Page?.media
  const pageInfo = data.data.Page.pageInfo
  return (
    <>
    <div className="grid grid-cols-5  gap-4 gap-y-10">
      {anime?.map((item) => <MediaCard item={item} key={item.id} />)}
    </div>
    <div className="w-fit mx-auto my-5">

      <NavigatePagination pageInfo={pageInfo} />
    </div>
    </>
  )
}
