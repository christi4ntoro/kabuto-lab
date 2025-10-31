interface ProductCardProps {
    name: string;
    price: number;
    benefit: string;
    buyUrl: string;
}
'use client' // IMPORTANT: Animation components need this

import { motion } from 'framer-motion';

export default function ProductCard({ name, price, benefit, buyUrl }: ProductCardProps) {
    return (
        <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.3 }}
    className="border border-white/20 p-6 rounded-lg bg-black/50 backdrop-blur"
    >
    <div className="border border-white/20 p-6 rounded-lg hover:border-white/60 
                    transition-all duration-300 hover:scale-105 hover:shadow-2xl
                    group cursor-pointer">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {name}
        </h3>
        <p className="text-5xl font-black mb-4 text-green-400">
        €{price}
        </p>
        <p className="text-gray-400 mb-6">
        {benefit}
        </p>
        <a 
        href={buyUrl}
        className="block w-full bg-white text-black py-3 text-center font-bold 
                    rounded-lg hover:bg-blue-400 hover:text-white transition-all
                    transform hover:-translate-y-1"
        >
        Get Now →
        </a>
    </div>
    </motion.div>
    )
}