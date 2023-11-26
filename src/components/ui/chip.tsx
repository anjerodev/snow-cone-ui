import * as React from 'react'
import { Presence } from '@radix-ui/react-presence'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { createSafeContext } from '@/lib/createSafeContext'
import { cn } from '@/lib/utils'

const chipVariants = cva(
  'group relative z-0 flex px-2 h-8 items-center justify-center overflow-hidden rounded-sm disabled:pointer-events-none disabled:border-onSurface/12',
  {
    variants: {
      variant: {
        assist: 'border text-onSurface',
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

export interface ButtonChipProps
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

export {
  Chip,
  ChipRoot,
  ChipLabel,
  ChipIcon,
  chipVariants,
  stateLayerVariants,
  chipIconVariants,
}
