import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowBigUpDash,
  BadgeAlert,
  ExternalLink,
  Star,
  ThumbsUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
 
  return (
    <main className="p-4">
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <section className="flex flex-col justify-between">
          <div>
            <h1 className="relative inline-block  text-4xl md:text-6xl font-semibold leading-tight">
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
                  className="text-blue-500 underline relative"
                >
                  <span>AniList</span>
                  <ExternalLink size={15} className="absolute top-0 -right-4"/>
                </a>
              </span>
            </p>
          </div>

          <div>
            <Link href='/anime'><Button>Browse anime</Button></Link>
          </div>
        </section>
        <section>
          <Image
            src="/home illustration dark.png"
            width={640}
            height={320}
            alt="illustration"
            blurDataURL="/home illustration light.png"
            
          />
        </section>
      </section>

      <section className="mt-10">
        <h3 className="text-lg font-medium text-text-secondary-light">
          Browse anime:
        </h3>
        <div className="grid grid-cols-2 flex-wrap gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <NavigateBox
            desc={"View upcoming anime"}
            header="Browse upcoming"
            color="cyan-600"
          >
            <BadgeAlert size={36} className="text-cyan-600" />
          </NavigateBox>
          <NavigateBox
            desc={"View trending anime"}
            header="Browse trending"
            color="purple-600"
          >
            <ArrowBigUpDash size={36} className="text-purple-600" />
          </NavigateBox>
          <NavigateBox
            desc={"View the best anime of all time"}
            header="Browse best"
            color="lime-600"
          >
            <ThumbsUp size={36} className="text-lime-600" />
          </NavigateBox>
          <NavigateBox
            desc={"View the most favourites anime"}
            header="Browse favourites"
            color="yellow-600"
          >
            <Star size={36} className="text-yellow-600" />
          </NavigateBox>
        </div>
      </section>
    </main>
  )
}

type NavigateBoxProps = {
  desc: string
  header: string
  children: React.ReactNode
  color: string
}

function NavigateBox({ desc, header, children, color }: NavigateBoxProps) {
  return (
    <div className=" h-42 flex  cursor-pointer flex-col flex-wrap items-center gap-1 rounded-2xl border border-g.warm-100 bg-g.warm-25 p-4 transition-all hover:bg-white hover:shadow-md dark:border-g.warm-700 dark:bg-g.warm-800 dark:hover:bg-g.warm-700 ">
      {children}
      <h3 className={`text-xl font-semibold text-${color}`}>{header}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  )
}
