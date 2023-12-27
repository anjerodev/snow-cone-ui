import {
  hexFromArgb,
  sourceColorFromImage,
} from '@material/material-color-utilities'

import type { ColorsFromSourceColor, KeyColorsAndTones } from '@/types/colors'
import {
  generateHSLRepresentation,
  getColorsFromTheme,
  themeFromSourceColor,
} from '@/lib/colors/utils'

function generateCSSVariables({
  palettes,
  radius,
}: {
  palettes: KeyColorsAndTones
  radius: string
}) {
  return generateHSLRepresentation(palettes, radius)
}

function getSourceColorFromImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    img.onload = async () => {
      try {
        const color = await sourceColorFromImage(img)
        resolve(hexFromArgb(color))
      } catch (error) {
        reject(error)
      }
    }

    img.onerror = (error) => {
      reject(error)
    }
  })
}

/**
 * @example
 * const customColor = {
 * name: "danger",
 * value: '#EC6757',
 * blend: true, (If true it mix it to be more consistent with the source color palette)
 * }
 */
function getColorsFromSourceColor({
  sourceColor,
  options,
}: ColorsFromSourceColor) {
  const theme = themeFromSourceColor({
    sourceColor,
    customColors: options?.customColors,
  })
  return getColorsFromTheme(theme)
}

function updateStyleTag(cssVariables: string) {
  let styleTag = document.getElementById('theme')

  if (!styleTag) {
    styleTag = document.createElement('style')
    styleTag.id = 'theme'
    document.head.appendChild(styleTag)
  }

  styleTag.innerHTML = styleTag.innerHTML.replace(/\:root\s*{[^}]+}/, '')
  styleTag.innerHTML = styleTag.innerHTML.replace(/\.dark\s*{[^}]+}/, '')

  styleTag.innerHTML += cssVariables
}

export {
  generateCSSVariables,
  getSourceColorFromImage,
  getColorsFromSourceColor,
  updateStyleTag,
}
