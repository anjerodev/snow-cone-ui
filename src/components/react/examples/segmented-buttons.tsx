import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { SegmentedButtonsGroup } from '@/components/ui/segmented-buttons-group'

export const SingleSelectSegmentedButtons = () => {
  const [selected, setSelected] = useState<string | string[]>('songs')

  return (
    <SegmentedButtonsGroup
      className="max-w-sm"
      value={selected}
      onValueChange={setSelected}
    >
      <SegmentedButtonsGroup.Button id="songs" icon={<Icon symbol="genres" />}>
        Songs
      </SegmentedButtonsGroup.Button>
      <SegmentedButtonsGroup.Button id="albums" icon={<Icon symbol="album" />}>
        Albums
      </SegmentedButtonsGroup.Button>
      <SegmentedButtonsGroup.Button
        id="podcasts"
        icon={<Icon symbol="podcasts" />}
      >
        Podcasts
      </SegmentedButtonsGroup.Button>
    </SegmentedButtonsGroup>
  )
}

export const MultipleSelectSegmentedButtons = () => {
  const [selected, setSelected] = useState<string | string[]>(['$'])

  return (
    <SegmentedButtonsGroup
      className="max-w-sm"
      value={selected}
      onValueChange={setSelected}
    >
      <SegmentedButtonsGroup.Button id="$">$</SegmentedButtonsGroup.Button>
      <SegmentedButtonsGroup.Button id="$$">$$</SegmentedButtonsGroup.Button>
      <SegmentedButtonsGroup.Button id="$$$">$$$</SegmentedButtonsGroup.Button>
      <SegmentedButtonsGroup.Button id="$$$$">
        $$$$
      </SegmentedButtonsGroup.Button>
    </SegmentedButtonsGroup>
  )
}
