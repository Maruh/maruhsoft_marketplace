'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/product-card';
import Link from 'next/link';

const categories = [
  { name: 'Templates', slug: 'templates', count: 145 },
  { name: 'Courses', slug: 'courses', count: 89 },
  { name: 'UI Kits', slug: 'ui-kits', count: 67 },
  { name: 'Code Snippets', slug: 'code-snippets', count: 234 },
  { name: 'Themes', slug: 'themes', count: 56 },
  { name: 'Icons & Graphics', slug: 'icons-graphics', count: 178 },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Categories</h1>
        <p className="text-muted-foreground">Browse products by category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer border border-border">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground mb-4">{category.count} products</p>
              <Button variant="ghost" size="sm">
                Browse →
              </Button>
            </div>
          </Link>
        ))}
      </div>

      {/* Popular Products */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <ProductCard
              key={i}
              id={`${i}`}
              name={`Product ${i}`}
              slug={`product-${i}`}
              price={49.99 * i}
              rating={4.5 + (i * 0.1)}
              reviewCount={50 * i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
