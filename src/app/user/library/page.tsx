import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getMediaFromUserList } from "@/utils/getMediaFromUserList"
import { GigaTab } from "./Tabs"
import { userListOptions } from "@/types/userList"
import { TabListItemWithCount } from "./components"

const userListOption = [
  "all",
  "planning",
  "watching",
  "paused",
  "dropped",
  "completed",
] as userListOptions[]

export default async function UserListsPage() {
  const media = await getMediaFromUserList("all")

  return (
    <main className="h-screen p-4">
      <section className="text-3xl">Your library</section>
      <main>
        <section>
          <Tabs
            orientation="vertical"
            defaultValue="all"
            className=" relative w-fit"
          >
            <TabsList className="flex h-fit w-[150px] flex-col">
              {userListOption.map((item, index) => (
                <TabListItemWithCount option={item} key={index}/>
              
              ))}
            </TabsList>
            {userListOption.map((item) => (
              <GigaTab key={item} list={item} />
            ))}
          </Tabs>
        </section>
      </main>
    </main>
  )
}
