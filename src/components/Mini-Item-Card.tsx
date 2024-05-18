import { ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Key } from "react"
import { BookType, CalendarFold, Text, Video } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type Card = {
  key: Key
  textAbove: string
  textBelow: string
  image: string
  href: string
  rec?: boolean
  episodes?: Number
  format?: string
  startDate?: number
  endDate?: number
}

export default function Card({
  key,
  textAbove,
  textBelow,
  image,
  href,
  rec = false,
}: Card) {
  return (
    <main
    className="bg-bg-tertiary-light dark:bg-bg-tertiary-dark relative flex max-w-[100px] flex-shrink-0 cursor-pointer  flex-col overflow-hidden rounded-md text-sm transition hover:bg-bg-secondary-light hover:shadow-xs dark:hover:bg-bg-secondary-dark"
      key={key}
    >
      <Link href={href}>
        <p className="flex w-full items-center justify-center gap-2 p-1 text-center text-xs font-semibold line-clamp-3">
          {rec ? (
            <>
              <ThumbsUp size={17} /> {textAbove}
            </>
          ) : (
            textAbove
          )}
        </p>

        <Image
          src={image}
          alt={textBelow && textAbove}
          objectFit="contain"
          width={120}
          height={135}
          className="max-h-[135px] min-h-[135px]"
        />
        <p className="m-0 line-clamp-4 p-1 text-xs">{textBelow}</p>
      </Link>
    </main>
  )
}
export function MiniMediaCard({
  key,
  textAbove,
  textBelow,
  image,
  href,
  rec = false,
  format,
  episodes,
  startDate,
  endDate,
}: Card) {
  return (
    <main
      className="bg-bg-tertiary-light dark:bg-bg-tertiary-dark relative flex max-w-[100px] flex-shrink-0 cursor-pointer  flex-col overflow-hidden rounded-md text-sm transition hover:bg-bg-secondary-light hover:shadow-xs dark:hover:bg-bg-secondary-dark"
      key={key}
    >
      <HoverCard>
        <HoverCardTrigger>
          <Link href={href} className="hover:text-brand-primary transition-all">
            <p className="flex w-full items-center justify-center gap-2 p-1 text-center text-xs font-semibold ">
              {rec ? (
                <>
                  <ThumbsUp size={17} /> {textAbove}
                </>
              ) : (
                textAbove
              )}
            </p>

            <Image
              src={image}
              alt={textBelow && textAbove}
              objectFit="contain"
              width={120}
              height={135}
              className="max-h-[135px] min-h-[135px]"
            />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className=" bg:white dark:border-b-primary-dark dark:bg-bg-tertiary-dark p-3 text-sm text-text-secondary-light shadow-lg dark:text-text-secondary-dark"
          side="right"
        >
          <main className="flex flex-col gap-2">
            <p className="m-0 line-clamp-4 flex items-center gap-1 text-sm">
              <Text size={17} />
              <b>{textBelow}</b>
            </p>
            <p className="m-0 line-clamp-4 flex items-center gap-1 text-sm">
              <CalendarFold size={17} className="mt-1" />
              <b>Year: </b> {startDate && startDate} to {endDate && endDate}
            </p>
            {format !== "manga" && (
              <p className="m-0 line-clamp-4 flex items-center gap-1 text-sm">
                <Video className="mt-1 min-w-[17px]" width={17} size={17} />
                <b>Episodes: </b>
                {episodes?.toString()}
              </p>
            )}

            <p className="m-0 line-clamp-4 flex items-center gap-1 text-sm">
              <BookType size={17} className="mt-1" />
              <b>Type: </b>
              {format}
            </p>
          </main>
        </HoverCardContent>
      </HoverCard>
    </main>
  )
}
