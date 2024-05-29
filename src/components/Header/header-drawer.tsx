import Link from "next/link"

import { ModeToggleMobile } from "@/components/ModeToggle"

import { Title2 } from "../Titles"
import { Button } from "../ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Menu, X } from "lucide-react"
import Separator from "../Separator"

export default function HeaderDrawer() {
  return (
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
  )
}
