import { ROUTES } from '@/constants/routes'

export type SiteConfig = typeof siteConfig

const navItem = (title: string, slug: string) => ({ title, slug })

export const siteConfig = {
  name: 'Solstice UI',
  url: 'http://localhost:4321',
  description: 'Copy Paste library with Material You inspired design.',
  links: {},
  sideNav: {
    [ROUTES.HOME]: [],
    [ROUTES.FONTS]: [],
    [ROUTES.STYLES]: [],
    [ROUTES.COMPONENTS]: [
      navItem('Buttons', 'buttons'),
      navItem('Floating Action Buttons', 'fab'),
      navItem('Icon buttons', 'icon-buttons'),
      navItem('Segmented buttons', 'segmented-buttons'),
    ],
  },
}
