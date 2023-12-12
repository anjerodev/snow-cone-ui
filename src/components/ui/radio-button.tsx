'use client'

import * as React from 'react'
import * as RadioButtonPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/lib/utils'

const RadioButtonRoot = React.forwardRef<
  React.ElementRef<typeof RadioButtonPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioButtonPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioButtonPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioButtonRoot.displayName = RadioButtonPrimitive.Root.displayName

const RadioButtonItem = React.forwardRef<
  React.ElementRef<typeof RadioButtonPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioButtonPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioButtonPrimitive.Item
      ref={ref}
      className={cn(
        'group aspect-square h-5 w-5 rounded-full border-2 border-outline ring-offset-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/38 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-38 data-[state=checked]:border-primary disabled:data-[state=checked]:border-outline',
        className
      )}
      {...props}
    >
      <RadioButtonPrimitive.Indicator className="flex items-center justify-center data-[state=unchecked]:duration-100 data-[state=checked]:animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in-0 data-[state=unchecked]:zoom-out-0">
        <span className="h-2.5 w-2.5 rounded-full bg-primary group-disabled:bg-outline" />
      </RadioButtonPrimitive.Indicator>
    </RadioButtonPrimitive.Item>
  )
})
RadioButtonItem.displayName = RadioButtonPrimitive.Item.displayName

const RadioButton = Object.assign(RadioButtonRoot, {
  Item: RadioButtonItem,
})

export { RadioButton, RadioButtonItem }
