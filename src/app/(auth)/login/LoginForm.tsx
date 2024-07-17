import { login } from "@/actions/auth"
import SubmitButton from "@/components/Auth/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link"

export function LoginForm() {
  return (
    <form action={login} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" placeholder="Password" />
      </div>
      <SubmitButton mode="login" />
      <Link className="text-sm hover:underline" href="/register">
        Doesnt have an account?
      </Link>
    </form>
  )
}
