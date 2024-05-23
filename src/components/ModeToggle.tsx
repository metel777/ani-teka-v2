"use client"

import { Monitor, Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <main className="flex gap-1 rounded-full p-1 shadow-glance-authkit">
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full  p-1 hover:bg-g.warm-900 ${
          theme == "dark" && " bg-g.warm-900 shadow-glance-authkit"
        }`}
      >
        <MoonIcon size={17} />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full  p-1 hover:bg-g.warm-900 ${
          theme == "light" && "bg-g.warm-900 shadow-glance-authkit"
        }`}
      >
        <SunIcon size={17} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-full  p-1 hover:bg-g.warm-900 ${
          theme == "system" && "bg-g.warm-900 shadow-glance-authkit "
        }`}
      >
        <Monitor size={17} />
      </button>
    </main>
  )
}

// "use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function ModeToggle() {
//   const { setTheme,  } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
