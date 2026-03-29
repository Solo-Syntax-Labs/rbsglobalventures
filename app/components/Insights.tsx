import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function Insights() {
  const insights = [
    {
      image: 'https://images.unsplash.com/photo-1760933803441-f479b177f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHJlY3ljbGluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3NDE2NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Industry News',
      title: 'Steel Demand Growth in Tamil Nadu Construction Sector',
      date: 'March 15, 2026',
      excerpt: 'Analyzing the rising demand for quality steel products in Tamil Nadu\'s booming infrastructure projects.',
    },
    {
      image: 'https://images.unsplash.com/photo-1605050714296-ef81755470ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3NDE1NDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Sustainability',
      title: 'How Scrap Recycling Benefits Tamil Nadu Industries',
      date: 'March 10, 2026',
      excerpt: 'Learn how responsible scrap trading and recycling contribute to sustainable industrial growth.',
    },
    {
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3NDEzMTU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Best Practices',
      title: 'Choosing the Right Steel Grade for Your Project',
      date: 'March 5, 2026',
      excerpt: 'Expert guidance on selecting appropriate steel products for construction and manufacturing needs.',
    },
  ];

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-purple-600 mb-2">Resources</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Latest Insights on Scrap Management & Recycling
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles, industry news, and expert insights 
            on scrap trading and recycling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{insight.date}</span>
                </div>
                <h3 className="text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{insight.excerpt}</p>
                <button className="text-purple-600 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}