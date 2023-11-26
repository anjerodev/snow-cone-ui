import { useState } from 'react'

import { Chip } from '@/components/ui/chip'
import { Divider } from '@/components/ui/divider'
import { Icon } from '@/components/ui/icon'
import { Stepper } from '@/components/ui/stepper'

export const Example = () => {
  const [selected, setSelected] = useState(false)
  return (
    <>
      <Chip>
        <Chip.Icon>
          <Icon symbol="local_taxi" />
        </Chip.Icon>
        <Chip.Label>Assist chip</Chip.Label>
      </Chip>
      <Chip disabled>
        <Chip.Icon>
          <Icon symbol="local_taxi" />
        </Chip.Icon>
        <Chip.Label>Disabled Assist chip</Chip.Label>
      </Chip>

      <Chip
        variant="filter"
        selected={selected}
        onClick={() => setSelected(!selected)}
      >
        <Chip.Icon
          className={`animate-out zoom-out-0 group-data-[selected]:animate-in group-data-[selected]:zoom-in-50`}
        >
          <Icon symbol="check" />
        </Chip.Icon>
        <Chip.Label>Selected Filter chip</Chip.Label>
      </Chip>

      <Chip
        variant="filter"
        disabled
        selected={selected}
        onClick={() => setSelected(!selected)}
      >
        <Chip.Icon
          className={`animate-out zoom-out-0 group-data-[selected]:animate-in group-data-[selected]:zoom-in-50`}
        >
          <Icon symbol="check" />
        </Chip.Icon>
        <Chip.Label>Selected Filter chip</Chip.Label>
      </Chip>

      <Chip variant="input">
        <Chip.Icon>
          <Icon symbol="calendar_month" />
        </Chip.Icon>
        <Chip.Label>Input chip</Chip.Label>
      </Chip>
      <Chip variant="input">
        <Chip.Icon>
          <Icon symbol="calendar_month" />
        </Chip.Icon>
        <Chip.Label>Input chip</Chip.Label>
        <Chip.Icon>
          <Icon symbol="close" />
        </Chip.Icon>
      </Chip>

      <Chip variant="suggestion">
        <Chip.Label>Suggestion chip</Chip.Label>
      </Chip>
      <Chip asChild variant="suggestion">
        <a href="#">
          <Chip.Label>Link chip</Chip.Label>
        </a>
      </Chip>
      <Chip variant="suggestion" selected>
        <Chip.Label>Suggestion chip</Chip.Label>
      </Chip>
    </>
  )
  // return (
  //   <Stepper type="single" collapsible defaultValue="item-1" className="w-full">
  //     <Stepper.Item value="item-1">
  //       <Stepper.Trigger disabled>
  //         <Stepper.Indicator>1</Stepper.Indicator>
  //         Is it accessible?
  //       </Stepper.Trigger>
  //       <Stepper.Content>
  //         For each ad campaign that you create, you can control how much you're
  //         willing to spend on clicks and conversions, which networks and
  //         geographical locations you want your ads to show on, and more.
  //       </Stepper.Content>
  //     </Stepper.Item>
  //     <Divider orientation="vertical" className="ml-3.5 h-5 bg-outline" />
  //     <Stepper.Item value="item-2">
  //       <Stepper.Trigger>
  //         <Stepper.Indicator>2</Stepper.Indicator>
  //         Is it styled?
  //       </Stepper.Trigger>
  //       <Stepper.Content>
  //         Commodo eiusmod ea in anim elit ea velit labore id dolor et eiusmod.
  //         Sint amet ipsum ullamco eiusmod occaecat magna et amet officia sint
  //         magna consectetur quis do. Non irure anim anim irure amet deserunt.
  //         Elit esse do ex magna elit. Velit do in ut nostrud fugiat mollit
  //         cillum duis consectetur sit amet irure. Enim enim magna aliqua dolore
  //         aliqua exercitation. Amet culpa fugiat consequat magna nostrud Lorem
  //         adipisicing aute ut ad sunt cupidatat proident aliqua do.
  //       </Stepper.Content>
  //     </Stepper.Item>
  //     <Divider orientation="vertical" className="ml-3.5 h-5 bg-outline" />

  //     <Stepper.Item value="item-3">
  //       <Stepper.Trigger>
  //         <Stepper.Indicator>3</Stepper.Indicator> Is it animated?
  //       </Stepper.Trigger>
  //       <Stepper.Content>
  //         Yes. It&apos;s animated by default, but you can disable it if you
  //         prefer.
  //       </Stepper.Content>
  //     </Stepper.Item>
  //   </Stepper>
  // )
}
