import * as React from 'react'
import * as StepperPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

import { Divider } from './divider'

const StepperRoot = React.forwardRef<
  React.ElementRef<typeof StepperPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof StepperPrimitive.Root>
>(({ className, ...props }, ref) => (
  <StepperPrimitive.Root
    ref={ref}
    className={cn('flex flex-col', className)}
    {...props}
  />
))
StepperRoot.displayName = 'StepperRoot'

const StepperItem = React.forwardRef<
  React.ElementRef<typeof StepperPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof StepperPrimitive.Item>
>(({ className, ...props }, ref) => (
  <StepperPrimitive.Item
    ref={ref}
    className={cn('[&>.content]:last:border-none', className)}
    {...props}
  />
))
StepperItem.displayName = 'StepperItem'

const StepperTrigger = React.forwardRef<
  React.ElementRef<typeof StepperPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof StepperPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StepperPrimitive.Trigger
    ref={ref}
    className={cn(
      'group flex w-full flex-1 items-center gap-3 py-2 text-title-sm font-medium text-onSurface transition-all disabled:text-onSurface/38',
      className
    )}
    {...props}
  >
    {children}
  </StepperPrimitive.Trigger>
))
StepperTrigger.displayName = StepperPrimitive.Trigger.displayName

const StepIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'grid h-9 w-9 place-items-center rounded-full bg-primaryContainer text-onPrimaryContainer group-disabled:bg-onSurface/12 group-disabled:text-onSurface/38',
      className
    )}
    {...props}
  />
))
StepIndicator.displayName = 'StepIndicator'

const StepperContent = React.forwardRef<
  React.ElementRef<typeof StepperPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof StepperPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <StepperPrimitive.Content
    ref={ref}
    className={cn(
      'content ml-3.5 overflow-hidden border-l border-outline pl-8 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="flex items-stretch gap-4">{children}</div>
  </StepperPrimitive.Content>
))
StepperContent.displayName = StepperPrimitive.Content.displayName

const StepperSeparator = React.forwardRef<
  React.ElementRef<typeof Divider>,
  React.ComponentPropsWithoutRef<typeof Divider>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <Divider
    ref={ref}
    className={cn('ml-3.5 h-5 bg-outline', className)}
    orientation={orientation}
    {...props}
  />
))

const Stepper = Object.assign(StepperRoot, {
  Item: StepperItem,
  Trigger: StepperTrigger,
  Indicator: StepIndicator,
  Content: StepperContent,
  Separator: StepperSeparator,
})

export {
  Stepper,
  StepperRoot,
  StepperItem,
  StepperTrigger,
  StepIndicator,
  StepperContent,
  StepperSeparator,
}
