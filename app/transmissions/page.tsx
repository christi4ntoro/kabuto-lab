import { getAllPosts } from '@/lib/blog';
import TransmissionsClient from '@/components/transmissions/TransmissionsClient';

export default function TransmissionsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-8 pt-[68px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">Transmissions for the Lab</h1>
        <p className="text-xl text-gray-400 mb-12">
          Research notes on immersive design and emergent interaction
        </p>
        <TransmissionsClient posts={posts} />
      </div>
    </div>
  );
}
