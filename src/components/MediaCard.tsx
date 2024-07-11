"use client"
import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { media } from "@/types/media"
import Link from "next/link"
import AnimatedMotionContainer from "./AnimatedMotionContainer"

export default function MediaCard({ item }: { item: media }) {
  const { push } = useRouter()
  const {
    description,
    coverImage,
    title,
    type,
    averageScore,
    status,
    episodes,
    favourites,
    format,
    genres,
    season,
    seasonYear,
    studios,
    id,
    startDate,
    chapters,
  } = item
  const mediaType = type?.toLowerCase()

  return (
    <HoverCard>
      <HoverCardTrigger className="w-fit">
        <main
          onClick={() => push(`/media/${mediaType}/${id}`)}
          className="relative w-[200px] cursor-pointer  transition-all hover:text-[--brand-main] sm:w-[200px] md:w-[190px] lg:w-[180px]"
          key={id}
        >
          <AnimatedMotionContainer>
            <Image
              key={Math.random()}
              alt={title?.english}
              fill
              priority={true}
              src={coverImage?.large}
            />
          </AnimatedMotionContainer>
          <p className="line-clamp-1 text-sm">
            {title?.english || title?.romaji}
          </p>
          {/* if averageScore name do display */}
          {averageScore && (
            <p
              className={`text-sm ${averageScore > 75 ? "text-green-500" : averageScore < 75 ? "text-amber-500" : averageScore < 50 ? "text-red-500" : ""}`}
            >
              Rating: {averageScore}%
            </p>
          )}
          {/* status formatting*/}
          <Badge
            className="absolute -right-0 -top-2 flex gap-2"
            variant={
              status === "FINISHED"
                ? "finished"
                : status === "NOT_YET_RELEASED"
                  ? "announce"
                  : "releasing"
            }
          >
            {status === "NOT_YET_RELEASED" ? (
              <>
                <Image
                  width={17}
                  height={17}
                  alt="calendar icon"
                  src="/calendar2-event.svg"
                />
                ANNOUNCE
              </>
            ) : status === "FINISHED" ? (
              <>
                <Image
                  width={17}
                  height={17}
                  alt="calendar icon"
                  src="/check2.svg"
                />
                FINISHED
              </>
            ) : status === "RELEASING" ? (
              <>
                <Image
                  width={17}
                  height={17}
                  alt="calendar icon"
                  src="/broadcast.svg"
                />
                RELEASING
              </>
            ) : (
              status
            )}
          </Badge>
        </main>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-[250px] sm:w-[300px] overflow-hidden border-[--stroke-secondary] p-0 text-sm text-[--text-secondary] shadow-tw-shadow"
        side="right"
        
        align="start"
      >
        <HoverContent
          chapters={chapters}
          title={title?.english || title?.romaji}
          startDate={startDate?.year}
          format={format}
          episodes={episodes}
          description={description}
          studios={studios}
        />
      </HoverCardContent>
    </HoverCard>
  )
}

function HoverContent({
  title,
  startDate,
  format,
  episodes,
  description,
  chapters,
  studios,
}: any) {
  return (
    <main>
      <section>
        {/*::::::::: YEAR  •  STUDIO  •  EPISODES :::::::::::::::*/}
        <div className="bg-[--fill] p-2">
          <p className="flex gap-2 text-[--text-strong]">{title}</p>
          <div className="flex gap-2">
            {/* if startDate do display */}
            {startDate && (
              <>
                <span>{startDate}</span>•
              </>
            )}
            {/* if studios name do display */}
            {studios?.nodes[0]?.name && (
              <>
                <span className="hover:underline ">
                  <Link className="line-clamp-1" href={`/studio/${studios.nodes[0].id}`}>
                    {studios.nodes[0].name}
                  </Link>
                </span>
                •
              </>
            )}
            {/* if episodes do display */}
            {episodes && <span>{episodes} ep.</span>}
          </div>
        </div>
        {/*::::::::: DESCRIPTION :::::::::::::::*/}
        <div className=" bg-[--main-bg] p-2 dark:bg-g.warm-800">
          <div className="tracking flex gap-2 text-xs font-medium uppercase tracking-wide text-[--text-weak]">
            description
          </div>
          <div
            className=" line-clamp-9 text-[--text-secondary]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </section>
    </main>
  )
}
