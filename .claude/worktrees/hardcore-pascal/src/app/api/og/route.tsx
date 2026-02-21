import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Engenharia Biomédica';
  const category = searchParams.get('category') || 'Portal';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0f2a4a',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: category badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              backgroundColor: 'rgba(0, 180, 158, 0.2)',
              border: '1px solid rgba(0, 180, 158, 0.4)',
              borderRadius: '8px',
              padding: '6px 16px',
              fontSize: '18px',
              color: '#5eead4',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </div>
        </div>

        {/* Middle: title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? '42px' : '52px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: site branding */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#00b49e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              EB
            </div>
            <div style={{ fontSize: '22px', color: '#94a3b8', fontWeight: 500 }}>
              engenhariabiomedica.com
            </div>
          </div>
          <div style={{ fontSize: '16px', color: '#64748b' }}>
            Portal de Referência no Brasil
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
