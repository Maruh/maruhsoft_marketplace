'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <Badge className="mx-auto">Welcome to Maruhsoft Marketplace</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Discover Amazing Digital Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shop from thousands of high-quality digital products, templates, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/categories">
              <Button size="lg" variant="outline">
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Instant Access</h3>
              <p className="text-muted-foreground">Get instant access to your digital products after purchase</p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Secure & Safe</h3>
              <p className="text-muted-foreground">Your transactions are protected with industry-leading security</p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Fast Support</h3>
              <p className="text-muted-foreground">24/7 customer support ready to help you anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products?featured=true">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-muted h-32" />
              <div className="p-4">
                <h3 className="font-semibold line-clamp-2">Product {i}</h3>
                <p className="text-sm text-muted-foreground mt-1">High-quality digital product</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">$99.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
