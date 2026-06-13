import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import { Badge } from './badge';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  onAddToCart?: () => void;
  onWishlist?: (id: string) => void;
  isWishlisted?: boolean;
  className?: string;
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  image,
  rating,
  reviewCount,
  featured,
  onAddToCart,
  onWishlist,
  isWishlisted,
  className,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        'group rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      <Link href={`/products/${slug}`}>
        <div className="relative overflow-hidden bg-muted h-48">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {featured && (
            <Badge variant="default" className="absolute top-2 right-2">
              Featured
            </Badge>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              onWishlist?.(id);
            }}
            className="absolute top-2 left-2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
          >
            <Heart
              className={cn('h-5 w-5', isWishlisted ? 'fill-destructive text-destructive' : 'text-muted-foreground')}
            />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {rating !== undefined && (
          <div className="flex items-center gap-1 mt-2 text-xs">
            <span className="text-yellow-500">★</span>
            <span className="font-medium">{rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviewCount} reviews)</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-lg">{formatPrice(price)}</span>
          <Button size="sm" onClick={onAddToCart}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
