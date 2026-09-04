const capabilities = [
  'HIPAA-Aligned',
  'HL7 FHIR Compatible',
  'REST API',
  'AI-Powered',
  'Enterprise Security',
  'Multi-Module Platform',
  '354+ Endpoints',
  '23 Integrated Modules',
];

export function TrustBar() {
  return (
    <div className="bg-[#061422] border-y border-white/5 py-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#4A6080] uppercase whitespace-nowrap flex-shrink-0">
            Built for Enterprise Healthcare
          </p>
          <div className="hidden sm:block w-px h-5 bg-white/10 flex-shrink-0" />
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium text-[#A8BFCC] border border-white/10 bg-white/[0.03] hover:border-[#3B82F6]/30 hover:text-white transition-colors duration-200"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
