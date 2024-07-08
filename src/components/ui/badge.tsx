import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[--fill] text-[--text-secondary] hover:text-[--text-strong]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        finished:
          "bg-green-100 text-green-600 border border-green-200 dark:bg-green-950 dark:text-green-600 dark:border-green-800 ",
        releasing:
          "bg-purple-100 text-purple-600 border border-purple-200 dark:bg-purple-950 dark:text-purple-500 dark:border-purple-800 ",
        announce:
          "bg-sky-100 text-sky-600 border border-sky-200 dark:bg-sky-950 dark:text-sky-600 dark:border-sky-800 ",
        genresCount: 'px-2 bg-indigo-500 border-none text-white cursor-default'
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
