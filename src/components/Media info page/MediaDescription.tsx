import { ScrollText } from "lucide-react"

type Props = {
  description: string
}

export default function MediaDescription({ description }: Props) {
  function removeHtmlTags(input: string) {
    return input?.replace(/<[^>]*>/g, "")
  }
  const cleanedDescription = removeHtmlTags(description)

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
          </div>
        </div>
      )}
    </>
  )
}
