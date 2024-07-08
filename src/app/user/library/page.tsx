import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { db } from "@/db/db"
import { userLists } from "@/db/schema"
import { mediaAddLists } from "@/lib/mediaAddLists"
import { eq } from "drizzle-orm"

type Props = {}
export default async function page({}: Props) {
  const data = await db
    .select()
    .from(userLists)
    .where(eq(userLists.userId, "1"))
  console.log(data)
  return (
    <main className="h-screen p-4">
      <section className="text-3xl">name</section>
      <main>
        <section>
          <Tabs
            orientation="vertical"
            defaultValue="Planning"
            className=" relative w-fit "
          >
            <TabsList className="flex flex-col">
              {mediaAddLists.map((item, index) => (
                <TabsTrigger key={index} value={item}>
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="All"></TabsContent>
          </Tabs>
        </section>
        <section></section>
      </main>
    </main>
  )
}
