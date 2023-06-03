import results from 'mock/results';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const size = 10;
  const page = Number(searchParams.get('page')) || 1;
  const next =
    page > 3 ? null : `http://localhost:3000/api/termos_tuss?page=${page + 1}`;
  const data = results.slice((page - 1) * size, page * size);
  return NextResponse.json({
    next: next,
    previous: null,
    results: data
  });
}
