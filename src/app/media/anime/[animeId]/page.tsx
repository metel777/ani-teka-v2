import  MediaPage  from "@/components/Media info page/MediaPage"

type Props = {
  params: {
    animeId: string
  }
}

export async function generateStaticParams() {
  const items10000 = Array.from(Array(10000).keys())

  return items10000.map((item) => {
    animeId: item
  })
  
}

export default function page({ params }: Props) {
  return <MediaPage mediaId={params.animeId} mediaType="ANIME" />
}
