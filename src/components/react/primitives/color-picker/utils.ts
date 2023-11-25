import type { Color } from './types'

export function clamp(value: number, min: number, max: number) {
  return value < min ? min : value > max ? max : value
}

export function float(value: number, decimalPlaces: number) {
  return Math.round(value * 10 ** decimalPlaces) / 10 ** decimalPlaces
}

export function formatRgb({ r, g, b, a }: Color['rgb']) {
  const rgb: any[] = [Math.round(r), Math.round(g), Math.round(b)]
  const alpha = float(a, 3)

  if (alpha < 1) rgb.push(alpha)

  return rgb.join(', ')
}

export function formatHsv({ h, s, v, a }: Color['hsv']) {
  const hsv: any[] = [
    `${Math.round(h)}°`,
    `${Math.round(s)}%`,
    `${Math.round(v)}%`,
  ]
  const alpha = float(a, 3)

  if (alpha < 1) hsv.push(alpha)

  return hsv.join(', ')
}

export function isFieldHide(
  hideInput: (keyof Color)[] | boolean,
  field: keyof Color
) {
  return Array.isArray(hideInput) ? hideInput.includes(field) : hideInput
}
