import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Problemlot.com';
    const description = searchParams.get('desc') || 'Odszkodowania za opóźnione i odwołane loty';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e40af', // blue-800
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            color: 'white',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            {/* Plane Icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: 20 }}
            >
              <path d="M2 12h20" />
              <path d="M13 2l9 10-9 10" />
              <path d="M2 12l5-5m0 10l-5-5" />
            </svg>
            <span style={{ fontSize: 40, fontWeight: 'bold' }}>Problemlot.com</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 40px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20, lineHeight: 1.2 }}>
              {title}
            </div>
            <div style={{ fontSize: 30, opacity: 0.8, maxWidth: 800 }}>
              {description}
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 20,
              opacity: 0.6,
            }}
          >
            Sprawdź swoje odszkodowanie do 600 €
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
