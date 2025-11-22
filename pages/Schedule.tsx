import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockSchedule } from '../constants';

export const Schedule: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-4 xs:py-6 sm:py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10">
             <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4">{t.schedule.title}</h1>
             <div className="inline-flex bg-white dark:bg-dark-800 rounded-lg p-0.5 xs:p-1 border border-gray-200 dark:border-dark-700">
                 <button className="px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-md bg-primary-600 text-white font-medium shadow-sm text-xs xs:text-sm sm:text-base">
                     {t.schedule.today}
                 </button>
                 <button className="px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-md text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-dark-700 text-xs xs:text-sm sm:text-base">
                     {t.schedule.tomorrow}
                 </button>
             </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 bg-gray-100 dark:bg-dark-700 py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-200 dark:border-dark-600 font-bold text-gray-700 dark:text-gray-200 text-xs sm:text-sm uppercase tracking-wider">
                <div className="col-span-3 md:col-span-2">{t.schedule.time}</div>
                <div className="col-span-9 md:col-span-10">{t.schedule.program}</div>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-dark-700">
                {mockSchedule.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 py-3 xs:py-4 sm:py-6 px-3 xs:px-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors items-start sm:items-center gap-2 sm:gap-0">
                        <div className="col-span-12 sm:col-span-3 md:col-span-2 font-mono text-sm xs:text-base sm:text-lg font-semibold text-primary-600">
                            {item.time}
                        </div>
                        <div className="col-span-12 sm:col-span-9 md:col-span-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate">
                                    {item.title[language]}
                                </h3>
                                <span className="text-[0.7rem] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    Entertainment
                                </span>
                            </div>
                            <div className="flex-shrink-0">
                                <span className={`inline-block px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.65rem] xs:text-[0.7rem] sm:text-xs font-bold uppercase ${
                                    item.type === 'Live' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                }`}>
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};