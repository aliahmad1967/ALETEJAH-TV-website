import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockSchedule } from '../constants';

export const Schedule: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-black py-6 sm:py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="mb-6 pb-4 border-b-2 border-primary-600">
             <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-4">{t.schedule.title}</h1>
             <div className="inline-flex sharp border-2 border-gray-300 dark:border-gray-700 overflow-hidden">
                 <button className="btn-sharp px-6 py-2 bg-primary-600 text-white font-bold uppercase text-xs tracking-wider">
                     {t.schedule.today}
                 </button>
                 <button className="btn-sharp px-6 py-2 bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 font-bold uppercase text-xs tracking-wider hover:bg-gray-100 dark:hover:bg-dark-800 border-l-2 border-gray-300 dark:border-gray-700">
                     {t.schedule.tomorrow}
                 </button>
             </div>
        </div>

        {/* TV Guide Style Schedule */}
        <div className="bg-gray-50 dark:bg-dark-900 sharp border-2 border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 bg-primary-600 py-4 px-6 border-b-2 border-primary-700">
                <div className="col-span-3 md:col-span-2 font-headline text-sm font-bold text-white uppercase tracking-wider">{t.schedule.time}</div>
                <div className="col-span-9 md:col-span-10 font-headline text-sm font-bold text-white uppercase tracking-wider">{t.schedule.program}</div>
            </div>
            <div className="divide-y-2 divide-gray-200 dark:divide-gray-800">
                {mockSchedule.map((item, idx) => (
                    <div key={item.id} className={`grid grid-cols-12 py-4 sm:py-5 px-4 sm:px-6 transition-colors items-start sm:items-center gap-3 sm:gap-0 ${
                        idx === 0 ? 'bg-red-600/10 border-l-4 border-red-600' : 'hover:bg-gray-100 dark:hover:bg-dark-800'
                    }`}>
                        <div className="col-span-12 sm:col-span-3 md:col-span-2">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                                    {item.time}
                                </span>
                                {idx === 0 && (
                                    <div className="live-indicator">
                                        <span className="text-[10px] uppercase font-bold text-red-600">Live</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-9 md:col-span-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <h3 className="font-headline text-base sm:text-lg md:text-xl font-bold uppercase dense text-gray-900 dark:text-white mb-1">
                                    {item.title[language]}
                                </h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    Entertainment
                                </span>
                            </div>
                            <div className="flex-shrink-0">
                                <span className={`category-label text-[0.65rem] ${
                                    item.type === 'Live' ? 'bg-red-600' : 'bg-blue-600'
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