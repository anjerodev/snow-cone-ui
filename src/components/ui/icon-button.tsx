import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const iconButtonVariants = cva(
  'shrink-0 relative group h-10 w-10 overflow-hidden grid place-items-center rounded-xl transition outline-none disabled:pointer-events-none disabled:text-onSurface/38 active:scale-[0.98]',
  {
    variants: {
      variant: {
        filled: 'bg-primary text-onPrimary disabled:bg-onSurface/12',
        tonal:
          'bg-secondaryContainer text-onSecondaryContainer disabled:bg-onSurface/12',
        outlined:
          'border border-outline text-onSurfaceVariant disabled:border-onSurface/12',
        standard: 'text-onSurfaceVariant',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
)

const stateLayerVariants = cva(
  'transition-opacity absolute inset-0 z-0 opacity-0 group-hover:opacity-8 group-focus:opacity-12 group-active:opacity-12',
  {
    variants: {
      variant: {
        filled: 'bg-onPrimary',
        tonal: 'bg-onSecondaryContainer',
        outlined: 'bg-onSurfaceVariant',
        standard: 'bg-onSurfaceVariant',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
  disableStateLayer?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, variant, asChild, disableStateLayer, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(iconButtonVariants({ variant, className }))}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {!disableStateLayer && (
          <span className={cn(stateLayerVariants({ variant }))} />
        )}
      </Comp>
    )
  }
)

IconButton.displayName = 'IconButton'

export { IconButton, iconButtonVariants, stateLayerVariants }
