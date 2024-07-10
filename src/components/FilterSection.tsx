"use client"

import { usePathname } from "next/navigation"
import { NavSearch } from "@/components/NavSearch"
import { MediaTagCollection } from "@/types/tags-genres"
import { GenresPick, OrderPick, TagsPick } from "@/components/AllDropdowns"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import { Button } from "./ui/button"
import { Filter } from "lucide-react"
import { useState } from "react"

export default function FilterSection({
  genres,
  tags,
}: {
  genres: string[]
  tags: MediaTagCollection[]
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { isTablet } = useScreenWidth()
  const path = usePathname()

  return (
    <main
      className={`mb-10 overflow-hidden border-[--stroke-weak] transition-all`}
    >
      <section className="flex items-center border-b border-[--stroke-secondary]  justify-between p-4">
        <div className="flex gap-4">
          <h1 className="p-2 md:text-3xl text-xl font-bold text-[--text-secondary] ">
            {path == "/anime" ? "Animations" : "Manga"}
          </h1>
          <NavSearch />
        </div>
        {!isTablet ? (
          <div className="flex gap-2">
            <GenresPick genres={genres} />
            <TagsPick tags={tags} />
            <OrderPick />
          </div>
        ) : (
          <Button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            variant="warm-secondary"
            size="icon"
          >
            <Filter />
          </Button>
        )}
      </section>

      {isFilterOpen && isTablet && (
        <section className=" grid grid-cols-3 gap-2 border-b border-[--stroke-secondary]  bg-g.warm-200 p-4 dark:bg-g.warm-950">
          <GenresPick genres={genres} />
          <TagsPick tags={tags} />
          <OrderPick />
        </section>
      )}
    </main>
  )
}
