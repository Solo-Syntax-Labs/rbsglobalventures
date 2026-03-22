import { ArrowLeft, Cookie, Settings, EyeOff, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect } from 'react';

export function CookiePolicy() {
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
                <Cookie className="w-5 h-5 text-white" />
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
              <Cookie className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-600">Last updated: March 22, 2026</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how RBS Global Ventures uses cookies and similar technologies 
              on our website (rbsglobalventures.com). This policy should be read together with our 
              Privacy Policy, which explains how we use your personal information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a leading steel trading and scrap recycling company in Tamil Nadu, India, we use 
              cookies to enhance your experience, analyze website traffic, and personalize content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Cookie className="w-5 h-5 text-green-600" />
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit a website. They allow the website to remember your actions and preferences 
              over a period of time.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">How Cookies Work:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>When you visit our website, we send cookies to your device</li>
                <li>Your browser stores these cookies with information about your visit</li>
                <li>The cookie is sent back to our website on subsequent visits</li>
                <li>This helps us recognize you and remember your preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-green-600" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-700 mb-2">These cookies are necessary for the website to function properly.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Maintain user sessions and authentication</li>
                      <li>Enable shopping cart functionality</li>
                      <li>Provide security against threats</li>
                      <li>Remember your cookie preferences</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duration:</strong> Session-based or up to 1 year<br />
                      <strong>Can be disabled?</strong> No (website may not function properly)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <EyeOff className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700 mb-2">These cookies help us understand how visitors interact with our website.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Track website traffic and user behavior</li>
                      <li>Measure website performance and loading times</li>
                      <li>Identify popular pages and content</li>
                      <li>Help improve user experience</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duration:</strong> 2 years<br />
                      <strong>Can be disabled?</strong> Yes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                    <p className="text-gray-700 mb-2">These cookies enhance functionality and personalize your experience.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Remember your preferences and settings</li>
                      <li>Enable personalized content recommendations</li>
                      <li>Save language and region preferences</li>
                      <li>Provide enhanced features</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duration:</strong> 1 year<br />
                      <strong>Can be disabled?</strong> Yes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Cookie className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-700 mb-2">These cookies are used to deliver relevant advertisements.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Track your browsing across websites</li>
                      <li>Deliver personalized advertisements</li>
                      <li>Measure ad campaign effectiveness</li>
                      <li>Build user profiles for marketing</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duration:</strong> 90 days to 2 years<br />
                      <strong>Can be disabled?</strong> Yes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Duration</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">rbs_session</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Maintains user session state</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Session</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Essential</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">rbs_preferences</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Stores user preferences</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Functional</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">_ga, _gid</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Google Analytics tracking</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2 years / 24 hours</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">_fbp</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Facebook advertising tracking</td>
                    <td className="px-4 py-3 text-sm text-gray-700">90 days</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You can control cookies through your browser settings:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Popular Browsers:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Cookie Consent Banner</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Accept all cookies for the best experience</li>
                  <li>Customize which categories of cookies to accept</li>
                  <li>Reject non-essential cookies</li>
                  <li>Change your preferences at any time</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Third-Party Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some cookies are placed by third-party services that appear on our website, such as 
                  analytics providers and advertising networks. You can manage these cookies through 
                  their respective privacy settings:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-green-600 hover:underline">Opt out here</a></li>
                  <li><strong>Facebook:</strong> <a href="https://www.facebook.com/ads/preferences" className="text-green-600 hover:underline">Ad preferences here</a></li>
                  <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" className="text-green-600 hover:underline">Settings here</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Essential Cookies Disabled</h3>
                <p className="text-gray-600">Website may not function properly, login issues, shopping cart problems</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Analytics Cookies Disabled</h3>
                <p className="text-gray-600">We can't analyze website usage, may impact user experience improvements</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Functional Cookies Disabled</h3>
                <p className="text-gray-600">Personalized features unavailable, need to re-enter preferences</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Marketing Cookies Disabled</h3>
                <p className="text-gray-600">Less relevant ads, may see more generic advertisements</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services that may place cookies on your device:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Google Analytics</h3>
                <p className="text-gray-600 text-sm">Helps us understand how visitors use our website to improve user experience</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Google Ads</h3>
                <p className="text-gray-600 text-sm">Delivers relevant advertisements about our steel trading services</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Facebook Pixel</h3>
                <p className="text-gray-600 text-sm">Tracks ad effectiveness and builds custom audiences for marketing</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices, 
              technology, or legal requirements. Changes will be effective immediately upon posting 
              the updated policy on our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review this policy periodically to stay informed about our use 
              of cookies and how you can manage your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                If you have questions about our Cookie Policy or how we use cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Company:</strong> RBS Global Ventures</p>
                <p className="text-gray-700"><strong>Email:</strong> info@rbsglobalventures.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91-9092473805</p>
                <p className="text-gray-700"><strong>Address:</strong> 111/A Utchini Magaliamman Kovil Street, Kayalpattinam, Tuticorin - 628204, Tamil Nadu, India</p>
                <p className="text-gray-700"><strong>GSTIN:</strong> 33APHPR5704E1Z2</p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights Under Indian Law</h3>
              <p className="text-gray-700 mb-3">
                Under the Information Technology Act, 2000 and rules, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Know what information is being collected via cookies</li>
                <li>Opt out of non-essential cookie tracking</li>
                <li>Withdraw consent at any time</li>
                <li>Request deletion of cookie data</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We are committed to protecting your privacy and complying with all applicable 
                Indian data protection laws.
              </p>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              This Cookie Policy is effective as of March 22, 2026, and applies to all users of 
              the RBS Global Ventures website in India and internationally.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
