import { TabsContent } from "@/components/ui/tabs"

type Props = { children: React.ReactNode, value: any }
export function TabContentLayout({ children, value }: Props) {
  return (
    <TabsContent
      className=" ml-5 grid grid-cols-5 gap-4 text-sm text-[--text-secondary]"
      value={value}
    >
      {children}
    </TabsContent>
  )
}

export function UserListCard({ children }: Props) {

}
