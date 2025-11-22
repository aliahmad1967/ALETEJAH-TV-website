import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white pt-10 sm:pt-12 pb-6 sm:pb-8 border-t-4 border-primary-600">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About - Sharp Professional Design */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
                <div className="bg-primary-600 sharp p-2">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-headline text-2xl font-bold leading-none uppercase">ALETEJAH</h3>
                    <span className="text-[0.65rem] text-primary-400 uppercase tracking-wider mt-1 font-bold">One Direction for Truth</span>
                </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.footer.rights}
            </p>
            <div className="flex gap-2">
              <a href="#" className="p-2 sharp bg-gray-900 hover:bg-primary-600 text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 sharp bg-gray-900 hover:bg-primary-600 text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 sharp bg-gray-900 hover:bg-primary-600 text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@AletejahTV" target="_blank" rel="noopener noreferrer" className="p-2 sharp bg-gray-900 hover:bg-primary-600 text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-headline text-lg font-bold uppercase mb-4 text-white pb-2 border-b-2 border-primary-600">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li><a href="/news" className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors block">{t.nav.news}</a></li>
              <li><a href="/programs" className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors block">{t.nav.programs}</a></li>
              <li><a href="/live" className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors block">{t.nav.live}</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors block">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="font-headline text-lg font-bold uppercase mb-4 text-white pb-2 border-b-2 border-primary-600">{t.nav.contact}</h3>
             <ul className="space-y-3">
               <li className="flex items-start gap-3 text-gray-400 text-sm">
                 <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary-500" />
                 <span className="font-medium">123 Media City, Building 5<br/>Baghdad, Iraq</span>
               </li>
               <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Phone size={18} className="text-primary-500" />
                 <span className="font-medium">+964 770 123 4567</span>
               </li>
               <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Mail size={18} className="text-primary-500" />
                 <span className="font-medium">info@aletejah.tv</span>
               </li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-headline text-lg font-bold uppercase mb-4 text-white pb-2 border-b-2 border-primary-600">{t.footer.newsletter}</h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-900 text-white px-4 py-3 sharp border-2 border-gray-800 focus:outline-none focus:border-primary-600 text-sm font-medium transition-colors"
              />
              <button className="btn-sharp bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 font-bold uppercase text-xs tracking-wider transition-colors">
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-gray-900 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm font-medium">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};