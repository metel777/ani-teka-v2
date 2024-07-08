// import { VerifyAuth } from "@/actions"
import { redirect } from "next/navigation"

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const verifyAuth = await VerifyAuth()
  // if (!verifyAuth) {
  //   redirect("/login")
  // }

  return <>{children}</>
}
