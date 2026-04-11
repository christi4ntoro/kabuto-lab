'use client';

import Link from 'next/link';

export default function ProductError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-400 text-lg mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors mb-4"
      >
        Try again
      </button>
      <Link href="/products" className="text-blue-400 hover:text-blue-300 transition-colors">
        ← Back to Products
      </Link>
    </div>
  );
}
