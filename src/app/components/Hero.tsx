import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1769012334805-eb47a65b5d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2NyYXAlMjBtZXRhbCUyMHJlY3ljbGluZ3xlbnwxfHx8fDE3NzQxNjQ0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          Trusted <span className="text-purple-400">Steel & Scrap Trading</span><br />
          Partners in Tamil Nadu
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Premium steel products for industrial and home construction. Complete scrap trading 
          services across Tamil Nadu with transparent pricing and reliable delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-purple-600 hover:border-purple-600 text-lg px-8">
              Our Services
            </Button>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl text-white">4+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-white">10,000+</div>
            <div className="text-sm">Tons Traded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-white">500+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-white">20+</div>
            <div className="text-sm">Cities in Tamil Nadu</div>
          </div>
        </div>
      </div>
    </section>
  );
}