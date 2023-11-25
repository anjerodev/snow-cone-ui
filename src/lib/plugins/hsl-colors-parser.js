import plugin from 'tailwindcss/plugin'

const hslColorsParser = plugin(({ addUtilities, theme }) => {
  const palettes = theme('colors.palette')
  const opacityValues = theme('opacity')
  const hslUtilities = {}

  Object.keys(palettes).forEach((paletteName) => {
    const paletteValues = palettes[paletteName]

    Object.keys(paletteValues).forEach((shade) => {
      const hslValue = paletteValues[shade]
      const formattedHslValue = hslValue.replace(/ /g, ', ')
      const classNameBase = `.bg-palette-${paletteName}-${shade}`
      const defaultClassName = `${classNameBase}`
      hslUtilities[defaultClassName] = {
        backgroundColor: `hsl(${formattedHslValue})`,
      }

      Object.keys(opacityValues).forEach((opacityKey) => {
        const opacityValue = opacityValues[opacityKey]
        const opacityClassName = `\\/${opacityKey}`
        const classNameWithOpacity = `${classNameBase}${opacityClassName}`

        hslUtilities[classNameWithOpacity] = {
          backgroundColor: `hsl(${formattedHslValue}, ${opacityValue})`,
        }
      })
    })
  })

  addUtilities(hslUtilities, ['responsive', 'hover', 'focus', 'active'])
})

export default hslColorsParser
