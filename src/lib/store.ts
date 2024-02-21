import { defaultColors } from '@/constants/default-colors'
import { defaultPalette } from '@/constants/default-palette'
import { create } from 'zustand'

import type {
  Color,
  CustomColors,
  KeyColorsAndTones,
  Tones,
} from '@/types/colors'
import type { ColorRoles } from '@/lib/colors/utils'

type Palette = Record<keyof KeyColorsAndTones, Record<Tones, string>>
type Colors = {
  palettes: KeyColorsAndTones
  customColors: CustomColors
  colorRoles: ColorRoles
}

interface PaletteState {
  sourceColor: string
  palette: Record<keyof KeyColorsAndTones, Record<Tones, string>>
  colors: Colors
  colorFormat: keyof Color
  setPalette: (value: Palette) => void
  setColors: (value: Colors) => void
  setColorFormat: (value: keyof Color) => void
}

export const usePaletteStore = create<PaletteState>()((set) => ({
  sourceColor: '#006c4b',
  palette: defaultPalette,
  colors: {
    palettes: defaultColors.palettes,
    customColors: {},
    colorRoles: {
      light: defaultColors.light,
      dark: defaultColors.dark,
      fixed: defaultColors.fixed,
    },
  },
  colorFormat: 'hex',
  setPalette: (value) => set((state) => ({ palette: value || state.palette })),
  setColors: (value) => set((state) => ({ colors: value || state.colors })),
  setColorFormat: (value) =>
    set((state) => ({ colorFormat: value || state.colorFormat })),
}))
