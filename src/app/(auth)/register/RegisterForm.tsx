"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

type Props = {}
export function RegisterForm({}: Props) {
  const { push } = useRouter()

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <Button type="submit" className="w-full">
        Create an account
      </Button>
      <Link className="text-sm hover:underline" href="/login">
        Already have an account?
      </Link>
    </form>
  )
}
export function AlternativeRegisterForm({}: Props) {
  const { push } = useRouter()

  return (
    <form className="flex flex-col gap-4">
      <Button variant="google" type="submit" className="w-full">
        Register with
        <Image src={"/google.svg"} alt="google icon" width={20} height={20} />
      </Button>
      {/* <Button disabled variant="github" type="submit" className="w-full">
        Register with
        <Image src={"/github.svg"} alt="github icon" width={20} height={20} />
      </Button> */}

      <Link className="text-sm hover:underline" href="/login">
        Already have an account?
      </Link>
    </form>
  )
}
