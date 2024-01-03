'use client'

import * as React from 'react'
import { Presence } from '@radix-ui/react-presence'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { createSafeContext } from '@/lib/createSafeContext'
import { cn } from '@/lib/utils'

const chipVariants = cva(
  'group relative z-0 flex px-2 h-8 items-center justify-center overflow-hidden rounded-sm outline-none disabled:pointer-events-none disabled:border-onSurface/12',
  {
    variants: {
      variant: {
        assist: 'border text-onSurface',
        elevated:
          'transition-shadow border text-onSurface bg-surfaceContainerLow shadow-sm active:shadow-xs',
        filter:
          'transition-all border data-[selected]:border-0 text-onSurfaceVariant data-[selected]:border-secondaryContainer data-[selected]:bg-secondaryContainer data-[selected]:text-onSecondaryContainer',
        input: 'border text-onSurfaceVariant',
        suggestion:
          'border text-onSurfaceVariant data-[selected]:border-secondaryContainer data-[selected]:bg-secondaryContainer data-[selected]:text-onSecondaryContainer',
      },
    },
    defaultVariants: {
      variant: 'assist',
    },
  }
)

const stateLayerVariants = cva(
  'transition-opacity absolute inset-0 z-[-1] opacity-0 group-hover:opacity-8 group-focus:opacity-12 group-active:opacity-12',
  {
    variants: {
      variant: {
        assist: 'bg-onSurface',
        elevated: 'bg-onSurface',
        filter:
          'bg-onSurfaceVariant group-data-[selected]:bg-onSecondaryContainer',
        input:
          'bg-onSurfaceVariant group-data-[selected]:bg-onSecondaryContainer',
        suggestion:
          'bg-onSurfaceVariant group-data-[selected]:bg-onSecondaryContainer',
      },
    },
    defaultVariants: {
      variant: 'assist',
    },
  }
)

const chipIconVariants = cva(
  'h-full w-full block group-disabled:text-onSurface/38 group-data-[selected]:group-disabled:text-onSurface/38 [&>i]:text-[18px]',
  {
    variants: {
      variant: {
        assist: 'text-primary',
        elevated: 'text-primary',
        filter: 'group-data-[selected]:text-onSurfaceVariant',
        input: '',
        suggestion: '',
      },
    },
    defaultVariants: {
      variant: 'assist',
    },
  }
)

type ChipContextType = {
  selected?: boolean
} & VariantProps<typeof chipVariants>

const [ChipProvider, useChipContext] = createSafeContext<ChipContextType>({
  name: 'Chip',
})

interface ButtonChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  selected?: boolean
  asChild?: boolean
}

const ChipRoot = React.forwardRef<HTMLButtonElement, ButtonChipProps>(
  ({ className, variant, children, selected, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <ChipProvider value={{ selected, variant }}>
        <Comp
          ref={ref}
          data-selected={selected ? '' : undefined}
          className={cn(chipVariants({ variant, className }))}
          {...props}
        >
          <Slottable>{children}</Slottable>
          <span className={stateLayerVariants({ variant })} />
        </Comp>
      </ChipProvider>
    )
  }
)
ChipRoot.displayName = 'Chip'

const ChipLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'truncate whitespace-nowrap px-2 text-label-lg text-current group-disabled:text-onSurface/38 group-data-[selected]:group-disabled:text-onSurface/38',
        className
      )}
      {...props}
    />
  )
})
ChipLabel.displayName = 'ChipLabel'

type ChipIconProps = {
  perennial?: boolean
}

const ChipIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ChipIconProps
>(({ className, perennial, ...props }, ref) => {
  const { selected, variant } = useChipContext()
  const isVisible = perennial ?? selected ?? true

  return (
    <span
      className={cn('h-[18px] w-0 transition-[width]', isVisible && 'w-[18px]')}
    >
      <Presence present={isVisible}>
        <div
          ref={ref}
          className={cn(chipIconVariants({ variant, className }))}
          {...props}
        />
      </Presence>
    </span>
  )
})
ChipIcon.displayName = 'ChipIcon'

const Chip = Object.assign(ChipRoot, {
  Label: ChipLabel,
  Icon: ChipIcon,
})

/**
 * Chip Select
 */

const ChipSelectRoot = SelectPrimitive.Root
const ChipSelectValue = SelectPrimitive.Value

const ChipSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, asChild = true, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} asChild={asChild} {...props}>
    {children}
  </SelectPrimitive.Trigger>
))
ChipSelectTrigger.displayName = 'ChipSelectTrigger'

const ChipSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md bg-surfaceContainer text-onSurfaceVariant shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-0 data-[side=left]:-translate-x-0 data-[side=right]:translate-x-0 data-[side=top]:-translate-y-0',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'py-2',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
ChipSelectContent.displayName = 'ChipSelectContent'

const ChipSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'group relative flex h-12 cursor-pointer select-none items-center gap-4 rounded-none px-3 py-2 text-onSurface outline-none transition-colors hover:bg-onSurface/8 focus:bg-onSurface/8 active:bg-onSurface/12 aria-selected:bg-onSurface/8 data-[disabled]:pointer-events-none data-[disabled]:text-onSurface/38',
      className
    )}
    {...props}
  >
    {children}
  </SelectPrimitive.Item>
))
ChipSelectItem.displayName = 'ChipSelectItem'

const ChipSelectItemText = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemText>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemText>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemText
    ref={ref}
    className={cn('text-body-md', className)}
    {...props}
  />
))

const ChipSelect = Object.assign(ChipSelectRoot, {
  Value: ChipSelectValue,
  Trigger: ChipSelectTrigger,
  Content: ChipSelectContent,
  Item: ChipSelectItem,
  ItemText: ChipSelectItemText,
})

export {
  Chip,
  ChipSelect,
  ChipRoot,
  ChipLabel,
  ChipIcon,
  ChipSelectRoot,
  ChipSelectValue,
  ChipSelectTrigger,
  ChipSelectContent,
  ChipSelectItem,
  ChipSelectItemText,
  chipVariants,
  stateLayerVariants,
  chipIconVariants,
}

export type { ButtonChipProps }
