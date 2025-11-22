import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockNews } from '../constants';

export const BreakingNews: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-red-600 text-white h-9 sm:h-10 flex items-center overflow-hidden relative z-40 border-b-2 border-red-700 broadcast-bars">
      {/* Breaking Label - Enhanced with Flash Animation */}
      <div className="breaking-label breaking-flash h-full px-3 sm:px-4 md:px-5 flex items-center justify-center text-[0.7rem] sm:text-xs md:text-sm z-10 shadow-lg whitespace-nowrap sharp">
        {t.news.breaking}
      </div>
      {/* Ticker Content - Enhanced Ticker Tape Effect */}
      <div className="flex-1 relative overflow-hidden h-full ticker-tape">
        {/* Marquee Container */}
        <div className="absolute top-0 whitespace-nowrap h-full flex items-center animate-marquee rtl:animate-marquee-rtl">
          {mockNews.map((news, index) => (
            <span key={news.id} className="mx-6 sm:mx-8 md:mx-10 text-xs sm:text-sm font-bold tracking-wide">
              <span className="ticker-number">{String(index + 1).padStart(2, '0')}</span>
              {news.title[language]}
            </span>
          ))}
           {mockNews.map((news, index) => (
            <span key={`${news.id}-dup`} className="mx-6 sm:mx-8 md:mx-10 text-xs sm:text-sm font-bold tracking-wide">
              <span className="ticker-number">{String(index + 1).padStart(2, '0')}</span>
              {news.title[language]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};