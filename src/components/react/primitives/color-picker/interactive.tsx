import React, { memo, useCallback } from 'react'

import { cn } from '@/lib/utils'

import { useBoundingClientRect } from './hooks/use-bounding-client-rect'
import { clamp } from './utils'

interface IInteractiveProps {
  readonly onCoordinateChange: (x: number, y: number) => void
  readonly className?: string
  readonly children: React.ReactNode
}

export const Interactive = memo(
  ({ onCoordinateChange, className, children }: IInteractiveProps) => {
    const [interactiveRef, { width, height }, getPosition] =
      useBoundingClientRect<HTMLDivElement>()

    const move = useCallback(
      (event: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
        const { left, top } = getPosition()

        const x = clamp(event.clientX - left, 0, width)
        const y = clamp(event.clientY - top, 0, height)

        onCoordinateChange(x, y)
      },
      [width, height, getPosition, onCoordinateChange]
    )

    const onPointerDown = useCallback(
      (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.button !== 0) return

        move(event)

        const onPointerMove = (event: PointerEvent) => {
          move(event)
        }

        const onPointerUp = (event: PointerEvent) => {
          move(event)

          document.removeEventListener('pointermove', onPointerMove, false)
          document.removeEventListener('pointerup', onPointerUp, false)
        }

        document.addEventListener('pointermove', onPointerMove, false)
        document.addEventListener('pointerup', onPointerUp, false)
      },
      [move]
    )

    return (
      <div
        ref={interactiveRef}
        className={cn(
          'rcp-interactive h-full w-full touch-none select-none',
          className
        )}
        onPointerDown={onPointerDown}
      >
        {children}
      </div>
    )
  }
)
