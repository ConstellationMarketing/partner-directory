import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    website: z.string().url(),
    industry: z.array(z.string()),
    partnerType: z.string(),
    location: z.string().optional(),
    shortDescription: z.string(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'inactive']).default('active'),
    tags: z.array(z.string()).default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    layout: z.enum(['standard', 'featured']).default('standard'),
  }),
});

export const collections = { partners };
