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
    <div className="min-h-screen bg-white dark:bg-black py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">

        <div className="mb-6 pb-4 border-b-2 border-primary-600">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">{t.news.title}</h1>
        </div>

        {/* Filters - Sharp Design */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('All')}
            className={`btn-sharp px-4 py-2 text-xs sm:text-sm transition-colors ${
              activeCategory === 'All'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-700'
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
                className={`btn-sharp px-4 py-2 text-xs sm:text-sm transition-colors ${
                  activeCategory === dataCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dense News Grid - Professional Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredNews.map((news) => (
            <div key={news.id} className="news-card bg-gray-50 dark:bg-dark-900 sharp border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-primary-600 transition-all group">
               <div className="relative h-48 sm:h-56 overflow-hidden">
                 <img
                    src={news.image}
                    alt={news.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-2 left-2">
                    <span className="category-label text-[0.65rem]">
                        {news.category}
                    </span>
                 </div>
               </div>
               <div className="p-4">
                   <div className="flex items-center justify-between mb-2">
                       <span className="timestamp text-[0.65rem]">{news.date}</span>
                       <span className="text-[0.65rem] text-gray-500 dark:text-gray-400 font-semibold">{news.author}</span>
                   </div>
                   <h3 className="font-headline text-lg sm:text-xl font-bold uppercase dense text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                       {news.title[language]}
                   </h3>
                   <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2">
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