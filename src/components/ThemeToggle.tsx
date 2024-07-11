"use client"

import { Monitor, Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <main className="flex gap-1 h-fit w-fit rounded-full border border-g.warm-300 p-1 shadow-glance-authkit dark:border-transparent">
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full  border border-transparent p-1 hover:bg-g.warm-300 ${
          theme == "dark" &&
          " border border-g.warm-400 bg-g.warm-300 text-g.warm-800 shadow-glance-authkit"
        }`}
      >
        <MoonIcon size={17} />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full  border border-transparent p-1 hover:bg-g.warm-300 ${
          theme == "light" &&
          "border border-g.warm-400 bg-g.warm-300 text-g.warm-800 shadow-glance-authkit"
        }`}
      >
        <SunIcon size={17} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-full  border border-transparent p-1 hover:bg-g.warm-300 ${
          theme == "system" &&
          "border border-g.warm-400 bg-g.warm-300 text-g.warm-800 shadow-glance-authkit "
        }`}
      >
        <Monitor size={17} />
      </button>
    </main>
  )
}

export function ModeToggleMobile() {
  const { setTheme, theme } = useTheme()

  return (
    <main className="flex gap-1 rounded-full p-1 shadow-glance-authkit">
      <Button
        variant="warm-secondary"
        onClick={() => setTheme("dark")}
        className={`rounded-full  p-1 ${
          theme == "dark" &&
          " bg-g.warm-900 text-g.warm-200 shadow-glance-authkit hover:bg-g.warm-900 hover:text-g.warm-200"
        }`}
      >
        <MoonIcon size={17} />
        Dark
      </Button>
      <Button
        variant="warm-secondary"
        onClick={() => setTheme("light")}
        className={`rounded-full  p-1 ${
          theme == "light" &&
          "bg-g.warm-900 text-g.warm-200 shadow-glance-authkit hover:bg-g.warm-900 hover:text-g.warm-200"
        }`}
      >
        <SunIcon size={17} />
        Light
      </Button>
      <Button
        variant="warm-secondary"
        onClick={() => setTheme("system")}
        className={`rounded-full  p-1 ${
          theme == "system" &&
          "bg-g.warm-900 text-g.warm-200 shadow-glance-authkit hover:bg-g.warm-900 hover:text-g.warm-200 "
        }`}
      >
        <Monitor size={17} />
        System
      </Button>
    </main>
  )
}
