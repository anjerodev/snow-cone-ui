import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'absolute flex items-center justify-center rounded-2xl text-label-sm text-onError transition-transform outline-none',
  {
    variants: {
      size: {
        small: 'h-1.5 w-1.5 bg-error top-0',
        large: 'h-4 min-w-[16px] bg-error px-1 bottom-1/2',
      },
      align: {
        left: '',
        right: '',
      },
    },
    compoundVariants: [
      {
        size: 'small',
        align: 'right',
        className: 'right-0',
      },
      {
        size: 'small',
        align: 'left',
        className: 'left-0',
      },
      {
        size: 'large',
        align: 'right',
        className: 'left-1/2',
      },
      {
        size: 'large',
        align: 'left',
        className: 'right-1/2',
      },
    ],
    defaultVariants: {
      size: 'small',
      align: 'right',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  content?: string
  align?: 'left' | 'right'
}

function Badge({
  className,
  size,
  align,
  children,
  content,
  ...props
}: BadgeProps) {
  return (
    <div className="relative h-fit w-fit">
      {children}
      <span
        className={cn(badgeVariants({ size, align }), className)}
        {...props}
      >
        {content}
      </span>
    </div>
  )
}

export { Badge, badgeVariants }
