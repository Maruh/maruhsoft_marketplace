import { Lucia } from 'lucia';
import { adapter } from './db';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax' as const,
      path: '/',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      email: attributes.email,
      name: attributes.name,
      emailVerified: attributes.email_verified,
      role: attributes.role,
    };
  },
});

export const validateRequest = cache(async () => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      const cookieStore2 = await cookies();
      cookieStore2.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      const cookieStore2 = await cookies();
      cookieStore2.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {}

  return result;
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  id: string;
  email: string;
  name: string;
  email_verified: number;
  role: 'user' | 'admin';
}
