// Server Component - fetches data
import ProductScrollSection from './ProductScrollSection';
import { getHighlightedProducts } from '@/lib/productUtils';

export default function ProductScrollWrapper() {
  // Get ALL highlighted products (no limit)
  let products: Array<{
    slug: string;
    name: string;
    price: number;
    benefit: string;
    image: string;
    type: 'free' | 'paid' | 'custom';
  }> = [];
  
  try {
    const highlightedProducts = getHighlightedProducts(); // Removed the 6 limit
    products = highlightedProducts.map(product => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      benefit: product.benefit,
      image: product.image,
      type: product.type,
    }));
  } catch (error) {
    console.log('No markdown products found, using empty array');
  }

  return <ProductScrollSection products={products} />;
}