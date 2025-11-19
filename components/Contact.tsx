import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Discuss your home.</h2>
            <p className="text-stone-400 text-lg mb-12 max-w-md">
              We are currently accepting new projects for Villas and 3BHK+ Apartments in Hyderabad for Q4 2024.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-bronze-500 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Studio</h4>
                  <p className="text-stone-400">Plot 45, Road No. 12<br/>Banjara Hills, Hyderabad 500034</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-bronze-500 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Phone</h4>
                  <p className="text-stone-400">+91 98480 12345</p>
                  <p className="text-xs text-stone-500 mt-1">Mon - Sat, 10am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-bronze-500 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-stone-400">hello@studioobject.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-800 p-8 md:p-10 rounded-sm shadow-2xl border border-stone-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">Name</label>
                  <input type="text" className="w-full bg-stone-900 border border-stone-600 p-3 text-stone-50 focus:border-bronze-500 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-400">Phone</label>
                  <input type="tel" className="w-full bg-stone-900 border border-stone-600 p-3 text-stone-50 focus:border-bronze-500 focus:outline-none transition-colors" placeholder="+91" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Property Location</label>
                <input type="text" className="w-full bg-stone-900 border border-stone-600 p-3 text-stone-50 focus:border-bronze-500 focus:outline-none transition-colors" placeholder="e.g., Financial District, My Home Avatar" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-400">Config</label>
                    <select className="w-full bg-stone-900 border border-stone-600 p-3 text-stone-50 focus:border-bronze-500 focus:outline-none transition-colors appearance-none">
                        <option>3BHK Apartment</option>
                        <option>4BHK+ Apartment</option>
                        <option>Villa / Independent House</option>
                        <option>Commercial</option>
                    </select>
                </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-400">Timeline</label>
                    <select className="w-full bg-stone-900 border border-stone-600 p-3 text-stone-50 focus:border-bronze-500 focus:outline-none transition-colors appearance-none">
                        <option>Immediate</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Just Browsing</option>
                    </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">Message</label>
                <textarea rows={4} className="w-full bg-stone-900 border border-stone-600 p-3 text-stone-50 focus:border-bronze-500 focus:outline-none transition-colors" placeholder="Tell us a bit about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-bronze-500 hover:bg-bronze-600 text-white py-4 uppercase tracking-widest text-sm font-medium transition-colors duration-300">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};