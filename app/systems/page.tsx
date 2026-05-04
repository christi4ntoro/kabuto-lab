import SystemsClient from '@/components/systems/SystemsClient';
import { getAllProducts } from '@/lib/productUtils';

export default function SystemsPage() {
  const products = getAllProducts();

  return <SystemsClient products={products} />;
}
