'use client';

import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import type { ProductMeta } from '@/lib/productUtils';
import { content } from '@/lib/content';

interface SystemsClientProps {
  products: ProductMeta[];
}

export default function SystemsClient({ products }: SystemsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const t = content;

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  const types = [
    { value: 'all', label: t.systems.filterAll },
    { value: 'free', label: t.systems.filterFree },
    { value: 'paid', label: t.systems.filterPaid },
    { value: 'custom', label: t.systems.filterCustom },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const typeMatch = selectedType === 'all' || product.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] p-6 md:p-20 pt-20 md:pt-24 md:pb-48">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">{t.systems.heading}</h1>
        <p className="text-xl text-[--muted] mb-12">
          {t.systems.subheading}
        </p>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2 text-[--muted]">
              {t.systems.filterCategoryLabel}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[--background] border border-[--border] rounded-lg px-4 py-2 text-[--foreground] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? t.systems.filterAll : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2 text-[--muted]">
              {t.systems.filterTypeLabel}
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-[--background] border border-[--border] rounded-lg px-4 py-2 text-[--foreground] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          {(selectedCategory !== 'all' || selectedType !== 'all') && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
                className="px-6 py-2 bg-[--surface-alt] text-[--foreground] rounded-lg hover:bg-[--surface-alt] transition-colors"
              >
                {t.systems.resetFilters}
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        <p className="text-[--muted] mb-6">
          {t.systems.showing} {filteredProducts.length} {filteredProducts.length === 1 ? t.systems.systemSingular : t.systems.systemPlural}
        </p>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              price={product.price}
              benefit={product.benefit}
              productUrl={`/systems/${product.slug}`}
              image={product.image}
              type={product.type}
            />
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[--muted]">{t.systems.noResults}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="mt-4 px-6 py-2 bg-[--foreground] text-[--background] rounded-lg hover:bg-[--surface-alt] transition-colors"
            >
              {t.systems.clearFilters}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
