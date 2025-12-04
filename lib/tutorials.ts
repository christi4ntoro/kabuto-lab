import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const tutorialsDirectory = path.join(process.cwd(), 'content/tutorials');

export interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail?: string;
}

export interface TutorialMeta {
  slug: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  published?: boolean;
  featured?: boolean;
  thumbnail: string;
  youtubePlaylistId: string;
  videos?: Video[]; // NEW: Array of individual videos
  relatedProducts?: string[];
  content: string;
}

export function getAllTutorials(): TutorialMeta[] {
  // Check if directory exists
  if (!fs.existsSync(tutorialsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(tutorialsDirectory);
  
  const tutorials = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getTutorialBySlug(slug);
    })
    .filter(tutorial => tutorial.published !== false); // Filter out unpublished
  
  // Sort by featured first, then by title
  return tutorials.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getTutorialBySlug(slug: string): TutorialMeta {
  const fullPath = path.join(tutorialsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    description: data.description,
    duration: data.duration,
    lessons: data.lessons,
    level: data.level,
    category: data.category,
    tags: data.tags || [],
    published: data.published !== false,
    featured: data.featured || false,
    thumbnail: data.thumbnail,
    youtubePlaylistId: data.youtubePlaylistId,
    videos: data.videos || [], // NEW: Read videos array
    relatedProducts: data.relatedProducts || [],
    content,
  };
}

export function getFeaturedTutorials(limit?: number): TutorialMeta[] {
  const allTutorials = getAllTutorials();
  const featured = allTutorials.filter(t => t.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getTutorialsByLevel(level: 'beginner' | 'intermediate' | 'advanced'): TutorialMeta[] {
  const allTutorials = getAllTutorials();
  return allTutorials.filter(t => t.level === level);
}

export function getTutorialsByCategory(category: string): TutorialMeta[] {
  const allTutorials = getAllTutorials();
  return allTutorials.filter(t => t.category === category);
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}