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

export default function CarouselC({ trending }: { trending: any[] }) {
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
            <MediaCard item={media} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
