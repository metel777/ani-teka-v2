import { NavSearch } from "@/components/NavSearch"
import Link from "next/link"
import { Suspense } from "react"
import DisplayAnime from "./DisplayAnime"
import LoadingAnime from "./loading"
import NavigatePagination from "@/components/Pagination"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: Props) {

  return (
    <div className="mx-auto max-w-[1000px]" key={Math.random()}>
      <div className="mb-20 flex items-center gap-28 border-b">
        <Link href="/">
          <h1 className="p-2 text-3xl font-extrabold dark:text-text-primary-dark">
            Animations
          </h1>
        </Link>
        <NavSearch />
      </div>
      <Suspense fallback={<LoadingAnime />}>
        <DisplayAnime searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
