type Props = { children: React.ReactNode }
export default function AuthContainer({ children }: Props) {
  return (
    <main className="h-[1300px]">
      <section className=" m-auto mt-24 box-content w-[300px] rounded-lg bg-[--fill] p-10">
        {children}
      </section>
    </main>
  )
}
