import plugin from 'tailwindcss/plugin'

const fontVariationSettings = plugin(({ addUtilities }) => {
  addUtilities({
    '.font-regular': {
      fontVariationSettings: '"GRAD" 0, "FILL" 0',
    },
  })
  addUtilities({
    '.font-emphasis': {
      fontVariationSettings: '"GRAD" 200, "FILL" 0',
    },
  })
  addUtilities({
    '.font-filled': {
      fontVariationSettings: '"GRAD" 0, "FILL" 1',
    },
  })
  addUtilities({
    '.font-filled-emphasis': {
      fontVariationSettings: '"GRAD" 200, "FILL" 1',
    },
  })
})

export default fontVariationSettings
