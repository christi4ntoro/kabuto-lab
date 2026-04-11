import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { productFrontmatterSchema } from '@/lib/schemas';

const productsDirectory = path.join(process.cwd(), 'content/products');

export interface ProductMeta {
  slug: string;
  name: string;
  price: number;
  category: 'template' | 'course' | 'ebook' | 'toolkit' | 'service';
  type: 'free' | 'paid' | 'custom'; // custom = contact for pricing
  highlighted: boolean; // For homepage
  published?: boolean; // NEW: For hiding products in development
  benefit: string;
  description: string;
  features: string[];
  buyUrl?: string; // External purchase link
  image: string;
  relatedProducts?: string[]; // slugs of related products
  content: string; // Full markdown content
}

export function getAllProducts(): ProductMeta[] {
  // Check if directory exists
  if (!fs.existsSync(productsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(productsDirectory);
  
  const products = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getProductBySlug(slug);
    })
    .filter(product => product.published !== false); // NEW: Filter out unpublished products
  
  // Sort by price (free first, then ascending)
  return products.sort((a, b) => {
    if (a.price === 0 && b.price !== 0) return -1;
    if (a.price !== 0 && b.price === 0) return 1;
    return a.price - b.price;
  });
}

export function getProductBySlug(slug: string): ProductMeta {
  const fullPath = path.join(productsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  let fm;
  try {
    fm = productFrontmatterSchema.parse(data);
  } catch (e) {
    throw new Error(`Invalid frontmatter in ${slug}: ${(e as Error).message}`);
  }

  return {
    slug,
    name: fm.name,
    price: fm.price,
    category: fm.category as ProductMeta['category'],
    type: fm.type,
    highlighted: fm.highlighted,
    published: fm.published,
    benefit: fm.benefit ?? '',
    description: fm.description,
    features: fm.features,
    buyUrl: fm.buyUrl,
    image: fm.image,
    relatedProducts: fm.relatedProducts,
    content,
  };
}

export function getHighlightedProducts(limit?: number): ProductMeta[] {
  const allProducts = getAllProducts();
  const highlighted = allProducts.filter(p => p.highlighted);
  return limit ? highlighted.slice(0, limit) : highlighted; // Return all if no limit
}

export function getProductsByCategory(category: string): ProductMeta[] {
  const allProducts = getAllProducts();
  return allProducts.filter(p => p.category === category);
}

export function getProductsByType(type: 'free' | 'paid' | 'custom'): ProductMeta[] {
  const allProducts = getAllProducts();
  return allProducts.filter(p => p.type === type);
}

export function getRelatedProducts(currentSlug: string, relatedSlugs: string[]): ProductMeta[] {
  return relatedSlugs
    .filter(slug => slug !== currentSlug)
    .map(slug => {
      try {
        return getProductBySlug(slug);
      } catch {
        return null;
      }
    })
    .filter((p): p is ProductMeta => p !== null)
    .slice(0, 3);
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}