import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blogs: defineCollection({
            type: 'page',
            source: '**/blog/**/*.md',
            schema: z.object({
                locale: z.enum(['en', 'nl']),
                blogKey: z.string(),
                date: z.date(),
            })
        })
    }
})