import Link from "next/link"

import { ModeToggleMobile } from "@/components/ModeToggle"

import { Title2 } from "../Titles"

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
          <h1 className="text-text-tertiary-light dark:text-text-tertiary-dark text-5xl font-semibold">
            Menu
          </h1>
          <DrawerClose>
            <X size={30} />
          </DrawerClose>
        </section>
        <Separator />
        {/* Main section */}
        <main className="p-4">
          <NavSection title="Profile">
            {/* {!session ? (
              <>
                <NavLink href="/register">Sign Up</NavLink>
                <NavLink href="/login">Sign In</NavLink>
              </>
            ) : (
              <>
              <NavLink href="/settings">Settings</NavLink>
              <NavLink href="/user/library">My lib</NavLink>
              <NavLink href="/"><span>Logout</span></NavLink>
            </>
            )} */}
          </NavSection>
          <NavSection title="Navigate">
            <NavLink href="/anime">Anime</NavLink>
            <NavLink href="/manga">Manga</NavLink>
          </NavSection>
          <section className="absolute bottom-10 w-[95%]">
            <Title2 className="mb-5 mt-2">Theme</Title2>
            <ModeToggleMobile />
          </section>
        </main>
      </DrawerContent>
    </Drawer>
  )
}

function NavSection({
  children,
  title,
}: {
  children?: React.ReactNode
  title: string
}) {
  return (
    <section className="mb-10">
      <h1 className="mb-5 mt-2 text-3xl font-semibold text-text-secondary-light dark:text-text-primary-dark">
        {title}
      </h1>
      <section className="ml-5 flex flex-col gap-2  border-l-4 border-g.warm-200 pl-5 dark:border-g.warm-700">
        {children}
      </section>
    </section>
  )
}

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      className="rounded-xl p-2 text-2xl active:bg-g.warm-200 dark:active:bg-g.warm-800 "
      href={href}
    >
      <DrawerClose>{children}</DrawerClose>
    </Link>
  )
}
