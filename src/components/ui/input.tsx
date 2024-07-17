import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border shadow-xs bg-[--main-bg] border-g.warm-300 placeholder:text-g.warm-400 dark:border-g.warm-900 dark:bg-g.warm-800 dark:placeholder:text-g.warm-600  px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500  focus:shadow-md  file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
