'use client'
import { Menu, X, Recycle } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/rbs-logo.png"
              alt="RBS Global Ventures Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <div className="font-bold text-lg text-gray-900">RBS Global Ventures</div>
              <div className="text-xs text-gray-600">Steel & Scrap Trading</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#resources" className="text-gray-700 hover:text-purple-600 transition-colors">Resources</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            <a href="#contact">
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#resources" className="text-gray-700 hover:text-purple-600 transition-colors">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              <a href="#contact">
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">Get Started</Button>
            </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}