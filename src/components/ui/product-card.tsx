'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rating } from '@/components/ui/rating';

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  onAddToCart?: (id: string) => void;
  onWishlist?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  rating,
  reviewCount,
  featured,
  onAddToCart,
  onWishlist,
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = React.useState(false);

  return (
    <div className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow bg-background">
      {/* Image */}
      <Link href={`/products/${slug}`}>
        <div className="bg-muted h-48 flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors">
          [Image]
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/products/${slug}`}>
            <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          {featured && <Badge variant="secondary">Featured</Badge>}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Rating value={rating} />
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1"
            onClick={() => onAddToCart?.(id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            size="icon"
            variant="outline"
            size="sm"
            onClick={() => {
              setWishlisted(!wishlisted);
              onWishlist?.(id);
            }}
          >
            <Heart
              className={`h-4 w-4 ${
                wishlisted ? 'fill-current text-destructive' : ''
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
