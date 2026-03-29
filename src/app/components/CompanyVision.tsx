import { Target, MapPin, Award } from 'lucide-react';
import { LottieAnimation } from './ui/LottieAnimation';

export function CompanyVision() {
  const serviceLocations = [
    'Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 
    'Tirunelveli', 'Thoothukudi', 'Erode', 'and more...'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <LottieAnimation
              src="https://assets-v2.lottiefiles.com/a/74a5c384-1151-11ee-b231-6fbb2403aa18/a5KxKlA0BQ.lottie"
              width={160}
              height={160}
            />
          </div>
          <div className="text-purple-600 mb-2">🌱 Our Vision</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Building Tamil Nadu's Most Trusted Steel Trading Company
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            To become Tamil Nadu's most trusted steel and scrap trading company by combining 
            quality, transparency, and sustainability in every aspect of our business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vision Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Excellence</h3>
                <p className="text-gray-600">
                  Delivering premium steel materials that meet the highest industry standards 
                  and exceed customer expectations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Operations</h3>
                <p className="text-gray-600">
                  Building lasting relationships through honest pricing, clear communication, 
                  and ethical business practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                <p className="text-gray-600">
                  Promoting environmental responsibility through efficient scrap recycling 
                  and sustainable waste management practices.
                </p>
              </div>
            </div>
          </div>

          {/* Service Locations */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              🌍 Service Locations
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Serving major cities across Tamil Nadu with reliable delivery and support
            </p>
            <div className="grid grid-cols-2 gap-3">
              {serviceLocations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 bg-purple-50 px-4 py-2 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium">{location}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-purple-600 font-semibold">
                20+ Cities Covered Across Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
