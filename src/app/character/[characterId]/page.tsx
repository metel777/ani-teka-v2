import MediaCard from "@/components/MediaCard"
import { Title1 } from "@/components/Titles"
import getCharacter from "@/utils/getCharacter (not ready)"
import Image from "next/image"

export default async function CharactersPage({
  params,
}: {
  params: { characterId: string }
}) {
  const data = await getCharacter(params.characterId)

  const { description, id, image, name,favourites } = data.data.Character

  const media = data.data.Character.media.edges

  return (
    <main>
      <section className="flex">
        <Image
          width={400}
          height={570}
          alt={name.first}
          src={image.large}
          className="h-[300px] w-[200px] sm:h-[440px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[570px] lg:w-[400px]"
        />
        <section className="p-4">
          <Title1>{name.userPreferred}</Title1>
          <p className="-mt-5 mb-5">Favourites: {favourites}</p>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </section>
      </section>
      <div className="p-8">

      <div className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        {media?.map((item: any) => <MediaCard item={item.node} key={item.id} />)}
      </div>
      </div>
    </main>
  )
}
