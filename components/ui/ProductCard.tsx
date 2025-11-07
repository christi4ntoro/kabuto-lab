import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  benefit: string;
  buyUrl: string;
  image?: string;
}

export default function ProductCard({ name, price, benefit, buyUrl, image }: ProductCardProps) {
  return (
    <article className="border border-white/20 rounded-lg overflow-hidden hover:border-white/60 transition-all duration-300 hover:scale-105 bg-black/50 backdrop-blur flex flex-col h-full">
      {/* Image - only show if provided */}
      {image && (
        <div className="relative w-full aspect-video bg-neutral-900">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 hover:text-blue-400 transition-colors">
          {name}
        </h3>
        
        <p className="text-6xl font-black mb-6 text-green-400">
          €{price}
        </p>
        
        <p className="text-gray-300 mb-8 text-lg flex-grow">
          {benefit}
        </p>

        <a 
          href={buyUrl}
          className="block w-full bg-white text-black py-4 text-center font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl mt-auto"
        >
          Get Now →
        </a>
      </div>
    </article>
  );
}