import { CheckCircle2, Award, Users, Clock, Heart } from 'lucide-react';
import { LottieAnimation } from './ui/LottieAnimation';

export function WhyChooseUs() {
  const advantages = [
    {
      icon: Award,
      title: 'Transparent Pricing',
      description: 'Fair and honest pricing with no hidden costs for all steel and scrap materials',
    },
    {
      icon: CheckCircle2,
      title: 'Reliable Supply Chain',
      description: 'Consistent and dependable supply of quality steel materials across Tamil Nadu',
    },
    {
      icon: Users,
      title: 'Strong Industry Network',
      description: 'Extensive connections with manufacturers and trusted suppliers in the steel industry',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to timely delivery schedules for all construction and industrial projects',
    },
    {
      icon: Heart,
      title: 'Customer-First Approach',
      description: 'Personalized service and dedicated support for every client requirement',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <LottieAnimation
              src="https://assets-v2.lottiefiles.com/a/46ef1528-a41b-11ee-a79c-6b92c18b54d9/pwdgBFSy1c.lottie"
              width={160}
              height={160}
            />
          </div>
          <div className="text-purple-600 mb-2">🤝 Why Choose Us</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            The RBS Global Ventures Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine quality, transparency, and sustainability to deliver exceptional value 
            to our clients across Tamil Nadu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
