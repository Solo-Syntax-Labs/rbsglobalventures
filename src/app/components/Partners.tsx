import { ImageWithFallback } from './figma/ImageWithFallback';

export function Partners() {
  // Partner/Client logos with actual images
  const partners = [
    { name: 'Agni Steels', image: '/partners/agnisteels.png', bgColor: 'bg-gray-100' },
    { name: 'Arise Steel', image: '/partners/arisesteel-.png', bgColor: 'bg-gray-50' },
    { name: 'Metstar Industries', image: '/partners/metstar.png', bgColor: 'bg-gray-100' },
    { name: 'Ambica Steels', image: '/partners/ambicasteels.png', bgColor: 'bg-gray-50' },
    { name: 'DCW Limited', image: '/partners/dcw_ltd_logo.jpg', bgColor: 'bg-gray-100' },
    { name: 'NLC India Limited', image: '/partners/nlcindia.webp', bgColor: 'bg-gray-50' },
    { name: 'VinFast Auto India', image: '/partners/VinFast.jpg', bgColor: 'bg-gray-100' },
    { name: 'Ferron Steels', image: '/partners/ferronsteels.png', bgColor: 'bg-gray-50' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-green-600 mb-2">Trusted Partners</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Trusted by Leading Industries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with premier companies and trusted brands across Tamil Nadu. 
            Our partnerships reflect our commitment to quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${partner.bgColor} rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow border border-gray-200`}
            >
              <div className="text-center">
                <ImageWithFallback
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-20 object-contain mb-4"
                />
                <div className="text-sm text-gray-600">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            And many more valued partners across construction, manufacturing, and industrial sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
