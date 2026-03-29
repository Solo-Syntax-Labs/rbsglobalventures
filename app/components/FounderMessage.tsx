import { Quote } from 'lucide-react';

export function FounderMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-500/30 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full border border-purple-500/40 mb-4">
            A Message From Our Founder
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">Leading With Purpose</h2>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          {/* Quote icon */}
          <Quote className="w-10 h-10 text-purple-400 opacity-60 mb-6" />

          {/* Message */}
          <blockquote className="space-y-4 text-gray-100 text-base sm:text-lg leading-relaxed">
            <p>
              I am Bala Subramanian, Founder of RBS Global Ventures, with a background in
              Chemical Engineering from Kalasalingam University, complemented by a PGDM from
              Great Lakes and an MBA in Finance from NMIMS.
            </p>
            <p>
              With a deep interest in business, finance, and industrial growth, I am focused on
              building a diversified and future-ready enterprise. My vision is to establish RBS
              Global Ventures as a trusted name across multiple sectors through consistency,
              innovation, and disciplined execution.
            </p>
            <p>
              We believe in creating long-term value, maintaining strong relationships, and
              continuously evolving to meet future opportunities.
            </p>
          </blockquote>

          {/* Divider */}
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-purple-500/40 border-2 border-purple-400 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-purple-200">B</span>
            </div>

            {/* Details */}
            <div>
              <div className="text-xl font-semibold text-white">Bala Subramanian</div>
              <div className="text-purple-300 text-sm mt-0.5">Founder &amp; Managing Director, RBS Global Ventures</div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-400">
                <span>Chemical Engineering — Kalasalingam University</span>
                <span>·</span>
                <span>PGDM — Great Lakes</span>
                <span>·</span>
                <span>MBA Finance — NMIMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
