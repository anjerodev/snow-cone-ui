import { useState } from 'react'
import { defaultColors } from '@/constants/default-colors'

import {
  generateCSSVariables,
  getColorsFromSourceColor,
  getSourceColorFromImage,
  updateStyleTag,
} from '@/lib/colors'
import { usePaletteStore } from '@/lib/store'
import { DropZone, IMAGE_MIME_TYPE } from '@/components/ui/drop-zone'
import { Icon } from '@/components/ui/icon'
import { OutlinedTextField } from '@/components/ui/text-field'
import {
  ColorService,
  type Color,
} from '@/components/react/primitives/color-picker'

const color = (name: string, value: string) => ({ name, value })

const colors = [
  color('Red', '#F44E3B'),
  color('Orange', '#FE9200'),
  color('Yellow', '#FCDC00'),
  color('Lime', '#DBDF00'),
  color('Lime Green', '#A4DD00'),
  color('Turquoise', '#68CCCA'),
  color('Light Blue', '#73D8FF'),
  color('Lavender', '#AEA1FF'),
  color('Pink', '#FDA1FF'),
  color('Scarlet', '#D33115'),
  color('Amber', '#E27300'),
  color('Goldenrod', '#FCC400'),
  color('Olive', '#B0BC00'),
  color('Green', '#68BC00'),
  color('Cyan', '#16A5A5'),
  color('Azure', '#009CE0'),
  color('Blue Violet', '#7B64FF'),
  color('Magenta', '#FA28FF'),
  color('Maroon', '#9F0500'),
  color('Burnt Sienna', '#C45100'),
  color('Pumpkin', '#FB9E00'),
  color('Olive Drab', '#808900'),
  color('Forest Green', '#194D33'),
  color('Teal', '#0C797D'),
  color('Cerulean', '#0062B1'),
  color('Royal Purple', '#653294'),
  color('Fuchsia', '#AB149E'),
]

function getContrastColor(bgColor: string) {
  const rgb = parseInt(bgColor.substring(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255

  return luminance > 0.5 ? '#000000' : '#ffffff'
}

function isHexColor(value: string) {
  return /^#[0-9A-F]{6}$/i.test(value)
}

export const ColorsToggle = () => {
  const [color, setValue] = useState<string>(
    defaultColors.palettes.primary[40].hex
  )
  const [image, setImage] = useState<File>()
  const { setPalette, setColors } = usePaletteStore()

  const setNewPaletteFromSourceColor = (hexColor: string) => {
    setValue(hexColor)

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

  const handleColorChange = (newColor: Color) => {
    const hexColor = newColor.hex
    setNewPaletteFromSourceColor(hexColor)
    setImage(undefined)
  }

  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor = e.target.value
    setValue(hexColor)
    if (!isHexColor(hexColor)) return

    setNewPaletteFromSourceColor(hexColor)
    setImage(undefined)
  }

  const handleUploadPicture = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (reader.result) {
        const imageUrl = reader.result as string
        getSourceColorFromImage(imageUrl).then((sourceColor) => {
          setImage(file)
          setNewPaletteFromSourceColor(sourceColor)
        })
      }
    }

    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
  }

  return (
    <>
      <section className="space-y-6">
        <h2>Pick your brand color</h2>
        <div>
          <h3 className="mb-2 mt-6 text-headline-md">Custom theme</h3>
          <p className="max-w-screen-lg text-pretty">
            Choose manually the source color of your brand. The color framework
            intuitively manages essential modifications that ensure the
            visibility of color contrasts in an accessible manner.
          </p>
        </div>
        <div className="max-w-screen-lg space-y-4">
          <div className="grid grid-cols-5 gap-2 md:grid-cols-7 lg:grid-cols-9">
            {colors.map(({ name, value }) => (
              <div key={name}>
                <button
                  className="aspect-video w-full truncate rounded-[4px] p-2 text-label-lg transition-transform hover:scale-105"
                  style={{
                    backgroundColor: value,
                    color: getContrastColor(value),
                  }}
                  onClick={() => {
                    handleColorChange(ColorService.convert('hex', value))
                  }}
                >
                  {name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <OutlinedTextField className="max-w-xs" error={!isHexColor(color)}>
            <OutlinedTextField.Input
              value={color}
              onChange={handleColorInput}
            />
            <OutlinedTextField.Label>HEX value</OutlinedTextField.Label>
          </OutlinedTextField>
          {!isHexColor(color) && (
            <OutlinedTextField.SupportingText className="text-error">
              Invalid HEX color
            </OutlinedTextField.SupportingText>
          )}
        </div>

        <div>
          <h3 className="mb-2 mt-6 text-headline-md">Dynamic theme</h3>
          <p className="max-w-screen-lg text-pretty">
            The dynamic theme uses an image to create five key colors with M3
            dynamic color. To obtain your customized theme, upload an image.
          </p>
        </div>
        <div className="flex gap-3">
          <DropZone
            name="dropzone"
            accept={IMAGE_MIME_TYPE}
            onDropAccepted={(files) => {
              handleUploadPicture(files[0])
            }}
            className="max-w-md"
          >
            <DropZone.Content>
              <DropZone.Accept>
                <Icon symbol="thumb_up" className="text-6xl opacity-60" />
              </DropZone.Accept>
              <DropZone.Reject>
                <Icon symbol="thumb_down" className="text-6xl opacity-60" />
              </DropZone.Reject>
              <DropZone.Idle>
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="mx-auto mb-4 aspect-square h-[60px] rounded-sm object-cover object-center animate-in zoom-in-0"
                  />
                ) : (
                  <Icon symbol="image" className="text-6xl opacity-60" />
                )}
              </DropZone.Idle>
              <div className="space-y-2">
                <p>Click to upload an Image. Or drag and drop</p>
                <p className="text-body-sm opacity-60">
                  Allowed formats: .png, .jpeg, .webp
                </p>
              </div>
            </DropZone.Content>
          </DropZone>
        </div>
      </section>
    </>
  )
}
