import { ArrowLeft, Calendar, Share2, User, Tag } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
  tags: string[];
}

const articles: Article[] = [
  {
    id: 'steel-demand-growth',
    title: 'Steel Demand Growth in Tamil Nadu Construction Sector',
    category: 'Industry News',
    date: 'March 15, 2026',
    author: 'RBS Global Ventures Team',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1760933803441-f479b177f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHJlY3ljbGluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3NDE2NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Steel Trading', 'Construction', 'Tamil Nadu', 'Market Analysis'],
    content: [
      'Tamil Nadu\'s construction sector is experiencing unprecedented growth, driving significant demand for quality steel products across the region. This surge presents both opportunities and challenges for steel traders and construction companies alike.',
      
      'The state government\'s focus on infrastructure development, including highways, metro rail projects, and smart city initiatives, has created a robust pipeline for construction activities. According to recent industry reports, steel consumption in Tamil Nadu is projected to grow by 12-15% annually over the next five years.',
      
      'Key factors driving this growth include:',
      '• Urbanization and housing development projects',
      '• Industrial expansion in Chennai, Coimbatore, and other major cities', 
      '• Government infrastructure investments exceeding ₹50,000 crore',
      '• Growth in renewable energy projects requiring structural steel',
      
      'For steel traders like RBS Global Ventures, this trend means increased opportunities to supply premium quality TMT bars, structural steel, and specialized products. However, it also requires maintaining stringent quality standards and ensuring timely delivery to meet project deadlines.',
      
      'The construction boom is particularly strong in sectors like:',
      '• Residential housing projects in Tier-2 and Tier-3 cities',
      '• Commercial real estate development in urban centers',
      '• Industrial infrastructure and manufacturing facilities',
      '• Public infrastructure including roads, bridges, and public buildings',
      
      'To capitalize on this growth, steel trading companies must focus on:',
      '1. Maintaining consistent quality across all product categories',
      '2. Building robust supply chain networks',
      '3. Offering competitive pricing without compromising on standards',
      '4. Providing technical support and consultation to clients',
      '5. Expanding product portfolios to meet diverse construction needs',
      
      'RBS Global Ventures is well-positioned to serve this growing market with our 15+ years of experience, extensive network across Tamil Nadu, and commitment to quality steel products. Our strategic locations and reliable logistics ensure timely delivery to construction sites across the state.',
      
      'As the construction sector continues to expand, partnerships between steel traders and construction companies will become increasingly important. Those who can provide consistent quality, reliable supply, and excellent service will thrive in this growing market.'
    ]
  },
  {
    id: 'scrap-recycling-benefits',
    title: 'How Scrap Recycling Benefits Tamil Nadu Industries',
    category: 'Sustainability',
    date: 'March 10, 2026',
    author: 'Environmental Team',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1605050714296-ef81755470ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3NDE1NDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Recycling', 'Sustainability', 'Environmental Impact', 'Circular Economy'],
    content: [
      'Scrap recycling is playing an increasingly vital role in Tamil Nadu\'s industrial ecosystem, offering significant environmental and economic benefits. As industries strive for sustainability and operational efficiency, scrap trading and recycling have emerged as key components of the circular economy.',
      
      'The environmental benefits of scrap recycling are substantial. Every ton of recycled steel saves approximately 1,100 kg of iron ore, 630 kg of coal, and 55 kg of limestone. This translates to significant reductions in CO2 emissions – up to 86% less compared to producing steel from raw materials.',
      
      'For Tamil Nadu industries, the advantages extend beyond environmental impact:',
      
      'Economic Benefits:',
      '• Reduced raw material costs by 20-30%',
      '• Lower energy consumption in production processes',
      '• Additional revenue streams from scrap sales',
      '• Compliance with environmental regulations',
      '• Enhanced corporate social responsibility credentials',
      
      'Environmental Impact:',
      '• Conservation of natural resources',
      '• Reduced landfill waste and pollution',
      '• Lower carbon footprint for industrial operations',
      '• Preservation of biodiversity through reduced mining',
      '• Improved air and water quality in industrial areas',
      
      'Tamil Nadu\'s manufacturing sector, including automotive, textiles, and engineering industries, generates substantial scrap materials. Proper recycling of these materials not only supports environmental goals but also creates a robust secondary materials market.',
      
      'Key industries benefiting from scrap recycling include:',
      '• Automotive manufacturing and component suppliers',
      '• Textile machinery and equipment manufacturers',
      '• Engineering and fabrication units',
      '• Construction and demolition companies',
      '• Shipbreaking and marine industries',
      
      'The process of scrap recycling involves several stages:',
      '1. Collection and sorting of scrap materials',
      '2. Processing and quality assessment',
      '3. Transportation to recycling facilities',
      '4. Melting and refining into new products',
      '5. Quality testing and certification',
      
      'RBS Global Ventures plays a crucial role in this ecosystem by providing:',
      '• Efficient scrap collection services across Tamil Nadu',
      '• Fair pricing and transparent weighing processes',
      '• Proper sorting and classification of materials',
      '• Transportation to certified recycling facilities',
      '• Documentation and compliance support',
      
      'The future of scrap recycling in Tamil Nadu looks promising with government initiatives supporting circular economy practices. Industries that adopt comprehensive scrap management strategies will benefit from cost savings, regulatory compliance, and enhanced sustainability credentials.',
      
      'As we move towards a more sustainable future, scrap recycling will continue to be an essential component of industrial operations, contributing to both economic growth and environmental protection in Tamil Nadu.'
    ]
  },
  {
    id: 'choosing-steel-grade',
    title: 'Choosing the Right Steel Grade for Your Project',
    category: 'Best Practices',
    date: 'March 5, 2026',
    author: 'Technical Experts',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3NDEzMTU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Steel Grades', 'Construction', 'Technical Guide', 'Quality Standards'],
    content: [
      'Selecting the appropriate steel grade is crucial for project success, safety, and cost-effectiveness. With numerous steel grades available in the market, understanding their properties and applications is essential for construction professionals, engineers, and project managers.',
      
      'Steel grades are classified based on their chemical composition, mechanical properties, and intended applications. In India, the Bureau of Indian Standards (BIS) has established clear guidelines for different steel grades used in construction and industrial applications.',
      
      'Common Steel Grades in Construction:',
      
      'Fe 415 Grade:',
      '• Minimum yield strength: 415 N/mm²',
      '• Applications: Residential buildings, small commercial structures',
      '• Advantages: Cost-effective, good ductility, easy to weld',
      '• Best for: Low-rise buildings up to 4-5 stories',
      
      'Fe 500 Grade:',
      '• Minimum yield strength: 500 N/mm²',
      '• Applications: Multi-story buildings, commercial complexes',
      '• Advantages: Higher strength, better seismic resistance',
      '• Best for: Buildings up to 10-15 stories',
      
      'Fe 550 Grade:',
      '• Minimum yield strength: 550 N/mm²',
      '• Applications: High-rise buildings, industrial structures',
      '• Advantages: Superior strength, excellent for heavy loads',
      '• Best for: High-rise buildings and industrial projects',
      
      'Fe 600 Grade:',
      '• Minimum yield strength: 600 N/mm²',
      '• Applications: Specialized structures, bridges, infrastructure',
      '• Advantages: Maximum strength, optimal for critical applications',
      '• Best for: Infrastructure projects and critical structures',
      
      'Factors to Consider When Choosing Steel Grades:',
      
      '1. Project Requirements:',
      '• Building height and load-bearing requirements',
      '• Soil conditions and foundation type',
      '• Seismic zone classification',
      '• Wind load considerations',
      
      '2. Budget Constraints:',
      '• Initial material costs',
      '• Long-term maintenance requirements',
      '• Lifecycle cost analysis',
      '• Return on investment considerations',
      
      '3. Environmental Factors:',
      '• Corrosion resistance needs',
      '• Exposure to chemicals or moisture',
      '• Temperature variations',
      '• Weather conditions in the project location',
      
      '4. Regulatory Compliance:',
      '• BIS standards and local building codes',
      '• National Building Code requirements',
      '• Local authority regulations',
      '• Environmental compliance requirements',
      
      'Steel Grades for Specific Applications:',
      
      'Residential Construction:',
      '• Fe 415: Standard residential buildings',
      '• Fe 500: Premium residential projects',
      '• Special grades: Coastal areas requiring corrosion resistance',
      
      'Commercial Construction:',
      '• Fe 500: Standard commercial buildings',
      '• Fe 550: High-rise commercial complexes',
      '• Fe 600: Critical commercial infrastructure',
      
      'Industrial Applications:',
      '• Structural steel: I-beams, channels, angles',
      '• Special alloys: Chemical resistance, high temperature',
      '• Tool steel: Manufacturing equipment',
      '• Stainless steel: Food processing, pharmaceutical',
      
      'Quality Assurance and Testing:',
      'When selecting steel grades, ensure proper quality verification:',
      '• Check BIS certification marks',
      '• Verify mill test certificates',
      '• Conduct tensile strength tests',
      '• Perform chemical composition analysis',
      '• Verify dimensional accuracy',
      
      'RBS Global Ventures provides comprehensive support in steel grade selection:',
      '• Technical consultation services',
      '• Quality certified steel products',
      '• Detailed product specifications',
      '• Application-specific recommendations',
      '• After-sales support and guidance',
      
      'Making the right choice in steel grades not only ensures project safety and durability but also optimizes costs and performance. Always consult with experienced steel suppliers and structural engineers to make informed decisions based on your specific project requirements.',
      
      'Remember: The cheapest option is not always the most cost-effective in the long run. Investing in the right steel grade upfront can save significant costs in maintenance, repairs, and potential structural issues down the line.'
    ]
  }
];

export function Resources() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                {selectedArticle.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {selectedArticle.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {selectedArticle.author}
              </div>
              <span>{selectedArticle.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedArticle.title}
            </h1>
            
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <ImageWithFallback
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedArticle.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {selectedArticle.content.map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About RBS Global Ventures
                </h3>
                <p className="text-gray-600">
                  Leading steel trading and scrap recycling company in Tamil Nadu with 15+ years of experience.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </a>
                <a href="#contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Get a Quote
                  </Button>
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    );
  }

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-green-600 mb-2">Resources</div>
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Industry Insights & Expert Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our comprehensive articles covering steel trading, 
            scrap recycling, industry trends, and best practices for your projects.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.content[0]}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-gray-500 text-xs">
                        +{article.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-green-600 group-hover:text-green-700">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Expert Advice for Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of steel trading experts is ready to help you choose the right 
            materials and solutions for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Expert Consultation
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              Download Steel Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
