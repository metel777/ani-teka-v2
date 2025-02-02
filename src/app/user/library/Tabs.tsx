import { getMediaFromUserList } from "@/utils/getMediaFromUserList"
import { TabContentLayout } from "./components"
import { userListOptions } from "@/types/userList"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import AnimatedImage from "./AnimatedImage"

export async function GigaTab({
  list,
  mediaType,
}: {
  list: userListOptions
  mediaType: any
}) {
  const media = await getMediaFromUserList(list, mediaType)
  return (
    <TabContentLayout key={Math.random()} value={list}>
      {media?.map((media) => (
        <Link
          href={`/media/${media.data.type.toLowerCase()}/${media.data.id}`}
          className="relative w-min"
          key={media.data.id}
        >
          <AnimatedImage
            alt={media.data.title.english}
            src={media.data.coverImage.large}
          />
          {media.userScore === 0 ? (
            ""
          ) : (
            <Badge className="absolute -top-2 right-0 text-[--text-strong]">
              {media.userScore}
            </Badge>
          )}
          <p>{media.data.title.english || media.data.title.romaji}</p>
        </Link>
      ))}
    </TabContentLayout>
  )
}
