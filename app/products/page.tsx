import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function ProductsPage() {
return (
    <div className="min-h-screen bg-black text-white p-8">
    <h1 className="text-6xl font-bold mb-12 text-center">
        Products
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
        <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            benefit={product.benefit}
            buyUrl={product.lemonsqueezy_url}
        />
        ))}
    </div>
    </div>
)
}