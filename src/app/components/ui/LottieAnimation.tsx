import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
  src: string;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export function LottieAnimation({
  src,
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  className = '',
}: LottieAnimationProps) {
  return (
    <div className={className} style={{ width, height, flexShrink: 0 }}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
