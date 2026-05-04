import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">Post not found</h1>
      <p className="text-gray-400 text-lg mb-8">
        The post you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
        ← Back to Transmissions
      </Link>
    </div>
  );
}
