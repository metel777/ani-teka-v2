"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useScreenWidth } from "@/hooks/useScreenWidth"
import { Session } from "next-auth"
import HeaderDrawer from "./header-drawer"
import { useEffect, useState } from "react"
import ProfileDropdown from "./profile-dropdown"
import { revalidatePath } from "next/cache"

export default function HeaderContent() {
  const path = usePathname()
  const { isDesktop, isMobile, isTablet } = useScreenWidth()

  return (
    <>
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

          <section className="flex gap-2">
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button
                className="hover:bg-g.warm-700 hover:text-g.warm-300"
                variant="ghost"
              >
                Sign In
              </Button>
            </Link>
          </section>

          {/* <ProfileDropdown
              name={session?.user?.name as string}
              img={session.user?.image as string}
            /> */}
        </>
      ) : (
        <HeaderDrawer />
      )}
    </>
  )
}
