import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SPLASH_DURATION = 2800;

interface LoadingScreenProps {
  onDone: () => void;
}

export function LoadingScreen({ onDone }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), SPLASH_DURATION);
    const doneTimer = setTimeout(() => onDone(), SPLASH_DURATION + 600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6d28d9 50%, #7c3aed 100%)' }}
    >
      {/* Logo + name */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/rbs-logo.png"
          alt="RBS Global Ventures"
          className="w-12 h-12 rounded-full border-2 border-white/30"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="text-left">
          <h1 className="text-white text-xl font-bold tracking-tight leading-tight">RBS Global Ventures</h1>
          <p className="text-purple-200 text-xs font-medium">Steel & Scrap Trading Experts</p>
        </div>
      </div>

      {/* Purple loading spinner */}
      <DotLottieReact
        src="https://assets-v2.lottiefiles.com/a/8d190aa6-1170-11ee-a829-5f83e6db6615/K9BV41j6AA.lottie"
        loop
        autoplay
        style={{ width: 120, height: 120 }}
      />

      {/* Tagline */}
      <p className="mt-4 text-purple-200 text-sm tracking-widest uppercase font-medium">
        Building Strength. Creating Value.
      </p>
    </div>
  );
}
