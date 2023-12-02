import { useState } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Chip, ChipSelect } from '@/components/ui/chip'
import { Icon } from '@/components/ui/icon'

export const AssistChip = () => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2">
      {/* Outlined Chip when using on solid background */}
      <div className="flex w-full items-center justify-center p-6">
        <Chip>
          <Chip.Icon>
            <Icon symbol="calendar_today" />
          </Chip.Icon>
          <Chip.Label>Add to my itinerary</Chip.Label>
        </Chip>
      </div>

      {/* Elevated Chip when using on image background */}
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-md bg-[url(https://images.unsplash.com/photo-1574484184081-afea8a62f9c0?q=80&w=3081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center p-6">
        <span className="absolute inset-0 z-0 rounded-md bg-scrim/4 backdrop-blur-[2px]" />
        <Chip variant="elevated" className="relative z-[1]">
          <Chip.Icon>
            <Icon symbol="calendar_today" />
          </Chip.Icon>
          <Chip.Label>Add to my itinerary</Chip.Label>
        </Chip>
      </div>
    </div>
  )
}

export const AssistChipWithAvatar = () => {
  return (
    <Chip className="rounded-full pl-1">
      <Avatar className="h-6">
        <Avatar.Image src="https://github.com/jepricreations.png" />
        <Avatar.Fallback className="text-label-sm">JC</Avatar.Fallback>
      </Avatar>
      <Chip.Label>Share with JC</Chip.Label>
    </Chip>
  )
}

export const FilterChip = () => {
  const [selected, setSelected] = useState(false)

  return (
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
      <Chip.Label>Filter chip</Chip.Label>
    </Chip>
  )
}

export const FilterChipWithMenu = () => {
  const [selected, setSelected] = useState('running')

  return (
    <ChipSelect onValueChange={setSelected}>
      <ChipSelect.Trigger>
        <Chip variant="filter" selected>
          <Chip.Icon>
            <Icon symbol="check" />
          </Chip.Icon>
          <Chip.Label className="capitalize">{selected}</Chip.Label>
          <Chip.Icon>
            <Icon symbol="arrow_drop_down" />
          </Chip.Icon>
        </Chip>
      </ChipSelect.Trigger>
      <ChipSelect.Content align="start">
        <ChipSelect.Item value="running">
          <Icon symbol="directions_run" />
          <ChipSelect.ItemText>Running</ChipSelect.ItemText>
        </ChipSelect.Item>
        <ChipSelect.Item value="walking">
          <Icon symbol="directions_walk" />
          <ChipSelect.ItemText>Walking</ChipSelect.ItemText>
        </ChipSelect.Item>
        <ChipSelect.Item value="hiking">
          <Icon symbol="hiking" />
          <ChipSelect.ItemText>Hiking</ChipSelect.ItemText>
        </ChipSelect.Item>
        <ChipSelect.Item value="cycling">
          <Icon symbol="directions_bike" />
          <ChipSelect.ItemText>Cycling</ChipSelect.ItemText>
        </ChipSelect.Item>
      </ChipSelect.Content>
    </ChipSelect>
  )
}

export const InputChip = () => {
  const [selected, setSelected] = useState(true)

  return (
    <Chip
      variant="input"
      selected={selected}
      onClick={() => setSelected(!selected)}
    >
      <Chip.Icon perennial>
        <Icon symbol="calendar_month" />
      </Chip.Icon>
      <Chip.Label>Input chip</Chip.Label>
      <Chip.Icon>
        <Icon symbol="close" />
      </Chip.Icon>
    </Chip>
  )
}

export const SuggestionChip = () => {
  const [selected, setSelected] = useState(false)

  return (
    <div className="flex gap-2">
      <Chip
        variant="suggestion"
        selected={selected}
        onClick={() => setSelected(!selected)}
      >
        <Chip.Label>Suggestion chip</Chip.Label>
      </Chip>
      <Chip asChild variant="suggestion">
        <a href="#">
          <Chip.Label>Link chip</Chip.Label>
        </a>
      </Chip>
    </div>
  )
}
