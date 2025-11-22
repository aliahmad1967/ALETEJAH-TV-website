import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockNews } from '../constants';
import { Clock } from 'lucide-react';

export const News: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredNews = activeCategory === 'All' 
    ? mockNews 
    : mockNews.filter(n => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-4 xs:py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">

        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 xs:mb-6 sm:mb-8">{t.news.title}</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3 mb-4 xs:mb-6 sm:mb-8 md:mb-10">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[0.7rem] xs:text-xs sm:text-sm font-medium transition-colors ${
              activeCategory === 'All'
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
            }`}
          >
            {t.programs.filterAll}
          </button>
          {t.news.categories.map((cat, index) => {
             // Mapping localized categories back to data categories for demo logic
             const dataCategory = ['Politics', 'Economy', 'Sports', 'Tech', 'World'][index];
             return (
              <button
                key={cat}
                onClick={() => setActiveCategory(dataCategory)}
                className={`px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[0.7rem] xs:text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === dataCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          {filteredNews.map((news) => (
            <div key={news.id} className="bg-white dark:bg-dark-800 rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
               <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 overflow-hidden">
                 <img
                    src={news.image}
                    alt={news.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-3 sm:top-4 left-3 sm:left-4 rtl:right-3 sm:rtl:right-4 rtl:left-auto">
                    <span className="bg-primary-600 text-white text-[0.7rem] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                        {news.category}
                    </span>
                 </div>
               </div>
               <div className="p-4 sm:p-5 md:p-6">
                   <div className="flex items-center text-gray-500 text-[0.7rem] sm:text-xs mb-2 sm:mb-3">
                       <Clock size={12} className="me-1 sm:hidden" />
                       <Clock size={14} className="me-1 hidden sm:block" />
                       {news.date}
                   </div>
                   <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                       {news.title[language]}
                   </h3>
                   <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                       {news.summary[language]}
                   </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};