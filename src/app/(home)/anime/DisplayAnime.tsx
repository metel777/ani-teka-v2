import { Page } from "@/types/searchParams"
import MediaCard from "@/components/MediaCard"
import NavigatePagination from "@/components/Pagination"
import { getMedia } from "@/utils/getMedia"
import MediaCardContainer from "@/components/MediaCardContainer"

export default async function DisplayAnime({ searchParams }: Page) {
  const page = searchParams?.page
  const search = searchParams?.search
  const order = searchParams?.order
  const genres = searchParams?.genre
  const tags = searchParams?.tag

  const data = await getMedia(page, search, order, genres, tags)
  const anime = data.data.Page.media
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
