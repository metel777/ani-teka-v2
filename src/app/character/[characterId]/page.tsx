import MediaCard from "@/components/MediaCard"
import MediaCardContainer from "@/components/MediaCardContainer"
import { Title1 } from "@/components/Titles"
import {getCharacter} from "@/actions/graphql/getCharacter"
import Image from "next/image"
import { GetServerSideProps } from "next"

interface CharactersPageProps {
  params: { characterId: string };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { characterId } = context.params as { characterId: string };
  const charactersQuery = await getCharacter(characterId);

  return {
    props: {
      characterData: charactersQuery.data.Character,
      characters: charactersQuery.data.Character.media.edges,
    },
  };
};

export default function CharactersPage({
  characterData,
  characters,
}: {
  characterData: any;
  characters: any[];
}) {
  const { description, id, image, name, favourites } = characterData;

  return (
    <main>
      <section className="flex flex-col items-center md:grid md:grid-cols-4 md:items-start">
        <div>
          <Image width={300} height={500} alt={name.first} src={image.large} />
        </div>
        <section className="col-span-3 p-4">
          <Title1>{name.userPreferred}</Title1>
          <p className="-mt-5 mb-5">Favourites: {favourites}</p>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </section>
      </section>
      <div className="p-8">
        <MediaCardContainer>
          {characters?.map((item: any) => (
            <MediaCard item={item.node} key={item.id} />
          ))}
        </MediaCardContainer>
      </div>
    </main>
  );
};
