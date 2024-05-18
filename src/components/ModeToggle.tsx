"use client"

import { Monitor, Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <main className="flex gap-1 rounded-full border border-g.dark-700 p-1">
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full  p-1 hover:bg-slate-800 ${
          theme === "dark" && "border-slate-700  bg-slate-800"
        }`}
      >
        <MoonIcon size={17} />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full  p-1 hover:bg-slate-800 ${
          theme === "light" && "border-slate-700  bg-slate-800"
        }`}
      >
        <SunIcon size={17} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-full  p-1 hover:bg-slate-800 ${
          theme === "system" && "border-slate-700 bg-slate-800 "
        }`}
      >
        <Monitor size={17} />
      </button>
    </main>
  )
}
