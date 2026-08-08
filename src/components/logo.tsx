import { BRAND } from '@/lib/brand';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 36 }: LogoProps) {
  const scale = size / 36;
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ width: size, height: size, display: 'inline-block', transform: `scale(${scale})`, transformOrigin: 'left center' }}
      aria-label={`${BRAND.name} logo`}
      role="img"
      dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 90\" fill=\"#1B5186\">\n  <!-- Datacules Icon (shield + arrow) -->\n  <g transform=\"translate(8,24) scale(0.1)\">\n    <path d=\"M181.29,184.29C126.9,235.11,34.46,212.8,12.76,135.42C10.36,126.88,9.5,117.7,9.36,108.79C8.85,76.81,8.96,44.83,8.84,12.84C8.83,11.72,8.83,10.59,8.83,8.68C77.25,8.68,145.3,8.68,213.93,8.68C213.93,12.37,213.92,16.48,213.94,20.6C214.05,49.25,213.94,77.91,214.36,106.55C214.82,137.32,203.84,163.02,181.29,184.29z\"/>\n    <path d=\"M67.06,367.06C58.16,375.63,49.52,383.94,40.82,392.31C18.38,373.54,3.36,332.24,14.13,293.18C25.79,250.9,64.05,220.06,107.37,218.08C152.54,216.01,192.99,242.05,208.75,283.22C225.08,325.88,210.52,369.13,185.01,392.84C161.41,368.56,137.77,344.24,115.11,320.93C98.52,336.85,82.91,351.83,67.06,367.06z\"/>\n  </g>\n\n  <!-- \"DATACULES\" text -->\n  <text x=\"38\" y=\"56\" font-family=\"'Georgia','Times New Roman',serif\" font-size=\"25\" letter-spacing=\"4\" font-weight=\"400\">DATACULES</text>\n  <text x=\"232\" y=\"40\" font-family=\"'Georgia','Times New Roman',serif\" font-size=\"11\" font-weight=\"400\" baseline-shift=\"super\">&#174;</text>\n\n  <!-- Divider line -->\n  <line x1=\"250\" y1=\"22\" x2=\"250\" y2=\"68\" stroke=\"#1B5186\" stroke-width=\"1\" opacity=\"0.4\"/>\n\n  <!-- \"AI Powered\" -->\n  <text x=\"264\" y=\"37\" font-family=\"'Inter','Segoe UI',system-ui,sans-serif\" font-size=\"10\" font-weight=\"300\" opacity=\"0.7\">AI Powered</text>\n\n  <!-- \"HealthData97\" -->\n  <text x=\"264\" y=\"58\" font-family=\"'Inter','Segoe UI',system-ui,sans-serif\" font-size=\"25\" font-weight=\"700\" letter-spacing=\"0.5\">HealthData97</text>\n\n  <!-- \"HEALTHCARE PLATFORM\" -->\n  <text x=\"264\" y=\"73\" font-family=\"'Inter','Segoe UI',system-ui,sans-serif\" font-size=\"9.5\" font-weight=\"500\" letter-spacing=\"3\">HEALTHCARE PLATFORM</text>\n</svg>\n" }}
    />
  );
}
