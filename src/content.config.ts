import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:schema';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'zh']),
    translationKey: z.string(),
    draft: z.boolean().default(false),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'zh']),
    translationKey: z.string(),
    draft: z.boolean().default(false),
    access: z.enum(['free', 'paid']),
    order: z.number().optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/caseStudies' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    client: z.string().optional(),
    industry: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    lang: z.enum(['en', 'zh']),
    translationKey: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, courses, caseStudies };
