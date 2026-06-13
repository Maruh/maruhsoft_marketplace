import { NextRequest, NextResponse } from 'next/server';

// Mock payment processing
export async function POST(request: NextRequest) {
  try {
    const { orderId, amount, paymentMethod } = await request.json();

    if (!orderId || !amount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simulate payment processing
    if (amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const transactionId = `TXN-${Date.now()}`;

    return NextResponse.json(
      {
        message: 'Payment processed successfully',
        transaction: {
          id: transactionId,
          orderId,
          amount,
          status: 'completed',
          timestamp: new Date(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    );
  }
}
