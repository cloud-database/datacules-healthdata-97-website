interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  const width = variant === 'compact' ? 160 : 300;
  const height = variant === 'compact' ? 40 : 75;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Datacules HealthData 97"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
}

export function DataculesLogoSVG({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return <Logo variant={compact ? 'compact' : 'full'} className={className} />;
}

export function LogoImage({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Datacules HealthData 97"
      width={300}
      height={75}
      className={`object-contain ${className}`}
    />
  );
}
