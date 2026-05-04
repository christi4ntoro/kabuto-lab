import { getPostBySlug, markdownToHtml, getAllPosts } from '@/lib/blog';
import { useMDXComponents } from '@/components/mdx-components';
import Link from 'next/link';
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

export default async function TransmissionPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const contentHtml = await markdownToHtml(post.content, {
    isMdx: post.isMdx,
    components: useMDXComponents({}) as Record<string, unknown>,
  });

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-8 pt-[68px]">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/transmissions"
          className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block"
        >
          ← Back to Transmissions
        </Link>

        <h1 className="text-6xl font-bold mb-4">{post.title}</h1>
        <p className="text-[--muted] text-xl mb-12">{post.date}</p>

        <div
          className="prose prose-lg max-w-none
                     prose-headings:text-[--foreground] prose-headings:font-bold
                     prose-p:text-[--muted] prose-p:text-xl prose-p:leading-relaxed
                     prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                     prose-strong:text-[--foreground]
                     prose-ul:text-[--muted] prose-ul:text-xl
                     prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
