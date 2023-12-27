import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { ClipboardButton } from './clipboard-button'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeBlockWrapper({
  expandButtonTitle = 'View Code',
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn('relative overflow-hidden', className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn(
            'max-h-[650px] overflow-hidden transition-[max-height] !duration-300',
            !isOpened && 'max-h-32'
          )}
        >
          <div
            className={cn(
              'copyable-container relative w-full overflow-hidden [&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[50px]',
              !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto'
            )}
          >
            {children}
            <div className="absolute right-3 top-3 z-20 flex">
              <ClipboardButton />
            </div>
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 z-10 flex items-center justify-center rounded-b-lg border-x border-b  border-outlineVariant bg-gradient-to-b from-transparent to-surfaceContainer p-2 pb-10 transition-[padding] duration-500',
            isOpened && 'pb-2'
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="filled">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}
