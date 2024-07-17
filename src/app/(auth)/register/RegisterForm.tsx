"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { register } from "@/actions/auth"
import { useFormState } from "react-dom"
import { PrimaryBtn } from "@/components/Buttons"
import SubmitButton from "@/components/Auth/SubmitButton"

const initialState = {
  error: "",
}

export function RegisterForm() {
  const [action, formState] = useFormState(register, initialState as any)
  return (
    <form action={register} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="User name">Username</Label>
        <Input type="text" name="username" placeholder="User name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" placeholder="Email" />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
      </div>
      <SubmitButton mode="signup" />
      <Link className="text-sm hover:underline" href="/login">
        Already have an account?
      </Link>
    </form>
  )
}
