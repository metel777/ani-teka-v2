import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { LogOut, Settings, UserRound } from "lucide-react"
import { doLogout } from "@/actions"
import { ModeToggle } from "../ModeToggle"
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu"

type Props = {
  img: string
  name: string
}
export default function ProfileDropdown({ img, name }: Props) {
  return (
    <>
    
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          alt="User picture"
          className="rounded-md"
          src={img}
          width={32}
          height={32}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 shadow-xl border-g.warm-200">
        <DropdownMenuLabel className="flex items-center gap-2 "><UserRound size={15} />{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <section className="p-1">

        <DropdownMenuItem className="flex items-center gap-2 ">
          <Settings size={15} className="" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <AlertDialog>
            <AlertDialogTrigger className="flex items-center gap-2">
              <LogOut size={15} /> Logout
            </AlertDialogTrigger>
            <AlertDialogContent className="w-min">
              <form action={doLogout}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction type="submit">Continue</AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuItem>
        </section>
        <div className="text-md bg-g.warm-100 dark:bg-g.warm-900 p-1 text-g.warm-500 flex justify-center">
          <ModeToggle/>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </>

  )
}
