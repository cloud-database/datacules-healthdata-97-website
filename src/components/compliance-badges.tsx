'use client'

import Image from 'next/image'
import { BRAND } from '@/lib/brand'

const badges = [
  {
    id: 'hipaa',
    label: 'HIPAA Compliant',
    imagePath: '/images/brand/hipaa-badge.png',
    fallbackText: 'HIPAA',
  },
  {
    id: 'gdpr',
    label: 'GDPR Ready',
    imagePath: '/images/brand/gdpr-badge.png',
    fallbackText: 'GDPR',
  },
  {
    id: 'hl7',
    label: 'HL7 Certified',
    imagePath: '/images/brand/hl7-badge.png',
    fallbackText: 'HL7',
  },
  {
    id: 'fhir',
    label: 'FHIR Compliant',
    imagePath: '/images/brand/fhir-badge.png',
    fallbackText: 'FHIR',
  },
  {
    id: 'soc2',
    label: 'SOC 2 Type II',
    imagePath: '/images/brand/soc2-badge.png',
    fallbackText: 'SOC 2',
  },
  {
    id: 'hitrust',
    label: 'HITRUST Certified',
    imagePath: '/images/brand/hitrust-badge.png',
    fallbackText: 'HITRUST',
  },
]

interface BadgeItemProps {
  id: string
  label: string
  imagePath: string
  fallbackText: string
  theme: 'dark' | 'light'
}

function BadgeItem({ id, label, imagePath, fallbackText, theme }: BadgeItemProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={[
        'flex flex-col items-center justify-center gap-2',
        'w-20 rounded-lg p-3',
        'transition-transform duration-200 hover:scale-105',
        isDark
          ? 'border border-white/10 bg-white/5 hover:bg-white/10'
          : 'border border-gray-200 bg-white hover:bg-gray-50 shadow-sm',
      ].join(' ')}
      aria-label={label}
      title={label}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image
          src={imagePath}
          alt={label}
          width={48}
          height={48}
          className={[
            'w-full h-auto object-contain',
            isDark ? 'filter brightness-0 invert' : 'opacity-80',
          ].join(' ')}
          sizes="48px"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              const fallback = parent.querySelector('.badge-fallback') as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }
          }}
        />
        <span
          className={[
            'badge-fallback hidden items-center justify-center',
            'absolute inset-0 text-xs font-bold text-center leading-tight',
            isDark ? 'text-white/80' : 'text-gray-600',
          ].join(' ')}
          style={{ display: 'none' }}
        >
          {fallbackText}
        </span>
      </div>
      <span
        className={[
          'text-center leading-tight font-medium',
          'text-[10px] tracking-wide uppercase',
          isDark ? 'text-white/60' : 'text-gray-500',
        ].join(' ')}
      >
        {label}
      </span>
    </div>
  )
}

interface ComplianceBadgesProps {
  theme?: 'dark' | 'light'
  title?: string
  subtitle?: string
  className?: string
  badgeIds?: string[]
}

export function ComplianceBadges({
  theme = 'dark',
  title,
  subtitle,
  className = '',
  badgeIds,
}: ComplianceBadgesProps) {
  const isDark = theme === 'dark'

  const visibleBadges =
    badgeIds && badgeIds.length > 0
      ? badges.filter((b) => badgeIds.includes(b.id))
      : badges

  return (
    <div className={['w-full', className].join(' ')}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2
              className={[
                'text-2xl md:text-3xl font-bold mb-2',
                isDark ? 'text-white' : 'text-gray-900',
              ].join(' ')}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={[
                'text-base max-w-xl mx-auto',
                isDark ? 'text-white/60' : 'text-gray-500',
              ].join(' ')}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {visibleBadges.map((badge) => (
          <BadgeItem
            key={badge.id}
            id={badge.id}
            label={badge.label}
            imagePath={badge.imagePath}
            fallbackText={badge.fallbackText}
            theme={theme}
          />
        ))}
      </div>

      {subtitle === undefined && title === undefined && (
        <p
          className={[
            'text-center text-xs mt-4 tracking-wide',
            isDark ? 'text-white/40' : 'text-gray-400',
          ].join(' ')}
        >
          {BRAND.name} meets the highest standards for healthcare data security and compliance.
        </p>
      )}
    </div>
  )
}