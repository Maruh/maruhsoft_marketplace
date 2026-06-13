import { NextRequest, NextResponse } from 'next/server';

// Mock product database
const products = [
  {
    id: '1',
    name: 'React Template',
    slug: 'react-template',
    price: 49.99,
    description: 'Complete React template with modern components',
    rating: 4.8,
    reviewCount: 120,
    featured: true,
  },
  {
    id: '2',
    name: 'Next.js Starter',
    slug: 'nextjs-starter',
    price: 79.99,
    description: 'Full-featured Next.js starter kit',
    rating: 4.9,
    reviewCount: 95,
    featured: false,
  },
  {
    id: '3',
    name: 'Tailwind UI Kit',
    slug: 'tailwind-ui',
    price: 39.99,
    description: 'Comprehensive Tailwind CSS component library',
    rating: 4.7,
    reviewCount: 210,
    featured: true,
  },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search')?.toLowerCase();
    const featured = searchParams.get('featured');

    let filtered = products;

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      );
    }

    if (featured === 'true') {
      filtered = filtered.filter((p) => p.featured);
    }

    return NextResponse.json({ products: filtered }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
