"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

// Đảm bảo value nằm trong khoảng 0-100
function clampValue(value?: number) {
  if (typeof value !== "number") return 0
  return Math.max(0, Math.min(100, value))
}

// Tính toán style cho Indicator, tách biệt logic khỏi UI
function getIndicatorStyle(value?: number) {
  const clamped = clampValue(value)
  return { transform: `translateX(-${100 - clamped}%)` }
}

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  value?: number
}

const Progress = React.memo(function Progress({
  className,
  value = 0,
  ...props
}: ProgressProps) {
  const clampedValue = clampValue(value)
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      value={clampedValue}
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={getIndicatorStyle(clampedValue)}
      />
    </ProgressPrimitive.Root>
  )
})

export { Progress }
