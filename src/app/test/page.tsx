import MediaLoading from "@/components/MediaLoading"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader, LoaderCircle } from "lucide-react"

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center">
            <Loader size={50} className="animate-spin" />
    </div>
  )
}
