import FilterSection from "@/components/FilterSection"
import { getTagsAndGenres } from "@/utils/getTagsAndGenres"


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
        <FilterSection tags={tags} genres={genres} />
        {children}
    </div>
  )
}
