'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

function convertValueToPercentage(
  index: number,
  min: number = 0,
  max: number = 100,
  step: number
) {
  const maxSteps = max - min
  const percentPerStep = 100 / maxSteps
  const percentage = parseFloat((percentPerStep * index * step).toFixed(1))
  const offset = (2 * step ** 2) / maxSteps

  return { percent: Math.min(100, Math.max(0, percentage)), offset }
}

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    className={cn(
      'group/thumb peer/thumb relative block h-5 w-5 cursor-pointer rounded-lg bg-primary shadow-sm outline-none transition-colors before:absolute before:inset-0 before:z-[-1] before:scale-0 before:rounded-full before:bg-primary/8 before:transition-transform hover:before:scale-[2] focus-visible:before:scale-[2] data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-onSurface/38 data-[disabled]:shadow-none data-[disabled]:before:scale-100 data-[disabled]:before:bg-background',
      className
    )}
    {...props}
  />
))
SliderThumb.displayName = SliderPrimitive.Thumb.displayName

const getTickMarkerColor = (
  value: number[],
  step: number,
  index: number,
  min: number = 0,
  max: number = 100
) => {
  const position = convertValueToPercentage(index, min, max, step).percent

  if (value.length > 1) {
    if (position >= value[0] && position <= value[value.length - 1]) {
      return 'bg-onPrimary/38'
    }

    return 'bg-onSurface/38'
  }

  if (value[0] >= position) {
    return 'bg-onPrimary/38'
  }
  return 'bg-onSurface/38'
}

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    discrete?: boolean
  }
>(
  (
    { className, children, step, discrete, value, orientation, ...props },
    ref
  ) => {
    const [valueState, setValueState] = React.useState(
      value ?? props?.defaultValue ?? [0]
    )

    const handleValueChange = (value: number[]) => {
      setValueState(value)
      props.onValueChange?.(value)
    }

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          'group relative flex w-full min-w-[200px] touch-none select-none items-center',
          className
        )}
        step={step}
        value={value ?? valueState}
        onValueChange={handleValueChange}
        orientation="horizontal"
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            'relative z-0 h-1 w-full grow cursor-pointer overflow-hidden'
          )}
        >
          <span className="absolute inset-0 z-[-1] mx-[6px] rounded-full bg-surfaceContainerHighest data-[disabled]:bg-onSurface/12" />
          <SliderPrimitive.Range className="absolute z-0 ml-[6px] h-full rounded-full bg-primary data-[disabled]:bg-onSurface/38" />
          {step &&
            step > 1 &&
            discrete &&
            new Array(
              Math.ceil(((props?.max ?? 100) - (props?.min ?? 0)) / step) + 1
            )
              .fill(0)
              .map((_, i) => {
                return (
                  <SliderTickMarker
                    key={i}
                    index={i}
                    pos={convertValueToPercentage(
                      i,
                      props.min,
                      props.max,
                      step
                    )}
                    className={getTickMarkerColor(
                      value ?? valueState,
                      step,
                      i,
                      props.min,
                      props.max
                    )}
                  />
                )
              })}
        </SliderPrimitive.Track>
        {children}
      </SliderPrimitive.Root>
    )
  }
)
SliderRoot.displayName = SliderPrimitive.Root.displayName

const SliderValueLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'absolute -left-1 top-0 z-0 flex h-7 w-7 origin-bottom -translate-y-10 scale-0 items-center justify-center rounded-lg bg-primary text-label-md text-onPrimary transition-transform before:absolute before:z-[-1] before:h-[17px] before:w-[17px] before:translate-y-[45%] before:rotate-45 before:rounded-[2px] before:bg-primary group-hover/thumb:scale-100 ',
      className
    )}
    {...props}
  />
))
SliderValueLabel.displayName = 'SliderValueLabel'

const SliderTickMarker = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    index: number
    pos: {
      percent: number
      offset: number
    }
  }
>(({ className, index, pos, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'absolute mt-[1px] h-0.5 w-0.5 translate-x-[-50%] rounded-sm bg-onSurfaceVariant/38',
      className
    )}
    style={{
      left: `calc(${pos.percent}% + ${10 - index * pos.offset}px)`,
    }}
    {...props}
  />
))

const Slider = Object.assign(SliderRoot, {
  Thumb: SliderThumb,
  ValueLabel: SliderValueLabel,
  TickMarker: SliderTickMarker,
})

export { Slider, SliderThumb, SliderRoot, SliderValueLabel, SliderTickMarker }
