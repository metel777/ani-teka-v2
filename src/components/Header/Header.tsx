import { auth } from "@/auth"
import { Session } from "next-auth"
import dynamic from "next/dynamic"
import { redirect } from "next/navigation"
const DynamicHeaderContent = dynamic(
  () => import("@/components/Header/header-content"),
  {
    ssr: false,
  },
)

export default async function Header() {
  const session = await auth() as Session

  return (
    <div className="z-999 relative  bg-header-bg text-text-secondary-light ">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between p-4">
        <DynamicHeaderContent session={session} />
      </div>
    </div>
  )
}
