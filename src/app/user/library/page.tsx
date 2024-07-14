import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getMediaFromUserList } from "@/utils/getMediaFromUserList"
import { GigaTab } from "./Tabs"
import { userListOptions } from "@/types/userList"
import { TabListItemWithCount } from "./components"
import MediaToggle from "./MediaToggle"

const userListOption = [
  "all",
  "planning",
  "watching",
  "paused",
  "dropped",
  "completed",
] as userListOptions[]

export default async function UserListsPage({
  searchParams,
}: {
  searchParams: {
    list: "anime" | "manga"
  }
}) {

  return (
    <main className="h-screen p-4">
      <section className=" mb-5 flex w-fit gap-4">
        <h1 className="text-3xl font-bold">Your library</h1>
        <MediaToggle />
      </section>
      <main>
        <section>
          <Tabs
            orientation="vertical"
            defaultValue="all"
            className=" relative w-fit"
          >
            <TabsList className="flex h-fit w-[150px] flex-col">
              {userListOption.map((item, index) => (
                <TabListItemWithCount
                  mediaType={searchParams.list || "anime"}
                  option={item}
                  key={index}
                />
              ))}
            </TabsList>
            {userListOption.map((item) => (
              <GigaTab mediaType={searchParams.list.toUpperCase() || 'anime'} key={item} list={item} />
            ))}
          </Tabs>
        </section>
      </main>
    </main>
  )
}
