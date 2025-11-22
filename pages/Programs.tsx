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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-4 xs:py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 xs:gap-4 mb-4 xs:mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{t.programs.title}</h1>

            <div className="relative w-full md:w-96" ref={searchContainerRef}>
                <div className="relative">
                  <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      placeholder={t.programs.searchPlaceholder}
                      className="w-full pl-8 xs:pl-9 sm:pl-10 pr-8 xs:pr-9 sm:pr-10 py-2 xs:py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm text-xs xs:text-sm sm:text-base"
                  />
                  <Search className="absolute left-2.5 xs:left-3 top-2 xs:top-2.5 sm:top-3.5 text-gray-400" size={16} />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 sm:top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <X size={16} className="sm:hidden" />
                      <X size={18} className="hidden sm:block" />
                    </button>
                  )}
                </div>

                {/* Auto-suggestions Dropdown */}
                {isFocused && suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-2 bg-white dark:bg-dark-800 rounded-lg shadow-xl border border-gray-100 dark:border-dark-700 overflow-hidden">
                    <ul>
                      {suggestions.map((prog) => (
                        <li key={prog.id}>
                          <Link
                            to={`/programs/${prog.id}`}
                            className="w-full text-start px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                          >
                            <img src={prog.image} alt="" className="w-8 h-8 rounded object-cover" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{prog.title[language]}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredPrograms.map((prog) => {
                  const isLive = prog.id === currentLiveProgramId;
                  return (
                    <Link
                        key={prog.id}
                        to={`/programs/${prog.id}`}
                        className={`block bg-white dark:bg-dark-800 rounded-lg sm:rounded-xl shadow-sm overflow-hidden border transition-all group ${
                            isLive ? 'ring-2 ring-red-500 border-red-500' : 'border-gray-100 dark:border-dark-700 hover:shadow-md'
                        }`}
                    >
                        <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                            <img
                                src={prog.image}
                                alt={prog.title[language]}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-primary-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform text-sm sm:text-base">
                                    {t.programs.watchEpisodes}
                                </span>
                            </div>
                            
                            {/* Now Playing Badge */}
                            {isLive && (
                                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse z-10 shadow-lg">
                                    <Radio size={12} />
                                    <span>{t.live.nowPlaying}</span>
                                </div>
                            )}
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-primary-600 transition-colors">{prog.title[language]}</h3>
                            <p className="text-primary-600 text-sm font-medium text-center mb-3">{prog.host[language]}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm text-center line-clamp-2">{prog.description[language]}</p>
                        </div>
                    </Link>
                  );
              })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">{t.search.noResults}</p>
          </div>
        )}

      </div>
    </div>
  );
};