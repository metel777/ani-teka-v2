"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { MediaTagCollection } from "@/types/tags-genres"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Check } from "lucide-react"
import { ChevronsUpDown } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropdownIcon() {
  return <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
}

//:::::::::::::Filter by tags ::::::::::::

export function TagsPick({ tags }: { tags: MediaTagCollection[] }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const { push } = useRouter()
  const pathname = usePathname()

  const searchParamsHook = useSearchParams()
  const params = new URLSearchParams(searchParamsHook)

  const tagsWithoutXXX = tags.filter((tag) => tag.isAdult === false)

  const tagsParams = params.getAll("tag")

  function handleSelectTag(tag: string) {
    if (params.has("tag", tag)) {
      const updatedGenres = tagsParams.filter((t) => t !== tag)
      params.delete("tag")
      updatedGenres.forEach((t) => params.append("tag", t))
    } else {
      params.append("tag", tag)
    }
    push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="dropdown"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-center"
          >
            Filter by tags
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput className="text-white" placeholder="Search tags..." />
            <CommandEmpty>No tags found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {tagsWithoutXXX.map((tag) => (
                  <CommandItem
                    key={tag.id}
                    value={tag.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                      handleSelectTag(tag.name)
                    }}
                  >
                    {params.has("tag", tag.name) ? (
                      <Check className={"mr-2 h-4 w-4 "} />
                    ) : (
                      <Check className={"mr-2 h-4 w-4 opacity-0"} />
                    )}

                    {tag.name}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Selected tags indicator */}
      {tagsParams.length > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="absolute -right-2 -top-2">
              <Badge variant="genresCount">{tagsParams.length}</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Selected tags.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}

//:::::::::::::Order by::::::::::::::

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
        <Button variant="dropdown">
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

//::::::::::Filter by genres::::::::::

export function GenresPick({ genres }: { genres: string[] }) {
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>([])

  const searchParamsHook = useSearchParams()
  const params = new URLSearchParams(searchParamsHook)
  const { push } = useRouter()
  const pathname = usePathname()

  const genresParams = params.getAll("genre")

  function handleSelectGenre(genre: string) {
    if (params.has("genre", genre)) {
      const updatedGenres = genresParams.filter((g) => g !== genre)
      params.delete("genre")
      updatedGenres.forEach((g) => params.append("genre", g))
    } else {
      params.append("genre", genre)
    }
    // Set the selected genres
    setSelectedGenres(params.getAll("genre"))

    // Push the updated params to the router
    push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-full justify-center" variant="dropdown">
            Filter by genres
            <DropdownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-72 w-full overflow-y-auto">
          {genres.map((genre) => (
            <DropdownMenuCheckboxItem
              key={genre}
              onClick={() => handleSelectGenre(genre)}
              checked={params.has("genre", genre)}
            >
              {genre}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Selected genres indicator */}
      
      {genresParams.length > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="absolute -right-2 -top-2">
              <Badge variant="genresCount">{genresParams.length}</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Selected genres.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
