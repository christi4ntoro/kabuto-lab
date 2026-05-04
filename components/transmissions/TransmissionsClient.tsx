'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BlogPost } from '@/lib/blog';

const TAGS = ['All', 'Work', 'Research', 'Builds', 'Galea', 'Process'];

interface Props {
  posts: BlogPost[];
}

export default function TransmissionsClient({ posts }: Props) {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? posts
    : posts.filter(post => post.tags.includes(activeTag));

  return (
    <>
      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div className="space-y-12">
        {filtered.length === 0 && (
          <p className="text-gray-400">No posts tagged &ldquo;{activeTag}&rdquo; yet.</p>
        )}
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="border border-[--border] rounded-lg overflow-hidden bg-[--surface] backdrop-blur hover:border-[--muted] transition-all"
          >
            {post.image && (
              <Link href={`/transmissions/${post.slug}`}>
                <div className="relative w-full aspect-video bg-neutral-900">
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

            <div className="p-8">
              <time className="text-sm text-gray-400 mb-3 block">
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
                      className="text-xs px-2 py-0.5 rounded-full bg-[--surface-alt] text-[--muted]"
                      style={{ fontFamily: 'var(--font-geist-mono)' }}
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
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
