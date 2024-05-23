import MediaCard from "@/components/MediaCard"
import NavigatePagination from "@/components/Pagination"
import { Title1 } from "@/components/Titles"
import { getStudio } from "@/utils/getStudio"
import { Suspense } from "react"

type Props = {
  studioId: string
}

export default async function page({ params }: { params: Props }) {
  const studioId = params.studioId
  const data = await getStudio(studioId)

  const { name, favourites } = data.data.Studio
  const studioData = data.data.Studio.media.nodes

  console.log(studioData)

  return (
    <Suspense fallback={<p>Loading studio</p>}>
      <main>
        <div className="p-4">
          <Title1>{name}</Title1>
          <p>Favourites: {favourites}</p>
        </div>
        <hr className="border-g.warm-200 dark:border-g.warm-800" />
        <div className="p-4">
          <div className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {studioData?.map((item: any) => (
              <MediaCard item={item} key={item.id} />
            ))}
          </div>
          {/* <div className="mx-auto my-5 w-fit">
        <NavigatePagination pageInfo={pageInfo} />
      </div> */}
        </div>
      </main>
    </Suspense>
  )
}
