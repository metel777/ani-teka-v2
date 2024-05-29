import { Page } from "@/types/searchParams"
import MediaCard from "@/components/MediaCard"
import { Suspense } from "react"
import { getManga } from "@/utils/getManga"
import NavigatePagination from "@/components/Pagination"
import MediaCardContainer from "@/components/MediaCardContainer"

export default async function DisplayManga({ searchParams }: Page) {
  const page = searchParams?.page
  const search = searchParams?.search

  const data = await getManga(page, search)
  const anime = data?.data?.Page?.media
  const pageInfo = data.data.Page.pageInfo

  return (
    <>
      <MediaCardContainer>
        {anime?.map((item) => <MediaCard item={item} key={item.id} />)}
      </MediaCardContainer>
      <div className="mx-auto my-5 w-fit">
        <NavigatePagination pageInfo={pageInfo} />
      </div>
    </>
  )
}
