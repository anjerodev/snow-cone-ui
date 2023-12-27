import { defaultColors } from '@/constants/default-colors'

import {
  generateCSSVariables,
  getColorsFromSourceColor,
  updateStyleTag,
} from '@/lib/colors'
import { usePaletteStore } from '@/lib/store'
import { OutlinedTextField } from '@/components/ui/text-field'
import {
  ColorService,
  useColor,
  type Color,
} from '@/components/react/primitives/color-picker'

const colors = [
  '#F44E3B',
  '#FE9200',
  '#FCDC00',
  '#DBDF00',
  '#A4DD00',
  '#68CCCA',
  '#73D8FF',
  '#AEA1FF',
  '#FDA1FF',
  '#D33115',
  '#E27300',
  '#FCC400',
  '#B0BC00',
  '#68BC00',
  '#16A5A5',
  '#009CE0',
  '#7B64FF',
  '#FA28FF',
  '#9F0500',
  '#C45100',
  '#FB9E00',
  '#808900',
  '#194D33',
  '#0C797D',
  '#0062B1',
  '#653294',
  '#AB149E',
]

export const ColorsToggle = () => {
  const [color, setValue] = useColor(defaultColors.palettes.primary[40].hex)
  const { setPalette, setColors } = usePaletteStore()

  const handleChange = (newColor: Color) => {
    setValue(newColor)
    const hexColor = newColor.hex
    const { palettes, customColors } = getColorsFromSourceColor({
      sourceColor: hexColor,
    })

    const { cssVariables, palette, colorRoles } = generateCSSVariables({
      palettes: palettes,
      radius: '1',
    })

    setPalette(palette)
    setColors({
      palettes,
      customColors,
      colorRoles,
    })

    updateStyleTag(cssVariables)
  }

  return (
    <div className="inline-block max-w-sm space-y-4 rounded-lg bg-surfaceContainer p-2">
      <div className="grid grid-cols-9 gap-2">
        {colors.map((c) => (
          <button
            key={c}
            className="h-6 w-full rounded-[4px] transition-transform hover:scale-105"
            style={{
              backgroundColor: c,
            }}
            onClick={() => {
              handleChange(ColorService.convert('hex', c))
            }}
          />
        ))}
      </div>
      <OutlinedTextField>
        <OutlinedTextField.Input
          value={color.hex}
          onChange={(e) =>
            handleChange(ColorService.convert('hex', e.target.value))
          }
        />
        <OutlinedTextField.Label>HEX value</OutlinedTextField.Label>
      </OutlinedTextField>
    </div>
  )
}
