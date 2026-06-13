'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rating } from '@/components/ui/rating';
import { Alert } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share2, ShoppingCart } from 'lucide-react';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = React.useState(1);
  const [wishlisted, setWishlisted] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center text-muted-foreground">
            [Product Image]
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-muted rounded h-20" />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <Badge className="mb-4">In Stock</Badge>
          <h1 className="text-4xl font-bold mb-2">Premium React Template</h1>
          <div className="flex items-center gap-4 mb-6">
            <Rating value={4.8} />
            <span className="text-sm text-muted-foreground">(120 reviews)</span>
          </div>

          <p className="text-muted-foreground mb-6">
            A comprehensive React template with everything you need to build modern web applications.
          </p>

          <Alert type="success" message="Limited time offer: 20% off!" className="mb-6" />

          <div className="bg-muted p-6 rounded-lg mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold">$79.99</span>
              <span className="text-lg text-muted-foreground line-through">$99.99</span>
            </div>
            <p className="text-sm text-muted-foreground">Instant download available</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setWishlisted(!wishlisted)}
            >
              <Heart className={`h-5 w-5 ${wishlisted ? 'fill-current' : ''}`} />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h3 className="font-semibold">What's Included</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Complete React template with modern components</li>
                <li>Fully responsive design</li>
                <li>TypeScript support</li>
                <li>Tailwind CSS styling</li>
                <li>Free lifetime updates</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews">
              <p className="text-muted-foreground">Reviews coming soon</p>
            </TabsContent>
            <TabsContent value="faq">
              <p className="text-muted-foreground">FAQ coming soon</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
