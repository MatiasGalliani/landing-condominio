'use client';

import { useEffect } from 'react';

export default function ConversionEvent() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-17086810445/XkJLCJSzz8gaEM2S0NM_',
        value: 1.0,
        currency: 'EUR',
      });
    }
  }, []);

  return null;
}


