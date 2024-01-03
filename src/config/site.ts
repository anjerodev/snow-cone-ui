import { ROUTES } from '@/constants/routes'

export type SiteConfig = typeof siteConfig

const navItem = (title: string, slug: string) => ({ title, slug })

export const siteConfig = {
  name: 'Snow Cone UI',
  url: 'http://localhost:4321',
  description: 'Copy Paste library with Material You inspired design.',
  links: {
    github: 'https://github.com/JepriCreations/snow-cone-ui',
    twitter: 'https://twitter.com/jepricreations',
  },
  sideNav: {
    [ROUTES.DOCS]: [],
    [ROUTES.TYPOGRAPHY]: [],
    [ROUTES.THEME]: [],
    [ROUTES.COMPONENTS]: [
      navItem('Buttons', 'buttons'),
      navItem('Floating Action Buttons', 'fab'),
      navItem('Icon buttons', 'icon-buttons'),
      navItem('Segmented buttons', 'segmented-buttons'),
    ],
  },
}
