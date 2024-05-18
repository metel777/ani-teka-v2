"use client"

import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Content } from "@/types/anime"
import { BookType, CalendarFold, ScrollText, Text, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function MediaCard({ item }: { item: Content }) {
  const { push } = useRouter()
  const mediaType = item.type.toLowerCase()

  return (
    <HoverCard>
      <HoverCardTrigger>
        <main
          onClick={() => push(`/media/${mediaType}/${item.id}`)}
          className="relative max-w-[240px] cursor-pointer hover:text-brand-primary transition-all"
          key={item.id}
        >
          <Image
            alt={item.title.english}
            width={240}
            height={240}
            objectFit="cover"
            className="max-h-[240px] min-h-[240px] rounded-xl border object-cover"
            src={item.coverImage.large}
            quality={90}
          />
          <p className="line-clamp-1 text-sm">
            {item.title.english || item.title.romaji}
          </p>
          <Badge
            className="absolute -right-0 -top-2"
            variant={
              item.status === "FINISHED"
                ? "finished"
                : item.status === "NOT_YET_RELEASED"
                  ? "announce"
                  : "releasing"
            }
          >
            {item.status === "NOT_YET_RELEASED" ? "ANNOUNCE" : item.status}
          </Badge>
        </main>
      </HoverCardTrigger>
      <HoverCardContent
        className="bg-bg-primary-light text-sm text-text-secondary-light shadow-lg dark:border-g.dark-800 dark:bg-bg-secondary-dark dark:text-text-secondary-dark"
        side="right"
        align="start"
      >
        <main>
          <section>
            <DetailItem>
              <Text size={17} className="mt-1" />
              {item.title.english}
            </DetailItem>
            <DetailItem>
              <CalendarFold size={17} className="mt-1" />
              {item.startDate.year}
            </DetailItem>
            <DetailItem>
              <BookType size={17} className="mt-1" />
              {item.format}
            </DetailItem>
            <DetailItem>
              <Video className="mt-1 min-w-[17px]" width={17} size={17} />
              <span>
                {item?.episodes?.toString()}{" "}
                {item.episodes === 1 ? "Episode" : "Episodes"}
              </span>
            </DetailItem>
            <div>
              <div className="flex gap-2">
                <ScrollText size={17} className="mt-1" /> Description:
              </div>
              <div
                className="line-clamp-5"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </div>
            {/*  format
        episodes
        genres
        type
        description
        averageScore */}
          </section>
        </main>
      </HoverCardContent>
    </HoverCard>
  )
}

function DetailItem({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2">{children}</div>
}
