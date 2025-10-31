interface ProductCardProps {
    name: string;
    price: number;
    benefit: string;
    buyUrl: string;
}

export default function ProductCard({ name, price, benefit, buyUrl }: ProductCardProps) {
    return (
    <div className="border border-white/20 p-8 rounded-lg hover:border-white/60 transition-all duration-300 hover:scale-105 bg-black/50 backdrop-blur">
        <h3 className="text-2xl font-bold mb-3 hover:text-blue-400 transition-colors">
        {name}
        </h3>
        <p className="text-6xl font-black mb-6 text-green-400">
        €{price}
        </p>
        <p className="text-gray-300 mb-8 text-lg">
        {benefit}
        </p>
        <a 
        href={buyUrl}
        className="block w-full bg-white text-black py-4 text-center font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl"
        >
        Get Now →
        </a>
    </div>
    )
}