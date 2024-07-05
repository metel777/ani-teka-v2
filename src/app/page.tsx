import CarouselC from "@/components/Carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getMediaForHome } from "@/utils/home"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

import { Title1 } from "@/components/Titles"
import { revalidatePath } from "next/cache"

export default async function Home() {
  const data = await getMediaForHome()
  const trending = data.data.Page.media
revalidatePath('/')


  return (
    <main className="h-screen p-4">
   
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <section className="flex flex-col justify-between">
          <div>
            <h1 className="relative inline-block  text-4xl font-semibold leading-tight md:text-6xl">
              Welcome to{" "}
              <span className="relative bg-gradient-to-r from-indigo-500 to-violet-800 bg-clip-text font-bold text-transparent">
                AniTeka! <Badge className="absolute w-fit">v4</Badge>
              </span>
            </h1>
            <p className="mt-4 text-2xl font-medium">
              An animation & manga web library, powered with{" "}
              <span>
                <a
                  href="https://anilist.co/"
                  target="_blank"
                  className="relative text-blue-500 underline"
                >
                  <span>AniList</span>
                  <ExternalLink size={15} className="absolute -right-4 top-0" />
                </a>
              </span>
            </p>
          </div>

          <div>
            <Link href="/anime">
              <Button>Browse anime</Button>
            </Link>
          </div>
        </section>
        <section>
          <CarouselC trending={trending} />
        </section>
      </section>
    </main>
  )
}
