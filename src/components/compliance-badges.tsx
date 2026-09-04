'use client';

import { ShieldCheck, Lock, Network, BadgeCheck } from 'lucide-react';

const badges = [
  { id: 'hipaa', label: 'HIPAA-Aligned', icon: ShieldCheck },
  { id: 'gdpr', label: 'GDPR Controls', icon: Lock },
  { id: 'hl7', label: 'HL7 FHIR Compatible', icon: Network },
  { id: 'soc2', label: 'SOC 2 Aligned', icon: BadgeCheck },
];

interface ComplianceBadgesProps {
  theme?: 'dark' | 'light';
  title?: string;
  subtitle?: string;
  className?: string;
  badgeIds?: string[];
}

export function ComplianceBadges({
  theme = 'dark',
  title,
  subtitle,
  className = '',
  badgeIds,
}: ComplianceBadgesProps) {
  const visible = badgeIds && badgeIds.length > 0
    ? badges.filter((b) => badgeIds.includes(b.id))
    : badges;

  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>}
          {subtitle && <p className="text-[#A8BFCC] text-base max-w-xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {visible.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.id}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[#A8BFCC]"
              aria-label={badge.label}
            >
              <Icon size={13} className="text-[#3B82F6]" />
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
