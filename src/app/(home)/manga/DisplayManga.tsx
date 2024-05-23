import { Page } from "@/types/searchParams"
import MediaCard from "@/components/MediaCard"
import { Suspense } from "react"
import { getManga } from "@/utils/getManga"
import NavigatePagination from "@/components/Pagination"

export default async function DisplayManga({ searchParams }: Page) {
  const page = searchParams?.page
  const search = searchParams?.search

  const data = await getManga(page, search)
  const anime = data?.data?.Page?.media
  const pageInfo = data.data.Page.pageInfo

  return (
    <>
      <div className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        {anime?.map((item) => <MediaCard item={item} key={item.id} />)}
      </div>
      <div className="mx-auto my-5 w-fit">
        <NavigatePagination pageInfo={pageInfo} />
      </div>
    </>
  )
}
