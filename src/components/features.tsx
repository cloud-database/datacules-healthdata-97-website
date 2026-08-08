"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    name: "Unified Patient Repository",
    description:
      "Aggregates data from EHR, labs, prescriptions, appointments, billing, and telehealth modules into a single comprehensive patient view.",
    category: "Core Platform",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "AI/ML Predictive Engine",
    description:
      "Readmission risk scoring, claim denial prediction, no-show forecasting, vitals anomaly detection, and chronic condition progression using XGBoost, Random Forest, and Isolation Forest models.",
    category: "AI Intelligence",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <path d="M8 12H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1" />
        <path d="M16 12h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
        <path d="M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
        <circle cx="9" cy="15" r="1" fill="#00C9B1" />
        <circle cx="15" cy="15" r="1" fill="#00C9B1" />
      </svg>
    ),
  },
  {
    name: "HIPAA & GDPR Compliance",
    description:
      "Full audit trails, PHI encryption at rest and in transit, automated audit logging, data export capabilities, and privacy request tracking.",
    category: "Security",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Real-Time Vitals Monitoring",
    description:
      "IoT device integration with configurable critical threshold alerting and automated anomaly detection for continuous patient safety oversight.",
    category: "Monitoring",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "Revenue Cycle Management",
    description:
      "Intelligent billing, claims scrubbing, ICD code mapping assistance, and AI-driven denial prediction to maximize reimbursement and reduce revenue leakage.",
    category: "Financial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20" />
        <path d="M7 15h2M15 15h2" />
      </svg>
    ),
  },
  {
    name: "HL7 & FHIR Integration",
    description:
      "REST API, MQTT, and SFTP protocol support enabling seamless connectivity to major EHR systems, lab systems, and third-party health data sources.",
    category: "Interoperability",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2c-2.67 3.33-4 6.67-4 10s1.33 6.67 4 10c2.67-3.33 4-6.67 4-10s-1.33-6.67-4-10z" />
      </svg>
    ),
  },
];

export function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (comparisonRef.current) observer.observe(comparisonRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      style={{
        background: "#112744",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* ── Scroll-triggered fade-up animation ── */
        .features-animate {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .features-animate.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Glassmorphism feature card ── */
        .feature-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-top: 3px solid #00C9B1;
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 48px rgba(0, 0, 0, 0.28),
                      0 1px 0 rgba(255, 255, 255, 0.06) inset;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 40px;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(0, 201, 177, 0.04) 0%,
            transparent 60%
          );
          pointer-events: none;
        }
        .feature-card:hover {
          border-color: rgba(0, 201, 177, 0.3);
          border-top-color: #00C9B1;
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(0, 201, 177, 0.15),
                      0 1px 0 rgba(255, 255, 255, 0.08) inset;
          transform: translateY(-4px);
        }

        /* ── Icon wrapper ── */
        .feature-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(0, 201, 177, 0.08);
          border: 1px solid rgba(0, 201, 177, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: background 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .feature-card:hover .feature-icon-wrap {
          background: rgba(0, 201, 177, 0.14);
          border-color: rgba(0, 201, 177, 0.35);
          box-shadow: 0 0 20px rgba(0, 201, 177, 0.2);
        }

        /* ── Category eyebrow label ── */
        .feature-category {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #00C9B1;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1;
        }

        /* Teal cross micro-decoration (inside card category) */
        .feature-category-cross {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          position: relative;
        }
        .feature-category-cross::before,
        .feature-category-cross::after {
          content: "";
          position: absolute;
          background: #00C9B1;
          border-radius: 1px;
        }
        .feature-category-cross::before {
          width: 2px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .feature-category-cross::after {
          width: 10px;
          height: 2px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .feature-name {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
          line-height: 1.35;
        }
        .feature-desc {
          font-size: 15px;
          color: #A8BFCC;
          line-height: 1.75;
        }

        /* ── Comparison glassmorphism card ── */
        .comparison-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 48px rgba(0, 0, 0, 0.28),
                      0 1px 0 rgba(255, 255, 255, 0.06) inset;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .comparison-card:hover {
          border-color: rgba(0, 201, 177, 0.2);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(0, 201, 177, 0.1),
                      0 1px 0 rgba(255, 255, 255, 0.08) inset;
        }

        /* ── Section heading left-border accent ── */
        .section-heading-accent {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .section-heading-accent::before {
          content: "";
          display: block;
          width: 4px;
          height: 48px;
          border-radius: 2px;
          background: #00C9B1;
          flex-shrink: 0;
          margin-top: 4px;
        }

        /* ── Eyebrow cross micro-decoration (section level) ── */
        .eyebrow-cross {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          position: relative;
        }
        .eyebrow-cross::before,
        .eyebrow-cross::after {
          content: "";
          position: absolute;
          background: #00C9B1;
          border-radius: 1px;
        }
        .eyebrow-cross::before {
          width: 2px;
          height: 12px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .eyebrow-cross::after {
          width: 12px;
          height: 2px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* ── Feature grid stagger delays ── */
        .feature-card:nth-child(1) { transition-delay: 0.10s; }
        .feature-card:nth-child(2) { transition-delay: 0.25s; }
        .feature-card:nth-child(3) { transition-delay: 0.40s; }
        .feature-card:nth-child(4) { transition-delay: 0.55s; }
        .feature-card:nth-child(5) { transition-delay: 0.70s; }
        .feature-card:nth-child(6) { transition-delay: 0.85s; }

        /* ── Illustrative image container inside feature card ── */
        .feature-card-image {
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          margin-bottom: 24px;
          background: rgba(0, 201, 177, 0.04);
          border: 1px solid rgba(0, 201, 177, 0.10);
        }

        /* ── Comparison image container ── */
        .comparison-image-container {
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          position: relative;
          margin-bottom: 24px;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Mobile responsive ── */
        @media (max-width: 768px) {
          .feature-card {
            padding: 24px;
          }
        }
        @media (max-width: 640px) {
          .feature-card {
            padding: 20px;
          }
        }
      `}</style>

      {/* Subtle ambient background glow — matches section depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(0,201,177,0.05) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(123,140,222,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}
      >

        {/* ── Section Heading ── */}
        <div
          ref={headingRef}
          className="features-animate"
          style={{ marginBottom: "72px" }}
        >
          <div className="section-heading-accent">
            <div>
              {/* Eyebrow label */}
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#00C9B1",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  lineHeight: 1,
                }}
              >
                <span className="eyebrow-cross" aria-hidden="true" />
                Platform Capabilities
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                  maxWidth: "640px",
                }}
              >
                Enterprise-Grade Features Built for{" "}
                <span style={{ color: "#00C9B1" }}>Healthcare</span>
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: "#A8BFCC",
                  lineHeight: 1.75,
                  maxWidth: "560px",
                }}
              >
                Every capability purpose-built for the complexity of healthcare
                data — from unified patient records to AI-powered predictive
                intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* ── Legacy vs Modern Comparison Card ── */}
        <div
          ref={comparisonRef}
          className="comparison-card features-animate"
          style={{ marginBottom: "72px", transitionDelay: "0.1s" }}
        >
          {/* Card header */}
          <div
            style={{
              padding: "32px 40px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#00C9B1",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                lineHeight: 1,
              }}
            >
              <span className="eyebrow-cross" aria-hidden="true" />
              Platform Evolution
            </div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "8px",
              }}
            >
              From Legacy to AI-Powered Intelligence
            </h3>
            <p style={{ fontSize: "14px", color: "#A8BFCC", lineHeight: 1.6 }}>
              See how HealthData97 transforms fragmented healthcare data
              management into a unified, intelligent platform.
            </p>
          </div>

          {/* Before / After columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {/* Before */}
            <div
              style={{
                padding: "32px 40px",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "#f87171",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#ef4444",
                      opacity: 0.8,
                    }}
                  />
                  Before — Legacy System
                </span>
              </div>

              {/* Legacy image — rounded-xl overflow-hidden grid card, layout equal to text */}
              <div
                className="comparison-image-container"
                style={{
                  background: "rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "20px",
                }}
              >
                <Image
                  src="/old_sample_324x89.png"
                  alt="Legacy HealthData platform"
                  width={324}
                  height={89}
                  sizes="(max-width: 768px) 100vw, 324px"
                  className="w-full h-auto object-contain"
                  style={{ opacity: 0.65, maxHeight: "56px", width: "auto" }}
                />
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Siloed data across disparate EHR and billing modules",
                  "Manual claims processing with high denial rates",
                  "No predictive risk scoring or anomaly detection",
                  "Limited interoperability and integration support",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#A8BFCC",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      style={{ marginTop: "1px", flexShrink: 0 }}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M5 5l6 6M11 5l-6 6"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div style={{ padding: "32px 40px" }}>
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    background: "rgba(0,201,177,0.08)",
                    border: "1px solid rgba(0,201,177,0.2)",
                    color: "#00C9B1",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#00C9B1",
                      opacity: 0.9,
                    }}
                  />
                  After — HealthData97 AI Platform
                </span>
              </div>

              {/* HealthData97 image — rounded-xl overflow-hidden grid card, layout equal to text */}
              <div
                className="comparison-image-container"
                style={{
                  background: "rgba(0,201,177,0.04)",
                  border: "1px solid rgba(0,201,177,0.12)",
                  padding: "20px",
                }}
              >
                <Image
                  src="/331x89.png"
                  alt="HealthData97 AI-powered healthcare platform"
                  width={331}
                  height={89}
                  sizes="(max-width: 768px) 100vw, 331px"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "56px", width: "auto" }}
                />
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Unified patient repository across all care modules",
                  "AI-driven claims scrubbing and denial prediction",
                  "XGBoost & Random Forest predictive risk models",
                  "Full HL7/FHIR interoperability and HIPAA compliance",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#A8BFCC",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      style={{ marginTop: "1px", flexShrink: 0 }}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="#00C9B1"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#00C9B1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card footer transition arrow */}
          <div
            style={{
              padding: "16px 40px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.01)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#f87171",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Legacy Platform
            </span>
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
              <path
                d="M0 8h36M28 2l8 6-8 6"
                stroke="#A8BFCC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#00C9B1",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              HealthData97 AI
            </span>
          </div>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="feature-card features-animate"
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* Teal icon in glassmorphism wrapper — layout equal to text content */}
              <div className="feature-icon-wrap">{feature.icon}</div>

              {/* Category eyebrow with teal cross micro-decoration */}
              <div className="feature-category">
                <span className="feature-category-cross" aria-hidden="true" />
                {feature.category}
              </div>

              <h3 className="feature-name">{feature.name}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}