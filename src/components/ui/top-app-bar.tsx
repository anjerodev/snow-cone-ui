import * as React from 'react'

import { cn } from '@/lib/utils'

const TopAppBarRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('sticky top-0 z-30', className)} {...props} />
))
TopAppBarRoot.displayName = 'TopAppBarRoot'

const TopAppBarToolBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex h-16 w-full items-center bg-surface', className)}
    {...props}
  />
))
TopAppBarToolBar.displayName = 'TopAppBarToolBar'

const TopAppBarHeadline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      'line-clamp-1 grow px-2 text-title-lg text-onSurface',
      className
    )}
    {...props}
  />
))
TopAppBarHeadline.displayName = 'TopAppBarHeadline'

const LeadingSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'ml-2 mr-1 flex shrink-0 items-center justify-center text-onSurface',
      className
    )}
    {...props}
  />
))

const TrailingSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'ml-1 mr-2 flex shrink-0 items-center justify-center gap-2 text-onSurfaceVariant',
      className
    )}
    {...props}
  />
))

const TopAppBar = Object.assign(TopAppBarRoot, {
  Toolbar: TopAppBarToolBar,
  Headline: TopAppBarHeadline,
  LeadingSection,
  TrailingSection,
})

export {
  TopAppBar,
  TopAppBarToolBar,
  TopAppBarHeadline,
  LeadingSection,
  TrailingSection,
}
