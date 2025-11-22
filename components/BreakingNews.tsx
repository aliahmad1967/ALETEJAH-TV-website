import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockNews } from '../constants';

export const BreakingNews: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-red-600 text-white h-8 sm:h-10 flex items-center overflow-hidden relative z-40">
      <div className="bg-red-700 h-full px-2 sm:px-3 md:px-4 flex items-center justify-center font-bold text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-wider z-10 shadow-lg whitespace-nowrap">
        {t.news.breaking}
      </div>
      <div className="flex-1 relative overflow-hidden h-full">
        {/* Marquee Container */}
        <div className="absolute top-0 whitespace-nowrap h-full flex items-center animate-marquee rtl:animate-marquee-rtl">
          {mockNews.map((news) => (
            <span key={news.id} className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm font-medium">
              {news.title[language]} <span className="mx-1 sm:mx-2 text-red-300">|</span>
            </span>
          ))}
           {mockNews.map((news) => (
            <span key={`${news.id}-dup`} className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm font-medium">
              {news.title[language]} <span className="mx-1 sm:mx-2 text-red-300">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};