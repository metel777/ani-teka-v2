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
import { LibraryBig, LogOut, Settings, UserRound } from "lucide-react"
import { ModeToggle } from "../ModeToggle"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { logout } from "@/actions/auth"
import { Button } from "../ui/button"

type Props = {
  name: string
}
export default function ProfileDropdown({ name }: Props) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Profile</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-g.warm-200 p-0 shadow-xl">
          <DropdownMenuLabel className="flex items-center gap-2 ">
            <UserRound size={15} />
            {name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <section className="p-1">
            <Link href="/user/library">
              <DropdownMenuItem className="flex items-center gap-2 ">
                <LibraryBig size={15} className="" /> My lib
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="flex items-center gap-2 ">
              <Settings size={15} className="" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <AlertDialog>
                <AlertDialogTrigger className="flex items-center gap-2">
                  <LogOut size={15} /> Logout
                </AlertDialogTrigger>
                <AlertDialogContent className="w-min">
                  <form action={logout}>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction type="submit">
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </form>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuItem>
          </section>
          <div className="text-md flex justify-center bg-g.warm-100 p-1 text-g.warm-500 dark:bg-g.warm-900">
            <ModeToggle />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
