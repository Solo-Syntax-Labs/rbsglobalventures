import { Scale, TrendingUp, Truck, Shield, FileCheck, Handshake, Leaf, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Scale,
      title: 'Steel Trading',
      description: 'Premium quality steel products including TMT bars, angles, channels, and sheets for all needs.',
    },
    {
      icon: TrendingUp,
      title: 'Home Steel Supply',
      description: 'Complete steel solutions for residential construction, renovations, and home projects.',
    },
    {
      icon: Truck,
      title: 'Scrap Collection',
      description: 'Comprehensive scrap collection services for ferrous and non-ferrous materials.',
    },
    {
      icon: Shield,
      title: 'Quality Verification',
      description: 'Thorough quality checks and certification for all steel products and materials.',
    },
    {
      icon: FileCheck,
      title: 'Processing & Sorting',
      description: 'Advanced processing and sorting of scrap materials for maximum value recovery.',
    },
    {
      icon: Handshake,
      title: 'Bulk Supply',
      description: 'Bulk steel and scrap supply solutions for construction and manufacturing industries.',
    },
    {
      icon: Leaf,
      title: 'Recycling Solutions',
      description: 'Environmentally responsible recycling practices and sustainable waste management.',
    },
    {
      icon: Clock,
      title: 'Transportation',
      description: 'Reliable logistics and timely delivery services across all Tamil Nadu locations.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-green-600 mb-2">Our Services</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Comprehensive Steel & Scrap Trading Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From premium steel products to efficient scrap collection and recycling, 
            we provide complete solutions for your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
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