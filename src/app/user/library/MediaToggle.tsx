"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CustomDropdownTrigger } from "@/components/AllDropdowns"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const lists = ["anime", "manga"]

export default function MediaToggle() {
  const [position, setPosition] = React.useState("anime")

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function changeList(list: string) {
    const params = new URLSearchParams(searchParams)
    params.set("list", list)
    router.push(`${pathname}?${params}`)
    // console.log(searchParams.get('list'), params.get("list"))
  }

  return (
    <DropdownMenu>
      <CustomDropdownTrigger>Switch list</CustomDropdownTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {lists.map((item) => (
            <DropdownMenuRadioItem
              onClick={() => changeList(item)}
              className="capitalize"
              value={item}
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
