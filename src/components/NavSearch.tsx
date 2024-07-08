"use client"

import { Input } from "@/components/ui/input"
import { revalidatePath, revalidateTag } from "next/cache"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export function NavSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("page", "1")
      params.set("search", term)
    } else {
      params.delete("search")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 1000)

  return (
    <div className="grid w-60 max-w-sm items-center gap-1.5 sm:w-72">
      <Input
        className=" bg-[--fill] text-[--text-strong] placeholder:text-[--text-secondary] border-none dark:bg-[--fill] dark:text-[--text-strong] dark:placeholder:text-[--text-secondary]"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search media"
        id="search"
        type="text"
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  )
}
