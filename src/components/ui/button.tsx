import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition-colors focus-visible:outline-none border-[--stroke-weak]  disabled:pointer-events-none disabled:opacity-50 flex gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t  from-indigo-500 to-indigo-600 text-white shadow-glance border border-indigo-700 hover:from-indigo-600 hover:to-indigo-700 active:shadow-none active:from-indigo-800 active:to-indigo-900",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[--stroke-strong] bg-white hover:bg-g.warm-200 hover:text-g.warm-800 dark:bg-g.warm-900 dark:hover:text-g.warm-400",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-[--fill]",
        link: "text-primary underline-offset-4 hover:underline",
        "warm-primary":
          "bg-[--fill] border-2 border-[--stroke-strong]",
        "warm-secondary":
          "bg-g.warm-200 hover:bg-g.warm-300 dark:bg-g.warm-800 active:bg-g.warm-200 dark:active:bg-g.warm-800  hover:dark:bg-g.warm-600/40",
        google: "border hover:bg-g.warm-100 bg-white dark:hover:bg-g.warm-200",
        github: "bg-black text-g.warm-100 hover:bg-black/80",
        dropdown:
          "bg-[--fill] text-[--text-secondary] hover:text-[--text-strong]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
