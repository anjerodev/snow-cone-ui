import { memo, useCallback, useMemo } from 'react'

import { createSafeContext } from '@/lib/createSafeContext'
import { cn } from '@/lib/utils'

import { useBoundingClientRect } from './hooks/use-bounding-client-rect'
import { Interactive } from './interactive'
import { ColorService } from './services'
import type { Color } from './types'

interface AlphaProps {
  readonly color: Color
  readonly onChange: (color: Color) => void
  readonly className?: string
  readonly children: React.ReactNode
}
type AlphaContext = {
  readonly position: {
    readonly x: number
  }
  readonly color: Color
}

const [AlphaProvider, useAlphaContext] = createSafeContext<AlphaContext>({
  name: 'Alpha',
})

const AlphaRoot = memo(
  ({ color, onChange, className, children }: AlphaProps) => {
    const [alphaRef, { width }] = useBoundingClientRect<HTMLDivElement>()

    const position = useMemo(() => {
      const x = color.hsv.a * width

      return { x }
    }, [color.hsv.a, width])

    const updateColor = useCallback(
      (x: number) => {
        const nextColor = ColorService.convert('hsv', {
          ...color.hsv,
          a: x / width,
        })

        onChange(nextColor)
      },
      [color.hsv, width, onChange]
    )

    const rgb = useMemo(
      () => [color.rgb.r, color.rgb.g, color.rgb.b].join(' '),
      [color.rgb.r, color.rgb.g, color.rgb.b]
    )

    return (
      <Interactive onCoordinateChange={updateColor}>
        <AlphaProvider value={{ position, color }}>
          <div
            ref={alphaRef}
            style={{
              background: `linear-gradient(to right, rgb(${rgb} / 0), rgb(${rgb} / 1)) top left / auto auto,
                      conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) top left / 12px 12px
                      repeat`,
            }}
            className={cn(
              'rcp-alpha relative h-3 w-full cursor-ew-resize rounded-[6px]',
              className
            )}
          >
            {children}
          </div>
        </AlphaProvider>
      </Interactive>
    )
  }
)

const AlphaCursor = memo(({ className }: { className?: string }) => {
  const { color, position } = useAlphaContext()

  const rgb = useMemo(
    () => [color.rgb.r, color.rgb.g, color.rgb.b].join(' '),
    [color.rgb.r, color.rgb.g, color.rgb.b]
  )

  const rgba = useMemo(() => [rgb, color.rgb.a].join(' / '), [rgb, color.rgb.a])

  return (
    <div
      style={{
        left: position.x,
        background: `linear-gradient(to right, rgb(${rgba}), rgb(${rgba})) top left / auto auto,
                      conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) ${
                        -position.x - 4
                      }px 2px / 12px 12px
                      repeat`,
      }}
      className={cn(
        'rcp-alpha-cursor absolute h-5 w-5 translate-x-[-10px] translate-y-[-4px] rounded-full border-2 border-white shadow-sm',
        className
      )}
    />
  )
})

const Alpha = Object.assign(AlphaRoot, {
  Cursor: AlphaCursor,
})

export { Alpha, AlphaRoot, AlphaCursor }
