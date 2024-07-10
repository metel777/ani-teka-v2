import { Suspense } from "react"
import DisplayAnime from "./DisplayAnime"
import MediaLoading from "@/components/MediaLoading"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: Props) {

  return (
    <div className="mx-auto max-w-[1100px]" >
      <Suspense key={Math.random()} fallback={<MediaLoading />}>
        <DisplayAnime searchParams={searchParams}  />
      </Suspense>
    </div>
  )
}
