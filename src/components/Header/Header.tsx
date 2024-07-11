import { Session } from "lucia"
import { revalidatePath } from "next/cache"
import dynamic from "next/dynamic"
const DynamicHeaderContent = dynamic(
  () => import("@/components/Header/header-content"),
  {
    ssr: false,
  },
)

export default async function Header({
  session,
}: {
  session: Session | { user: null; session: null }
}) {


  return (
    <div className="z-999 relative  bg-header-bg text-text-secondary-light ">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between p-4">
        <DynamicHeaderContent session={session as any} />
      </div>
    </div>
  )
}
