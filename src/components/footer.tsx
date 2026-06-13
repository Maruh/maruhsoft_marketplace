'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Maruhsoft</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted digital marketplace for quality products.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
              <li><Link href="/featured" className="text-muted-foreground hover:text-foreground">Featured</Link></li>
              <li><Link href="/new" className="text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-foreground">Returns</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Maruhsoft Marketplace. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="text-sm text-muted-foreground">Made with ♥ by Maruhsoft</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
