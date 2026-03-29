import { MapPin } from 'lucide-react';

export function TamilNaduPresence() {
  const cities = [
    'Thoothukudi',
    'Tirunelveli',
    'Thenkasi',
    'Coimbatore',
    'Trichy',
    'Erode',
    'Chennai',
    'Thanjore',
    'Viruthunagar',
    'Kottayam',
    'Kollam',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-purple-200 mb-2">Our Network</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Our Presence Across Tamil Nadu
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto">
            We've established a strong presence in 11+ cities across Tamil Nadu and Kerala, 
            ensuring prompt service and reliable delivery wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5 text-purple-200 mx-auto mb-2" />
              <div className="text-white">{city}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-purple-100">
            Can't find your city? <a href="#contact" className="text-white underline hover:text-purple-200">Contact us</a> to check service availability in your area.
          </p>
        </div>
      </div>
    </section>
  );
}
