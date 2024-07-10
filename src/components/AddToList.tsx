"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { ChevronsUpDown, Pencil, Plus } from "lucide-react"
import { ReactNode, useState } from "react"

import { addToList } from "@/actions/list"

import { User, Session } from "lucia"
import { LoginForm } from "@/app/(auth)/login/LoginForm"
import { userListOptions } from "@/types/userList"

const listsOptions = ["planning", "watching", "paused", "dropped", "completed"]

interface userLists {
  userId: string | null
  mediaType: "anime" | "manga" | null
  media_id: number | null
  list: userListOptions
  score: number | null
  watchedEpisodes: number | null
}

type Props = {
  mediaId: string
  mediaType: "ANIME" | "MANGA"
  episodes: any
  session: { user: User | null; session: Session | null }
  mediaInUserList: userLists[]
}
export default function AddToList({
  mediaId,
  mediaType,
  episodes,
  session,
  mediaInUserList,
}: Props) {
  const [selectedList, setSelectedList] = useState("")
  const [score, setScore] = useState(0)
  const [watchedEpisodes, setWatchedEpisodes] = useState(0)

  function handleDeleteFromList() {}

  if (!session.user?.id) {
    return (
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button className=" h-min p-1" variant="warm-primary">
                  <Plus />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to your list</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-5">Add media to your list</DialogTitle>
          </DialogHeader>

          <LoginForm />
        </DialogContent>
      </Dialog>
    )
  }

  const isMediaInUserList = mediaInUserList.length > 0 ? true : false

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" h-min p-1" variant="warm-primary">
          {isMediaInUserList ? <Pencil /> : <Plus />}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5">
            {isMediaInUserList
              ? "Edit media in your list"
              : "Add media to your list"}
          </DialogTitle>
        </DialogHeader>
        <main className="flex justify-between">
          <section className="">
            <Label htmlFor="score">List</Label>
            <DropdownMenu>
              <DropdownMenuTrigger className="capitalize" asChild>
                {isMediaInUserList ? (
                  <Button variant="dropdown" className="w-[120px]">
                    {mediaInUserList[0].list}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                ) : (
                  <Button variant="dropdown" className="w-[120px]">
                    {!selectedList ? "Open list" : selectedList}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="capitalize">
                {listsOptions.map((item, index) => (
                  <DropdownMenuCheckboxItem
                    key={index}
                    checked={selectedList === item}
                    onCheckedChange={() => setSelectedList(item)}
                  >
                    {item}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <section>
            <Label htmlFor="score">Score</Label>
            <Input
              onChange={(e) => setScore(e.target.valueAsNumber)}
              id="score"
              type="number"
              placeholder="0"
              max={10}
              min={0}
            />
          </section>
          <section>
            <Label htmlFor="episodes">Watched episodes</Label>
            <Input
              onChange={(e) => setWatchedEpisodes(e.target.valueAsNumber)}
              id="episodes"
              type="number"
              placeholder="0"
              max={episodes}
              min={0}
            />
          </section>
        </main>
        <DialogFooter className="mt-10">
          <Button onClick={handleDeleteFromList} variant="destructive">
            Delete from list
          </Button>
          <form action={addToList}>
            <input type="hidden" name="mediaId" value={mediaId} />
            <input type="hidden" name="maxEpisodes" value={episodes} />
            <input
              type="hidden"
              name="mediaType"
              value={mediaType.toLowerCase()}
            />
            <input
              type="hidden"
              name="watchedEpisodes"
              value={watchedEpisodes}
              max={episodes}
            />
            <input type="hidden" name="score" value={score} />
            <input
              type="hidden"
              name="list"
              value={selectedList.toLowerCase()}
            />
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
