import { ROUTES } from '@/constants/routes'

export type SiteConfig = typeof siteConfig

const navItem = (title: string, slug?: string) => {
  const s = slug || title.toLowerCase().replace(' ', '-')
  return {
    title,
    slug: s,
  }
}

export const siteConfig = {
  name: 'Snow Cone UI',
  url: 'http://localhost:4321',
  description: 'Copy Paste library with Material You inspired design.',
  links: {
    github: 'https://github.com/JepriCreations/snow-cone-ui',
    twitter: 'https://twitter.com/jepricreations',
  },
}
