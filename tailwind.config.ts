import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        primary: 'hsl(var(--primary))',
        onPrimary: 'hsl(var(--onPrimary))',
        primaryContainer: 'hsl(var(--primaryContainer))',
        onPrimaryContainer: 'hsl(var(--onPrimaryContainer))',
        secondary: 'hsl(var(--secondary))',
        onSecondary: 'hsl(var(--onSecondary))',
        secondaryContainer: 'hsl(var(--secondaryContainer))',
        onSecondaryContainer: 'hsl(var(--onSecondaryContainer))',
        tertiary: 'hsl(var(--tertiary))',
        onTertiary: 'hsl(var(--onTertiary))',
        tertiaryContainer: 'hsl(var(--tertiaryContainer))',
        onTertiaryContainer: 'hsl(var(--onTertiaryContainer))',
        error: 'hsl(var(--error))',
        onError: 'hsl(var(--onError))',
        errorContainer: 'hsl(var(--errorContainer))',
        onErrorContainer: 'hsl(var(--onErrorContainer))',
        success: 'hsl(var(--success))',
        onSuccess: 'hsl(var(--onSuccess))',
        successContainer: 'hsl(var(--successContainer))',
        onSuccessContainer: 'hsl(var(--onSuccessContainer))',
        info: 'hsl(var(--info))',
        onInfo: 'hsl(var(--onInfo))',
        infoContainer: 'hsl(var(--infoContainer))',
        onInfoContainer: 'hsl(var(--onInfoContainer))',
        warning: 'hsl(var(--warning))',
        onWarning: 'hsl(var(--onWarning))',
        warningContainer: 'hsl(var(--warningContainer))',
        onWarningContainer: 'hsl(var(--onWarningContainer))',
        background: 'hsl(var(--background))',
        onBackground: 'hsl(var(--onBackground))',
        surface: 'hsl(var(--surface))',
        onSurface: 'hsl(var(--onSurface))',
        surfaceVariant: 'hsl(var(--surfaceVariant))',
        onSurfaceVariant: 'hsl(var(--onSurfaceVariant))',
        outline: 'hsl(var(--outline))',
        outlineVariant: 'hsl(var(--outlineVariant))',
        shadow: 'hsl(var(--shadow))',
        scrim: 'hsl(var(--scrim))',
        inverseSurface: 'hsl(var(--inverseSurface))',
        inverseOnSurface: 'hsl(var(--inverseOnSurface))',
        inversePrimary: 'hsl(var(--inversePrimary))',
        primaryFixed: 'hsl(var(--primaryFixed))',
        primaryFixedDim: 'hsl(var(--primaryFixedDim))',
        onPrimaryFixed: 'hsl(var(--onPrimaryFixed))',
        secondaryFixed: 'hsl(var(--secondaryFixed))',
        secondaryFixedDim: 'hsl(var(--secondaryFixedDim))',
        onSecondaryFixed: 'hsl(var(--onSecondaryFixed))',
        tertiaryFixed: 'hsl(var(--tertiaryFixed))',
        tertiaryFixedDim: 'hsl(var(--tertiaryFixedDim))',
        onTertiaryFixed: 'hsl(var(--onTertiaryFixed))',
        surfaceDim: 'hsl(var(--surfaceDim))',
        surfaceBright: 'hsl(var(--surfaceBright))',
        surfaceContainerLowest: 'hsl(var(--surfaceContainerLowest))',
        surfaceContainerLow: 'hsl(var(--surfaceContainerLow))',
        surfaceContainer: 'hsl(var(--surfaceContainer))',
        surfaceContainerHigh: 'hsl(var(--surfaceContainerHigh))',
        surfaceContainerHighest: 'hsl(var(--surfaceContainerHighest))',
        palette: {
          primary: {
            '0': '0 0% 0%',
            '4': '153 100% 4%',
            '5': '154 100% 4%',
            '6': '157 100% 5%',
            '10': '158 100% 6%',
            '12': '161 100% 7%',
            '14': '160 100% 8%',
            '17': '162 100% 10%',
            '20': '162 100% 11%',
            '22': '162 100% 12%',
            '24': '163 100% 13%',
            '30': '163 100% 16%',
            '40': '163 100% 21%',
            '50': '164 100% 27%',
            '60': '161 61% 40%',
            '70': '158 48% 52%',
            '80': '157 61% 64%',
            '87': '156 78% 71%',
            '90': '156 89% 75%',
            '92': '155 98% 77%',
            '94': '154 100% 84%',
            '95': '152 100% 87%',
            '96': '151 100% 90%',
            '98': '145 100% 95%',
            '99': '136 100% 98%',
            '100': '0 0% 100%',
          },
          secondary: {
            '0': '0 0% 0%',
            '4': '153 100% 4%',
            '5': '156 91% 4%',
            '6': '157 84% 5%',
            '10': '157 56% 8%',
            '12': '157 47% 10%',
            '14': '155 38% 11%',
            '17': '155 31% 14%',
            '20': '153 26% 16%',
            '22': '153 24% 18%',
            '24': '153 22% 20%',
            '30': '153 17% 25%',
            '40': '151 13% 34%',
            '50': '149 10% 44%',
            '60': '150 10% 54%',
            '70': '149 14% 65%',
            '80': '146 20% 75%',
            '87': '148 30% 83%',
            '90': '145 37% 86%',
            '92': '148 43% 88%',
            '94': '145 54% 91%',
            '95': '145 62% 92%',
            '96': '145 72% 93%',
            '98': '145 100% 95%',
            '99': '136 100% 98%',
            '100': '0 0% 100%',
          },
          tertiary: {
            '0': '0 0% 0%',
            '4': '200 100% 5%',
            '5': '199 100% 5%',
            '6': '197 100% 6%',
            '10': '196 100% 8%',
            '12': '195 100% 9%',
            '14': '196 100% 10%',
            '17': '195 100% 12%',
            '20': '195 77% 15%',
            '22': '197 66% 17%',
            '24': '196 57% 19%',
            '30': '199 43% 25%',
            '40': '199 30% 35%',
            '50': '200 24% 45%',
            '60': '200 24% 55%',
            '70': '199 32% 65%',
            '80': '201 48% 76%',
            '87': '200 73% 84%',
            '90': '201 91% 87%',
            '92': '201 100% 90%',
            '94': '201 100% 93%',
            '95': '201 100% 94%',
            '96': '203 100% 95%',
            '98': '207 100% 98%',
            '99': '216 100% 99%',
            '100': '0 0% 100%',
          },
          neutral: {
            '0': '0 0% 0%',
            '4': '140 11% 5%',
            '5': '150 13% 6%',
            '6': '140 8% 7%',
            '10': '140 6% 10%',
            '12': '140 5% 12%',
            '14': '140 4% 14%',
            '17': '150 5% 16%',
            '20': '140 3% 19%',
            '22': '135 4% 20%',
            '24': '140 3% 22%',
            '30': '135 3% 27%',
            '40': '120 2% 37%',
            '50': '120 1% 46%',
            '60': '120 1% 56%',
            '70': '120 2% 67%',
            '80': '100 3% 77%',
            '87': '105 5% 85%',
            '90': '90 7% 88%',
            '92': '90 8% 91%',
            '94': '100 8% 93%',
            '95': '100 10% 94%',
            '96': '90 15% 95%',
            '98': '90 29% 97%',
            '99': '90 50% 98%',
            '100': '0 0% 100%',
          },
          neutralVariant: {
            '0': '0 0% 0%',
            '4': '150 33% 5%',
            '5': '153 31% 6%',
            '6': '150 24% 7%',
            '10': '150 16% 10%',
            '12': '150 14% 11%',
            '14': '147 13% 13%',
            '17': '147 11% 15%',
            '20': '150 9% 18%',
            '22': '147 9% 20%',
            '24': '147 8% 21%',
            '30': '147 7% 27%',
            '40': '144 5% 36%',
            '50': '140 4% 46%',
            '60': '144 4% 56%',
            '70': '140 5% 66%',
            '80': '138 8% 77%',
            '87': '133 11% 85%',
            '90': '138 16% 88%',
            '92': '132 20% 90%',
            '94': '133 23% 92%',
            '95': '133 27% 94%',
            '96': '138 36% 95%',
            '98': '132 63% 97%',
            '99': '132 100% 98%',
            '100': '0 0% 100%',
          },
          error: {
            '0': '0 0% 0%',
            '4': '359 100% 8%',
            '5': '359 100% 9%',
            '6': '359 100% 10%',
            '10': '358 100% 13%',
            '12': '358 100% 14%',
            '14': '358 100% 16%',
            '17': '357 100% 18%',
            '20': '357 100% 21%',
            '22': '357 100% 22%',
            '24': '357 100% 24%',
            '30': '356 100% 29%',
            '40': '0 75% 42%',
            '50': '2 73% 53%',
            '60': '4 100% 64%',
            '70': '6 100% 75%',
            '80': '6 100% 84%',
            '87': '7 100% 89%',
            '90': '6 100% 92%',
            '92': '7 100% 94%',
            '94': '7 100% 95%',
            '95': '9 100% 96%',
            '96': '7 100% 97%',
            '98': '7 100% 98%',
            '99': '300 100% 99%',
            '100': '0 0% 100%',
          },
          success: {
            '0': '0 0% 0%',
            '4': '130 100% 4%',
            '5': '129 100% 4%',
            '6': '130 100% 5%',
            '10': '133 100% 6%',
            '12': '133 100% 7%',
            '14': '134 100% 8%',
            '17': '136 100% 10%',
            '20': '138 100% 11%',
            '22': '138 100% 12%',
            '24': '139 100% 13%',
            '30': '137 80% 18%',
            '40': '130 45% 29%',
            '50': '126 33% 39%',
            '60': '125 27% 49%',
            '70': '123 34% 60%',
            '80': '122 47% 71%',
            '87': '121 64% 78%',
            '90': '121 77% 82%',
            '92': '120 86% 84%',
            '94': '120 100% 86%',
            '95': '118 100% 89%',
            '96': '115 100% 91%',
            '98': '108 100% 95%',
            '99': '99 100% 97%',
            '100': '0 0% 100%',
          },
          info: {
            '0': '0 0% 0%',
            '4': '221 100% 8%',
            '5': '219 100% 9%',
            '6': '218 100% 10%',
            '10': '216 100% 13%',
            '12': '215 100% 14%',
            '14': '215 100% 16%',
            '17': '214 100% 18%',
            '20': '214 100% 21%',
            '22': '214 100% 22%',
            '24': '214 100% 24%',
            '30': '213 100% 29%',
            '40': '212 100% 38%',
            '50': '216 79% 52%',
            '60': '218 100% 65%',
            '70': '220 100% 75%',
            '80': '222 100% 84%',
            '87': '223 100% 90%',
            '90': '225 100% 92%',
            '92': '225 100% 94%',
            '94': '229 100% 96%',
            '95': '230 100% 96%',
            '96': '231 100% 97%',
            '98': '240 100% 99%',
            '99': '285 100% 99%',
            '100': '0 0% 100%',
          },
          warning: {
            '0': '0 0% 0%',
            '4': '22 100% 5%',
            '5': '23 100% 6%',
            '6': '24 100% 7%',
            '10': '27 100% 9%',
            '12': '27 100% 10%',
            '14': '28 100% 12%',
            '17': '29 100% 13%',
            '20': '30 100% 15%',
            '22': '30 100% 16%',
            '24': '31 100% 18%',
            '30': '31 100% 22%',
            '40': '32 100% 28%',
            '50': '32 100% 35%',
            '60': '32 94% 44%',
            '70': '30 95% 57%',
            '80': '27 100% 75%',
            '87': '25 100% 84%',
            '90': '25 100% 88%',
            '92': '24 100% 91%',
            '94': '24 100% 93%',
            '95': '21 100% 95%',
            '96': '22 100% 96%',
            '98': '18 100% 98%',
            '99': '300 100% 99%',
            '100': '0 0% 100%',
          },
        },
      },
      opacity: {
        4: '0.04',
        8: '0.08',
        12: '0.12',
        16: '0.16',
        38: '0.38',
      },
      borderRadius: {
        '4xl': 'calc(var(--radius) * 4 + (2/3 * var(--radius)))',
        '3xl': 'calc(var(--radius) * 4 + (1/3 * var(--radius)))',
        '2xl': 'calc(var(--radius) * 2 + (2/3 * var(--radius)))',
        xl: 'calc(var(--radius) * 2 + (1/3 * var(--radius)))',
        lg: 'calc(var(--radius) + (1/3 * var(--radius)))',
        md: 'var(--radius)',
        sm: 'calc(2/3 * var(--radius))',
        xs: 'calc(1/3 * var(--radius))',
      },
      fontFamily: {
        sans: ['Outfit Variable', ...fontFamily.sans],
      },
      fontSize: {
        'display-lg': ['3.56rem', { lineHeight: '4rem' }],
        'display-md': ['2.81rem', { lineHeight: '3.25rem' }],
        'display-sm': ['2.25rem', { lineHeight: '2.75rem' }],
        'headline-lg': ['2rem', { lineHeight: '2.5rem' }],
        'headline-md': ['1.75rem', { lineHeight: '2.25rem' }],
        'headline-sm': ['1.5rem', { lineHeight: '2rem' }],
        'title-lg': ['1.375rem', { lineHeight: '1.75rem' }],
        'title-md': ['1rem', { lineHeight: '1.5rem', fontWeight: 500 }],
        'title-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'label-lg': ['0.875rem', { lineHeight: '1.25rem', fontWeight: 500 }],
        'label-md': ['0.75rem', { lineHeight: '1rem', fontWeight: 500 }],
        'label-sm': ['0.687rem', { lineHeight: '1rem', fontWeight: 500 }],
        'body-lg': ['1rem', { lineHeight: '1.5rem' }],
        'body-md': ['0.875rem', { lineHeight: '1.25rem' }],
        'body-sm': ['0.75rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        xs: '0px 1px 2px 0px hsl(var(--shadow) / 0.15), 0px 1px 2px 0px hsl(var(--shadow) / 0.2)',
        sm: '0px 1px 4px 1px hsl(var(--shadow) / 0.1), 0px 1px 3px 0px hsl(var(--shadow) / 0.15)',
        md: '0px 2px 6px 2px hsl(var(--shadow) / 0.1), 0px 1px 3px 0px hsl(var(--shadow) / 0.2)',
        lg: '0px 4px 8px 3px hsl(var(--shadow) / 0.15), 0px 1px 3px 0px hsl(var(--shadow) / 0.3)',
        xl: '0px 6px 10px 4px hsl(var(--shadow) / 0.15), 0px 2px 3px 0px hsl(var(--shadow) / 0.3)',
        '2xl':
          '0px 8px 12px 6px hsl(var(--shadow) / 0.15), 0px 4px 4px 0px hsl(var(--shadow) / 0.3)',
      },
      transitionProperty: {
        fadeAndMove: 'transform, opacity',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(.2, 0, 0, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '128px' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '128px' },
        },
        'grown-up': {
          '0%': { opacity: '0', transform: 'scaleY(0%)' },
          '60%': { opacity: '1', transform: 'scaleY(130%)' },
          '100%': { opacity: '1', transform: 'scaleY(100%)' },
        },
        'linear-progress': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'circular-progress': {
          '0%': {
            'stroke-dasharray': '1px, 200px',
            'stroke-dashoffset': '0px',
          },
          '50%': {
            'stroke-dasharray': '100px, 200px',
            'stroke-dashoffset': '-15px',
          },
          '100%': {
            'stroke-dasharray': '100px, 200px',
            'stroke-dashoffset': '-86px',
          },
        },
        'progress-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'zoom-in-x': {
          '0%': { opacity: '0', transform: 'scaleX(5%)' },
          '100%': { opacity: '1', transform: 'scaleX(100%)' },
        },
        'zoom-in-y': {
          '0%': { opacity: '0', transform: 'scaleY(5%)' },
          '100%': { opacity: '1', transform: 'scaleY(100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'grown-up': 'grown-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'zoom-in-x': 'zoom-in-x 0.25s cubic-bezier(.2,0,0,1)',
        'zoom-in-y': 'zoom-in-y 0.25s cubic-bezier(.2,0,0,1)',
        'linear-progress':
          'linear-progress 2s infinite cubic-bezier(0.22, 0.61, 0.36, 1)',
        'circular-progress': 'circular-progress 1.4s infinite ease-in-out',
        'progress-spin': 'progress-spin 2s infinite linear',
        'snackbar-in':
          'zoom-in-y 0.25s cubic-bezier(.2,0,0,1), fade-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('./src/lib/plugins/font-variation-settings.js'),
    require('./src/lib/plugins/hsl-colors-parser.js'),
  ],
} satisfies Config

export default config
