"use client"
import { usePathname } from "next/navigation"
import { NavSearch } from "@/components/NavSearch"
import { MediaTagCollection } from "@/types/tags-genres"
import { GenresPick, OrderPick, TagsPick } from "@/components/AllDropdowns"

export default function InnerNavbar({
  genres,
  tags,
}: {
  genres: string[]
  tags: MediaTagCollection[]
}) {
  const path = usePathname()
  return (
    <div className="mb-10  flex items-center  border-b border-g.warm-200 p-4 dark:border-g.warm-800">
      <h1 className="p-2 text-3xl font-bold dark:text-text-primary-dark">
        {path == "/anime" ? "Animations" : "Manga"}
      </h1>
      <NavSearch />
      <GenresPick genres={genres} />
      <TagsPick tags={tags} />
      <OrderPick />
    </div>
  )
}
