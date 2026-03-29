import { Scale, TrendingUp, Truck, Shield, FileCheck, Handshake, Leaf, Clock } from 'lucide-react';
import { LottieAnimation } from './ui/LottieAnimation';

export function Services() {
  const services = [
    {
      icon: Scale,
      title: '🔧 Steel Supply',
      description: 'Premium TMT bars, structural steel, plates, and sheets sourced from reliable manufacturers.',
    },
    {
      icon: TrendingUp,
      title: '🏠 Residential Steel Solutions',
      description: 'Complete steel support for house construction, including rods, frames, and custom requirements.',
    },
    {
      icon: Truck,
      title: '♻️ Scrap Trading',
      description: 'Buying and selling ferrous & non-ferrous scrap with accurate weight and competitive pricing.',
    },
    {
      icon: FileCheck,
      title: '🔄 Scrap Processing',
      description: 'Sorting, segregation, and processing to maximize scrap value.',
    },
    {
      icon: Handshake,
      title: '📦 Bulk Supply',
      description: 'Large-scale steel and scrap supply for industries and infrastructure projects.',
    },
    {
      icon: Clock,
      title: '🚚 Logistics & Delivery',
      description: 'Fast and dependable transportation across Tamil Nadu.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <LottieAnimation
              src="https://assets-v2.lottiefiles.com/a/3a26c840-71d0-11ee-b191-17b85da35b32/0QO4szVdAS.lottie"
              width={160}
              height={160}
            />
          </div>
          <div className="text-purple-600 mb-2">🔧 Our Services</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Complete Steel & Scrap Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From premium steel products to efficient scrap collection and recycling, 
            we provide end-to-end solutions for construction, manufacturing, and home building.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}