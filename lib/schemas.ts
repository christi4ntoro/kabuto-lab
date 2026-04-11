import { z } from 'zod';

export const blogFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  image: z.string(),
  published: z.boolean(),
});

export const productFrontmatterSchema = z.object({
  name: z.string(),
  price: z.number(),
  // Note: CLAUDE.md documents ['template','course','ebook','toolkit','service'] but actual
  // content uses different values (digital, starter, tools, templates). Using z.string() until
  // content and interface are aligned.
  category: z.string(),
  type: z.enum(['free', 'paid', 'custom']),
  highlighted: z.boolean().optional().default(false),
  published: z.boolean(),
  benefit: z.string().optional(),
  description: z.string(),
  image: z.string(),
  buyUrl: z.string().optional(),
  features: z.array(z.string()).optional().default([]),
  relatedProducts: z.array(z.string()).optional().default([]),
});

export const tutorialFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  duration: z.string(),
  lessons: z.number(),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  category: z.string(),
  tags: z.array(z.string()).optional().default([]),
  thumbnail: z.string(),
  youtubePlaylistId: z.string().optional(),
  videos: z.array(z.object({
    id: z.string(),
    title: z.string(),
    duration: z.string(),
    thumbnail: z.string().optional(),
  })).optional().default([]),
  featured: z.boolean().optional().default(false),
  published: z.boolean(),
  relatedProducts: z.array(z.string()).optional().default([]),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
export type ProductFrontmatter = z.infer<typeof productFrontmatterSchema>;
export type TutorialFrontmatter = z.infer<typeof tutorialFrontmatterSchema>;
