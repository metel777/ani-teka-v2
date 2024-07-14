import { Suspense } from "react"
import MediaLoading from "@/components/MediaLoading"
import { MainPageParams } from "@/types/searchParams"
import MediaCard from "@/components/MediaCard"
import NavigatePagination from "@/components/Pagination"

import MediaCardContainer from "@/components/MediaCardContainer"
import { getMedia } from "@/actions/graphql/getMedia"

export default async function Home({ searchParams }: MainPageParams) {
  const page = searchParams?.page
  const search = searchParams?.search
  const order = searchParams?.order
  const genres = searchParams?.genre
  const tags = searchParams?.tag

  const data = await getMedia(page, search, order, genres, tags, 'ANIME')
  const anime = data.data.Page.media
  const pageInfo = data.data.Page.pageInfo

  return (
    <div className="mx-auto max-w-[1100px]">
      <Suspense key={Math.random()} fallback={<MediaLoading />}>
        <MediaCardContainer>
          {anime?.map((item) => <MediaCard item={item} key={item.id} />)}
        </MediaCardContainer>
        <div className="mx-auto my-5 w-fit">
          <NavigatePagination pageInfo={pageInfo} />
        </div>
      </Suspense>
    </div>
  )
}
