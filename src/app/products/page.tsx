'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/ui/product-card';
import { LoadingState } from '@/components/ui/loader';
import { EmptyState } from '@/components/ui/empty-state';
import { Filter } from 'lucide-react';

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [filterOpen, setFilterOpen] = useState(false);
  const [loading] = useState(false);
  const [products] = useState([
    { id: '1', name: 'React Template', slug: 'react-template', price: 49.99, rating: 4.8, reviewCount: 120, featured: true },
    { id: '2', name: 'Next.js Starter', slug: 'nextjs-starter', price: 79.99, rating: 4.9, reviewCount: 95, featured: false },
    { id: '3', name: 'Tailwind UI Kit', slug: 'tailwind-ui', price: 39.99, rating: 4.7, reviewCount: 210, featured: true },
    { id: '4', name: 'JavaScript Course', slug: 'js-course', price: 99.99, rating: 4.6, reviewCount: 340, featured: false },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Products</h1>
        <p className="text-muted-foreground">Browse our collection of digital products</p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setFilterOpen(!filterOpen)}
          className="w-full sm:w-auto"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h3 className="font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Category</label>
              <div className="mt-2 space-y-2">
                {['Templates', 'Courses', 'UI Kits', 'Code'].map((cat) => (
                  <label key={cat} className="flex items-center">
                    <input type="checkbox" className="rounded" defaultChecked={false} />
                    <span className="ml-2 text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Price Range</label>
              <div className="mt-2 flex gap-2">
                <input type="number" placeholder="Min" className="w-20 px-2 py-1 border border-input rounded text-sm" />
                <input type="number" placeholder="Max" className="w-20 px-2 py-1 border border-input rounded text-sm" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {loading ? (
        <LoadingState message="Loading products..." />
      ) : products.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try adjusting your filters"
          action={{ label: 'Clear Filters', onClick: () => {} }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => console.log('Added to cart')}
              onWishlist={(id) => console.log('Wishlist:', id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
