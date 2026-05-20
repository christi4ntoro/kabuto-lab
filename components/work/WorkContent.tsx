'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { content } from '@/lib/content';

interface WorkContentProps {
  posts: BlogPost[];
}

export default function WorkContent({ posts }: WorkContentProps) {
  const t = content;

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-4 md:p-8 pt-[68px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">{t.work.heading}</h1>
        <p className="text-xl text-[--muted] mb-12">
          {t.work.subheading}
        </p>

        <div className="space-y-12">
          {posts.length === 0 && (
            <p className="text-[--muted]">{t.work.noPosts}</p>
          )}
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-[--border] rounded-lg overflow-hidden bg-[--surface] backdrop-blur hover:border-[--muted] transition-all"
            >
              {post.image && (
                <Link href={`/transmissions/${post.slug}`}>
                  <div className="relative w-full aspect-video bg-[--background]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </Link>
              )}

              <div className="p-4 md:p-8">
                <time className="text-sm text-[--muted] mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                <Link href={`/transmissions/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-[--surface-alt] text-[--muted] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-xl text-[--muted] mb-6">{post.excerpt}</p>

                <Link
                  href={`/transmissions/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-bold"
                >
                  {t.work.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[--border]">
          <Link
            href="/transmissions"
            className="text-blue-400 hover:text-blue-300 transition-colors font-bold"
          >
            {t.work.allTransmissions}
          </Link>
        </div>
      </div>
    </div>
  );
}
