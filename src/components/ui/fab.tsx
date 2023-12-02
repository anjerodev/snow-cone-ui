import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const fabVariants = cva(
  'relative group w-fit z-0 shadow-md flex items-center justify-center overflow-hidden transition-all outline-none disabled:pointer-events-none disabled:text-onSurface/38 disabled:shadow-none disabled:bg-onSurface/12 hover:shadow-sm focus-visible:shadow-sm active:shadow-xs active:scale-[0.98]',
  {
    variants: {
      size: {
        small: 'h-10 min-w-[40px] px-2 rounded-md',
        default: 'h-14 min-w-[56px] px-4 rounded-lg',
        large: 'h-24 min-w-[96px] px-[30px] rounded-xl',
      },
      variant: {
        primary: 'bg-primaryContainer text-onPrimaryContainer',
        surface: 'bg-surfaceContainer text-primary',
        secondary: 'bg-secondaryContainer text-onSecondaryContainer',
        tertiary: 'bg-tertiaryContainer text-onTertiaryContainer',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'primary',
    },
  }
)

const stateLayerVariants = cva(
  'transition-opacity absolute inset-0 z-[-1] opacity-0 group-hover:opacity-8 group-focus:opacity-12 group-active:opacity-12',
  {
    variants: {
      variant: {
        primary: 'bg-onPrimaryContainer',
        surface: 'bg-primary',
        secondary: 'bg-onSecondaryContainer',
        tertiary: 'bg-onTertiaryContainer',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {
  asChild?: boolean
}

const FabRoot = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(fabVariants({ size, variant, className }))}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span className={cn(stateLayerVariants({ variant }))} />
      </Comp>
    )
  }
)
FabRoot.displayName = 'FabRoot'

const FabIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('flex aspect-square shrink-0', className)}
      {...props}
    >
      {children}
    </span>
  )
})
FabIcon.displayName = 'FabIcon'

const FabLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn('px-2 text-label-lg', className)} {...props} />
))
FabLabel.displayName = 'FabLabel'

const Fab = Object.assign(FabRoot, {
  Icon: FabIcon,
  Label: FabLabel,
})

export { Fab, FabIcon, FabLabel, fabVariants, stateLayerVariants }
