import { defineCollection, z } from 'astro:content'

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
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
      default:
        'https://m3.material.io/static/assets/m3-green-theming-thumbnail.jpg',
      dark: 'https://m3.material.io/static/assets/m3-green-theming-thumbnail-dark.jpg',
    },
    color: {
      default: '#d9e7cb',
      dark: '#3e4a36',
    },
  },
  communication: {
    description: 'Communication components provide helpful information.',
    bg: {
      default:
        'https://m3.material.io/static/assets/m3-red-theming-thumbnail.jpg',
      dark: 'https://m3.material.io/static/assets/m3-red-theming-thumbnail-dark.jpg',
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
      default:
        'https://m3.material.io/static/assets/m3-red-theming-thumbnail.jpg',
      dark: 'https://m3.material.io/static/assets/m3-red-theming-thumbnail-dark.jpg',
    },
    color: {
      default: '#F9DBDA',
      dark: '#584040',
    },
  },
  navigation: {
    description: 'Navigation components help people move through the UI.',
    bg: {
      default:
        'https://m3.material.io/static/assets/m3-yellow-theming-thumbnail.jpg',
      dark: 'https://m3.material.io/static/assets/m3-yellow-theming-thumbnail-dark.jpg',
    },
    color: {
      default: '#E6E4C3',
      dark: '#484830',
    },
  },
  selection: {
    description: 'Selection components let people specify choices.',
    bg: {
      default:
        'https://m3.material.io/static/assets/m3-green-theming-thumbnail.jpg',
      dark: 'https://m3.material.io/static/assets/m3-green-theming-thumbnail-dark.jpg',
    },
    color: {
      default: '#d9e7cb',
      dark: '#3e4a36',
    },
  },
  'text-inputs': {
    description: 'Text input components let people enter and edit text.',
    bg: {
      default:
        'https://m3.material.io/static/assets/m3-yellow-theming-thumbnail.jpg',
      dark: 'https://m3.material.io/static/assets/m3-yellow-theming-thumbnail-dark.jpg',
    },
    color: {
      default: '#E6E4C3',
      dark: '#484830',
    },
  },
} as const
