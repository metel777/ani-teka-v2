"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MediaCard from "./MediaCard"
import { media } from "@/types/media"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"

export default function CarouselC({ trending }: { trending: media[] }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="w-[500px] "
    >
      <CarouselContent className="pt-2">
        {trending.map((media) => (
          <CarouselItem className="max-w-[200px]" key={media.id}>
            <Link
              href={`/media/${media.type.toLowerCase()}/${media.id}`}
              className="relative w-[160px] min-w-[210px] cursor-pointer transition-all  hover:text-brand-primary sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px]"
              key={media.id}
            >
              <div className="items-center justify-center  overflow-hidden rounded-lg border border-g.warm-300 bg-g.warm-100 dark:border-g.warm-800 dark:bg-g.warm-800">
                <div>
                  <Image
                    key={Math.random()}
                    alt={media.title?.english}
                    width={305}
                    priority={true}
                    height={550}
                    className={`h-[300px] max-h-[300px] w-[100px] min-w-[210px]  transition-all duration-1000  sm:max-h-[250px] sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px]`}
                    src={media.coverImage?.large}
                    quality={50}
                  />
                </div>
              </div>
              <p className="line-clamp-1 text-sm">
                {media.title?.english || media.title?.romaji}
              </p>
              {media.averageScore && (
                <p
                  className={`text-sm ${media.averageScore > 75 ? "text-green-500" : media.averageScore < 75 ? "text-amber-500" : media.averageScore < 50 ? "text-red-500" : ""}`}
                >
                  Rating: {media.averageScore}
                </p>
              )}
              <Badge
                className="absolute -right-0 -top-2"
                variant={
                  media.status === "FINISHED"
                    ? "finished"
                    : media.status === "NOT_YET_RELEASED"
                      ? "announce"
                      : "releasing"
                }
              >
                {media.status === "NOT_YET_RELEASED" ? "ANNOUNCE" : media.status}
              </Badge>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
