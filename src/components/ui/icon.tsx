import * as React from 'react'

import { cn } from '@/lib/utils'

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol: string
}

export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ symbol, className, ...props }, ref) => (
    <i
      ref={ref}
      className={cn(
        'text-2xl leading-none transition-[font-variation-settings] duration-300 ease-in-expo font-regular',
        className
      )}
      {...props}
    >
      {symbol}
    </i>
  )
)
Icon.displayName = 'Icon'
