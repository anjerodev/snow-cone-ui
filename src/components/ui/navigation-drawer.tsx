'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as NavigationDrawerPrimitive from '@radix-ui/react-dialog'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Divider } from '@/components/ui/divider'
import { Icon } from '@/components/ui/icon'

const NavigationDrawerRoot = NavigationDrawerPrimitive.Root

const NavigationDrawerTrigger = NavigationDrawerPrimitive.Trigger

const NavigationDrawerClose = NavigationDrawerPrimitive.Close

const NavigationDrawerPortal = NavigationDrawerPrimitive.Portal

interface NavigationContextI {
  active?: string
  setActive: (value?: string) => void

  prev: string | undefined
  next: string | undefined

  dir: 'back' | 'forward' | undefined

  activeGroup?: string
  setActiveGroup: (group?: string | undefined) => void
  schema: Schema
}

const NavigationContext = React.createContext<NavigationContextI>({
  active: undefined,
  setActive() {},
  dir: undefined,
  prev: undefined,
  next: undefined,
  activeGroup: undefined,
  setActiveGroup() {},
  schema: {},
})

type Schema = {
  [key: string]: {
    parent?: string
    children?: string[]
  }
}

function getAdjacentGroups(
  schema: Schema,
  groupId?: string
): { prev: string | undefined; next: string | undefined } {
  let prev
  let next

  if (groupId) {
    prev = schema[groupId]?.parent

    for (const id in schema) {
      if (schema[id]?.parent === groupId) {
        next = id
        break
      }
    }
  }

  return { prev, next }
}

function isParent(schema: Schema, value: string, active: string) {
  let currentParent

  for (const id in schema) {
    if (schema[id].children?.includes(active)) {
      currentParent = id
      break
    }
  }

  while (currentParent) {
    if (currentParent === value) {
      return true
    } else {
      currentParent = schema[currentParent]?.parent
    }
  }

  return false
}

const NavigationDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof NavigationDrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof NavigationDrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <NavigationDrawerPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-palette-neutralVariant-20/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
))
NavigationDrawerOverlay.displayName =
  NavigationDrawerPrimitive.Overlay.displayName

const navigationDrawerVariants = cva(
  'fixed z-50 flex flex-col rounded-r-lg overflow-x-hidden bg-surfaceContainerLow p-3 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        left: 'inset-y-0 left-0 w-4/5 h-full data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-4/5 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
)

interface NavigationDrawerContentProps
  extends React.ComponentPropsWithoutRef<
      typeof NavigationDrawerPrimitive.Content
    >,
    VariantProps<typeof navigationDrawerVariants> {
  value?: string
  schema: Schema
}

const NavigationDrawerContent = React.forwardRef<
  React.ElementRef<typeof NavigationDrawerPrimitive.Content>,
  NavigationDrawerContentProps
>(({ side = 'left', schema, className, value, children, ...props }, ref) => {
  const [active, setActive] = React.useState(value)
  const [activeGroup, setActiveGroup] = React.useState<string>()
  const [dir, setDir] = React.useState<'back' | 'forward' | undefined>()
  const groupRef = React.useRef<string>()

  const { prev, next } = React.useCallback(() => {
    return getAdjacentGroups(schema, activeGroup)
  }, [activeGroup])()

  React.useEffect(() => {
    if (groupRef.current === prev) {
      setDir('forward')
    } else {
      setDir('back')
    }
    groupRef.current = activeGroup
  }, [activeGroup])

  return (
    <NavigationContext.Provider
      value={{
        active,
        setActive,
        prev,
        next,
        dir,
        schema,
        activeGroup,
        setActiveGroup,
      }}
    >
      <NavigationDrawerPortal>
        <NavigationDrawerOverlay />
        <NavigationDrawerPrimitive.Content
          ref={ref}
          className={cn(navigationDrawerVariants({ side }), className)}
          {...props}
        >
          {children}
        </NavigationDrawerPrimitive.Content>
      </NavigationDrawerPortal>
    </NavigationContext.Provider>
  )
})
NavigationDrawerContent.displayName =
  NavigationDrawerPrimitive.Content.displayName

const NavigationDrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn('mb-3 flex flex-col space-y-2 px-4', className)}
    {...props}
  />
))
NavigationDrawerHeader.displayName = 'NavigationDrawerHeader'

const NavigationDrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn('mb-3 mt-auto flex flex-col px-4', className)}
    {...props}
  />
))
NavigationDrawerFooter.displayName = 'NavigationDrawerFooter'

const NavigationDrawerHeadline = React.forwardRef<
  React.ElementRef<typeof NavigationDrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof NavigationDrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <NavigationDrawerPrimitive.Title
    ref={ref}
    className={cn('text-title-sm text-onSurfaceVariant', className)}
    {...props}
  />
))
NavigationDrawerHeadline.displayName =
  NavigationDrawerPrimitive.Title.displayName

const NavigationDrawerGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { activeGroup } = React.useContext(NavigationContext)

  if (activeGroup) return null

  return (
    <nav
      ref={ref}
      className={cn(
        'flex w-full flex-col duration-300 animate-in fade-in-0 slide-in-from-left-5',
        className
      )}
      {...props}
    />
  )
})
NavigationDrawerGroup.displayName = 'NavigationDrawerGroup'

const NavigationDrawerItem = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    id?: string
    asChild?: boolean
  }
>(({ className, id, children, asChild, ...props }, ref) => {
  const { active } = React.useContext(NavigationContext)
  const Comp = asChild ? Slot : 'button'
  const isActive = active === id

  return (
    <Comp
      ref={ref}
      id={id}
      data-active={isActive ? '' : undefined}
      className={cn(
        'group/item relative z-0 flex h-14 w-full cursor-pointer items-center justify-start gap-4 rounded-2xl px-4 py-0.5 text-onSurfaceVariant outline-none transition-colors focus:outline-none [&>i]:hover:font-emphasis',
        isActive &&
          'bg-secondaryContainer text-onSecondaryContainer [&>i]:font-filled [&>i]:hover:font-filled-emphasis',
        className
      )}
      {...props}
    >
      <Slottable>{children}</Slottable>
      <span className="absolute inset-0 z-0 rounded-2xl bg-onSurfaceVariant opacity-0 transition-opacity group-hover/item:opacity-8 group-focus/item:opacity-12 group-active/item:opacity-12" />
    </Comp>
  )
})
NavigationDrawerItem.displayName = 'NavigationDrawerItem'

const NavigationDrawerDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('my-4 px-4', className)} {...props}>
    <Divider />
  </div>
))

/**
 * Sub Group
 */

const NavigationDrawerSubGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ className, value, ...props }, ref) => {
  const { activeGroup, dir } = React.useContext(NavigationContext)

  if ((!activeGroup && value) || (activeGroup && activeGroup !== value))
    return null

  return (
    <nav
      ref={ref}
      className={cn(
        'flex w-full flex-col duration-300 animate-in fade-in-0',
        dir === 'forward' ? 'slide-in-from-right-5' : 'slide-in-from-left-5',
        className
      )}
      {...props}
    />
  )
})
NavigationDrawerSubGroup.displayName = 'NavigationDrawerSubGroup'

const NavigationDrawerSubGroupTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    value: string
  }
>(({ className, children, value, ...props }, ref) => {
  const { active, setActiveGroup, schema } = React.useContext(NavigationContext)
  const isActive =
    active && (active === value || isParent(schema, value, active))

  return (
    <button
      ref={ref}
      className={cn(
        'group/item relative z-0 flex h-14 w-full cursor-pointer items-center justify-start gap-4 rounded-2xl px-4 py-0.5 text-onSurfaceVariant outline-none transition-colors focus:outline-none [&>i]:hover:font-emphasis',
        isActive &&
          'bg-secondaryContainer text-onSecondaryContainer [&>i]:font-filled [&>i]:hover:font-filled-emphasis',
        className
      )}
      onClick={() => {
        setActiveGroup(value)
      }}
      {...props}
    >
      {children}
      <Icon
        symbol="arrow_forward"
        className="ml-auto size-6 group-data-[active]/item:text-onSecondaryContainer"
      />
      <span className="absolute inset-0 z-0 rounded-2xl bg-onSurfaceVariant opacity-0 transition-opacity group-hover/item:opacity-8 group-focus/item:opacity-12 group-active/item:opacity-12" />
    </button>
  )
})

const NavigationDrawerBackTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { prev, setActiveGroup } = React.useContext(NavigationContext)

  return (
    <button
      ref={ref}
      className={cn(
        'group/item relative z-0 flex h-14 w-full cursor-pointer items-center justify-start gap-4 rounded-2xl px-4 py-0.5 text-onSurfaceVariant outline-none transition-colors focus:outline-none [&>i]:hover:font-emphasis',
        className
      )}
      onClick={() => {
        setActiveGroup(prev)
      }}
      {...props}
    >
      <Icon
        symbol="arrow_back"
        className="size-6 group-data-[active]/item:text-onSecondaryContainer"
      />
      {children}
      <span className="absolute inset-0 z-0 rounded-2xl bg-onSurfaceVariant opacity-0 transition-opacity group-hover/item:opacity-8 group-focus/item:opacity-12 group-active/item:opacity-12" />
    </button>
  )
})

/**
 * Expandable Item
 */

const NavigationDrawerExpandableRoot = AccordionPrimitive.Root
NavigationDrawerExpandableRoot.displayName = 'NavigationDrawerExpandableRoot'

const NavigationDrawerExpandableItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} {...props} />
))
NavigationDrawerExpandableItem.displayName = 'NavigationDrawerExpandableItem'

const NavigationDrawerExpandableTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationDrawerItem>,
  React.ComponentPropsWithoutRef<typeof NavigationDrawerItem>
>(({ className, children, id, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    asChild
    className="group flex w-full flex-1 items-center justify-between py-4 font-medium text-onSurface transition-all"
  >
    <NavigationDrawerItem
      ref={ref}
      className={cn('flex w-full items-center justify-between', className)}
      {...props}
    >
      {children}
      <Icon
        symbol="expand_more"
        className="shrink-0 text-outline transition-[transform,font-variation-settings] duration-200 group-hover:font-emphasis group-data-[state=open]:rotate-180"
      />
    </NavigationDrawerItem>
  </AccordionPrimitive.Trigger>
))
NavigationDrawerExpandableTrigger.displayName =
  'NavigationDrawerExpandableTrigger'

const NavigationDrawerExpandableContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'w-full overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
NavigationDrawerExpandableContent.displayName =
  'NavigationDrawerExpandableContent'

const NavigationDrawer = Object.assign(NavigationDrawerRoot, {
  Portal: NavigationDrawerPortal,
  Overlay: NavigationDrawerOverlay,
  Trigger: NavigationDrawerTrigger,
  Content: NavigationDrawerContent,
  Header: NavigationDrawerHeader,
  Footer: NavigationDrawerFooter,
  Headline: NavigationDrawerHeadline,
  Close: NavigationDrawerClose,
  Group: NavigationDrawerGroup,
  Item: NavigationDrawerItem,
  Divider: NavigationDrawerDivider,
  SubGroup: NavigationDrawerSubGroup,
  SubGroupTrigger: NavigationDrawerSubGroupTrigger,
  Back: NavigationDrawerBackTrigger,
  ExpandableRoot: NavigationDrawerExpandableRoot,
  ExpandableItem: NavigationDrawerExpandableItem,
  ExpandableTrigger: NavigationDrawerExpandableTrigger,
  ExpandableContent: NavigationDrawerExpandableContent,
})

export {
  NavigationDrawer,
  NavigationDrawerRoot,
  NavigationDrawerPortal,
  NavigationDrawerOverlay,
  NavigationDrawerTrigger,
  NavigationDrawerClose,
  NavigationDrawerContent,
  NavigationDrawerHeader,
  NavigationDrawerFooter,
  NavigationDrawerHeadline,
}
