import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPrograms, mockSchedule } from '../constants';
import { Search, X, Radio } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Programs: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Identify currently playing program (Assuming first item in schedule is current for demo)
  const currentLiveProgramId = mockSchedule[0]?.programId;

  // Filter programs based on search query for the main grid
  const filteredPrograms = mockPrograms.filter(prog => 
    prog.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    prog.host[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    prog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Suggestions for the dropdown
  const suggestions = searchQuery.length > 0 
    ? mockPrograms.filter(prog => prog.title[language].toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-primary-600">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">{t.programs.title}</h1>

            <div className="relative w-full md:w-96" ref={searchContainerRef}>
                <div className="relative">
                  <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      placeholder={t.programs.searchPlaceholder}
                      className="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2.5 sm:py-3 sharp border-2 border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-gray-900 dark:text-white focus:ring-0 focus:border-primary-600 text-xs xs:text-sm sm:text-base font-medium"
                  />
                  <Search className="absolute left-3 top-3 sm:top-3.5 text-gray-400" size={16} />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 sm:top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* Auto-suggestions Dropdown - Sharp Design */}
                {isFocused && suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white dark:bg-dark-800 sharp shadow-xl border-2 border-gray-200 dark:border-dark-700 overflow-hidden">
                    <ul>
                      {suggestions.map((prog) => (
                        <li key={prog.id}>
                          <Link
                            to={`/programs/${prog.id}`}
                            className="w-full text-start px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors border-b border-gray-100 dark:border-dark-700 last:border-0"
                          >
                            <img src={prog.image} alt="" className="w-8 h-8 sharp object-cover" />
                            <span className="text-sm font-bold text-gray-900 dark:text-white">{prog.title[language]}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {filteredPrograms.map((prog) => {
                  const isLive = prog.id === currentLiveProgramId;
                  return (
                    <Link
                        key={prog.id}
                        to={`/programs/${prog.id}`}
                        className={`program-card block bg-gray-50 dark:bg-dark-900 sharp overflow-hidden border-2 transition-all group ${
                            isLive ? 'border-red-600' : 'border-gray-200 dark:border-gray-800 hover:border-primary-600'
                        }`}
                    >
                        <div className="h-56 sm:h-64 md:h-72 overflow-hidden relative">
                            <img
                                src={prog.image}
                                alt={prog.title[language]}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                                <span className="btn-sharp bg-primary-600 text-white px-6 py-2 font-bold uppercase text-xs tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    {t.programs.watchEpisodes}
                                </span>
                            </div>

                            {/* Category Label */}
                            <div className="absolute top-2 left-2">
                                <span className="category-label text-[0.65rem]">{prog.category}</span>
                            </div>

                            {/* Live Indicator */}
                            {isLive && (
                                <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2">
                                    <div className="live-indicator bg-red-600 text-white text-xs font-bold px-3 py-1 sharp flex items-center gap-1.5">
                                        <span>{t.live.nowPlaying}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-headline text-lg sm:text-xl font-bold uppercase dense text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{prog.title[language]}</h3>
                            <p className="text-primary-600 text-xs sm:text-sm font-bold uppercase tracking-wide mb-2">{prog.host[language]}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2">{prog.description[language]}</p>
                        </div>
                    </Link>
                  );
              })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-headline text-gray-400 dark:text-gray-500 text-xl uppercase">{t.search.noResults}</p>
          </div>
        )}

      </div>
    </div>
  );
};