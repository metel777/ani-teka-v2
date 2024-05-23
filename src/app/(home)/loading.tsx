import MediaLoading from "@/components/MediaLoading"
import { Skeleton } from "@/components/ui/skeleton"
export default function LoadingHome() {
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 border-b border-g.warm-200 p-6 dark:border-g.warm-800">
        <Skeleton className="h-[40px] w-[250px]" />
        <Skeleton className="h-[40px] w-[200px]" />
        <Skeleton className="h-[40px] w-[150px]" />
        <Skeleton className="h-[40px] w-[150px]" />
        <Skeleton className="h-[40px] w-[150px]" />
      </div>
      <div className="mx-auto mt-10 max-w-[1000px]">
        <MediaLoading />
      </div>
    </div>
  )
}
