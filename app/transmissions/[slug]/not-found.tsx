import Link from 'next/link';

export default function TransmissionNotFound() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">Transmission not found</h1>
      <p className="text-[--muted] text-lg mb-8">
        This transmission doesn&apos;t exist or has been removed.
      </p>
      <Link href="/transmissions" className="text-blue-400 hover:text-blue-300 transition-colors">
        ← Back to Transmissions
      </Link>
    </div>
  );
}
