"use client"
import { ScrollText } from "lucide-react"
import { useEffect, useRef } from "react"
import { useOverflowDetector } from "react-detectable-overflow"

type Props = {
  description: string
}

export default function MediaDescription({ description }: Props) {
  function removeHtmlTags(input: string) {
    return input?.replace(/<[^>]*>/g, "")
  }
  const cleanedDescription = removeHtmlTags(description)
  // const { ref, overflow } = useOverflowDetector({})

  return (
    <>
      {description && (
        <div className="relative">
          <span className="flex gap-1">
            <ScrollText size={17} className="mt-1" />
            <b>Description:</b>
          </span>

          <div  className="max-h-48 overflow-y-auto pb-12">
            {cleanedDescription}
            {/* {overflow && (
              <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-bg-primary-light dark:from-bg-primary-dark" />
            )} */}
          </div>
        </div>
      )}
    </>
  )
}
