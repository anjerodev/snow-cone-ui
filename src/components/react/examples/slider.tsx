import { useState } from 'react'

import { Slider } from '@/components/ui/slider'

export const ContinuousSlider = () => {
  return (
    <Slider defaultValue={[50]} max={100} step={1} className="max-w-[320px]">
      <Slider.Thumb />
    </Slider>
  )
}

export const DiscreteSlider = () => {
  const [value, setValue] = useState([50])

  return (
    <Slider
      value={value}
      onValueChange={setValue}
      step={10}
      className="max-w-[320px]"
      discrete
    >
      <Slider.Thumb>
        <Slider.ValueLabel>{value[0]}</Slider.ValueLabel>
      </Slider.Thumb>
    </Slider>
  )
}

export const RangeSlider = () => {
  const [rangeValue, setRangeValue] = useState([30, 70])

  return (
    <Slider
      value={rangeValue}
      onValueChange={setRangeValue}
      step={10}
      className="max-w-[320px]"
      discrete
    >
      <Slider.Thumb>
        <Slider.ValueLabel>{rangeValue[0]}</Slider.ValueLabel>
      </Slider.Thumb>
      <Slider.Thumb>
        <Slider.ValueLabel>{rangeValue[1]}</Slider.ValueLabel>
      </Slider.Thumb>
    </Slider>
  )
}
