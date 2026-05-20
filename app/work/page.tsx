import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import WorkContent from '@/components/work/WorkContent';

export const metadata: Metadata = {
  title: 'Work | Kabuto Lab',
  description: 'Case studies and professional projects by Christian Ramírez Toro.',
  openGraph: {
    title: 'Work | Kabuto Lab',
    description: 'Case studies and professional projects by Christian Ramírez Toro.',
  },
};

export default function WorkPage() {
  const posts = getAllPosts().filter(post => post.tags.includes('work'));

  return <WorkContent posts={posts} />;
}
