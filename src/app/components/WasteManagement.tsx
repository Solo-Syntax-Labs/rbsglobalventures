import { ImageWithFallback } from './figma/ImageWithFallback';

export function WasteManagement() {
  const wasteTypes = [
    {
      title: 'Industrial Steel Products',
      image: 'https://images.unsplash.com/photo-1761519610092-443f7c5f6f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3NDE2NTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'TMT bars, beams, channels, and structural steel',
    },
    {
      title: 'Home Construction Steel',
      image: 'https://images.unsplash.com/photo-1686358244570-631340cbbd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY29uc3RydWN0aW9uJTIwc3RlZWwlMjBmcmFtZXxlbnwxfHx8fDE3NzQxNjU0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Residential steel, angles, plates, and sheets',
    },
    {
      title: 'Scrap Collection & Recycling',
      image: 'https://images.unsplash.com/photo-1722695694560-f452b0919d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcCUyMG1ldGFsJTIweWFyZHxlbnwxfHx8fDE3NzQxNjQ0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Ferrous, non-ferrous, and industrial scrap materials',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-green-600 mb-2">What We Offer</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Steel Products & Scrap Materials<br />We Trade
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From industrial and residential steel products to comprehensive scrap collection 
            and recycling services across all material types.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wasteTypes.map((type, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <ImageWithFallback
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-200">{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}