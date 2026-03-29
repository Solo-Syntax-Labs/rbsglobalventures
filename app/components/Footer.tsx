import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const companyInfo = {
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'rbsglobalventures@gmail.com',
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '8681971471',
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Royal Complex, Door No. 8G8, ST-8, Thisaikaval North Street, Arumuganeri - 628202, Tuticorin District, Tamil Nadu, India',
    gstin: process.env.NEXT_PUBLIC_COMPANY_GSTIN || '33DWVPB8302Q1ZY'
  };
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white">RBS Global Ventures</div>
                <div className="text-xs text-gray-400">Steel & Scrap Trading</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading steel and scrap trading company in Tamil Nadu with 4+ years of excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#resources" className="hover:text-purple-400 transition-colors">Resources</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Ferrous Metals</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Non-Ferrous Metals</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">E-Waste Recycling</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Industrial Waste</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Logistics Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold">GST</div>
                <div>
                  <div className="text-gray-300">GSTIN/UIN: {companyInfo.gstin}</div>
                  <div className="text-gray-300">Code: 33</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 RBS Global Ventures. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-purple-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}