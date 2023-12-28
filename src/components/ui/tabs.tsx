'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn('w-full', className)}
    {...props}
  />
))
TabsRoot.displayName = TabsPrimitive.Root.displayName

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex max-h-16 min-h-12 w-full items-stretch justify-evenly bg-surface shadow-sm',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'group relative z-0 inline-flex w-full min-w-fit flex-col items-center justify-center whitespace-nowrap px-4 text-title-sm text-onSurfaceVariant outline-none transition-colors focus:outline-none',
      'data-[state=active]:text-primary',
      'disabled:pointer-events-none',
      className
    )}
    {...props}
  >
    {children}
    <span className="indicator absolute bottom-0 mx-auto mt-auto hidden h-1 w-1/3 min-w-4 animate-zoom-in-x rounded-t-sm bg-primary group-data-[state=active]:block" />
    <span className="state-layer absolute inset-0 z-[-1] bg-onSurface opacity-0 transition-opacity group-hover:opacity-4 group-focus:opacity-4 group-focus-visible:opacity-8 group-data-[state=active]:bg-primary group-data-[state=active]:opacity-0 group-data-[state=active]:group-hover:opacity-4" />
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'focus-visible:ring-ring mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

export { Tabs, TabsList, TabsTrigger, TabsContent }
