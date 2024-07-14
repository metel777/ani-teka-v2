
import { getFullDataOnMedia } from "@/actions/graphql/getFullDataOnMedia"
import MainMediaInfoSection from "./MainMediaInfoSection"
import MediaAllRelations from "./MediaAllRelations"

type Props = {
  mediaId: string
  mediaType: "ANIME" | "MANGA"
}

export default async function MediaPage({ mediaId, mediaType }: Props) {
  const query = await getFullDataOnMedia(mediaId, mediaType)

  return (
    <main className="mb flex flex-col gap-10">
      <MainMediaInfoSection query={query} />
      <MediaAllRelations query={query} />
    </main>
  )
}
