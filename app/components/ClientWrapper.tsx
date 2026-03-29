'use client'
import { useState } from 'react';
import { LoadingScreen } from './LoadingScreen';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      {children}
    </>
  );
}
