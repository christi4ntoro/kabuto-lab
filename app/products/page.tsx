import ProductsClient from '@/components/products/ProductsClient';
import { getAllProducts } from '@/lib/productUtils';

export default function ProductsPage() {
  const products = getAllProducts();
  
  return <ProductsClient products={products} />;
}