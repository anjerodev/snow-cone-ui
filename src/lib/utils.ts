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
