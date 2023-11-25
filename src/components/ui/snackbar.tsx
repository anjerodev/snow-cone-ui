import * as React from 'react'
import * as SnackbarPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { useSnackbar } from '@/hooks/use-snackbar'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'

const SnackbarProvider = SnackbarPrimitives.Provider

const SnackbarViewport = React.forwardRef<
  React.ElementRef<typeof SnackbarPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof SnackbarPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <SnackbarPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col sm:gap-3 md:bottom-[inherit] md:right-0 md:top-0 md:max-w-[420px]',
      className
    )}
    {...props}
  />
))
SnackbarViewport.displayName = SnackbarPrimitives.Viewport.displayName

const snackbarVariants = cva(
  'bg-inverseSurface text-inverseOnSurface data-[swipe=move]:transition-none rounded-xs group relative pointer-events-auto flex w-full items-stretch justify-between gap-2 overflow-hidden p-2 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:md:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-snackbar-in origin-bottom data-[state=open]:md:slide-in-from-right-full data-[state=open]:md:slide-in-from-bottom-0 data-[state=closed]:md:slide-out-to-right-full data-[state=closed]:md:slide-out-to-bottom-0 data-[swipe=end]:slide-out-to-right-full data-[swipe=end]:slide-out-to-bottom-0 before:inset-y-0 before:w-1 before:left-0 before:m-2 before:rounded-full',
  {
    variants: {
      severity: {
        default: 'before:hidden pl-4',
        success: 'pl-6 before:absolute before:bg-successContainer',
        error: 'pl-6 before:absolute before:bg-errorContainer',
        info: 'pl-6 before:absolute before:bg-infoContainer',
        warning: 'pl-6 before:absolute before:bg-warningContainer',
      },
    },
    defaultVariants: {
      severity: 'default',
    },
  }
)

const Snackbar = React.forwardRef<
  React.ElementRef<typeof SnackbarPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SnackbarPrimitives.Root> &
    VariantProps<typeof snackbarVariants>
>(({ className, severity, ...props }, ref) => {
  return (
    <SnackbarPrimitives.Root
      ref={ref}
      className={cn(snackbarVariants({ severity }), className)}
      {...props}
    />
  )
})
Snackbar.displayName = SnackbarPrimitives.Root.displayName

const SnackbarAction = React.forwardRef<
  React.ElementRef<typeof SnackbarPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof SnackbarPrimitives.Action>
>(({ className, ...props }, ref) => (
  <Button
    variant="text"
    size="small"
    asChild
    className="flex-shrink-0 text-inversePrimary"
  >
    <SnackbarPrimitives.Action
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  </Button>
))
SnackbarAction.displayName = SnackbarPrimitives.Action.displayName

const SnackbarClose = React.forwardRef<
  React.ElementRef<typeof SnackbarPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof SnackbarPrimitives.Close>
>(({ className, ...props }, ref) => (
  <IconButton
    asChild
    variant="standard"
    className={cn(
      'h-8 w-8 text-inverseOnSurface hover:bg-inverseOnSurface/10',
      className
    )}
  >
    <SnackbarPrimitives.Close ref={ref} toast-close="" {...props}>
      <Icon symbol="close" />
    </SnackbarPrimitives.Close>
  </IconButton>
))
SnackbarClose.displayName = SnackbarPrimitives.Close.displayName

const SnackbarTitle = React.forwardRef<
  React.ElementRef<typeof SnackbarPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof SnackbarPrimitives.Title>
>(({ className, ...props }, ref) => (
  <SnackbarPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
SnackbarTitle.displayName = SnackbarPrimitives.Title.displayName

const SnackbarDescription = React.forwardRef<
  React.ElementRef<typeof SnackbarPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof SnackbarPrimitives.Description>
>(({ className, ...props }, ref) => (
  <SnackbarPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
SnackbarDescription.displayName = SnackbarPrimitives.Description.displayName

type SnackbarProps = React.ComponentPropsWithoutRef<typeof Snackbar>

type SnackbarActionElement = React.ReactElement<typeof SnackbarAction>

const SnackbarManager = () => {
  const { snackbars, elevated } = useSnackbar()

  return (
    <SnackbarProvider>
      {snackbars.map(function ({ id, title, description, action, ...props }) {
        return (
          <Snackbar key={id} {...props}>
            <div className="flex grow flex-wrap items-center justify-end gap-x-3 gap-y-1">
              <div className="grow">
                {title && <SnackbarTitle>{title}</SnackbarTitle>}
                {description && (
                  <SnackbarDescription>{description}</SnackbarDescription>
                )}
              </div>
              {action}
            </div>
            <SnackbarClose />
          </Snackbar>
        )
      })}
      <SnackbarViewport className={elevated ? 'bottom-[88px]' : undefined} />
    </SnackbarProvider>
  )
}

export {
  SnackbarManager,
  SnackbarProvider,
  SnackbarViewport,
  Snackbar,
  SnackbarTitle,
  SnackbarDescription,
  SnackbarClose,
  SnackbarAction,
  type SnackbarProps,
  type SnackbarActionElement,
}
