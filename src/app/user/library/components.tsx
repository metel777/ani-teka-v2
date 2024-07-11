import { validateSession } from "@/actions/auth"
import { TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { db, userLists } from "@/db/schema"
import { and, eq } from "drizzle-orm"

type Props = { children: React.ReactNode; value: any }
export function TabContentLayout({ children, value }: Props) {
  return (
    <TabsContent
      className=" ml-5 grid grid-cols-4 gap-6 text-sm text-[--text-secondary]"
      value={value}
    >
      {children}
    </TabsContent>
  )
}

export function UserListCard({ children }: Props) {}

export async function TabListItemWithCount({ option }: { option: string }) {
  const session = await validateSession()
  const userId = session.user?.id as string

  let query = await db
    .select()
    .from(userLists)
    .where(
      and(
        eq(userLists.userId, userId),
        eq(userLists.list, option as any),
      ),
    )
  if (option === "all") {
    query = await db
      .select()
      .from(userLists)
      .where(eq(userLists.userId, userId))
  }
  return (
    <TabsTrigger className="w-full capitalize" value={option}>
      <div className="flex justify-between">
        <span>{option}</span>
        <span>{query.length}</span>
      </div>
    </TabsTrigger>
  )
}
