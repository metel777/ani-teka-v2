// import { VerifyAuth } from "@/actions"
import { validateSession } from "@/actions/auth"
import { redirect } from "next/navigation"

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const verifyAuth = await validateSession()
  if (!verifyAuth.user?.email) {
    redirect("/login")
  }

  return <>{children}</>
}
