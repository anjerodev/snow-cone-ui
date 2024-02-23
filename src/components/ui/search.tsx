'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const SearchBarRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      'relative flex h-14 w-full min-w-[360px] items-center rounded-xl bg-surfaceContainerHigh',
      className
    )}
    {...props}
    ref={ref}
  />
))
SearchBarRoot.displayName = 'SearchBarRoot'

const SearchBarInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    asChild?: boolean
  }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'input'

  return (
    <Comp
      ref={ref}
      type="search"
      className={cn(
        'h-full w-full grow bg-transparent px-4 text-body-lg text-onSurface outline-none placeholder:text-body-lg placeholder:text-onSurfaceVariant disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface/38 disabled:placeholder:text-onSurface/38',
        className
      )}
      {...props}
    />
  )
})
SearchBarInput.displayName = 'SearchBarInput'

const SearchBarLeftSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex shrink-0 items-center gap-2 pl-4 text-onSurface',
      className
    )}
    {...props}
  />
))
SearchBarLeftSection.displayName = 'SearchBarLeftSection'

const SearchBarRightSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex shrink-0 items-center gap-2 pr-4 text-onSurface',
      className
    )}
    {...props}
  />
))
SearchBarRightSection.displayName = 'SearchBarRightSection'

const SearchViewContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full origin-top animate-zoom-in-y rounded-b-xl border-t border-outline bg-surfaceContainerHigh',
      className
    )}
    {...props}
  />
))

const SearchBar = Object.assign(SearchBarRoot, {
  Input: SearchBarInput,
  LeftSection: SearchBarLeftSection,
  RightSection: SearchBarRightSection,
  ViewContainer: SearchViewContainer,
})

export {
  SearchBar,
  SearchBarInput,
  SearchBarLeftSection,
  SearchBarRightSection,
}
