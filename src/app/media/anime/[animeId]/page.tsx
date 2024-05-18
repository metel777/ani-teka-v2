import { Key } from "react";
import Image from "next/image";

import { getAnimeItem } from "@/utils/getAnimeItem";
import { Title1 } from "@/components/Titles";
import Card, { MiniMediaCard } from "@/components/Mini-Item-Card";

type Props = {
  params: {
    animeId: string;
  };
};

export default async function AnimePage({ params }: Props) {
  const paramAnimeId = params.animeId;
  const data = await getAnimeItem(paramAnimeId);

  const media = data?.data?.Media;


  
  return (
    <main className="mb mt-10 flex flex-col gap-10">
      <section className="flex">
        <Image
          src={media.coverImage.extraLarge}
          alt={media.title.english}
          width={400}
          height={2000}
          style={{ boxShadow: `0px 16px 200px  ${media.coverImage.color}` }}
        />
        <div>
          <Title1>{media.title.english && media.title.romaji}</Title1>
        </div>
      </section>
      <section>
        <Title1>Relations</Title1>
        <div className="flex flex-wrap gap-2">
          {media.relations.edges.map((item) => (
            <MiniMediaCard
              // startDate={`${item.node.startDate.year.toString()}-${item.node.startDate.month.toString()}-${item.node.startDate.day.toString()}`}
              // endDate={`${item.node.endDate.year.toString()}.${item.node.endDate.month.toString()}.${item.node.endDate.day.toString()}`}
              startDate={item.node.startDate.year}
              endDate={item.node.endDate.year}
              format={item.node.format?.toLowerCase()}
              episodes={item.node.episodes}
              key={item.id}
              textAbove={item.relationType}
              textBelow={item.node.title.english || item.node.title.romaji}
              image={item.node.coverImage.medium}
              href={`/media/${item.node.type?.toLowerCase()}/${item.node.id}`}
            />
          ))}
        </div>
      </section>
      <section>
        <Title1>Characters</Title1>
        <div className="flex gap-2 overflow-x-scroll scroll-smooth">
          {media.characters.edges.map((item) => (
            <Card
              key={item.id as Key}
              textAbove={item.role}
              textBelow={item.node.name.userPreferred}
              image={item.node.image.large}
              href={`/`}
            />
          ))}
        </div>
      </section>
      <section>
        <Title1>Staff</Title1>
        <div className="flex gap-2 overflow-x-scroll scroll-smooth">
          {media?.staff?.edges?.map((item) => (
            <Card
              key={item.id as Key}
              textAbove={item.role}
              textBelow={item.node.name.userPreferred}
              image={item.node.image.medium}
              href={`/`}
            />
          ))}
        </div>
      </section>
      <section>
        <Title1>Recomendations</Title1>
        <div className="flex flex-wrap gap-2">
          {media.recommendations.edges.map((item) => (
            <MiniMediaCard
              rec={true}
              key={item.node.mediaRecommendation.id as Key}
              textAbove={item.node.rating.toString()}
              textBelow={item.node.mediaRecommendation?.title?.english}
              image={item.node.mediaRecommendation.coverImage.medium}
              href={`/media/${item?.node?.mediaRecommendation.type?.toLowerCase()}/${
                item.node.mediaRecommendation.id
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
