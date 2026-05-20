'use client';

import Link from 'next/link';
import Image from 'next/image';
import { content } from '@/lib/content';

interface ProductCardProps {
  name: string;
  price: number;
  benefit: string;
  productUrl: string;
  image?: string;
  type?: 'free' | 'paid' | 'custom';
}

export default function ProductCard({ name, price, benefit, productUrl, image, type }: ProductCardProps) {
  const t = content;

  const getPriceDisplay = () => {
    if (type === 'custom') {
      return <span className="text-blue-400">{t.productCard.contactUs}</span>;
    }
    if (price === 0) {
      return <span className="text-green-400">{t.productCard.free}</span>;
    }
    return <span className="text-green-400">€{price}</span>;
  };

  return (
    <article className="rounded-[40px] overflow-hidden transition-all duration-300 hover:scale-105 bg-[--surface] flex flex-col h-full p-3">
      {image && (
        <div className="rounded-[36px] overflow-hidden relative w-full h-64 bg-[--surface]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className='p-4 flex flex-col flex-grow'>
        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3">
            {name}
          </h3>
          <p className="text-[--muted] mb-8 text-lg flex-grow truncate">
            {benefit}
          </p>
        </div>

        <div className="flex flex-row flex-grow justify-between items-center">
          <p className="text-3xl font-black">
            {getPriceDisplay()}
          </p>

          <Link
            href={productUrl}
            className="block bg-[--foreground] hover:bg-blue-400 text-[--background] hover:text-white p-4 text-center font-bold rounded-full transition-all transform hover:-translate-y-1 hover:shadow-xl mt-auto"
          >
            {t.productCard.getNow}
          </Link>
        </div>
      </div>
    </article>
  );
}
