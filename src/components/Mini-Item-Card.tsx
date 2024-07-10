import { ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Key } from "react"

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
  textAbove,
  textBelow,
  image,
  href,
  rec = false,
}: Card) {
  return (
    <main
      className="relative flex max-w-[100px] flex-shrink-0 cursor-pointer flex-col overflow-hidden  rounded-md bg-[--fill] text-sm transition hover:bg-bg-secondary-light  dark:bg-g.warm-800/60 dark:hover:bg-bg-secondary-dark"
      key={textAbove}
    >
      <Link href={href} className="">
        <p className="line-clamp-3 flex w-full items-center justify-center gap-2 p-1 text-center text-xs font-semibold row-span-1">
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
  function formatRelationType() {
    if (textAbove === "SIDE_STORY") {
      return "SIDE STORY"
    } else if (textAbove === "SPIN_OFF") {
      return "SPIN OFF"
    } else {
      return textAbove
    }
  }

  return (
    <main
      className="dark:bg-g.warm relative flex max-w-[100px] flex-shrink-0 cursor-pointer flex-col  overflow-hidden rounded-md bg-bg-primary-light text-sm transition hover:bg-bg-secondary-light hover:shadow-xs dark:bg-g.warm-800/60 dark:hover:bg-bg-secondary-dark"
      key={textAbove}
    >
      <Link href={href} className="transition-all hover:text-brand-primary">
        <p className="flex w-full items-center justify-center gap-2 p-1 text-center text-xs font-semibold ">
          {rec ? (
            <>
              <ThumbsUp size={17} /> {textAbove}
            </>
          ) : (
            formatRelationType()
          )}
        </p>
        <Image
          src={image}
          alt={textBelow && textAbove}
          width={120}
          height={135}
          className="max-h-[135px] min-h-[135px]"
        />
      </Link>
    </main>
  )
}
