import { login } from "@/actions/auth"
import { PrimaryBtn } from "@/components/Buttons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

import Link from "next/link"

export function LoginForm() {
  return (
    <form action={login} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" placeholder="Password" />
      </div>
      <PrimaryBtn>Login into account</PrimaryBtn>
      <Link className="text-sm hover:underline" href="/register">
        Doesnt have an account?
      </Link>
    </form>
  )
}
