import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Portrait', 'Beauty', 'Couple', 'Graduation', 'Editorial', 'Profile', 'Birthday']),
    description: z.string(),
    shortDescription: z.string().optional(),
    coverImage: z.string(),
    coverAlt: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    date: z.string(),
    displayOrder: z.number().optional(),
    layoutVariant: z.enum(['editorial', 'grid', 'masonry', 'minimal']).default('editorial'),
    credits: z
      .object({
        photographer: z.string().optional(),
        makeup: z.string().optional(),
        stylist: z.string().optional(),
        model: z.string().optional(),
        location: z.string().optional(),
      })
      .optional(),
    gallery: z.array(
      z.object({
        image: z.string(),
        alt: z.string(),
        layout: z.enum(['full', 'half', 'third', 'two-thirds']).default('full'),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = { projects };
