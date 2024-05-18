import { NavSearch } from "@/components/NavSearch"
import Pagination from "@/components/Pagination"
import { Page } from "@/types/page"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import { Suspense } from "react"
import MediaCard from "@/components/MediaCard"
import { getManga } from "@/utils/getManga"
import DisplayManga from "./DisplayManga"

export default async function Home({ searchParams }: Page) {
  // revalidatePath("/")
  const page = searchParams?.page
  const search = searchParams?.search

  const data = await getManga(page, search)
  const anime = data?.data?.Page?.media
  return (
    <div className="mx-auto max-w-[1400px] ">
      <div className="mb-20 flex items-center gap-28 border-b">
        <Link href="/">
          <h1 className="p-2 text-3xl font-extrabold dark:text-g.dark-50">
            Animations
          </h1>
        </Link>
        <NavSearch />
        <Pagination />
      </div>
      <Suspense fallback={<p>Loading anime</p>}>
        <DisplayManga searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
