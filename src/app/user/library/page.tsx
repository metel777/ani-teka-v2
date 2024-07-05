import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mediaAddLists } from "@/lib/mediaAddLists"

type Props = {}
export default function page({}: Props) {
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
                <TabsTrigger key={index} value={item}>{item}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </section>
        <section></section>
      </main>
    </main>
  )
}
