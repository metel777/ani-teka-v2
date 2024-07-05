"use client"

import { useEffect, useState } from "react"

export const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth as number
    }
    return 0
  })

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowSizeChange)

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768
  const isTablet = width <= 1024
  const isDesktop = width > 1024

  return { isMobile, isTablet, isDesktop }
}
