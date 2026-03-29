import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export function SteelProducts() {
  const products = [
    {
      category: 'TMT Bars & Rods',
      image: '/products/TMT steel.jpeg',
      items: ['Fe 415', 'Fe 500', 'Fe 550', 'Fe 600'],
      description: 'High-grade TMT bars for construction',
    },
    {
      category: 'TMT Bars & Rods',
      image: '/products/Rods image.jpeg',
      items: ['Fe 415', 'Fe 500', 'Fe 550', 'Fe 600'],
      description: 'High-quality steel rods for construction',
    },
    {
      category: 'Structural Steel',
      image: '/products/Structural steel-1.jpeg',
      items: ['I-Beams', 'H-Beams', 'Channels', 'Angles'],
      description: 'Industrial structural components',
    },
    {
      category: 'Structural Steel',
      image: '/products/Structural steel-2.jpeg',
      items: ['I-Beams', 'H-Beams', 'Channels', 'Angles'],
      description: 'Heavy-duty structural steel products',
    },
    {
      category: 'Structural Steel',
      image: '/products/Structural steel-3.jpeg',
      items: ['I-Beams', 'H-Beams', 'Channels', 'Angles'],
      description: 'Premium structural steel solutions',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-purple-600 mb-2">Our Products</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Premium Steel Products for<br />Industrial & Home Use
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We supply high-quality steel products for construction, manufacturing, and residential 
            projects. All materials are sourced from trusted manufacturers and certified for quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={product.image}
                  alt={product.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-white mb-2">{product.category}</h3>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {product.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            Need Steel Products for Your Project?
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Whether you're building a home or working on an industrial project, we have the 
            right steel products at competitive prices. Get a quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Request Quote
              </button>
            </a>
            <button className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition-colors border border-white/20">
              View Price List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
