"use client"

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { useMediaQuery } from "@uidotdev/usehooks"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react"

export default function Header() {
  'use client'

  const path = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="z-999 relative  bg-header-bg text-text-secondary-light ">
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
        {!isMobile ? (
          <>
            <section className="flex gap-2">
              <Link
                className={`hover:text-text-primary-dark ${path === "/anime" && "text-text-primary-dark"}`}
                href="/anime"
              >
                Anime
              </Link>
              <Link
                className={`hover:text-text-primary-dark ${path === "/manga" && "text-text-primary-dark"}`}
                href="/manga"
              >
                Manga
              </Link>
              <Link href="/test">Test</Link>
            </section>
            <ModeToggle />
          </>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="h-full">
              <DrawerClose className="absolute right-2 top-2">
                <X size={30} />
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </div>
  )
}
