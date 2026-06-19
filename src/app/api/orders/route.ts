import { NextRequest, NextResponse } from 'next/server';

const orders = new Map();

export async function POST(request: NextRequest) {
  try {
    const { userId, items, total, shippingInfo } = await request.json();

    if (!userId || !items || !total) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const orderId = `ORD-${Date.now()}`;
    const order = {
      id: orderId,
      userId,
      items,
      total,
      shippingInfo,
      status: 'pending',
      createdAt: new Date(),
    };

    orders.set(orderId, order);

    return NextResponse.json(
      { message: 'Order created successfully', order },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const userOrders = Array.from(orders.values()).filter(
      (order) => order.userId === userId
    );

    return NextResponse.json({ orders: userOrders }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
