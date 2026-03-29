'use client'
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-purple-600 mb-2">Get In Touch</div>
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

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <CheckCircle className="w-14 h-14 text-green-500" />
                <h4 className="text-lg text-gray-900">Message Sent!</h4>
                <p className="text-gray-600 max-w-xs">
                  Thank you for reaching out. We've sent a confirmation to your email and will get back to you within 1–2 business days.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setStatus('idle')}
                  className="mt-2 border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" htmlFor="name">Full Name *</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2" htmlFor="phone">Phone Number *</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2" htmlFor="email">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2" htmlFor="company">Company Name</label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2" htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
                    value={form.service}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select a service</option>
                    <option>Steel Trading</option>
                    <option>Scrap Collection</option>
                    <option>Both Steel &amp; Scrap</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2" htmlFor="message">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : 'Submit Inquiry'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      RBS Global Ventures<br />
                      Royal Complex, Door No. 8G8, ST-8, Thisaikaval North Street<br />
                      Arumuganeri - 628202, Tuticorin District<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">86819 71471</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">rbsglobalventures@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
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
