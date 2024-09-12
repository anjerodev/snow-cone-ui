'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const dialogVariants = cva(
  [
    'fixed z-50 w-full gap-6 bg-surfaceContainerHigh text-onSurface outline-none',
    'data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    'data-[state=closed]:duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
  ],
  {
    variants: {
      variant: {
        default:
          'grid left-[50%] top-[50%] max-w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-6 shadow-lg sm:max-w-[560px] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        full: 'inset-0 block',
        responsive:
          'inset-0 block sm:inset-auto sm:grid sm:left-[50%] sm:top-[50%] sm:max-w-[90%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg sm:p-6 sm:shadow-lg sm:data-[state=open]:slide-in-from-left-1/2 sm:data-[state=open]:slide-in-from-top-[48%] sm:data-[state=closed]:slide-out-to-left-1/2 sm:data-[state=closed]:slide-out-to-top-[48%]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const DialogRoot = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogCloseButton = DialogPrimitive.Close

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-scrim/38 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogVariants>
>(({ className, children, variant, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogVariants({ variant, className }))}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-4', className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-row justify-end space-x-2', className)}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogHeadline = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-headline-sm text-onSurface', className)}
    {...props}
  />
))
DialogHeadline.displayName = 'DialogHeadline'

const DialogSupportingText = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-body-md text-onSurfaceVariant', className)}
    {...props}
  />
))
DialogSupportingText.displayName = 'DialogSupportingText'

const Dialog = Object.assign(DialogRoot, {
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Headline: DialogHeadline,
  SupportingText: DialogSupportingText,
  Header: DialogHeader,
  Footer: DialogFooter,
  Trigger: DialogTrigger,
  Close: DialogCloseButton,
})

export { Dialog }
