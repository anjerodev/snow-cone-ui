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
    title: z.string(),
    subtitle: z.string(),
    thumbnail: z.string(),
    thumbnailDark: z.string().optional(),
    bgImage: z.string(),
    bgImageDark: z.string().optional(),
  }),
})

export const collections = {
  docs: docsCollection,
  components: componentsCollection,
}
