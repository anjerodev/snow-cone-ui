import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

export const DEBUG = process.env.NODE_ENV === 'development'

const tailwindMergeConfig = {
  classGroups: {
    'font-size': [
      {
        text: [
          'display-lg',
          'display-md',
          'display-sm',
          'headline-lg',
          'headline-md',
          'headline-sm',
          'title-lg',
          'title-md',
          'title-sm',
          'label-lg',
          'label-md',
          'label-sm',
          'body-lg',
          'body-md',
          'body-sm',
        ],
      },
    ],
  },
}

export const twMerge = extendTailwindMerge({
  extend: {
    ...tailwindMergeConfig,
  },
})

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}


export const parseFileSize = ({
  size,
  metric = 'KB',
  decimals = 2,
}: {
  size: number
  metric?: 'B' | 'KB' | 'MB' | 'GB' | 'TB'
  decimals?: number
}): number => {
  const scales = {
    B: 1,
    KB: 1,
    MB: 2,
    GB: 3,
    TB: 4,
  }

  const scaleFactor = scales[metric]

  if (!scaleFactor) {
    throw new Error(
      'Invalid scale provided. Please use one of: B, KB, MB, GB, TB.'
    )
  }

  const result = size / 1024 ** scaleFactor

  if (decimals) {
    return Number(result.toFixed(Math.abs(decimals)))
  }

  return result
}