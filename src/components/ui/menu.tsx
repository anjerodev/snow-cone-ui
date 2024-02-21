'use client'

import * as React from 'react'
import * as MenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const MenuRoot = MenuPrimitive.Root

const MenuTrigger = MenuPrimitive.Trigger

const MenuGroup = MenuPrimitive.Group

const MenuPortal = MenuPrimitive.Portal

const MenuSub = MenuPrimitive.Sub

const MenuRadioGroup = MenuPrimitive.RadioGroup

interface MenuContentProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content> {
  compact?: boolean
}

const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  MenuContentProps
>(({ className, sideOffset = 4, compact, ...props }, ref) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      data-compact={compact ? '' : undefined}
      className={cn(
        'group/content z-50 min-w-[8rem] overflow-hidden rounded-xs bg-surfaceContainer py-2 text-onSurface shadow-md data-[state=closed]:duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        compact && 'compact',
        className
      )}
      {...props}
    />
  </MenuPrimitive.Portal>
))
MenuContent.displayName = MenuPrimitive.Content.displayName

const MenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex h-12 cursor-pointer select-none items-center gap-3 px-3 py-2 text-label-lg text-onSurface outline-none transition-colors focus:bg-onSurface/8 active:bg-onSurface/12 data-[disabled]:pointer-events-none data-[disabled]:text-onSurface/38 group-data-[compact]/content:h-10 [&>i]:text-onSurfaceVariant [&>svg]:text-onSurfaceVariant [&>svg]:data-[disabled]:text-onSurface/38',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenuItem.displayName = MenuPrimitive.Item.displayName

const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'relative flex h-12 cursor-pointer select-none items-center gap-3 px-3 py-2 text-label-lg text-onSurface outline-none transition-colors focus:bg-onSurface/8 active:bg-onSurface/12 data-[disabled]:pointer-events-none data-[disabled]:text-onSurface/38 group-data-[compact]/content:h-10 [&>svg]:text-onSurfaceVariant [&>svg]:data-[disabled]:text-onSurface/38',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <Icon symbol="arrow_right" className="ml-auto" />
  </MenuPrimitive.SubTrigger>
))
MenuSubTrigger.displayName = MenuPrimitive.SubTrigger.displayName

interface MenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent> {
  compact?: boolean
}

const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubContent>,
  MenuSubContentProps
>(({ className, compact, ...props }, ref) => (
  <MenuPrimitive.SubContent
    ref={ref}
    data-compact={compact ? '' : undefined}
    className={cn(
      'group/content z-50 min-w-[8rem] overflow-hidden rounded-xs bg-surfaceContainer py-2 text-onSurface shadow-md data-[state=closed]:duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className
    )}
    {...props}
  />
))
MenuSubContent.displayName = MenuPrimitive.SubContent.displayName

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'group relative ml-auto flex h-12 cursor-pointer select-none items-center px-3 py-2 text-label-lg text-onSurface outline-none transition-colors hover:bg-onSurface/8 focus:bg-onSurface/8 active:bg-onSurface/12 data-[disabled]:pointer-events-none data-[disabled]:text-onSurface/38 group-data-[compact]/content:h-10',
      className
    )}
    {...props}
  >
    <div className={cn('mr-4 grid size-5 shrink-0 place-items-center')}>
      <MenuPrimitive.ItemIndicator
        className={cn(
          'flex h-[18px] w-[18px] items-center justify-center text-current transition-transform duration-200 animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in-0 data-[state=unchecked]:zoom-out-0 [&>i]:text-[18px] [&>svg]:h-[18px] [&>svg]:w-[18px]'
        )}
      >
        <Icon symbol="check" />
      </MenuPrimitive.ItemIndicator>
    </div>
    {children}
  </MenuPrimitive.CheckboxItem>
))
MenuCheckboxItem.displayName = MenuPrimitive.CheckboxItem.displayName

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'group relative ml-auto flex h-12 cursor-pointer select-none items-center px-3 py-2 text-label-lg text-onSurface outline-none transition-colors hover:bg-onSurface/8 focus:bg-onSurface/8 active:bg-onSurface/12 data-[disabled]:pointer-events-none data-[disabled]:text-onSurface/38 group-data-[compact]/content:h-10',
      className
    )}
    {...props}
  >
    <div className={cn('mr-4 grid size-5 shrink-0 place-items-center')}>
      <MenuPrimitive.ItemIndicator
        className={cn(
          'flex h-[18px] w-[18px] items-center justify-center text-current transition-transform duration-200 animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in-0 data-[state=unchecked]:zoom-out-0 [&>i]:text-[18px] [&>svg]:h-[18px] [&>svg]:w-[18px]'
        )}
      >
        <Icon symbol="check" />
      </MenuPrimitive.ItemIndicator>
    </div>
    {children}
  </MenuPrimitive.RadioItem>
))
MenuRadioItem.displayName = MenuPrimitive.RadioItem.displayName

const MenuLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-label-md', inset && 'pl-8', className)}
    {...props}
  />
))
MenuLabel.displayName = MenuPrimitive.Label.displayName

const MenuDivider = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-outlineVariant', className)}
    {...props}
  />
))
MenuDivider.displayName = MenuPrimitive.Separator.displayName

const MenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-label-lg tracking-widest text-onSurfaceVariant/50',
        className
      )}
      {...props}
    />
  )
}
MenuShortcut.displayName = 'MenuShortcut'

const Menu = Object.assign(MenuRoot, {
  Portal: MenuPortal,
  Trigger: MenuTrigger,
  Group: MenuGroup,
  SubMenu: MenuSub,
  RadioGroup: MenuRadioGroup,
  SubTrigger: MenuSubTrigger,
  SubContent: MenuSubContent,
  Content: MenuContent,
  MenuItem: MenuItem,
  CheckBoxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  Label: MenuLabel,
  Divider: MenuDivider,
  Shortcut: MenuShortcut,
})

export {
  Menu,
  MenuPortal,
  MenuTrigger,
  MenuGroup,
  MenuSub,
  MenuRadioGroup,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuLabel,
  MenuDivider,
  MenuShortcut,
  MenuContent,
  MenuItem,
  MenuSubTrigger,
  MenuSubContent,
}
