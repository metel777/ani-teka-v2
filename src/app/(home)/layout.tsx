import { getTagsAndGenres } from "@/utils/getTagsAndGenres"
import InnerNavbar from "@/components/InnerNavbar"
import { Suspense } from "react"

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getTagsAndGenres()
  const genres = data.data.GenreCollection
  const tags = data.data.MediaTagCollection
  return (
    <div>
        <InnerNavbar tags={tags} genres={genres} />
        {children}
    </div>
  )
}
