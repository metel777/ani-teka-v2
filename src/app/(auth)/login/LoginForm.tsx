import { doSocialLogin } from "@/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

import Link from "next/link"

type Props = {}

export function LoginForm({}: Props) {
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
        Login
      </Button>
      <Link className="text-sm hover:underline" href="/register">
        Doesnt have an account?
      </Link>
    </form>
  )
}
export function AlternativeLoginForm({}: Props) {
  return (
    <form action={doSocialLogin} className="flex flex-col gap-4">
      <Button
        variant="google"
        name="action"
        value="google"
        className="w-full"
        type="submit"
      >
        Login with
        <Image src={"/google.svg"} alt="google icon" width={20} height={20} />
      </Button>
      {/* <Button
        disabled
        variant="github"
        name="action"
        value="github"
        className="w-full"
        type="submit"
      >
        Login with
        <Image src={"/github.svg"} alt="github icon" width={20} height={20} />
      </Button> */}
      <Link className="text-sm hover:underline" href="/register">
        Doesnt have an account?
      </Link>
    </form>
  )
}
