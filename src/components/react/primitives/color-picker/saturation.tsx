import { memo, useCallback, useMemo } from 'react'

import { createSafeContext } from '@/lib/createSafeContext'
import { cn } from '@/lib/utils'

import { useBoundingClientRect } from './hooks/use-bounding-client-rect'
import { Interactive } from './interactive'
import { ColorService } from './services'
import type { Color } from './types'

interface SaturationProps {
  readonly height: number
  readonly color: Color
  readonly onChange: (color: Color) => void
  readonly className?: string
  readonly children: React.ReactNode
}

type SaturationContext = {
  readonly color: Color
  readonly position: {
    readonly x: number
    readonly y: number
  }
}

const [SaturationProvider, useSaturationContext] =
  createSafeContext<SaturationContext>({ name: 'Saturation' })

const SaturationRoot = memo(
  ({ height, color, className, onChange, children }: SaturationProps) => {
    const [saturationRef, { width }] = useBoundingClientRect<HTMLDivElement>()

    const position = useMemo(() => {
      const x = (color.hsv.s / 100) * width
      const y = ((100 - color.hsv.v) / 100) * height

      return { x, y }
    }, [color.hsv.s, color.hsv.v, width, height])

    const updateColor = useCallback(
      (x: number, y: number) => {
        const nextColor = ColorService.convert('hsv', {
          ...color.hsv,
          s: (x / width) * 100,
          v: 100 - (y / height) * 100,
        })

        onChange(nextColor)
      },
      [color.hsv, width, height, onChange]
    )

    const hsl = useMemo(
      () => [color.hsv.h, '100%', '50%'].join(' '),
      [color.hsv.h]
    )

    return (
      <Interactive onCoordinateChange={updateColor}>
        <SaturationProvider value={{ color, position }}>
          <div
            ref={saturationRef}
            style={{
              height,
              backgroundColor: `hsl(${hsl})`,
              backgroundImage:
                'linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, transparent)',
            }}
            className={cn(
              'rcp-saturation relative w-full cursor-all-scroll rounded-t-md',
              className
            )}
          >
            {children}
          </div>
        </SaturationProvider>
      </Interactive>
    )
  }
)

const SaturationCursor = memo(({ className }: { className?: string }) => {
  const { position, color } = useSaturationContext()

  const rgb = useMemo(
    () => [color.rgb.r, color.rgb.g, color.rgb.b].join(' '),
    [color.rgb.r, color.rgb.g, color.rgb.b]
  )
  return (
    <div
      style={{
        left: position.x,
        top: position.y,
        backgroundColor: `rgb(${rgb})`,
      }}
      className={cn(
        'rcp-saturation-cursor absolute h-5 w-5 translate-x-[-10px] translate-y-[-10px] rounded-full border-2 border-white shadow-sm',
        className
      )}
    />
  )
})

const Saturation = Object.assign(SaturationRoot, {
  Cursor: SaturationCursor,
})

export { Saturation, SaturationRoot, SaturationCursor }
