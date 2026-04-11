import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">Product not found</h1>
      <p className="text-gray-400 text-lg mb-8">
        This product doesn&apos;t exist or is no longer available.
      </p>
      <Link href="/products" className="text-blue-400 hover:text-blue-300 transition-colors">
        ← Back to Products
      </Link>
    </div>
  );
}
