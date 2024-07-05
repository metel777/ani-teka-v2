import { auth } from "@/auth"
import MediaLoading from "@/components/MediaLoading"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { db } from "@/lib/db"
import { Loader, LoaderCircle } from "lucide-react"
import { Session } from "next-auth"

export default  function TestPage({}) {
  
  return (
    <div className="h-screen flex items-center justify-center">
            <Button>Execute</Button>
    </div>
  )
}
