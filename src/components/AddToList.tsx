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
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { ChevronsUpDown, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { mediaAddLists } from "@/lib/mediaAddLists"
import { VerifyAuth } from "@/actions"
import { Session } from "next-auth"
import { AlternativeLoginForm } from "@/app/(auth)/login/LoginForm"
import { handleSaveList } from "@/actions/list"


type Props = { mediaId: string }
export default function AddToList({ mediaId }: Props) {
  const [selectedList, setSelectedList] = useState("")
  const [score, setScore] = useState(0)
  const [episodes, setEpisodes] = useState(0)
  const [session, setSession] = useState<Session>({
    expires: "",
    user: {
      email: "",
      id: "",
      image: "",
      name: "",
    },
  })
  useEffect(() => {
    const session = async () => {
      try {
        const result = await VerifyAuth()
        setSession(result)
      } catch (error) {
        console.error("Error fetching session:", error)
      }
    }

    session()
  }, [])

  
  function handleDeleteFromList() {}

  function name() {}
  name()

  if (!session) {
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

          <AlternativeLoginForm />
        </DialogContent>
      </Dialog>
    )
  }
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
              onChange={(e) => setEpisodes(e.target.valueAsNumber)}
              id="episodes"
              type="number"
              placeholder="0"
              max={12}
              min={0}
            />
          </section>
        </main>
        <DialogFooter className="mt-10">
          <Button onClick={handleDeleteFromList} variant="destructive">
            Delete from list
          </Button>
          <Button onClick={() => handleSaveList(12345, "Planning", session)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
