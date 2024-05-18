"use client"

import { useEffect, useState } from "react"
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { revalidatePath } from "next/cache"

export default function Pagination() {
  const searchParams = useSearchParams()
  const pageParams = searchParams.get("page") as string
  const pathname = usePathname()
  const { replace, push } = useRouter()

  useEffect(() => {
    if (!pageParams) {
      push(`${pathname}?page=1`)
    }
  }, [])

  // Next page
  function handleNextPage() {
    const params = new URLSearchParams(searchParams)
    if (Number(pageParams) >= 1) {
      const increasePage = Number(pageParams) + 1
      params.set("page", increasePage.toString())
      replace(`${pathname}?${params}`)
    }
  }
  // Prev page
  function handlePrevPage() {
    const params = new URLSearchParams(searchParams)

    if (Number(pageParams) >= 2) {
      const decreasePage = Number(pageParams) - 1
      params.set("page", decreasePage.toString())
      replace(`${pathname}?${params}`)
    } else {
      params.set("page", "1")
    }
  }

  return (
    <div className="my-6 flex items-center gap-2 text-g.light-500">
      <button
        onClick={handlePrevPage}
        disabled={pageParams === "1"}
        className="flex transform gap-1 rounded-md border bg-gradient-to-t from-slate-50 to-white px-4 py-1  transition-transform hover:from-slate-200 hover:to-slate-50 hover:text-slate-700 hover:shadow-sm active:scale-90 disabled:cursor-not-allowed dark:from-g.dark-900 dark:to-g.dark-950 dark:hover:from-g.dark-950 dark:hover:text-g.dark-400"
      >
        <ArrowBigLeftDash />
        Prev
      </button>
      {pageParams}
      <button
        onClick={handleNextPage}
        className="flex transform gap-1 rounded-md border bg-gradient-to-t from-slate-50 to-white px-4 py-1 transition-transform hover:from-slate-200 hover:to-slate-50 hover:text-slate-700 hover:shadow-sm active:scale-90 dark:from-g.dark-900 dark:to-g.dark-950 dark:hover:from-g.dark-950 dark:hover:text-g.dark-400"
      >
        Next
        <ArrowBigRightDash />
      </button>
    </div>
  )
}
