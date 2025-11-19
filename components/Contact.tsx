import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  // Base64 encoded noise texture to avoid URL parsing errors
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=")`,
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
       {/* Ultra-soft noise texture */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={noiseStyle}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Contact</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Discuss your home.</h2>
            <p className="text-stone-400 text-lg mb-12 max-w-md leading-relaxed">
              We are currently accepting new projects for Villas and 3BHK+ Apartments in Hyderabad for Q4 2024.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-stone-800 rounded-full group-hover:bg-bronze-500/20 transition-colors">
                    <MapPin className="text-bronze-500" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Studio</h4>
                  <p className="text-stone-400">Plot 45, Road No. 12<br/>Banjara Hills, Hyderabad 500034</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-stone-800 rounded-full group-hover:bg-bronze-500/20 transition-colors">
                    <Phone className="text-bronze-500" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Phone</h4>
                  <p className="text-stone-400">+91 98480 12345</p>
                  <p className="text-xs text-stone-500 mt-1">Mon - Sat, 10am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                 <div className="p-3 bg-stone-800 rounded-full group-hover:bg-bronze-500/20 transition-colors">
                    <Mail className="text-bronze-500" size={20} />
                 </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-stone-400">hello@crestinteriors.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
              <div className="bg-stone-800/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border border-stone-700/50 max-w-2xl mx-auto lg:mx-0">
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Name</label>
                    <input type="text" className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-50 focus:border-bronze-500 focus:bg-stone-900 focus:outline-none transition-all rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" placeholder="Arjun Reddy" />
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Phone</label>
                    <input type="tel" className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-50 focus:border-bronze-500 focus:bg-stone-900 focus:outline-none transition-all rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" placeholder="+91" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Property Location</label>
                    <input type="text" className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-50 focus:border-bronze-500 focus:bg-stone-900 focus:outline-none transition-all rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" placeholder="e.g., Financial District, My Home Avatar" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Config</label>
                        <div className="relative">
                            <select className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-50 focus:border-bronze-500 focus:bg-stone-900 focus:outline-none transition-all rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] appearance-none cursor-pointer">
                                <option>3BHK Apartment</option>
                                <option>4BHK+ Apartment</option>
                                <option>Villa / Independent House</option>
                                <option>Commercial</option>
                            </select>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                             </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Timeline</label>
                         <div className="relative">
                            <select className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-50 focus:border-bronze-500 focus:bg-stone-900 focus:outline-none transition-all rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] appearance-none cursor-pointer">
                                <option>Immediate</option>
                                <option>1-3 Months</option>
                                <option>3-6 Months</option>
                                <option>Just Browsing</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Message</label>
                    <textarea rows={4} className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-50 focus:border-bronze-500 focus:bg-stone-900 focus:outline-none transition-all rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" placeholder="Tell us a bit about your requirements..."></textarea>
                </div>

                <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.01, translateY: -4 }}
                    whileTap={{ scale: 0.98, translateY: 0 }}
                    className="w-full bg-bronze-500 text-white py-5 uppercase tracking-widest text-sm font-bold rounded-md shadow-lg hover:shadow-bronze-500/20 transition-all duration-300 transform"
                >
                    Request Consultation
                </motion.button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};