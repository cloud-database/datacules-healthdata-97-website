'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Start the progress animation
    const startTime = performance.now()
    const duration = 800

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const rawProgress = Math.min(elapsed / duration, 1)

      // Ease-out cubic for natural feel
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3)
      setProgress(easedProgress * 100)

      if (rawProgress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Hold at 100% briefly then fade out
        setTimeout(() => {
          setVisible(false)
        }, 150)
      }
    }

    const rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Page loading"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        height: '2px',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00C9B1, #7B8CDE)',
          transition: 'width 0.05s linear',
          boxShadow: '0 0 8px rgba(0, 201, 177, 0.8), 0 0 16px rgba(0, 201, 177, 0.4)',
          position: 'relative',
        }}
      >
        {/* Glowing leading edge */}
        <span
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '80px',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, rgba(0, 201, 177, 0.6), #00C9B1)',
            boxShadow: '0 0 12px 2px rgba(0, 201, 177, 0.9)',
          }}
        />
      </div>
    </div>
  )
}