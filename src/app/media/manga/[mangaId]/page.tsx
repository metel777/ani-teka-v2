import  MediaPage  from "@/components/Media info page/MediaPage"

type Props = {
  params: {
    mangaId: string
  }
}

export async function generateStaticParams() {
  const items10000 = Array.from(Array(10000).keys())

  return items10000.map((item) => {
    mangaId: item
  })
  
}

export default function page({ params }: Props) {
  return <MediaPage mediaId={params.mangaId} mediaType="MANGA" />
}
