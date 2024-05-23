import { Page } from "@/types/searchParams"
import MediaCard from "@/components/MediaCard"
import NavigatePagination from "@/components/Pagination"
import { getMedia } from "@/utils/getMedia"

export default async function DisplayAnime({ searchParams }: Page) {
  const page = searchParams?.page
  const search = searchParams?.search
  const order = searchParams?.order

  const data = await getMedia(page, search, order)
  const anime = data.data.Page.media
  const pageInfo = data.data.Page.pageInfo

  return (
    <>
      <div className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-6  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        {anime?.map((item) => <MediaCard item={item} key={item.id} />)}
      </div>
      <div className="mx-auto my-5 w-fit">
        <NavigatePagination pageInfo={pageInfo} />
      </div>
    </>
  )
}
