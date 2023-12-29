import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const ListRoot = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'ul'
  return (
    <Comp
      ref={ref}
      className={cn('w-full bg-surface py-2', className)}
      {...props}
    />
  )
})
ListRoot.displayName = 'ListRoot'

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'li'
  return (
    <Comp
      ref={ref}
      className={cn(
        'group/item relative flex min-h-14 w-full items-center gap-4 bg-surface px-4 py-2 text-onSurfaceVariant outline-none last:border-none focus:outline-none',
        className
      )}
      {...props}
    />
  )
})
ListItem.displayName = 'ListItem'

const ListActionArea = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, children, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <>
      <Comp
        ref={ref}
        className={cn(
          'group/action z-0 flex h-full w-full items-center gap-4 text-onSurfaceVariant outline-none focus:outline-none',
          className
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span className="state-layer absolute inset-0 z-[-1] bg-onSurfaceVariant opacity-0 transition-opacity group-focus-within/item:opacity-4 group-hover/item:opacity-4 group-active/action:opacity-8" />
      </Comp>
    </>
  )
})
ListActionArea.displayName = 'ListActionArea'

const ListHeadline = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-body-lg text-onSurface', className)}
    {...props}
  />
))
ListHeadline.displayName = 'ListHeadline'

const ListSupportingText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-body-md', className)} {...props} />
))
ListSupportingText.displayName = 'ListSupportingText'

const ListEdgeSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex shrink-0 items-center', className)}
    {...props}
  />
))

const ListContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('grow', className)} {...props} />
))

const List = Object.assign(ListRoot, {
  Item: ListItem,
  Headline: ListHeadline,
  SupportingText: ListSupportingText,
  ActionArea: ListActionArea,
  EdgeSection: ListEdgeSection,
  Content: ListContent,
})

export {
  List,
  ListRoot,
  ListItem,
  ListHeadline,
  ListSupportingText,
  ListActionArea,
  ListEdgeSection,
  ListContent,
}
