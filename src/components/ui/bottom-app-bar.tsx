import * as React from 'react'

import { cn } from '@/lib/utils'

const BottomAppBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bottom-bar fixed inset-x-0 bottom-0 z-30 flex h-20 w-full items-center gap-2 bg-surfaceContainer pl-3 pr-4 text-onSuccessContainer shadow-md',
      className
    )}
    {...props}
  />
))
BottomAppBar.displayName = 'BottomAppBar'

export { BottomAppBar }
