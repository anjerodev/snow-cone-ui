'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  customIcon?: React.ReactNode
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, customIcon, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer grid h-5 w-5 shrink-0 place-items-center rounded-xs border-2 border-outline text-onPrimary ring-offset-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/38 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-38 data-[state=checked]:border-0 data-[state=checked]:bg-primary disabled:data-[state=checked]:bg-outline',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'flex h-[18px] w-[18px] items-center justify-center text-current transition-transform duration-200 animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in-0 data-[state=unchecked]:zoom-out-0 [&>i]:text-[18px] [&>svg]:h-[18px] [&>svg]:w-[18px]'
      )}
    >
      {customIcon || <Icon symbol="check" />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
