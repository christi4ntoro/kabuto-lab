import Link from 'next/link';

export default function SystemNotFound() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">System not found</h1>
      <p className="text-gray-400 text-lg mb-8">
        This system doesn&apos;t exist or is no longer available.
      </p>
      <Link href="/systems" className="text-blue-400 hover:text-blue-300 transition-colors">
        ← Back to Systems
      </Link>
    </div>
  );
}
