import { TonalPalette, type Theme } from '@material/material-color-utilities'

export type Palettes =
  | (Theme['palettes'] & {
      success: TonalPalette
      info: TonalPalette
      warning: TonalPalette
    })
  | { [x: string]: TonalPalette }
export interface ExtendedTheme extends Omit<Theme, 'palettes'> {
  palettes: Palettes
}

export interface ExtendedColors {
  // Surfaces
  surfaceDim: number
  surfaceBright: number
  surfaceContainerLowest: number
  surfaceContainerLow: number
  surfaceContainer: number
  surfaceContainerHigh: number
  surfaceContainerHighest: number
  // Fixed
  primaryFixed: number
  primaryFixedDim: number
  onPrimaryFixed: number
  onPrimaryFixedVariant: number
  secondaryFixed: number
  secondaryFixedDim: number
  onSecondaryFixed: number
  onSecondaryFixedVariant: number
  tertiaryFixed: number
  tertiaryFixedDim: number
  onTertiaryFixed: number
  onTertiaryFixedVariant: number
  // Status
  success: number
  onSuccess: number
  successContainer: number
  onSuccessContainer: number
  info: number
  onInfo: number
  infoContainer: number
  onInfoContainer: number
  warning: number
  onWarning: number
  warningContainer: number
  onWarningContainer: number
}

export interface ColorsScheme extends ExtendedColors {
  primary: number
  onPrimary: number
  primaryContainer: number
  onPrimaryContainer: number
  secondary: number
  onSecondary: number
  secondaryContainer: number
  onSecondaryContainer: number
  tertiary: number
  onTertiary: number
  tertiaryContainer: number
  onTertiaryContainer: number
  error: number
  onError: number
  errorContainer: number
  onErrorContainer: number
  background: number
  onBackground: number
  surface: number
  onSurface: number
  surfaceVariant: number
  onSurfaceVariant: number
  outline: number
  outlineVariant: number
  shadow: number
  scrim: number
  inverseSurface: number
  inverseOnSurface: number
  inversePrimary: number
}

export type Color = {
  argb: number
  hex: string
  hsl: string
  rgba: string
}

export type RoleColor = {
  [R in keyof ColorsScheme]: Color
}

export type Tones =
  | 0
  | 4
  | 5
  | 6
  | 10
  | 12
  | 14
  | 17
  | 20
  | 22
  | 24
  | 30
  | 40
  | 50
  | 60
  | 70
  | 80
  | 87
  | 90
  | 92
  | 94
  | 95
  | 96
  | 98
  | 99
  | 100

export type KeyColorsAndTones = {
  [K in keyof Palettes]: {
    [index: string]: Color
  }
}

export type PaletteItem = {
  [P in keyof Palettes]: PaletteTones
}

export type PaletteTones = { [index in Tones]: number }

export type CustomColorTheme = { [key: string]: Color }

export type CustomColors = {
  [colorName: string]: CustomColorTheme
}

export type CustomColorInput = {
  name: string
  value: string
  blend: boolean
}

export type ColorsFromSourceColor = {
  sourceColor: string
  options?: { customColors?: CustomColorInput[] }
}

export type ColorsReturn = {
  palettes: KeyColorsAndTones
  customColors: CustomColors
}
