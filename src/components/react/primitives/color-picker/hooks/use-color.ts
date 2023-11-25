import { useEffect, useState } from 'react'

import { ColorService } from '../services'
import type { Color } from '../types'

export function useColor(
  initialColor: string
): [Color, React.Dispatch<React.SetStateAction<Color>>] {
  const [color, setColor] = useState(ColorService.convert('hex', initialColor))

  useEffect(() => {
    setColor(ColorService.convert('hex', initialColor))
  }, [initialColor])

  return [color, setColor]
}
