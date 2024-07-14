"use client"

import AnimatedMotionContainer from "@/components/AnimatedMotionContainer"
import Image from "next/image"

type Props = { alt: string; src: string }
export default function AnimatedImage({ alt, src }: Props) {

  return (
    <AnimatedMotionContainer>
      <Image
        fill
        alt={alt}
        src={src}
        className="rounded-md"
        
      />
    </AnimatedMotionContainer>
  )
}
