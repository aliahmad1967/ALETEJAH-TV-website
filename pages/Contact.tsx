import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-12">{t.contact.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
                <div className="bg-white dark:bg-dark-800 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-dark-700">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 flex-shrink-0">
                                <MapPin size={20} className="sm:hidden" />
                                <MapPin size={24} className="hidden sm:block" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{t.contact.address}</h4>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">123 Media City, Building 5<br />Baghdad, Iraq</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 flex-shrink-0">
                                <Phone size={20} className="sm:hidden" />
                                <Phone size={24} className="hidden sm:block" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{t.contact.phone}</h4>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">+964 770 123 4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 flex-shrink-0">
                                <Mail size={20} className="sm:hidden" />
                                <Mail size={24} className="hidden sm:block" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">Email</h4>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 break-all">info@aletejah.tv</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-dark-800 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-dark-700">
                <form className="space-y-4 sm:space-y-6">
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.name}</label>
                        <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.email}</label>
                        <input type="email" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.message}</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
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