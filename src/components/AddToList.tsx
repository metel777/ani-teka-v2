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
import { ChevronsUpDown, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { mediaAddLists } from "@/lib/mediaAddLists"
import { Session } from "next-auth"
import { AlternativeLoginForm } from "@/app/(auth)/login/LoginForm"
import { addToList } from "@/actions/list"

type Props = { mediaId: string; mediaType: "ANIME" | "MANGA"; episodes: any }
export default function AddToList({ mediaId, mediaType, episodes }: Props) {
  const [selectedList, setSelectedList] = useState("")
  const [score, setScore] = useState(0)
  const [watchedEpisodes, setWatchedEpisodes] = useState(0)

  

  function handleDeleteFromList() {}

  function name() {}
  name()

  // if (!session) {
  //   return (
  //     <Dialog>
  //       <TooltipProvider>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <DialogTrigger asChild>
  //               <Button className=" h-min p-1" variant="warm-primary">
  //                 <Plus />
  //               </Button>
  //             </DialogTrigger>
  //           </TooltipTrigger>
  //           <TooltipContent>
  //             <p>Add to your list</p>
  //           </TooltipContent>
  //         </Tooltip>
  //       </TooltipProvider>
  //       <DialogContent>
  //         <DialogHeader>
  //           <DialogTitle className="mb-5">Add media to your list</DialogTitle>
  //         </DialogHeader>

  //         <AlternativeLoginForm />
  //       </DialogContent>
  //     </Dialog>
  //   )
  // }
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
        <main className="flex justify-between">
          {/* List */}
          <section className="">
            <Label htmlFor="score">List</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[120px]">
                  {!selectedList ? "Open list" : selectedList}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {mediaAddLists.map((item, index) => (
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
          {/* List end */}
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
            {/* <DialogClose asChild> */}
              <Button type="submit">Save</Button>
            {/* </DialogClose> */}
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
