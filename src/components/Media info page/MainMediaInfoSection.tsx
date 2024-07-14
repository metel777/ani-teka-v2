import Image from "next/image"
import Link from "next/link"
import { db, userLists } from "@/db/schema"
import { and, eq } from "drizzle-orm"
import { validateSession } from "@/actions/auth"
import { months } from "@/lib/months"

import { Title1, Title2 } from "@/components/Titles"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AddToList from "@/components/AddToList"
import MediaDescription from "@/components/Media info page/MediaDescription"
import {  Youtube } from "lucide-react"
import { MediaForFullDetail } from "@/types/full-media"

export default async function MainMediaInfoSection({
    query,
  }: {
    query: MediaForFullDetail
  }) {  
    const session = await validateSession()
    
    const m = query.data.Media
    const mediaInUserList = await db
      .select()
      .from(userLists)
      .where(
        and(
          eq(userLists.userId, session?.user?.id as string),
          eq(userLists.media_id, Number(m.id)),
          eq(userLists.mediaType, m.type.toLowerCase() as any),
        ),
      )
  
    return (
      <section className="flex flex-col overflow-hidden md:flex-row ">
        <Image
          src={m.coverImage.extraLarge}
          alt={m.title.english}
          width={400}
          height={570}
          style={{ boxShadow: `0px -500px 1600px  ${m.coverImage.color}` }}
          className="mx-auto h-[300px] w-[200px] sm:mx-auto sm:h-[440px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[570px] lg:w-[400px]"
        />
        <div className="p-4">
          <Title1>{m.title.english || m.title.romaji}</Title1>
          {m.title.romaji && <Title2>{m.title.romaji}</Title2>}
  
          {/* ::::::::::::::::::::::ESSENTIAL INFO SESSION::::::::::::::::::::::: */}
          <section className="mt-5 flex items-center gap-4">
            <AddToList
              mediaInUserList={mediaInUserList}
              mediaType={m.type}
              episodes={m.type === "ANIME" ? m.episodes : m.chapters}
              mediaId={m.id.toString()}
              session={session}
            />
  
            {m.averageScore && (
              <div>
                <b className="text-[--text-secondary]">Average score:</b>{" "}
                {m.averageScore.toString()}
              </div>
            )}
            {m.status && (
              <div>
                <b>Status:</b>{" "}
                {m.status === "NOT_YET_RELEASED"
                  ? "ANNOUNCE"
                  : m.status.toString()}
              </div>
            )}
            {m.type === "ANIME" ? (
              <>
                {m.episodes && (
                  <div>
                    <b>Episodes:</b> {m.episodes.toString()}
                  </div>
                )}
              </>
            ) : (
              <>
                {m.chapters && (
                  <div>
                    <b>Chapters:</b> {m.chapters.toString()}
                  </div>
                )}
              </>
            )}
  
            {m.type === "ANIME" && (
              <Button variant="warm-primary" className="flex gap-2">
                <Youtube />
                Trailer
              </Button>
            )}
          </section>
          <section className="mt-5 flex flex-col gap-2">
            <MediaDescription description={m.description} />
            <div>
              {m.startDate.day && (
                <>
                  <b>{m.endDate.day ? "Released from: " : "Realising from: "}</b>{" "}
                  {m.startDate.day} {months[m.startDate.month - 1]},{" "}
                  {m.startDate.year}
                  {m.endDate.day && (
                    <>
                      to {m.endDate.day} {months[m.endDate.month - 1]},{" "}
                      {m.endDate.year}
                    </>
                  )}
                </>
              )}
            </div>
            {m.season && m.seasonYear && (
              <div>
                <b>Season:</b> {m.season?.toString()} {m.seasonYear.toString()}
              </div>
            )}
            {m.format && (
              <div>
                <b>Format:</b> {m.format.toString()}
              </div>
            )}
            {/* ANIME - STUDIO; MANGA - AUTHOR */}
  
            {m.type === "ANIME" && (
              <>
                {m.studios && (
                  <div>
                    <b>Studio:</b>{" "}
                    {m.studios.nodes.map((studio) => (
                      <Link
                        key={studio.name}
                        className="hover:underline"
                        href={`/studio/${studio.id}`}
                      >
                        {studio.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
  
            {m.genres && (
              <div className="flex flex-wrap gap-1">
                <b>Genres:</b>{" "}
                {m.genres.map((genre) => (
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
    )
  }