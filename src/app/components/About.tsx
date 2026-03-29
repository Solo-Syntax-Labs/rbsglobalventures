import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605050714296-ef81755470ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3NDE1NDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl">4+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-purple-600 mb-2">About RBS Global Ventures</div>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6">
              Your Trusted Partner for Steel & Scrap Trading in Tamil Nadu
            </h2>
            <p className="text-gray-600 mb-6">
              RBS Global Ventures is a leading steel and scrap trading company based in Tamil Nadu, India. 
              We specialize in providing high-quality steel products and comprehensive scrap trading services 
              to industries across the region.
            </p>
            <p className="text-gray-600 mb-8">
              With over 4 years of experience, we've built a reputation for reliability, transparency, 
              and excellence. From steel procurement to scrap collection and recycling, we offer end-to-end 
              solutions that help businesses optimize their operations while contributing to a sustainable future.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 mb-1">Quality Steel Products</h4>
                  <p className="text-gray-600 text-sm">Premium grade steel materials from trusted manufacturers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 mb-1">Transparent Scrap Trading</h4>
                  <p className="text-gray-600 text-sm">Fair pricing and honest dealings for all scrap materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 mb-1">Tamil Nadu Wide Network</h4>
                  <p className="text-gray-600 text-sm">Serving 20+ cities across Tamil Nadu with reliable logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MSME Registration Section */}
        <div className="mt-12 bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">MSME Registered</h4>
              <p className="text-gray-600 text-sm">
                We are proud to be a registered MSME (Micro, Small and Medium Enterprises) company, 
                supporting India's economic growth and development.
              </p>
            </div>
            <a 
              href="/documents/Udyam Registration Certificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}