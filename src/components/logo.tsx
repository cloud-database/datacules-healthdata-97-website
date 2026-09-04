interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  const width = variant === 'compact' ? 240 : 450;
  const height = variant === 'compact' ? 60 : 112;
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
      width={450}
      height={112}
      className={`object-contain ${className}`}
    />
  );
}
