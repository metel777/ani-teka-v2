import MediaCard from "@/components/MediaCard"
import MediaCardContainer from "@/components/MediaCardContainer"
import { Title1 } from "@/components/Titles"
import getCharacter from "@/utils/getCharacter"
import Image from "next/image"

export default async function CharactersPage({
  params,
}: {
  params: { characterId: string }
}) {
  const data = await getCharacter(params.characterId)

  const { description, id, image, name, favourites } = data.data.Character

  const media = data.data.Character.media.edges

  return (
    <main>
      <section className="flex flex-col items-center md:grid md:grid-cols-4 md:items-start">
        <div>
          <Image width={300} height={500} alt={name.first} src={image.large} />
        </div>
        <section className="col-span-3 p-4 ">
          <Title1>{name.userPreferred}</Title1>
          <p className="-mt-5 mb-5">Favourites: {favourites}</p>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </section>
      </section>
      <div className="p-8">
        <MediaCardContainer>
          {media?.map((item: any) => (
            <MediaCard item={item.node} key={item.id} />
          ))}
        </MediaCardContainer>
      </div>
    </main>
  )
}
