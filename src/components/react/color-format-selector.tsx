import type { Color } from '@/types/colors'
import { usePaletteStore } from '@/lib/store'
import { OutlinedSelect as Select } from '@/components/ui/select'

export const ColorFormatSelector = () => {
  const { colorFormat, setColorFormat } = usePaletteStore()

  return (
    <Select
      defaultValue={colorFormat}
      onValueChange={(value) => setColorFormat(value as keyof Color)}
    >
      <Select.Trigger className="max-w-[300px]">
        <Select.Value placeholder="Select a color format" />
        <Select.Label>Color format</Select.Label>
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="argb">ARGB</Select.Item>
          <Select.Item value="hex">HEX</Select.Item>
          <Select.Item value="rgba">RGBA</Select.Item>
          <Select.Item value="hsl">HSL</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  )
}
