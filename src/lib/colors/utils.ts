import {
  argbFromHex,
  Hct,
  hexFromArgb,
  themeFromSourceColor as mcuThemeFromSourceColor,
  TonalPalette,
  type CustomColorGroup,
} from '@material/material-color-utilities'

import type {
  Color,
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

function simplifyPalette(palette: KeyColorsAndTones) {
  const newPalette: Record<
    keyof KeyColorsAndTones,
    Record<Tones, string>
  > = {} as any

  function simplifyColorObject(colorObj: { [index: string]: Color }) {
    const newObj: Record<Tones, string> = {} as any
    for (const key in colorObj) {
      const tone = parseInt(key, 10) as Tones
      if (!isNaN(tone)) {
        const color = colorObj[key]
        newObj[tone] = simplifyHsl(color.hsl)
      }
    }
    return newObj
  }

  for (const colorType in palette) {
    newPalette[colorType as keyof KeyColorsAndTones] = simplifyColorObject(
      palette[colorType as keyof KeyColorsAndTones]
    )
  }

  return newPalette
}

export type ColorRoles = {
  light: Partial<Record<keyof ColorsScheme, Color>>
  dark: Partial<Record<keyof ColorsScheme, Color>>
  fixed: Partial<Record<keyof ColorsScheme, Color>>
}

export const getColorRolesFromPalette = (
  palette: KeyColorsAndTones
): ColorRoles => {
  return {
    light: {
      primary: palette.primary[40],
      onPrimary: palette.primary[100],
      primaryContainer: palette.primary[90],
      onPrimaryContainer: palette.primary[10],
      secondary: palette.secondary[40],
      onSecondary: palette.secondary[100],
      secondaryContainer: palette.secondary[90],
      onSecondaryContainer: palette.secondary[10],
      tertiary: palette.tertiary[40],
      onTertiary: palette.tertiary[100],
      tertiaryContainer: palette.tertiary[90],
      onTertiaryContainer: palette.tertiary[10],
      error: palette.error[40],
      onError: palette.error[100],
      errorContainer: palette.error[90],
      onErrorContainer: palette.error[10],
      background: palette.neutral[98],
      onBackground: palette.neutral[10],
      surface: palette.neutral[98],
      onSurface: palette.neutral[10],
      surfaceVariant: palette.neutralVariant[90],
      onSurfaceVariant: palette.neutralVariant[30],
      outline: palette.neutralVariant[50],
      outlineVariant: palette.neutralVariant[80],
      shadow: palette.neutral[0],
      scrim: palette.neutral[0],
      inverseSurface: palette.neutral[20],
      inverseOnSurface: palette.neutral[95],
      inversePrimary: palette.primary[80],
      surfaceDim: palette.neutral[87],
      surfaceBright: palette.neutral[98],
      surfaceContainerLowest: palette.neutral[100],
      surfaceContainerLow: palette.neutral[96],
      surfaceContainer: palette.neutral[94],
      surfaceContainerHigh: palette.neutral[92],
      surfaceContainerHighest: palette.neutral[90],
      success: palette.success[40],
      onSuccess: palette.success[100],
      successContainer: palette.success[90],
      onSuccessContainer: palette.success[10],
      info: palette.info[40],
      onInfo: palette.info[100],
      infoContainer: palette.info[90],
      onInfoContainer: palette.info[10],
      warning: palette.warning[40],
      onWarning: palette.warning[100],
      warningContainer: palette.warning[90],
      onWarningContainer: palette.warning[10],
    },
    dark: {
      primary: palette.primary[80],
      onPrimary: palette.primary[20],
      primaryContainer: palette.primary[30],
      onPrimaryContainer: palette.primary[90],
      secondary: palette.secondary[80],
      onSecondary: palette.secondary[20],
      secondaryContainer: palette.secondary[30],
      onSecondaryContainer: palette.secondary[90],
      tertiary: palette.tertiary[80],
      onTertiary: palette.tertiary[20],
      tertiaryContainer: palette.tertiary[30],
      onTertiaryContainer: palette.tertiary[90],
      error: palette.error[80],
      onError: palette.error[20],
      errorContainer: palette.error[30],
      onErrorContainer: palette.error[90],
      background: palette.neutral[6],
      onBackground: palette.neutral[90],
      surface: palette.neutral[6],
      onSurface: palette.neutral[90],
      surfaceVariant: palette.neutralVariant[30],
      onSurfaceVariant: palette.neutralVariant[80],
      outline: palette.neutralVariant[60],
      outlineVariant: palette.neutralVariant[30],
      shadow: palette.neutral[0],
      scrim: palette.neutral[0],
      inverseSurface: palette.neutral[90],
      inverseOnSurface: palette.neutral[20],
      inversePrimary: palette.primary[40],
      surfaceDim: palette.neutral[6],
      surfaceBright: palette.neutral[24],
      surfaceContainerLowest: palette.neutral[4],
      surfaceContainerLow: palette.neutral[10],
      surfaceContainer: palette.neutral[12],
      surfaceContainerHigh: palette.neutral[17],
      surfaceContainerHighest: palette.neutral[22],
      success: palette.success[80],
      onSuccess: palette.success[20],
      successContainer: palette.success[30],
      onSuccessContainer: palette.success[90],
      info: palette.info[80],
      onInfo: palette.info[20],
      infoContainer: palette.info[30],
      onInfoContainer: palette.info[90],
      warning: palette.warning[80],
      onWarning: palette.warning[20],
      warningContainer: palette.warning[30],
      onWarningContainer: palette.warning[90],
    },
    fixed: {
      primaryFixed: palette.primary[90],
      primaryFixedDim: palette.primary[80],
      onPrimaryFixed: palette.primary[10],
      onPrimaryFixedVariant: palette.primary[30],
      secondaryFixed: palette.secondary[90],
      secondaryFixedDim: palette.secondary[80],
      onSecondaryFixed: palette.secondary[10],
      onSecondaryFixedVariant: palette.secondary[30],
      tertiaryFixed: palette.tertiary[90],
      tertiaryFixedDim: palette.tertiary[80],
      onTertiaryFixed: palette.tertiary[10],
      onTertiaryFixedVariant: palette.tertiary[30],
    },
  }
}

export function generateHSLRepresentation(
  palette: KeyColorsAndTones,
  radius: string
) {
  const radiusVariable = `    --radius: ${radius}rem;\n`
  let cssVariables = ''
  let cssVariablesLight = ''
  let cssVariablesDark = ''

  const colorRoles = getColorRolesFromPalette(palette)
  const light: Partial<Record<keyof ColorsScheme, string>> = {}
  const dark: Partial<Record<keyof ColorsScheme, string>> = {}
  const fixed: Partial<Record<keyof ColorsScheme, string>> = {}

  Object.entries(colorRoles.light).map(([key, value]) => {
    light[key as keyof ColorsScheme] = simplifyHsl(value.hsl)
  })

  Object.entries(colorRoles.dark).map(([key, value]) => {
    dark[key as keyof ColorsScheme] = simplifyHsl(value.hsl)
  })

  Object.entries(colorRoles.fixed).map(([key, value]) => {
    fixed[key as keyof ColorsScheme] = simplifyHsl(value.hsl)
  })

  const theme = {
    root: {
      ...light,
      ...fixed,
    },
    dark,
  }

  Object.entries(theme.root).forEach(([colorName, color]) => {
    cssVariablesLight += `    --${colorName}: ${color};\n`
  })

  Object.entries(theme.dark).forEach(([colorName, color]) => {
    cssVariablesDark += `    --${colorName}: ${color};\n`
  })

  cssVariables += ':root {\n' + cssVariablesLight + radiusVariable + '}\n'
  cssVariables += '.dark {\n' + cssVariablesDark + '}\n'

  return { cssVariables, palette: simplifyPalette(palette), colorRoles }
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
