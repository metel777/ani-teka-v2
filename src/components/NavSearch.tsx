"use client"

import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

export function NavSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("page", "1")
      params.set("search", term)
    } else {
      params.delete("search")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="w-62 grid max-w-sm items-center gap-1.5">
     
      <Input
        className="border-g.warm-200 text-text-secondary-light dark:text-text-primary-dark bg-g.warm-25 dark:border-g.warm-800 dark:bg-g.warm-900 placeholder:text-g.warm-400 dark:placeholder:text-g.warm-600"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search media"
        id="search"
        type="text"
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  )
}
