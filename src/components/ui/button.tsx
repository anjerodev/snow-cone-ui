import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex items-center z-0 justify-center relative no-underline select-none group/button w-fit overflow-hidden text-label-lg font-medium rounded-2xl transition outline-none disabled:pointer-events-none disabled:text-onSurface/38 disabled:shadow-none active:scale-[0.98]',
  {
    variants: {
      size: {
        default: 'h-10 px-6',
        small: 'h-8 px-4',
      },
      variant: {
        filled:
          'bg-primary text-onPrimary hover:shadow-sm focus-visible:shadow-none active:shadow-none disabled:bg-onSurface/12',
        tonal:
          'bg-secondaryContainer text-onSecondaryContainer disabled:bg-onSurface/12',
        elevated:
          'bg-surfaceContainerLow shadow-sm text-primary  hover:shadow-md focus-visible:shadow-sm active:shadow-sm disabled:bg-onSurface/12',
        outlined:
          'border border-outline text-primary focus-visible:border-primary active:border-outline disabled:border-onSurface/12',
        text: 'px-3 text-primary',
        destructive:
          'bg-error text-onError hover:shadow-sm focus-visible:shadow-none active:shadow-none disabled:bg-onSurface/12',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'filled',
    },
  }
)

const stateLayerVariants = cva(
  'transition-opacity absolute inset-0 z-[-1] opacity-0 group-hover/button:opacity-8 group-focus/button:opacity-12 group-active/button:opacity-12',
  {
    variants: {
      variant: {
        filled: 'bg-onPrimary',
        tonal: 'bg-onSecondaryContainer',
        elevated: 'bg-primary',
        outlined: 'bg-primary',
        text: 'bg-primary',
        destructive: 'bg-onError',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disableStateLayer?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild,
      disableStateLayer,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {!disableStateLayer && (
          <span className={stateLayerVariants({ variant })} />
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants, stateLayerVariants }
export type { ButtonProps }
