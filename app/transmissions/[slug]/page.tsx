import { getPostBySlug, markdownToHtml, getAllPosts } from '@/lib/blog';
import { mdxComponents } from '@/components/mdx-components';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : [],
      },
    };
  } catch {
    return { title: 'Transmission not found | Kabuto Lab' };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const TAG_STYLES: Record<string, { background: string; color: string }> = {
  work:     { background: 'rgba(99,102,241,0.12)',  color: 'rgba(165,180,252,0.9)' },
  research: { background: 'rgba(34,211,238,0.12)',  color: 'rgba(103,232,249,0.9)' },
  builds:   { background: 'rgba(74,222,128,0.12)',  color: 'rgba(134,239,172,0.9)' },
  galea:    { background: 'rgba(251,191,36,0.12)',  color: 'rgba(253,224,71,0.9)'  },
  process:  { background: 'rgba(148,163,184,0.12)', color: 'rgba(203,213,225,0.9)' },
};

export default async function TransmissionPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const contentHtml = await markdownToHtml(post.content, {
    isMdx: post.isMdx,
    components: mdxComponents as Record<string, unknown>,
  });

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] pt-[68px]">

      {/* 1. Cover Image */}
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1920}
          height={800}
          className="w-full object-cover"
          style={{ maxHeight: '480px' }}
          priority
        />
      )}

      {/* 2. Article Header */}
      <header className="max-w-[65ch] mx-auto px-4 md:px-0 pt-12 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[--foreground] leading-tight break-words">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-[--muted]">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full mr-2"
                style={TAG_STYLES[tag] ?? { background: 'rgba(148,163,184,0.12)', color: 'rgba(203,213,225,0.9)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 3. Prose Body */}
      <div className="max-w-[65ch] mx-auto px-4 md:px-0 pb-24">
        <div
          className="prose prose-invert max-w-none
                     prose-headings:text-[--foreground]
                     prose-headings:font-bold
                     prose-p:text-[--muted]
                     prose-p:text-base
                     prose-p:leading-relaxed
                     prose-a:text-[--foreground]
                     prose-a:underline
                     prose-strong:text-[--foreground]
                     prose-code:text-[--foreground]
                     prose-code:bg-[--surface]
                     prose-code:px-1
                     prose-code:rounded
                     prose-li:text-[--muted]
                     prose-blockquote:border-[--border]
                     prose-blockquote:text-[--muted]"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}
