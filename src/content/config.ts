import { defineCollection, z } from 'astro:content'

import { imagesRootPath } from '@/lib/data'

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    thumbnail: z.string(),
    thumbnailDark: z.string().optional(),
  }),
})

const componentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    group: z.string(),
    title: z.string(),
    subtitle: z.string(),
    preview: z.string(),
    previewDark: z.string().optional(),
    thumbnail: z.string(),
    thumbnailDark: z.string().optional(),
    guidelines: z.string().optional(),
    shadcn: z.string().optional(),
    radix: z.string().optional(),
  }),
})

export const collections = {
  docs: docsCollection,
  components: componentsCollection,
}

export const componentsSections = {
  actions: {
    description: 'Action components help people achieve an aim.',
    bg: {
      default: imagesRootPath + 'm3-green-theming-thumbnail',
      dark: imagesRootPath + 'm3-green-theming-thumbnail-dark',
    },
    color: {
      default: '#d9e7cb',
      dark: '#3e4a36',
    },
  },
  communication: {
    description: 'Communication components provide helpful information.',
    bg: {
      default: imagesRootPath + 'm3-red-theming-thumbnail',
      dark: imagesRootPath + 'm3-red-theming-thumbnail-dark',
    },
    color: {
      default: '#F9DBDA',
      dark: '#584040',
    },
  },
  containment: {
    description:
      'Containment components hold information and actions - including other components like buttons, menus, or chips.',
    bg: {
      default: imagesRootPath + 'm3-red-theming-thumbnail',
      dark: imagesRootPath + 'm3-red-theming-thumbnail-dark',
    },
    color: {
      default: '#F9DBDA',
      dark: '#584040',
    },
  },
  navigation: {
    description: 'Navigation components help people move through the UI.',
    bg: {
      default: imagesRootPath + 'm3-yellow-theming-thumbnail',
      dark: imagesRootPath + 'm3-yellow-theming-thumbnail-dark',
    },
    color: {
      default: '#E6E4C3',
      dark: '#484830',
    },
  },
  selection: {
    description: 'Selection components let people specify choices.',
    bg: {
      default: imagesRootPath + 'm3-green-theming-thumbnail',
      dark: imagesRootPath + 'm3-green-theming-thumbnail-dark',
    },
    color: {
      default: '#d9e7cb',
      dark: '#3e4a36',
    },
  },
  'inputs': {
    description: 'Input components let people enter and edit text, numbers, dates, files and more.',
    bg: {
      default: imagesRootPath + 'm3-yellow-theming-thumbnail',
      dark: imagesRootPath + 'm3-yellow-theming-thumbnail-dark',
    },
    color: {
      default: '#E6E4C3',
      dark: '#484830',
    },
  },
} as const
