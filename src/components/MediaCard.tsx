"use client"
import { motion } from "framer-motion"

import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  BookOpen,
  BookType,
  CalendarFold,
  Loader,
  ScrollText,
  Text,
  Video,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { media } from "@/types/media"
import { Suspense, useState } from "react"
import { Skeleton } from "./ui/skeleton"

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

  const [imageLoading, setImageLoading] = useState(true)

  return (
    <HoverCard>
      <HoverCardTrigger className="w-fit">
        <main
          onClick={() => push(`/media/${mediaType}/${id}`)}
          className="relative w-[160px] min-w-[210px] cursor-pointer transition-all  hover:text-brand-primary sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px]"
          key={id}
        >
          <div className="items-center justify-center  overflow-hidden rounded-lg border border-g.warm-300 bg-g.warm-100 dark:border-g.warm-800 dark:bg-g.warm-800">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "backIn" }}
            >
              <Image
                key={Math.random()}
                alt={title?.english}
                width={300}
                priority={true}
                height={550}
                className={`h-[300px] max-h-[300px] w-[100px] min-w-[210px]  transition-all duration-1000  sm:max-h-[250px] sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px]`}
                src={coverImage?.large}
                quality={50}
                onLoad={() => setImageLoading(false)}
              />
            </motion.div>
          </div>
          <p className="line-clamp-1 text-sm">
            {title?.english || title?.romaji}
          </p>
          {averageScore && (
            <p
              className={`text-sm ${averageScore > 75 ? "text-green-500" : averageScore < 75 ? "text-amber-500" : averageScore < 50 ? "text-red-500" : ""}`}
            >
              Rating: {averageScore}
            </p>
          )}
          <Badge
            className="absolute -right-0 -top-2"
            variant={
              status === "FINISHED"
                ? "finished"
                : status === "NOT_YET_RELEASED"
                  ? "announce"
                  : "releasing"
            }
          >
            {status === "NOT_YET_RELEASED" ? "ANNOUNCE" : status}
          </Badge>
        </main>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-[300px] border-g.warm-300 bg-bg-primary-light p-0 text-sm text-text-secondary-light shadow-lg dark:border-g.warm-700 dark:bg-bg-secondary-dark dark:text-text-secondary-dark"
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

function DetailItem({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 flex gap-2 px-1">{children}</div>
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Separator from "./Separator"
import Link from "next/link"

// function HoverContent({
//   title,
//   startDate,
//   format,
//   episodes,
//   description,
//   chapters,
// }: any) {
//   return (
//     <main>
//       <section>
//         <p className="flex gap-2 px-1 py-2">
//           <Text size={17} className="mt-1" />
//           <b>{title}</b>
//         </p>
//         <Separator />
//         <div className="flex">
//           <DetailItem>
//             <CalendarFold size={17} className="mt-1" />
//             <b>Year: </b>
//             {startDate}
//           </DetailItem>
//           <DetailItem>
//             <BookType size={17} className="mt-1" />
//             <b>Type: </b>
//             {format}
//           </DetailItem>
//         </div>
//         {format === "MANGA" && !chapters ? (
//           ""
//         ) : (
//           <DetailItem>
//             {format === "MANGA" ? (
//               <>
//                 <BookOpen className="mt-1 min-w-[17px]" width={17} size={17} />
//                 <span>
//                   <b>Chapters: </b>
//                   {chapters}
//                 </span>
//               </>
//             ) : (
//               <>
//                 <Video className="mt-1 min-w-[17px]" width={17} size={17} />
//                 <span>
//                   <b>{episodes === 1 ? "Episode: " : "Episodes: "}</b>
//                   {episodes?.toString()}{" "}
//                 </span>
//               </>
//             )}
//           </DetailItem>
//         )}

//         <div className="px-1">
//           <div className="flex gap-2">
//             <ScrollText size={17} className="mt-1" />
//             <b>Description:</b>
//           </div>
//           <div
//             className="mb-2 line-clamp-5 pl-6 "
//             dangerouslySetInnerHTML={{ __html: description }}
//           ></div>
//         </div>
//       </section>
//     </main>
//   )
// }
function HoverContent({
  title,
  startDate,
  format,
  episodes,
  description,
  chapters,
  studios,
}: any) {
  console.log(studios)
  return (
    <main>
      <section>
        <div className="p-2">
          <p className="flex gap-2 text-g.warm-700">
            <b>{title}</b>
          </p>
          <div className="flex gap-2">
            <span>{startDate}</span>•
            <span className="hover:underline">
              <Link href={`/studio/${studios?.nodes[0]?.id}`}>
                {studios?.nodes[0]?.name}
              </Link>
            </span>
            •<span>{episodes} ep.</span>
          </div>
        </div>

        <div className=" bg-g.warm-100 p-2">
          <div className="tracking flex gap-2 font-medium uppercase tracking-wide text-g.warm-700">
            Description
          </div>
          <div
            className="mt-2 line-clamp-6"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </section>
    </main>
  )
}
