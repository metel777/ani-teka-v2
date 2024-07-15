import { getStudio } from "@/actions/graphql/getStudio"
import MediaCard from "@/components/MediaCard"
import MediaCardContainer from "@/components/MediaCardContainer"
import NavigatePagination from "@/components/Pagination"
import Separator from "@/components/Separator"
import { Title1 } from "@/components/Titles"
import { Suspense } from "react"

type Props = {
  studioId: string
}

export async function generateStaticParams() {
  const items10000 = Array.from(Array(10000).keys())

  return items10000.map((item) => {
    studioId: item
  })
  
}

export default async function page({ params }: { params: Props }) {
  const studioId = params.studioId
  const data = await getStudio(studioId)

  const { name, favourites } = data.data.Studio
  const studioData = data.data.Studio.media.nodes


  return (
    <Suspense fallback={<p>Loading studio</p>}>
      <main>
        <div className="p-4">
          <Title1>{name}</Title1>
          <p>Favourites: {favourites}</p>
        </div>
       <Separator/>
        <div className="p-4">
          <MediaCardContainer>
            {studioData?.map((item: any) => (
              <MediaCard item={item} key={item.id} />
            ))}
          </MediaCardContainer>
          {/* <div className="mx-auto my-5 w-fit">
        <NavigatePagination pageInfo={pageInfo} />
      </div> */}
        </div>
      </main>
    </Suspense>
  )
}
