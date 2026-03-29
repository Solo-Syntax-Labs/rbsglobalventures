import { Award, ShieldCheck, Star, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
    },
    {
      icon: ShieldCheck,
      title: 'ISO 14001:2015',
      description: 'Environmental Management',
    },
    {
      icon: Star,
      title: 'CPCB Certified',
      description: 'Pollution Control Board',
    },
    {
      icon: Trophy,
      title: 'Industry Excellence',
      description: 'Best Scrap Trader 2024',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-purple-600 mb-2">Trust & Recognition</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Award Certificate & Participation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality and sustainability has earned us numerous certifications 
            and industry recognitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766722906733-609eebf3b63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzc0MTY0NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Certifications"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
