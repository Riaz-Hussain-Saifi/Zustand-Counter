// app/api/create-user/route.ts
import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();

  try {
    const result = await client.create({
      _type: 'login',
      username,
      email,
      password,
    });

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error('Sanity create error:', err);
    return NextResponse.json({ success: false, message: 'Sanity create error', error: err }, { status: 500 });
  }
}
