import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex items-start space-x-2">
        <div className="relative flex h-5 items-center justify-center">
          <input
            type="checkbox"
            className={cn(
              "peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:bg-[var(--color-brand-primary)] checked:border-[var(--color-brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)] transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500",
              className
            )}
            ref={ref}
            {...props}
          />
          <Check className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </div>
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "text-sm leading-tight text-gray-600 cursor-pointer",
              props.disabled && "cursor-not-allowed opacity-50"
            )}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
