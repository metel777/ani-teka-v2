import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-g.warm-300 dark:bg-g.warm-700",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
