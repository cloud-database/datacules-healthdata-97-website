'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#06487A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pageLoaderFade 0.9s ease-out forwards',
      }}
      aria-hidden="true"
    >
      <div style={{ animation: 'loaderPulse 1.2s ease-in-out infinite' }}>
        <Image
          src="/331x89.png"
          alt="Datacules HealthData 97"
          width={200}
          height={54}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
