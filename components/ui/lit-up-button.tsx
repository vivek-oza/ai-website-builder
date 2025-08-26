"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type LitUpButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md" | "lg"
}

const sizeClasses: Record<NonNullable<LitUpButtonProps["size"]>, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
}

export const LitUpButton = React.forwardRef<HTMLButtonElement, LitUpButtonProps>(
    ({ className, children, size = "md", disabled, ...props }, ref) => {
        const processedChildren = React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child
            // Try to enforce weight="fill" on Phosphor icons or similar components that accept a 'weight' prop
            const childProps: any = child.props || {}
            if ("weight" in childProps && childProps.weight !== "fill") {
                return React.cloneElement(child as any, {
                    weight: "fill",
                    className: cn(childProps.className),
                })
            }
            return child
        })

        return (
            <button
                ref={ref}
                disabled={disabled}
                className={cn("p-[1px] relative group rounded-lg flex", className)}
                {...props}
            >
                {/* Primary-colored 1px border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-primary" />
                {/* Inner body */}
                <div
                    className={cn(
                        "rounded-lg relative transition-colors duration-200 flex items-center justify-center gap-2 font-semibold flex-1",
                        // Use theme colors to match primary palette
                        "bg-background text-foreground hover:bg-transparent hover:text-black",
                        sizeClasses[size]
                    )}
                >
                    {processedChildren}
                </div>
            </button>
        )
    }
)

LitUpButton.displayName = "LitUpButton"
