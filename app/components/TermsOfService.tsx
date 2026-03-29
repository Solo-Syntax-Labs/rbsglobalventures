'use client'
import { ArrowLeft, FileText, AlertTriangle, Scale, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect } from 'react';

export function TermsOfService() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Website
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">RBS Global Ventures</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600">Last updated: March 22, 2026</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to RBS Global Ventures. These Terms of Service ("Terms") govern your use of our website, 
              services, and products as a leading steel trading and scrap recycling company operating in Tamil Nadu, 
              India. By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              RBS Global Ventures ("we," "us," or "our") provides steel trading, scrap collection, and recycling 
              services to businesses and individuals across Tamil Nadu and other regions in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using our website, services, or products, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our 
              services or access our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all users, including without limitation users who are browsers, vendors, 
              customers, merchants, and/or contributors of content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RBS Global Ventures provides the following services:
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Steel Trading</h3>
                <p className="text-gray-600">Supply of TMT bars, structural steel, plates, sheets, and other steel products</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Scrap Collection</h3>
                <p className="text-gray-600">Collection and procurement of ferrous and non-ferrous scrap materials</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Recycling Services</h3>
                <p className="text-gray-600">Processing and recycling of scrap materials into reusable products</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Logistics & Delivery</h3>
                <p className="text-gray-600">Transportation and delivery services across Tamil Nadu</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Consultation</h3>
                <p className="text-gray-600">Technical advice and material selection guidance</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-purple-600" />
              User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate, complete, and current information when required</li>
              <li>Use our services for lawful purposes only</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with or disrupt our services or website</li>
              <li>Comply with all applicable Indian laws and regulations</li>
              <li>Respect intellectual property rights and trademarks</li>
              <li>Not use our services for fraudulent or deceptive practices</li>
              <li>Maintain confidentiality of account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product and Service Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Pricing and Payment</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All prices are quoted in Indian Rupees (INR)</li>
                  <li>Prices are subject to change without prior notice</li>
                  <li>Payment terms shall be as agreed in individual contracts</li>
                  <li>Goods remain our property until full payment is received</li>
                  <li>Late payments may attract interest as per applicable laws</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Delivery and Logistics</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Delivery timelines are estimates and subject to availability</li>
                  <li>Risk of loss transfers to buyer upon delivery</li>
                  <li>Buyer is responsible for providing safe access for delivery</li>
                  <li>Additional charges may apply for special delivery requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Quality and Specifications</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All products meet BIS standards and specifications</li>
                  <li>Quality certificates available upon request</li>
                  <li>Buyer must inspect goods upon receipt</li>
                  <li>Claims for defects must be made within 7 days of delivery</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including but not limited to text, graphics, logos, images, 
              and software, is the property of RBS Global Ventures or our licensors and is protected 
              by Indian and international intellectual property laws.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You may not use, reproduce, or distribute our content without permission</li>
              <li>Our trademarks and trade names may not be used without authorization</li>
              <li>Any unauthorized use constitutes intellectual property infringement</li>
              <li>We reserve all rights not expressly granted in these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, RBS Global Ventures shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Downtime or service interruptions</li>
              <li>Third-party products or services</li>
              <li>Errors or inaccuracies in information provided</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our total liability for any claims shall not exceed the amount paid by you for the 
              specific service or product giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless RBS Global Ventures, our officers, directors, 
              employees, and agents from and against any claims, liabilities, damages, losses, and expenses, 
              including reasonable attorneys' fees, arising from or in connection with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your use of our services and website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of a third party</li>
              <li>Your violation of applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice 
              or liability, for any reason, including if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Breach these Terms</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Fail to make required payments</li>
              <li>Violate applicable laws or regulations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use our services will cease immediately, but all 
              obligations incurred prior to termination shall survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these Terms or our services shall be resolved as follows:
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Good Faith Negotiation</h3>
                <p className="text-gray-600">Both parties shall first attempt to resolve disputes through good faith negotiation</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Jurisdiction</h3>
                <p className="text-gray-600">These Terms are governed by the laws of India, with courts in Tuticorin, Tamil Nadu having exclusive jurisdiction</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Arbitration</h3>
                <p className="text-gray-600">Unresolved disputes may be referred to arbitration under Indian Arbitration and Conciliation Act</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We shall not be liable for any failure or delay in performance of our obligations 
              under these Terms if such failure or delay is due to circumstances beyond our 
              reasonable control, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Natural disasters, earthquakes, floods</li>
              <li>War, terrorism, civil unrest</li>
              <li>Government actions, regulations, or restrictions</li>
              <li>Labor strikes, transportation disruptions</li>
              <li>Supply chain interruptions or shortages</li>
              <li>Pandemics or public health emergencies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Our collection, use, and protection of your personal 
              information is governed by our Privacy Policy, which forms part of these Terms. 
              By using our services, you consent to the collection and use of your information 
              as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Miscellaneous Provisions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Entire Agreement</h3>
                <p className="text-gray-700">These Terms constitute the entire agreement between you and RBS Global Ventures.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Severability</h3>
                <p className="text-gray-700">If any provision is deemed invalid, the remaining provisions shall remain in effect.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Waiver</h3>
                <p className="text-gray-700">Failure to enforce any provision does not constitute a waiver of such provision.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Assignment</h3>
                <p className="text-gray-700">You may not assign your rights under these Terms without our written consent.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Company:</strong> RBS Global Ventures</p>
                <p className="text-gray-700"><strong>Email:</strong> rbsglobalventures@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> 86819 71471</p>
                <p className="text-gray-700"><strong>Address:</strong> Royal Complex, Door No. 8G8, ST-8, Thisaikaval North Street, Arumuganeri - 628202, Tuticorin District, Tamil Nadu, India</p>
                <p className="text-gray-700"><strong>GSTIN:</strong> 33DWVPB8302Q1ZY</p>
                <p className="text-gray-700"><strong>Business Hours:</strong> Monday-Saturday 9:00 AM - 7:00 PM, Sunday 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              These Terms of Service are effective as of March 22, 2026, and govern your relationship 
              with RBS Global Ventures. We reserve the right to update these Terms at any time. 
              Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
