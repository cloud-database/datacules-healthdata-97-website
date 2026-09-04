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
        width={165}
        height={44}
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
