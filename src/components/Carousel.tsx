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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  const [loopState, setLoopState] = React.useState(true)
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          loop: loopState,
        }),
      ]}
      className="w-[500px] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent
      className="pt-2"
        onMouseEnter={() => setLoopState(false)}
        onMouseLeave={() => setLoopState(true)}
      >
        {trending.map((media) => (
          <CarouselItem className="max-w-[200px]" key={media.id}>
            <MediaCard item={media} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
