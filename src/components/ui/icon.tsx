import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * The symbols names always goes in minus case and separated by "_".
 * For example: "Add circle" will be "add_circle"; Home, will be "home"
 */

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol: string // You can find the symbols names here: https://fonts.google.com/icons?icon.style=Rounded
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ symbol, className, ...props }, ref) => (
    <i
      ref={ref}
      className={cn(
        'font-regular text-2xl leading-none transition-[font-variation-settings] duration-300 ease-in-expo',
        className
      )}
      {...props}
    >
      {symbol}
    </i>
  )
)
Icon.displayName = 'Icon'

export { Icon }
