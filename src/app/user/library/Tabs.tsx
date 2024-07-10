import { getMediaFromUserList } from "@/utils/getMediaFromUserList"
import { TabContentLayout } from "./components"
import Image from "next/image"
import { userListOptions } from "@/types/userList"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export async function GigaTab({ list }: { list: userListOptions }) {
  const media = await getMediaFromUserList(list)
  return (
    <TabContentLayout key={Math.random()} value={list}>
      {media?.map((media) => (
        <Link href={`/media/${media.data.type.toLowerCase()}/${media.data.id}`} className="relative w-[160px]" key={media.data.id}>
          {media.userScore === 0 ? (
            ""
          ) : (
            <Badge className="absolute -top-2 right-0">{media.userScore}</Badge>
          )}

          <Image
            width={160}
            height={200}
            alt={media.data.title.english}
            src={media.data.coverImage.large}
            className="rounded-md border border-[--stroke-secondary]"
          />
          <p>{media.data.title.english}</p>
        </Link>
      ))}
    </TabContentLayout>
  )
}
