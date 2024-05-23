import { Key } from "react"
import Image from "next/image"
import { Title1, Title2 } from "@/components/Titles"
import Card, { MiniMediaCard } from "@/components/Mini-Item-Card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"
import { getFullDataOnMedia } from "@/utils/getFullDataOnMedia"
import MediaDescription from "../../MediaDescription"
import { months } from "@/lib/months"

type Props = {
  params: {
    mangaId: string
  }
}

export default async function AnimePage({ params }: Props) {
  const paramMangaId = params.mangaId
  const data = await getFullDataOnMedia(paramMangaId, "MANGA")
  const media = data.data.Media
  const {
    description,
    coverImage,
    tags,
    title,
    type,
    averageScore,
    status,
    favourites,
    format,
    genres,
    season,
    seasonYear,
    source,
    startDate,
    endDate,
  } = media

  return (
    <main className="mb flex flex-col gap-10">
      <section className="flex flex-col overflow-hidden md:flex-row">
        <Image
          src={coverImage.extraLarge}
          alt={title.english}
          width={400}
          height={570}
          style={{ boxShadow: `0px -500px 1600px  ${coverImage.color}` }}
          className="mx-auto h-[300px] w-[200px] sm:mx-auto sm:h-[440px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[570px] lg:w-[400px]"
        />
        <div className="p-4">
          <Title1>{title.english || title.romaji}</Title1>
          {title.romaji && <Title2>{title.romaji}</Title2>}
          <section className="mt-5 flex items-center gap-4">
            {averageScore && (
              <div>
                <b>Average score:</b> {averageScore.toString()}
              </div>
            )}
            {status && (
              <div>
                {" "}
                <b>Status:</b>{" "}
                {status === "NOT_YET_RELEASED" ? "ANNOUNCE" : status.toString()}
              </div>
            )}
            {startDate && status === "FINISHED" ? (
              <div>
                <b>Released from:</b> {startDate.day}{" "}
                {months[startDate.month - 1]}, {startDate.year} to {endDate.day}{" "}
                {months[endDate.month - 1]}, {endDate.year}
              </div>
            ) : (
              ""
            )}
          </section>
          <section className="mt-5 flex flex-col gap-2">
            <MediaDescription description={description} />

            {/* {favourites && <div> <b>User favourites:</b> {favourites.toString()}</div>} */}

            {/* <div> <b>Tags:</b> {media.tags.map(tag => (
            <Badge className="cursor-default">
            {tag.name}
            </Badge>
          ))}</div> */}
            {format && (
              <div>
                {" "}
                <b>Format:</b> {format.toString()}
              </div>
            )}
            {genres && (
              <div className="flex flex-wrap gap-1">
                {" "}
                <b>Genres:</b>{" "}
                {genres.map((genre) => (
                  <Badge key={genre} className="cursor-default">
                    {genre}
                  </Badge>
                ))}
              </div>
            )}
          </section>
          <section></section>
        </div>
      </section>
      <main className="p-4">
        {media.relations.edges.length > 0 && (
          <section>
            <Title1>Relations</Title1>
            <div className="flex w-full flex-wrap gap-2">
              {media.relations.edges.map((item) => (
                <MiniMediaCard
                  startDate={item.node.startDate.year}
                  endDate={item.node.endDate.year}
                  format={item.node.format?.toLowerCase()}
                  episodes={item.node.episodes}
                  key={item.id}
                  textAbove={item.relationType}
                  textBelow={item.node.title.english || item.node.title.romaji}
                  image={item?.node?.coverImage?.medium}
                  href={`/media/${item.node.type?.toLowerCase()}/${item.node.id}`}
                />
              ))}
            </div>
          </section>
        )}
        {media.characters.edges.length > 0 && (
          <section>
            <Title1>Characters</Title1>
            <div className="flex gap-2 overflow-x-scroll scroll-smooth">
              {media.characters.edges.map((item) => (
                <Card
                  key={item.id as Key}
                  textAbove={item.role}
                  textBelow={item.node.name.userPreferred}
                  image={item.node.image.large}
                  href={`/character/${item.node.id}`}
                />
              ))}
            </div>
          </section>
        )}
        {media.staff.edges.length > 0 && (
          <section>
            <Title1>Staff</Title1>
            <div className="flex gap-2 overflow-x-scroll scroll-smooth">
              {media.staff.edges.map((item) => (
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
        )}

        {media.recommendations.edges.length > 0 && (
          <section>
            <Title1>Recomendations</Title1>
            <div className="flex flex-wrap gap-2">
              {media.recommendations.edges.map((item) => (
                <MiniMediaCard
                  rec={true}
                  key={item.node.mediaRecommendation?.id as Key}
                  textAbove={item.node.rating.toString()}
                  textBelow={item.node.mediaRecommendation?.title?.english}
                  image={item.node.mediaRecommendation?.coverImage.medium}
                  href={`/media/${item?.node?.mediaRecommendation?.type?.toLowerCase()}/${
                    item.node.mediaRecommendation?.id
                  }`}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </main>
  )
}
