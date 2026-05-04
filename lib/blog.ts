import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { createElement } from 'react';
import { blogFrontmatterSchema } from '@/lib/schemas';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  published?: boolean;
  tags: string[];
  lang: string;
  isMdx?: boolean;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      const isMdx = fileName.endsWith('.mdx');
      const slug = fileName.replace(/\.mdx?$/, '');
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
        tags: fm.tags,
        lang: fm.lang,
        isMdx: isMdx || undefined,
        content,
      };
    })
    .filter(post => post.published !== false);

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost {
  let fullPath = path.join(postsDirectory, `${slug}.md`);
  let isMdx = false;

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.mdx`);
    isMdx = true;
  }

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
    tags: fm.tags,
    lang: fm.lang,
    isMdx: isMdx || undefined,
    content,
  };
}

export async function markdownToHtml(
  source: string,
  options?: { isMdx?: boolean; components?: Record<string, unknown> }
): Promise<string> {
  if (options?.isMdx) {
    const { evaluate } = await import('@mdx-js/mdx');
    const { Fragment, jsx, jsxs } = await import('react/jsx-runtime');
    const { renderToStaticMarkup } = await import('react-dom/server');

    type MDXExports = {
      default: (props: { components?: Record<string, unknown> }) => React.ReactElement;
    };

    const { default: Content } = (await evaluate(
      source,
      { Fragment, jsx, jsxs } as unknown as Parameters<typeof evaluate>[1]
    )) as MDXExports;

    return renderToStaticMarkup(
      createElement(Content, { components: options.components ?? {} })
    );
  }

  const result = await remark().use(html).process(source);
  return result.toString();
}
