import  MediaPage  from "@/components/Media info page/MediaPage"

type Props = {
  params: {
    animeId: string
  }
}

export const dynamicParams = false

export default function page({ params }: Props) {
  return <MediaPage mediaId={params.animeId} mediaType="ANIME" />
}
