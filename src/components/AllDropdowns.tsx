"use client"

import { ChevronsUpDown } from "lucide-react"
import { Button } from "./ui/button"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MediaTagCollection } from "@/types/tags-genres"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

function DropdownIcon() {
  return <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
}
//TagsPick ===============
type Checked = DropdownMenuCheckboxItemProps["checked"]

export function TagsPick({ tags }: { tags: MediaTagCollection[] }) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Filter by tags <DropdownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-72 w-56 overflow-y-auto">
        <DropdownMenuLabel>Tags</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-g.warm-200 dark:bg-g.warm-700" />

        {tags.map((tag) => (
          <DropdownMenuCheckboxItem
            //  checked={showStatusBar}
            //  onCheckedChange={setShowStatusBar}
            key={tag.id}
          >
            {tag.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

//OrderPick ===============

const order = [
  { name: "Popularity", orderName: "POPULARITY_DESC" },
  { name: "Start date", orderName: "START_DATE_DESC" },
  { name: "End date", orderName: "END_DATE_DESC" },
  { name: "Score", orderName: "SCORE_DESC" },
  { name: "Favourites", orderName: "FAVOURITES_DESC" },
  { name: "Episodes", orderName: "EPISODES_DESC" },
  { name: "Trending", orderName: "TRENDING_DESC" },
]

export function OrderPick() {
  const [orderStatus, setOrderStatus] = React.useState("Score")

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const params = new URLSearchParams(searchParams)

  function handleOrder(order: string) {
    params.set("order", order)
    push(`${pathname}?${params}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Order by <DropdownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {order.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.name}
            checked={orderStatus === item.name}
            onCheckedChange={() => setOrderStatus(item.name)}
            onClick={() => handleOrder(item.orderName)}
          >
            {item.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

//GenresPick =========

export function GenresPick({ genres }: { genres: string[] }) {
  const [selectedGenres, setSelectedGenres] = React.useState<[string]>([""])

  // const [selectedGenres, setSelectedGenres] = React.useState<Checked>(true)
  const genreParams = useSearchParams()
  const params = new URLSearchParams(genreParams)
  const { push } = useRouter()
  const pathname = usePathname()
  function handleSelectGenre(genre: string) {
    // params.set("genre", genre)
    // setSelectedGenres(prev => [...prev, genre])
    // push(`${pathname}?genre=${selectedGenres}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Filter by genres
          <DropdownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 h-72 overflow-y-auto">
        <DropdownMenuLabel>Genres</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-g.warm-200 dark:bg-g.warm-700" />

        {genres.map((genre) => (
          <DropdownMenuCheckboxItem
            key={genre}
            onClick={() => handleSelectGenre(genre)}
          >
            {genre}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
