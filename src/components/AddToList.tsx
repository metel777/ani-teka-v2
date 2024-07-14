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
import { addToList, deleteFromList } from "@/actions/list"
import { User, Session } from "lucia"
import { LoginForm } from "@/app/(auth)/login/LoginForm"
import { userListOptions } from "@/types/userList"
import { toast } from "./ui/use-toast"
import { Title1 } from "./Titles"

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

  if (!session.user?.id) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" h-min p-1" variant="warm-primary">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Title1>Login</Title1>
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
          <div>
            <Label htmlFor="score">List</Label>
            <DropdownMenu>
              <DropdownMenuTrigger className="capitalize" asChild>
                {/* if media in user list - display list name. else - display selected ,by user, list */}
                <Button variant="dropdown" className="w-[120px]">
                  {isMediaInUserList
                    ? mediaInUserList[0].list
                    : !selectedList
                      ? "Open list"
                      : selectedList}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
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
          </div>
          <div>
            <Label htmlFor="score">Score</Label>
            <Input
              onChange={(e) => setScore(e.target.valueAsNumber)}
              id="score"
              type="number"
              placeholder="0"
              max={10}
              min={0}
            />
          </div>
          <div>
            <Label htmlFor="episodes">{mediaType=== 'ANIME' ? "Watched episodes" : 'Chapters read'}</Label>
            <Input
              onChange={(e) => setWatchedEpisodes(e.target.valueAsNumber)}
              id="episodes"
              type="number"
              placeholder="0"
              max={episodes}
              min={0}
            />
          </div>
        </main>
        <DialogFooter className="mt-10">
          <form action={deleteFromList}>
            <Button variant="destructive">Delete from list</Button>
            <input name="mediaId" type="hidden" value={mediaId} />
          </form>
          {/* ::::::::::::::::::::::::::::::::::MAIN FORM::::::::::::::::::::::::::: */}
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
              value={mediaInUserList[0]?.watchedEpisodes || watchedEpisodes}
              max={episodes}
            />
            <input type="hidden" name="score" value={score} />
            <input
              type="hidden"
              name="list"
              value={selectedList.toLowerCase()}
            />
            <DialogClose asChild>
              <Button
                type="submit"
                onClick={() => {
                  toast({
                    title: "Succed",
                    description: "Media succesfully added to your list",
                    variant: "succed",
                    duration: 2500,
                  })
                }}
              >
                Save
              </Button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
