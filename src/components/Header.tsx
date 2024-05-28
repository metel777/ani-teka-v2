"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { ModeToggle, ModeToggleMobile } from "./ModeToggle"
import { Menu, X } from "lucide-react"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { useScreenWidth } from "@/hooks/useScreenWidth"
import { Title1, Title2 } from "./Titles"
import { Button } from "./ui/button"
import Separator from "./Separator"
import dynamic from "next/dynamic"



export default function Header() {
  const path = usePathname()

  const { isDesktop, isMobile, isTablet } = useScreenWidth()

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
              {/* Top section */}
              <section className="flex items-center justify-between p-4">
                <h1 className="text-3xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                  Menu
                </h1>
                <DrawerClose>
                  <X size={30} />
                </DrawerClose>
              </section>
              <Separator />
              {/* Main section */}
              <main className="p-4">
                <Title2 className="mb-5 mt-2">Navigate</Title2>
                <section className="mb-5 grid grid-cols-2  gap-2">
                  <Link href="/anime">
                    <Button variant="warm-secondary">
                      <DrawerClose>Anime</DrawerClose>
                    </Button>
                  </Link>
                  <Link href="/manga">
                    <Button variant="warm-secondary">
                      <DrawerClose>Manga</DrawerClose>
                    </Button>
                  </Link>
                </section>
                <Title2 className="mb-5 mt-2">Theme</Title2>
                <section>
                  <ModeToggleMobile />
                </section>
              </main>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </div>
  )
}
