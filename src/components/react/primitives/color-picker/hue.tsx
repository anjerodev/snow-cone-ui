import { memo, useCallback, useMemo } from 'react'

import { createSafeContext } from '@/lib/createSafeContext'
import { cn } from '@/lib/utils'

import { useBoundingClientRect } from './hooks/use-bounding-client-rect'
import { Interactive } from './interactive'
import { ColorService } from './services'
import type { Color } from './types'

interface HueProps {
  readonly color: Color
  readonly onChange: (color: Color) => void
  readonly className?: string
  readonly children: React.ReactNode
}

type HueContext = {
  readonly color: Color
  readonly position: {
    readonly x: number
  }
}

const [HueProvider, useHueContext] = createSafeContext<HueContext>({
  name: 'Hue',
})

const HueRoot = memo(({ color, onChange, className, children }: HueProps) => {
  const [hueRef, { width }] = useBoundingClientRect<HTMLDivElement>()

  const position = useMemo(() => {
    const x = (color.hsv.h / 360) * width

    return { x }
  }, [color.hsv.h, width])

  const updateColor = useCallback(
    (x: number) => {
      const nextColor = ColorService.convert('hsv', {
        ...color.hsv,
        h: (x / width) * 360,
      })

      onChange(nextColor)
    },
    [color.hsv, width, onChange]
  )

  return (
    <Interactive onCoordinateChange={updateColor}>
      <HueProvider value={{ color, position }}>
        <div
          ref={hueRef}
          style={{
            backgroundImage:
              'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 255, 255),rgb(0, 0, 255),rgb(255, 0, 255),rgb(255, 0, 0))',
          }}
          className={cn(
            'rcp-hue relative h-3 w-full cursor-ew-resize rounded-[6px]',
            className
          )}
        >
          {children}
        </div>
      </HueProvider>
    </Interactive>
  )
})

const HueCursor = memo(({ className }: { className?: string }) => {
  const { color, position } = useHueContext()

  const hsl = useMemo(
    () => [color.hsv.h, '100%', '50%'].join(' '),
    [color.hsv.h]
  )

  return (
    <div
      style={{ left: position.x, backgroundColor: `hsl(${hsl})` }}
      className={cn(
        'rcp-hue-cursor absolute h-5 w-5 translate-x-[-10px] translate-y-[-4px] rounded-full border-2 border-white shadow-sm',
        className
      )}
    />
  )
})

const Hue = Object.assign(HueRoot, {
  Cursor: HueCursor,
})

export { Hue, HueRoot, HueCursor }
