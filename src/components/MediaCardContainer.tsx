type Props = { children: React.ReactNode }
export default function MediaCardContainer({ children }: Props) {
  return (
    <div className=" px-6 grid grid-cols-2 justify-items-center gap-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
      {children}
    </div>
  )
}
