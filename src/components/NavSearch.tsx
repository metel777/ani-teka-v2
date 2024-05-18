"use client"

import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useState } from "react"

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
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search media"
        id="search"
        type="text"
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  )
}
