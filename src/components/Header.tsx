"use client"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const path = usePathname()

  return (
    <div className="z-999 relative  text-text-secondary-light bg-header-bg ">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between p-4">
        <Link className="flex items-center gap-2" href="/">
          <Image
            className="rounded-xl bg-gradient-to-t from-g.warm-300 to-g.warm-500 shadow-glance"
            src="/logo.svg"
            width={40}
            height={40}
            alt=""
          />
          <h3 className="text-lg font-semibold">Aniteka</h3>
        </Link>
        <section className="flex gap-2">
          <Link
            className={`hover:text-text-secondary-dark ${path === "/anime" && "text-text-secondary-dark"}`}
            href="/anime"
          >
            Anime
          </Link>
          <Link
            className={`hover:text-text-secondary-dark ${path === "/manga" && "text-text-secondary-dark"}`}
            href="/manga"
          >
            Manga
          </Link>
        </section>
        <ModeToggle />
      </div>
    </div>
  )
}
