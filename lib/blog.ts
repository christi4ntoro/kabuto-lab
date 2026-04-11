import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { blogFrontmatterSchema } from '@/lib/schemas';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string; // Add featured image
  published?: boolean; // NEW: For hiding posts in development
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      let fm;
      try {
        fm = blogFrontmatterSchema.parse(data);
      } catch (e) {
        throw new Error(`Invalid frontmatter in ${slug}: ${(e as Error).message}`);
      }

      return {
        slug,
        title: fm.title,
        date: fm.date,
        excerpt: fm.excerpt,
        image: fm.image,
        published: fm.published,
        content,
      };
    })
    .filter(post => post.published !== false); // NEW: Filter out unpublished posts
  
  // Sort by date, newest first
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  let fm;
  try {
    fm = blogFrontmatterSchema.parse(data);
  } catch (e) {
    throw new Error(`Invalid frontmatter in ${slug}: ${(e as Error).message}`);
  }

  return {
    slug,
    title: fm.title,
    date: fm.date,
    excerpt: fm.excerpt,
    image: fm.image,
    published: fm.published,
    content,
  };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}