import { ArrowLeft, Shield, Eye, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect } from 'react';

export function PrivacyPolicy() {
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
            <Link to="/" className="flex items-center gap-2">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Website
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
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
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: March 22, 2026</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At RBS Global Ventures, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website, use our services, 
              or interact with our company in Tamil Nadu and across India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-green-600" />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name, email address, phone number</li>
                  <li>Company name and business address</li>
                  <li>Service requirements and project details</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Business Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Steel product requirements and specifications</li>
                  <li>Scrap material types and quantities</li>
                  <li>Delivery locations and schedules</li>
                  <li>Payment and billing information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address and browser information</li>
                  <li>Device information and usage patterns</li>
                  <li>Cookies and tracking data</li>
                  <li>Website interaction analytics</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-600" />
              How We Use Your Information
            </h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Service Provision</h3>
                <p className="text-gray-600">To provide steel trading and scrap recycling services tailored to your needs</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Communication</h3>
                <p className="text-gray-600">To respond to inquiries, send quotes, and provide customer support</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Business Operations</h3>
                <p className="text-gray-600">To process orders, manage deliveries, and handle billing</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Marketing</h3>
                <p className="text-gray-600">To inform about new services, special offers, and industry updates</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Legal Compliance</h3>
                <p className="text-gray-600">To comply with Indian regulations and business requirements</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-600" />
              Data Security and Protection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement robust security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>SSL encryption for all data transmissions</li>
              <li>Secure servers with firewalls and intrusion detection</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection best practices</li>
              <li>Access controls and authentication systems</li>
              <li>Compliance with Indian IT Act and data protection regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We may share your data only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With service providers who assist in our operations (payment processors, delivery services)</li>
              <li>When required by law or government authorities in India</li>
              <li>To protect our rights, property, or safety</li>
              <li>With business partners only with your explicit consent</li>
              <li>During business transfers (mergers, acquisitions) with privacy protections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject under Indian privacy laws, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request removal of your personal data</li>
              <li><strong>Portability:</strong> Transfer your data to other services</li>
              <li><strong>Objection:</strong> Opt out of marketing communications</li>
              <li><strong>Restriction:</strong> Limit processing of your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at: <strong>info@rbsglobalventures.com</strong> or call <strong>+91-9092473805</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to personalize content and advertisements</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only as long as necessary for the purposes outlined in this policy, 
              unless required by law to retain it longer. Typical retention periods include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Customer data: 7 years after last transaction</li>
              <li>Financial records: 8 years as per Indian tax laws</li>
              <li>Marketing communications: Until you opt out</li>
              <li>Website analytics: 26 months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
              personal information from children. If we become aware that we have collected such information, 
              we will take steps to delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              As an Indian company serving primarily Tamil Nadu and other Indian states, we store and process 
              your data within India. Any international data transfers will comply with applicable Indian laws 
              and include appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              legal requirements, or business operations. We will notify you of significant changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying prominent notices on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> info@rbsglobalventures.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91-9092473805</p>
                <p className="text-gray-700"><strong>Address:</strong> 111/A Utchini Magaliamman Kovil Street, Kayalpattinam, Tuticorin - 628204, Tamil Nadu, India</p>
                <p className="text-gray-700"><strong>GSTIN:</strong> 33APHPR5704E1Z2</p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              This Privacy Policy is effective as of March 22, 2026, and governs the relationship between 
              you and RBS Global Ventures regarding the use of our website and services in India.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
