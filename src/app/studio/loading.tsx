import MediaLoading from "@/components/MediaLoading"
import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <>
      <div className="p-4">
        <Skeleton className="h-[90px] w-[300px]" />
      </div>
      <hr className="border-g.warm-200 dark:border-g.warm-800 mb-5" />

      <MediaLoading />
    </>
  )
}
