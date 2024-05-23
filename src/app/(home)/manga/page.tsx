import { Page } from "@/types/searchParams"
import { Suspense } from "react"
import DisplayManga from "./DisplayManga"
import MediaLoading from "@/components/MediaLoading"

export default async function Home({ searchParams }: Page) {

  return (
    <div className="mx-auto max-w-[1000px] ">
      <Suspense fallback={<MediaLoading />}>
        <DisplayManga searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
