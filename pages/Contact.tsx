import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-black py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-4 border-b-2 border-primary-600">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">{t.contact.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Contact Info - Sharp Professional Design */}
            <div className="space-y-2">
                <div className="bg-gray-50 dark:bg-dark-900 sharp p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800">
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase mb-6 text-gray-900 dark:text-white pb-3 border-b-2 border-primary-600">Get in Touch</h2>
                    <div className="space-y-5">
                        <div className="flex items-start gap-4 pb-5 border-b border-gray-200 dark:border-gray-800">
                            <div className="p-3 bg-primary-600 sharp text-white flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white mb-1">{t.contact.address}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">123 Media City, Building 5<br />Baghdad, Iraq</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 pb-5 border-b border-gray-200 dark:border-gray-800">
                            <div className="p-3 bg-primary-600 sharp text-white flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white mb-1">{t.contact.phone}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">+964 770 123 4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-600 sharp text-white flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white mb-1">Email</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">info@aletejah.tv</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form - Sharp Professional Design */}
            <div className="bg-gray-50 dark:bg-dark-900 sharp p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800">
                <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase mb-6 text-gray-900 dark:text-white pb-3 border-b-2 border-primary-600">Send Message</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">{t.contact.name}</label>
                        <input type="text" className="w-full px-4 py-3 sharp border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-0 focus:border-primary-600 text-sm font-medium transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">{t.contact.email}</label>
                        <input type="email" className="w-full px-4 py-3 sharp border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-0 focus:border-primary-600 text-sm font-medium transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">{t.contact.message}</label>
                        <textarea rows={5} className="w-full px-4 py-3 sharp border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-0 focus:border-primary-600 text-sm font-medium transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full btn-sharp bg-primary-600 hover:bg-primary-700 text-white font-bold uppercase tracking-wider py-4 flex items-center justify-center gap-2 transition-colors text-sm">
                        <Send size={18} />
                        {t.contact.send}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};