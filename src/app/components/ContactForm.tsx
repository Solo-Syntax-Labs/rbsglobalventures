import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-green-600 mb-2">Get In Touch</div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Contact Us Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need a quote? We're here to help with all your 
            steel and scrap trading needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                <Input type="email" placeholder="your.email@example.com" required />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Company Name</label>
                <Input placeholder="Your company name" />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Service Interest</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select a service</option>
                  <option>Steel Trading</option>
                  <option>Scrap Collection</option>
                  <option>Both Steel & Scrap</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Message *</label>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={4}
                  required
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      RBS Global Ventures<br />
                      111/A Utchini Magaliamman Kovil Street<br />
                      Kayalpattinam, Tuticorin - 628204<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 - 9092473805</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@rbsglobalventures.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="text-gray-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
