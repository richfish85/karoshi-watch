import { NextResponse } from 'next/server';

export const revalidate = 900; // 15 min (ISR)
export async function GET() {
  const url = `https://newsapi.org/v2/everything` +
    `?q="karoshi"%20OR%20"death%20by%20overwork"%20OR%20過労死` +
    `&language=en,ja&sortBy=publishedAt&pageSize=25&apiKey=${process.env.NEWS_API_KEY}`;
  const data = await fetch(url).then(r => r.json());
  return NextResponse.json(data);
}