import { NextRequest, NextResponse } from 'next/server';

const users = new Map();

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    if (users.has(email)) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    const userId = Math.random().toString(36).substr(2, 9);
    users.set(email, { id: userId, name, password });

    return NextResponse.json(
      { message: 'Account created successfully', user: { id: userId, email, name } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
