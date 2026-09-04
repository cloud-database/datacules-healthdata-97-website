import Image from 'next/image';

interface LogoSVGProps {
  className?: string;
  compact?: boolean;
}

export function DataculesLogoSVG({ className = '', compact = false }: LogoSVGProps) {
  if (compact) {
    return (
      <svg
        viewBox="0 0 180 48"
        className={className}
        fill="none"
        aria-label="Datacules HealthData 97"
        role="img"
      >
        {/* Shield body */}
        <path
          d="M6 5 C6 5 18 2 30 5 L30 24 C30 32 18 38 6 24 Z"
          fill="white"
          fillOpacity="0.95"
        />
        {/* Inner figure shapes */}
        <ellipse cx="16" cy="15" rx="4.5" ry="5" fill="#1A3A5C" opacity="0.5" />
        <ellipse cx="22" cy="21" rx="5.5" ry="6" fill="#1A3A5C" opacity="0.4" />
        {/* DATACULES text */}
        <text
          x="38"
          y="29"
          fontFamily="Inter,system-ui,sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="white"
          letterSpacing="1.8"
        >
          DATACULES
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 340 84"
      className={className}
      fill="none"
      aria-label="Datacules HealthData 97"
      role="img"
    >
      {/* Shield body */}
      <path
        d="M7 6 C7 6 20 3 33 6 L33 30 C33 42 20 50 7 30 Z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* Inner figure shapes — molecular/data visualization */}
      <ellipse cx="17" cy="18" rx="5" ry="5.5" fill="#1A3A5C" opacity="0.5" />
      <ellipse cx="24" cy="26" rx="6" ry="6.5" fill="#1A3A5C" opacity="0.4" />

      {/* DATACULES text */}
      <text
        x="44"
        y="34"
        fontFamily="Inter,system-ui,sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="white"
        letterSpacing="2.2"
      >
        DATACULES
      </text>
      {/* ® mark */}
      <text
        x="183"
        y="28"
        fontFamily="Inter,system-ui,sans-serif"
        fontSize="10"
        fontWeight="400"
        fill="white"
        fillOpacity="0.55"
      >
        ®
      </text>

      {/* Vertical divider */}
      <line
        x1="196"
        y1="14"
        x2="196"
        y2="70"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* AI Powered label */}
      <text
        x="207"
        y="28"
        fontFamily="Inter,system-ui,sans-serif"
        fontSize="9.5"
        fontWeight="400"
        fill="white"
        fillOpacity="0.55"
        letterSpacing="0.8"
      >
        AI Powered
      </text>

      {/* HealthData97 */}
      <text
        x="207"
        y="54"
        fontFamily="Inter,system-ui,sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="white"
      >
        HealthData
        <tspan fontWeight="900">97</tspan>
      </text>

      {/* HEALTHCARE PLATFORM */}
      <text
        x="207"
        y="70"
        fontFamily="Inter,system-ui,sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="white"
        fillOpacity="0.5"
        letterSpacing="3.8"
      >
        HEALTHCARE PLATFORM
      </text>
    </svg>
  );
}

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return <DataculesLogoSVG compact={variant === 'compact'} className={className} />;
}

export function LogoImage({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/331x89.png"
      alt="Datacules HealthData 97"
      width={165}
      height={44}
      className={`object-contain ${className}`}
      priority
    />
  );
}
