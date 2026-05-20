'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';
import { content } from '@/lib/content';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const t = content;

  return (
    <section className="px-4 py-16 md:py-24 bg-[--background]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[--foreground] mb-2">
              {t.blog.heading}
            </h2>
            <p className="text-lg text-[--muted]">
              {t.blog.subheading}
            </p>
          </div>

          <Link
            href="/transmissions"
            className="hidden md:inline-block text-blue-400 hover:text-blue-300 font-bold transition-colors"
          >
            {t.blog.viewAll}
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="relative border border-white/20 rounded-lg overflow-hidden bg-black/50 backdrop-blur hover:border-white/60 transition-all duration-300 hover:scale-105 flex flex-col"
              style={{ zIndex: 1 }}
            >
              {/* Featured Image */}
              {post.image && (
                <Link href={`/transmissions/${post.slug}`} className="block">
                  <div className="relative w-full aspect-video bg-[--background]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              )}

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Date */}
                <time className="text-sm text-[--muted] mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>

                {/* Title */}
                <Link href={`/transmissions/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-[--foreground] mb-3 hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-[--muted] mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/transmissions/${post.slug}`}
                  className="inline-block text-blue-400 hover:text-blue-300 font-bold transition-colors"
                >
                  {t.blog.readArticle}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/transmissions"
            className="inline-block bg-[--foreground] text-[--background] px-6 py-3 font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all"
          >
            {t.blog.viewAllMobile}
          </Link>
        </div>
      </div>
    </section>
  );
}
