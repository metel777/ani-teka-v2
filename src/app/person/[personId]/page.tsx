import Image from "next/image"
import MediaCard from "@/components/MediaCard"
import Separator from "@/components/Separator"
import { Title1, Title2 } from "@/components/Titles"
import { media } from "@/types/media"
import getPerson from "@/utils/getPerson (not ready)"
import MediaCardContainer from "@/components/MediaCardContainer"

type Props = {
  params: {
    personId: string
  }
}

type node = {
  node: media
}

export default async function page({ params }: Props) {
  const promise = await getPerson(params.personId)
  const data = promise.data.Staff
  const {
    description,
    image,
    name,
    primaryOccupations,
    favourites,
    staffMedia,
  } = data

  // delete duplicates with the same node.id
  const removeDuplicates = (array: node[]) => {
    const seen = new Set()
    return array.filter((item) => {
      const duplicate = seen.has(item.node.id)
      seen.add(item.node.id)
      return !duplicate
    })
  }
  const uniqueData = removeDuplicates(staffMedia.edges)

  return (
    <main>
      {/* Top section */}
      <section className="flex flex-col items-center md:grid md:grid-cols-4 md:items-start  ">
        <div>
          <Image
            alt={name.userPreferred}
            src={image.large}
            width={300}
            height={500}
          />
        </div>
        <div className="col-span-3 p-4">
          <Title1>{name.userPreferred}</Title1>
          <Title2>{primaryOccupations}</Title2>
          <p className="mt-2">Favourites: {favourites}</p>

          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </section>
      <Separator />

      {/* Media section */}
      <section className="p-4">
        <Title1>Media</Title1>
        <MediaCardContainer>
          {uniqueData.map((person) => (
            <MediaCard key={person.node.id} item={person.node} />
          ))}
        </MediaCardContainer>
      </section>
    </main>
  )
}
