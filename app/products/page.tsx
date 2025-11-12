import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen text-white p-6 md:p-16 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">Products</h1>
        <p className="text-xl text-gray-400 mb-12">
          Tools for immersive experience designers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              benefit={product.benefit}
              buyUrl={product.buyUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}