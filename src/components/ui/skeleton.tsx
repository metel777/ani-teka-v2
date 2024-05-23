import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-g.warm-100 dark:bg-g.warm-800",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
