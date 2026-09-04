import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'compact') {
    return (
      <Image
        src="/1207x302.png"
        alt="Datacules HealthData 97"
        width={160}
        height={40}
        className={`object-contain ${className}`}
        priority
      />
    );
  }
  return (
    <Image
      src="/1207x302.png"
      alt="Datacules HealthData 97"
      width={300}
      height={75}
      className={`object-contain ${className}`}
      priority
    />
  );
}

// Named alias used by navbar
export function DataculesLogoSVG({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  return <Logo variant={compact ? 'compact' : 'full'} className={className} />;
}

export function LogoImage({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/1207x302.png"
      alt="Datacules HealthData 97"
      width={300}
      height={75}
      className={`object-contain ${className}`}
      priority
    />
  );
}
