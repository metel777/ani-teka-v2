"use client"
import { PrimaryBtn } from "@/components/Buttons"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {  useToast } from "@/components/ui/use-toast"

export default function TestPage({}) {
  const { toast } = useToast()
  
  return (
    <div className="flex h-screen items-center justify-center">
          <Skeleton className="w-72 h-72" />

    </div>
  )
}
