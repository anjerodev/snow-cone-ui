'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva, type VariantProps } from 'class-variance-authority'

import { createSafeContext } from '@/lib/createSafeContext'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const segmentedButtonsGroupVariants = cva('relative flex w-full flex-nowrap', {
  variants: {
    density: {
      default: 'h-10',
      compact: 'h-8',
    },
  },
  defaultVariants: {
    density: 'default',
  },
})

type SegmentedButtonsGroupContextValue = {
  value?: string | string[]
  onValueChange?: (value: string) => void
}

const [SegmentedButtonsGroupProvider, useSegmentedGroup] =
  createSafeContext<SegmentedButtonsGroupContextValue>({
    name: 'SegmentedButtonsGroupContext',
  })

interface SegmentedButtonsGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'>,
    VariantProps<typeof segmentedButtonsGroupVariants> {
  value?: string | string[]
  onValueChange?: React.Dispatch<React.SetStateAction<string | string[]>>
}

const SegmentedButtonsGroupRoot = React.forwardRef<
  HTMLDivElement,
  SegmentedButtonsGroupProps
>(({ className, density, value, onValueChange, ...props }, ref) => {
  const handleSelected = (value: string) => {
    onValueChange &&
      onValueChange((prevSelected) => {
        if (Array.isArray(prevSelected)) {
          if (prevSelected.includes(value)) {
            if (prevSelected.length === 1) return prevSelected
            return prevSelected.filter((v) => v !== value)
          } else {
            return [...(prevSelected || []), value]
          }
        } else {
          return value
        }
      })
  }

  return (
    <SegmentedButtonsGroupProvider
      value={{ value, onValueChange: handleSelected }}
    >
      <div
        ref={ref}
        className={cn(segmentedButtonsGroupVariants({ density, className }))}
        {...props}
      />
    </SegmentedButtonsGroupProvider>
  )
})
SegmentedButtonsGroupRoot.displayName = 'SegmentedButtonsGroupRoot'

interface SegmentedButtonProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  icon?: React.ReactNode
}

const SegmentedButton = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  SegmentedButtonProps
>(
  (
    { className, id, icon, checked, onCheckedChange, children, ...props },
    ref
  ) => {
    const { value, onValueChange } = useSegmentedGroup()

    const isChecked = (() => {
      if (!id) return false
      if (Array.isArray(value)) return value.includes(id)
      else return value === id
    })()

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'group relative z-0 flex h-full w-fit flex-1 select-none items-center justify-center overflow-hidden border border-l-0 px-3 text-label-lg font-medium text-onSurface no-underline outline-none transition first:border-l first-of-type:rounded-l-2xl last-of-type:rounded-r-2xl active:scale-[0.98] disabled:pointer-events-none disabled:border-y-onSurface/38 disabled:text-onSurface/38 disabled:shadow-none first-of-type:disabled:border-l-onSurface/38 last-of-type:disabled:border-r-onSurface/38 data-[state=checked]:bg-secondaryContainer data-[state=checked]:text-onSecondaryContainer',
          className
        )}
        {...(value && {
          checked: isChecked,
        })}
        {...(onValueChange && {
          onCheckedChange: () => id && onValueChange(id),
        })}
        {...props}
      >
        <span
          className={cn(
            'relative h-5 w-5 transition-[width] duration-200',
            !icon
              ? 'group-data-[state=checked]:mr-2 group-data-[state=unchecked]:w-0'
              : 'mr-2'
          )}
        >
          <CheckboxPrimitive.Indicator
            className={cn(
              'absolute inset-0 flex shrink-0 items-center justify-center text-current transition-[transform] duration-200 animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in-0 data-[state=unchecked]:zoom-out-0'
            )}
          >
            <Icon symbol="check" className="text-[20px]" />
          </CheckboxPrimitive.Indicator>
          {icon && (
            <span className="absolute inset-0 flex shrink-0 items-center justify-center text-[18px] text-current transition-[transform] duration-200 animate-in group-data-[state=checked]:hidden group-data-[state=checked]:animate-out group-data-[state=checked]:zoom-out-0 group-data-[state=unchecked]:zoom-in-0 [&>i]:text-[18px] [&>svg]:h-[18px] [&>svg]:w-[18px]">
              {icon}
            </span>
          )}
        </span>
        {children}
        <span className="group-data-[state=checked]:bg-onSecondaryContainer] absolute inset-0 z-[-1] bg-onSurface opacity-0 transition-opacity group-hover:opacity-8 group-focus:opacity-12 group-active:opacity-12" />
      </CheckboxPrimitive.Root>
    )
  }
)
SegmentedButton.displayName = 'SegmentedButton'

const SegmentedButtonsGroup = Object.assign(SegmentedButtonsGroupRoot, {
  Button: SegmentedButton,
})

export {
  SegmentedButtonsGroup,
  SegmentedButton,
  SegmentedButtonsGroupRoot,
  segmentedButtonsGroupVariants,
}
