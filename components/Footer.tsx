import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-900 text-white pt-6 xs:pt-8 sm:pt-10 md:pt-12 pb-4 xs:pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-white">
                <div className="bg-primary-600 text-accent-500 p-1.5 sm:p-2 rounded-lg">
                  <ArrowUpRight size={20} className="sm:hidden" strokeWidth={3} />
                  <ArrowUpRight size={24} className="hidden sm:block" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold leading-none">ALETEJAH</h3>
                    <span className="text-[0.6rem] sm:text-[0.65rem] text-primary-300 uppercase tracking-wider mt-1">One Direction for Truth</span>
                </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {t.footer.rights}
            </p>
            <div className="flex space-x-3 sm:space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Facebook size={18} className="sm:hidden" /><Facebook size={20} className="hidden sm:block" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Twitter size={18} className="sm:hidden" /><Twitter size={20} className="hidden sm:block" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Instagram size={18} className="sm:hidden" /><Instagram size={20} className="hidden sm:block" /></a>
              <a href="https://www.youtube.com/@AletejahTV" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors"><Youtube size={18} className="sm:hidden" /><Youtube size={20} className="hidden sm:block" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">{t.footer.links}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="/news" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t.nav.news}</a></li>
              <li><a href="/programs" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t.nav.programs}</a></li>
              <li><a href="/live" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t.nav.live}</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-lg font-semibold mb-4 text-white">{t.nav.contact}</h3>
             <ul className="space-y-3">
               <li className="flex items-start gap-3 text-gray-400 text-sm">
                 <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary-500" />
                 <span>123 Media City, Building 5<br/>Baghdad, Iraq</span>
               </li>
               <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Phone size={18} className="text-primary-500" />
                 <span>+964 770 123 4567</span>
               </li>
               <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Mail size={18} className="text-primary-500" />
                 <span>info@aletejah.tv</span>
               </li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t.footer.newsletter}</h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-dark-800 text-white px-4 py-2 rounded border border-dark-700 focus:outline-none focus:border-primary-500 text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded font-medium text-sm transition-colors">
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};