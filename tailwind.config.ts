import type { Config } from 'tailwindcss'
import theme from './src/config/theme.ts'
import Typography from '@tailwindcss/typography'
import TailwindAnimate from 'tailwindcss-animate'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme,
  plugins: [
    Typography,
    TailwindAnimate,
    require('./src/lib/plugins/hsl-colors-parser.js'),
  ],
} satisfies Config

export default config
