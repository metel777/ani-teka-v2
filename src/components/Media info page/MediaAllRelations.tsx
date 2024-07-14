import { Key } from "react"

import { Title1 } from "@/components/Titles"
import Card, { MiniMediaCard } from "@/components/Mini-Item-Card"
import { MediaForFullDetail } from "@/types/full-media"

export default async function MediaAllRelations({
  query,
}: {
  query: MediaForFullDetail
}) {
  const m = query.data.Media

  return (
    <main className="p-4">
      {m.relations.edges.length > 0 && (
        <section>
          <Title1>Relations</Title1>
          <div className="flex w-full flex-wrap gap-2">
            {m.relations.edges.map((item) => (
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
      )}
      {m.characters.edges.length > 0 && (
        <section>
          <Title1>Characters</Title1>
          <div className="flex gap-2 overflow-x-scroll scroll-smooth">
            {m.characters.edges.map((item) => (
              <Card
                key={item.id as Key}
                textAbove={item.node.name.userPreferred}
                textBelow={item.role}
                image={item.node.image.large}
                href={`/character/${item.node.id}`}
              />
            ))}
          </div>
        </section>
      )}
      {m.staff.edges.length > 0 && (
        <section>
          <Title1>Staff</Title1>
          <div className="flex gap-2 overflow-x-scroll scroll-smooth">
            {m.staff.edges.map((item) => (
              <Card
                key={item.id as Key}
                textAbove={item.node.name.userPreferred}
                textBelow={item.role}
                image={item.node.image.medium}
                href={`/person/${item.node.id}`}
              />
            ))}
          </div>
        </section>
      )}
      {m.recommendations.edges.length > 0 && (
        <section>
          <Title1>Recomendations</Title1>
          <div className="flex flex-wrap gap-2">
            {m.recommendations.edges.map((item) => (
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
      )}
    </main>
  )
}
