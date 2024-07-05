"use client"

import { usePathname } from "next/navigation"
import { NavSearch } from "@/components/NavSearch"
import { MediaTagCollection } from "@/types/tags-genres"
import { GenresPick, OrderPick, TagsPick } from "@/components/AllDropdowns"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import { Button } from "./ui/button"
import { Filter } from "lucide-react"
import { useState } from "react"

export default function InnerNavbar({
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
      className={`mb-10 overflow-hidden border-b border-g.warm-200 transition-all  dark:border-g.warm-800`}
    >
      <section className="flex items-center justify-between p-4">
        <div className="flex">
          <h1 className="p-2 text-3xl font-bold dark:text-text-primary-dark">
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
        <div> </div>
      </section>


     {isFilterOpen && isTablet && <section className=" justify-center flex flex-col sm:flex-row gap-2 border-t border-g.warm-200 bg-g.warm-25 p-4 dark:border-g.warm-800">
        <GenresPick genres={genres} />
        <TagsPick tags={tags} />
        <OrderPick />
      </section>}
    </main>
  )
}
