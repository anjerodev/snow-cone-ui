import { useEffect } from 'react'

import { generateCSSVariables, updateStyleTag } from '@/lib/colors'
import { usePaletteStore } from '@/lib/store'

export default function Theme() {
  const { colors } = usePaletteStore()

  useEffect(() => {
    const { cssVariables } = generateCSSVariables({
      palettes: colors.palettes,
      radius: '1',
    })

    updateStyleTag(cssVariables)
  }, [])

  return null
}
