import MediaCard from "@/components/MediaCard"
import Separator from "@/components/Separator"
import { Title1, Title2 } from "@/components/Titles"
import { media } from "@/types/media"
import getPerson from "@/utils/getPerson (not ready)"
import Image from "next/image"

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
      <section className="flex">
        <div>
          <Image
            alt={name.userPreferred}
            src={image.large}
            width={300}
            height={500}
          />
        </div>
        <div className="p-4">
          <Title1>{name.userPreferred}</Title1>
          <Title2>{primaryOccupations}</Title2>
          <p className="mt-2">Favourites: {favourites}</p>

          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </section>
      <Separator/>

      {/* Media section */}
      <section className="p-4">
        <Title1>Media</Title1>
        <div className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
          {uniqueData.map((person) => (
            <MediaCard key={person.node.id} item={person.node} />
          ))}
        </div>
      </section>
    </main>
  )
}
