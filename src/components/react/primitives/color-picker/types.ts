export interface Color {
  readonly hex: string
  readonly rgb: ColorRgb
  readonly hsv: ColorHsv
}

export interface ColorRgb {
  readonly r: number
  readonly g: number
  readonly b: number
  readonly a: number
}

export interface ColorHsv {
  readonly h: number
  readonly s: number
  readonly v: number
  readonly a: number
}

export interface Size {
  readonly width: number
  readonly height: number
}

export interface Position {
  readonly left: number
  readonly right: number
  readonly top: number
  readonly bottom: number
}
