import { cn } from "@/lib/utils"

export function Title1({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={`mb-4 text-3xl font-bold dark:text-g.dark-50 ${className}`}>{children}</h1>
  )
}
export function Title2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn(
        "-mt-4 text-xl font-semibold text-g.warm-500 dark:text-g.warm-400",
        className,
      )}
    >
      {children}
    </h1>
  )
}
