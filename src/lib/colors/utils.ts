import {
  argbFromHex,
  Hct,
  hexFromArgb,
  themeFromSourceColor as mcuThemeFromSourceColor,
  TonalPalette,
  type CustomColorGroup,
} from '@material/material-color-utilities'

import type {
  ColorsScheme,
  CustomColorInput,
  CustomColors,
  ExtendedTheme,
  KeyColorsAndTones,
  PaletteItem,
  Palettes,
  RoleColor,
  Tones,
} from '@/types/colors'

const toneValues = [
  0, 4, 5, 6, 10, 12, 14, 17, 20, 22, 24, 30, 40, 50, 60, 70, 80, 87, 90, 92,
  94, 95, 96, 98, 99, 100,
]

export const defaultStatusColors = {
  success: '#3C7E44',
  info: '#3B82F6',
  warning: '#D97706',
}

export function hslFromArgb(argbColor: number): string {
  // Extract individual channels from ARGB value
  const alpha = (argbColor >> 24) & 0xff
  const red = (argbColor >> 16) & 0xff
  const green = (argbColor >> 8) & 0xff
  const blue = argbColor & 0xff

  // Normalize RGB values to be in the range [0, 1]
  const normalizedRed = red / 255
  const normalizedGreen = green / 255
  const normalizedBlue = blue / 255

  // Convert RGB values to HSL values
  const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue)
  const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue)
  let hue, saturation, lightness

  // Calculate hue
  if (max === min) {
    hue = 0 // Hue is undefined, so we set it to 0 (arbitrary)
  } else if (max === normalizedRed) {
    hue = 60 * ((normalizedGreen - normalizedBlue) / (max - min))
  } else if (max === normalizedGreen) {
    hue = 60 * (2 + (normalizedBlue - normalizedRed) / (max - min))
  } else {
    hue = 60 * (4 + (normalizedRed - normalizedGreen) / (max - min))
  }

  // Make sure hue is in the range [0, 360]
  if (hue < 0) {
    hue += 360
  }

  // Calculate lightness
  lightness = (max + min) / 2

  // Calculate saturation
  if (max === min) {
    saturation = 0
  } else if (lightness <= 0.5) {
    saturation = (max - min) / (max + min)
  } else {
    saturation = (max - min) / (2 - max - min)
  }

  // Format HSL values into the desired string format
  const hslString = `hsl(${Math.round(hue)}, ${Math.round(
    saturation * 100
  )}%, ${Math.round(lightness * 100)}%, ${alpha / 255})`
  return hslString
}

export function hslFromHex(hexColor: string): string {
  // Remove the '#' symbol if present
  const hex = hexColor.replace(/^#/, '')

  // Convert HEX to RGB
  const bigint = parseInt(hex, 16)
  const red = (bigint >> 16) & 255
  const green = (bigint >> 8) & 255
  const blue = bigint & 255

  // Normalize RGB values to be in the range [0, 1]
  const normalizedRed = red / 255
  const normalizedGreen = green / 255
  const normalizedBlue = blue / 255

  // Find the maximum and minimum values for RGB
  const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue)
  const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue)
  let hue, saturation, lightness

  // Calculate the hue
  if (max === min) {
    hue = 0 // Hue is undefined, so we set it to 0 (arbitrary)
  } else if (max === normalizedRed) {
    hue = 60 * ((normalizedGreen - normalizedBlue) / (max - min))
  } else if (max === normalizedGreen) {
    hue = 60 * (2 + (normalizedBlue - normalizedRed) / (max - min))
  } else {
    hue = 60 * (4 + (normalizedRed - normalizedGreen) / (max - min))
  }

  // Make sure hue is in the range [0, 360]
  if (hue < 0) {
    hue += 360
  }

  // Calculate the lightness and saturation
  lightness = (max + min) / 2

  if (max === min) {
    saturation = 0
  } else if (lightness <= 0.5) {
    saturation = (max - min) / (max + min)
  } else {
    saturation = (max - min) / (2 - max - min)
  }

  // Format HSL values into the desired string format
  const hslString = `hsl(${Math.round(hue)}, ${Math.round(
    saturation * 100
  )}%, ${Math.round(lightness * 100)}%)`
  return hslString
}

/**
 *
 * @param hslColor 'hsl(14, 57%, 39%)'
 * @returns '14 57% 39%'
 */
export function simplifyHsl(hslColor: string): string {
  // Regular expression to extract the HSL values from the input string
  const hslPattern =
    /hsl\(\s*(\d+)\s*,\s*(\d+(\.\d+)?%)\s*,\s*(\d+(\.\d+)?%)\s*(,\s*\d+(\.\d+)?)?\s*\)/i
  const matches = hslColor.match(hslPattern)

  if (matches && matches.length >= 4) {
    // Extract HSL values from the matches array
    const hue = matches[1]
    const saturation = matches[2]
    const lightness = matches[4]

    // Format the simplified HSL string
    const simplifiedHsl = `${hue} ${saturation} ${lightness}`
    return simplifiedHsl
  }

  // Return the original input if it doesn't match the expected HSL format
  return hslColor
}

export function rgbaFromArgb(argbColor: number): string {
  // Extract individual channels from ARGB value
  const alpha = (argbColor >>> 24) & 0xff
  const red = (argbColor >>> 16) & 0xff
  const green = (argbColor >>> 8) & 0xff
  const blue = argbColor & 0xff

  // Format the RGBA values into the desired string format
  const rgbaString = `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`
  return rgbaString
}

export function tonalPaletteFromHex(hexColor: string): TonalPalette {
  const htc = Hct.fromInt(argbFromHex(hexColor))
  const tonalPalette = TonalPalette.fromHueAndChroma(htc.hue, htc.chroma)
  return tonalPalette
}

export function customColorName(input: string, replacement: string) {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
  const replaceColor = (word: string) =>
    word.replace(/color/gi, capitalize(replacement))

  return replaceColor(input)
}

export function generateHSLRepresentation(
  palette: KeyColorsAndTones,
  radius: string
): string {
  const radiusVariable = `    --radius: ${radius}rem;\n`
  let cssVariables = ''
  let cssVariablesLight = ''
  let cssVariablesDark = ''

  const theme = {
    root: {
      primary: simplifyHsl(palette.primary[40].hsl),
      onPrimary: simplifyHsl(palette.primary[100].hsl),
      primaryContainer: simplifyHsl(palette.primary[90].hsl),
      onPrimaryContainer: simplifyHsl(palette.primary[10].hsl),
      secondary: simplifyHsl(palette.secondary[40].hsl),
      onSecondary: simplifyHsl(palette.secondary[100].hsl),
      secondaryContainer: simplifyHsl(palette.secondary[90].hsl),
      onSecondaryContainer: simplifyHsl(palette.secondary[10].hsl),
      tertiary: simplifyHsl(palette.tertiary[40].hsl),
      onTertiary: simplifyHsl(palette.tertiary[100].hsl),
      tertiaryContainer: simplifyHsl(palette.tertiary[90].hsl),
      onTertiaryContainer: simplifyHsl(palette.tertiary[10].hsl),
      error: simplifyHsl(palette.error[40].hsl),
      onError: simplifyHsl(palette.error[100].hsl),
      errorContainer: simplifyHsl(palette.error[90].hsl),
      onErrorContainer: simplifyHsl(palette.error[10].hsl),
      background: simplifyHsl(palette.neutral[98].hsl),
      onBackground: simplifyHsl(palette.neutral[10].hsl),
      surface: simplifyHsl(palette.neutral[98].hsl),
      onSurface: simplifyHsl(palette.neutral[10].hsl),
      surfaceVariant: simplifyHsl(palette.neutralVariant[90].hsl),
      onSurfaceVariant: simplifyHsl(palette.neutralVariant[30].hsl),
      outline: simplifyHsl(palette.neutralVariant[50].hsl),
      outlineVariant: simplifyHsl(palette.neutralVariant[80].hsl),
      shadow: simplifyHsl(palette.neutral[0].hsl),
      scrim: simplifyHsl(palette.neutral[0].hsl),
      inverseSurface: simplifyHsl(palette.neutral[20].hsl),
      inverseOnSurface: simplifyHsl(palette.neutral[95].hsl),
      inversePrimary: simplifyHsl(palette.primary[80].hsl),
      surfaceDim: simplifyHsl(palette.neutral[87].hsl),
      surfaceBright: simplifyHsl(palette.neutral[98].hsl),
      surfaceContainerLowest: simplifyHsl(palette.neutral[100].hsl),
      surfaceContainerLow: simplifyHsl(palette.neutral[96].hsl),
      surfaceContainer: simplifyHsl(palette.neutral[94].hsl),
      surfaceContainerHigh: simplifyHsl(palette.neutral[92].hsl),
      surfaceContainerHighest: simplifyHsl(palette.neutral[90].hsl),
      success: simplifyHsl(palette.success[40].hsl),
      onSuccess: simplifyHsl(palette.success[100].hsl),
      successContainer: simplifyHsl(palette.success[90].hsl),
      onSuccessContainer: simplifyHsl(palette.success[10].hsl),
      info: simplifyHsl(palette.info[40].hsl),
      onInfo: simplifyHsl(palette.info[100].hsl),
      infoContainer: simplifyHsl(palette.info[90].hsl),
      onInfoContainer: simplifyHsl(palette.info[10].hsl),
      warning: simplifyHsl(palette.warning[40].hsl),
      onWarning: simplifyHsl(palette.warning[100].hsl),
      warningContainer: simplifyHsl(palette.warning[90].hsl),
      onWarningContainer: simplifyHsl(palette.warning[10].hsl),
      surfaceFixed: simplifyHsl(palette.neutral[98].hsl),
      onSurfaceFixed: simplifyHsl(palette.neutral[10].hsl),
      surfaceFixedDim: simplifyHsl(palette.neutral[87].hsl),
      onSurfaceFixedDim: simplifyHsl(palette.neutral[30].hsl),

      primaryFixed: simplifyHsl(palette.primary[90].hsl),
      primaryFixedDim: simplifyHsl(palette.primary[80].hsl),
      onPrimaryFixed: simplifyHsl(palette.primary[10].hsl),
      onPrimaryFixedVariant: simplifyHsl(palette.primary[30].hsl),
      secondaryFixed: simplifyHsl(palette.secondary[90].hsl),
      secondaryFixedDim: simplifyHsl(palette.secondary[80].hsl),
      onSecondaryFixed: simplifyHsl(palette.secondary[10].hsl),
      onSecondaryFixedVariant: simplifyHsl(palette.secondary[30].hsl),
      tertiaryFixed: simplifyHsl(palette.tertiary[90].hsl),
      tertiaryFixedDim: simplifyHsl(palette.tertiary[80].hsl),
      onTertiaryFixed: simplifyHsl(palette.tertiary[10].hsl),
      onTertiaryFixedVariant: simplifyHsl(palette.tertiary[30].hsl),
    },
    dark: {
      primary: simplifyHsl(palette.primary[80].hsl),
      onPrimary: simplifyHsl(palette.primary[20].hsl),
      primaryContainer: simplifyHsl(palette.primary[30].hsl),
      onPrimaryContainer: simplifyHsl(palette.primary[90].hsl),
      secondary: simplifyHsl(palette.secondary[80].hsl),
      onSecondary: simplifyHsl(palette.secondary[20].hsl),
      secondaryContainer: simplifyHsl(palette.secondary[30].hsl),
      onSecondaryContainer: simplifyHsl(palette.secondary[90].hsl),
      tertiary: simplifyHsl(palette.tertiary[80].hsl),
      onTertiary: simplifyHsl(palette.tertiary[20].hsl),
      tertiaryContainer: simplifyHsl(palette.tertiary[30].hsl),
      onTertiaryContainer: simplifyHsl(palette.tertiary[90].hsl),
      error: simplifyHsl(palette.error[80].hsl),
      onError: simplifyHsl(palette.error[20].hsl),
      errorContainer: simplifyHsl(palette.error[30].hsl),
      onErrorContainer: simplifyHsl(palette.error[90].hsl),
      background: simplifyHsl(palette.neutral[6].hsl),
      onBackground: simplifyHsl(palette.neutral[90].hsl),
      surface: simplifyHsl(palette.neutral[6].hsl),
      onSurface: simplifyHsl(palette.neutral[90].hsl),
      surfaceVariant: simplifyHsl(palette.neutralVariant[30].hsl),
      onSurfaceVariant: simplifyHsl(palette.neutralVariant[80].hsl),
      outline: simplifyHsl(palette.neutralVariant[60].hsl),
      outlineVariant: simplifyHsl(palette.neutralVariant[30].hsl),
      shadow: simplifyHsl(palette.neutral[0].hsl),
      scrim: simplifyHsl(palette.neutral[0].hsl),
      inverseSurface: simplifyHsl(palette.neutral[90].hsl),
      inverseOnSurface: simplifyHsl(palette.neutral[20].hsl),
      inversePrimary: simplifyHsl(palette.primary[40].hsl),
      surfaceDim: simplifyHsl(palette.neutral[6].hsl),
      surfaceBright: simplifyHsl(palette.neutral[24].hsl),
      surfaceContainerLowest: simplifyHsl(palette.neutral[4].hsl),
      surfaceContainerLow: simplifyHsl(palette.neutral[10].hsl),
      surfaceContainer: simplifyHsl(palette.neutral[12].hsl),
      surfaceContainerHigh: simplifyHsl(palette.neutral[17].hsl),
      surfaceContainerHighest: simplifyHsl(palette.neutral[22].hsl),
      success: simplifyHsl(palette.success[80].hsl),
      onSuccess: simplifyHsl(palette.success[20].hsl),
      successContainer: simplifyHsl(palette.success[30].hsl),
      onSuccessContainer: simplifyHsl(palette.success[90].hsl),
      info: simplifyHsl(palette.info[80].hsl),
      onInfo: simplifyHsl(palette.info[20].hsl),
      infoContainer: simplifyHsl(palette.info[30].hsl),
      onInfoContainer: simplifyHsl(palette.info[90].hsl),
      warning: simplifyHsl(palette.warning[80].hsl),
      onWarning: simplifyHsl(palette.warning[20].hsl),
      warningContainer: simplifyHsl(palette.warning[30].hsl),
      onWarningContainer: simplifyHsl(palette.warning[90].hsl),
    },
  }

  Object.entries(theme.root).forEach(([colorName, color]) => {
    cssVariablesLight += `    --${colorName}: ${color};\n`
  })

  Object.entries(theme.dark).forEach(([colorName, color]) => {
    cssVariablesDark += `    --${colorName}: ${color};\n`
  })

  cssVariables += ':root {\n' + cssVariablesLight + radiusVariable + '}\n'
  cssVariables += '.dark {\n' + cssVariablesDark + '}\n'
  return cssVariables
}

export function colorsFromScheme(scheme: ColorsScheme) {
  const colors = {} as RoleColor

  for (const [name, color] of Object.entries(scheme)) {
    colors[name as keyof ColorsScheme] = {
      argb: color,
      hex: hexFromArgb(color),
      hsl: hslFromArgb(color),
      rgba: rgbaFromArgb(color),
    }
  }

  return colors
}

export function colorsFromPalettes(palette: PaletteItem) {
  const colors = {} as KeyColorsAndTones

  for (const [name, tone] of Object.entries(palette)) {
    colors[name as keyof KeyColorsAndTones] = {}
    for (const [index, color] of Object.entries(tone)) {
      colors[name as keyof KeyColorsAndTones][index] = {
        argb: color,
        hex: hexFromArgb(color),
        hsl: hslFromArgb(color),
        rgba: rgbaFromArgb(color),
      }
    }
  }

  return colors
}

export function colorsFromCustomColors(
  colors: CustomColorGroup[]
): CustomColors {
  const customColorsPalettes: CustomColors = Object.assign({})

  for (const { color } of colors) {
    const hexValue = hexFromArgb(color.value)
    const tonalPalette = tonalPaletteFromHex(hexValue)
    const palettes = tonalPalettes({ [color.name]: tonalPalette })
    const colorsPalette = colorsFromPalettes(palettes)

    Object.assign(customColorsPalettes, colorsPalette)
  }

  return customColorsPalettes
}

export function tonalPalettes(palettes: Palettes) {
  const colorsPalette = {} as PaletteItem

  for (const palette of Object.keys(palettes)) {
    let tones = {} as { [index in Tones]: number }

    for (const index of toneValues) {
      const tone = palettes[palette as keyof Palettes].tone(index)
      tones[index as Tones] = tone
    }
    colorsPalette[palette as keyof Palettes] = tones
  }

  return colorsPalette
}

export function getColorsFromTheme(theme: ExtendedTheme) {
  const palettes = tonalPalettes(theme.palettes)
  const customColors = colorsFromCustomColors(theme.customColors)

  const palettesColors = colorsFromPalettes(palettes)

  return {
    palettes: palettesColors,
    customColors,
  }
}

export function themeFromSourceColor({
  sourceColor,
  customColors,
}: {
  sourceColor: string
  customColors?: CustomColorInput[]
}) {
  const customs = customColors?.map((color) => ({
    ...color,
    value: argbFromHex(color.value),
  }))

  const successPalette = tonalPaletteFromHex(defaultStatusColors.success)
  const infoPalette = tonalPaletteFromHex(defaultStatusColors.info)
  const warningPalette = tonalPaletteFromHex(defaultStatusColors.warning)

  const theme = mcuThemeFromSourceColor(argbFromHex(sourceColor), customs)

  const extendedTheme = {
    ...theme,
    palettes: {
      ...theme.palettes,
      success: successPalette,
      info: infoPalette,
      warning: warningPalette,
    },
  }

  return extendedTheme
}
