import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe, Moon, Sun, ArrowUpRight, Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { mockNews, mockPrograms } from '../constants';

export const Header: React.FC = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSearchOpen]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/live', label: t.nav.live },
    { path: '/news', label: t.nav.news },
    { path: '/programs', label: t.nav.programs },
    { path: '/schedule', label: t.nav.schedule },
    { path: '/contact', label: t.nav.contact },
  ];

  const filteredNews = searchQuery
    ? mockNews.filter(n => 
        n.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.summary[language].toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredPrograms = searchQuery
    ? mockPrograms.filter(p => 
        p.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description[language].toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const ArrowIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-dark-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center min-w-0">
              <NavLink to="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group">
                <div className="bg-primary-600 text-accent-500 p-1.5 sm:p-2 rounded-md sm:rounded-lg group-hover:bg-primary-700 transition-colors shadow-sm flex-shrink-0">
                  <ArrowUpRight size={18} className="sm:hidden" strokeWidth={3} />
                  <ArrowUpRight size={24} className="hidden sm:block md:hidden" strokeWidth={3} />
                  <ArrowUpRight size={28} className="hidden md:block" strokeWidth={3} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-none text-gray-900 dark:text-white">
                    {language === 'en' ? 'ALETEJAH' : 'الاتجاه'}
                  </span>
                  <span className="text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] font-bold text-primary-600 dark:text-accent-500 tracking-wider uppercase hidden xs:block truncate">
                    {language === 'en' ? 'One Direction' : 'للحقيقة اتجاه'}
                  </span>
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
               <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
               <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 dark:border-dark-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-1 xs:gap-2 sm:gap-3">
               <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:text-primary-600 transition-colors flex-shrink-0"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
               <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:text-primary-600 transition-colors flex-shrink-0"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors flex-shrink-0"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 shadow-lg">
            <div className="px-3 xs:px-4 sm:px-6 pt-3 pb-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
               <button
                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                className="w-full text-start px-4 py-3 rounded-lg text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors flex items-center gap-2"
              >
                <Globe size={16} />
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-dark-900 animate-in fade-in duration-200 flex flex-col">
           <div className="max-w-7xl mx-auto w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              {/* Overlay Header */}
              <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{t.search.placeholder}</h2>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                    aria-label="Close search"
                  >
                    <X size={20} className="sm:hidden" />
                    <X size={24} className="hidden sm:block" />
                  </button>
              </div>

              {/* Search Input */}
              <div className="relative mb-12">
                 <input 
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.search.typeToSearch}
                    className="w-full text-3xl md:text-5xl font-bold bg-transparent border-b-2 border-gray-200 dark:border-dark-700 pb-4 focus:outline-none focus:border-primary-600 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-dark-600"
                 />
                 <Search className="absolute right-0 rtl:left-0 rtl:right-auto top-2 text-gray-400" size={40} />
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto pb-20">
                 {searchQuery === '' ? (
                    <div className="text-center py-20 opacity-50">
                       <Search size={64} className="mx-auto mb-4 text-gray-300" />
                       <p className="text-xl text-gray-500">{t.search.typeToSearch}</p>
                    </div>
                 ) : (
                    <>
                       {/* Programs Results */}
                       {filteredPrograms.length > 0 && (
                          <div className="mb-10">
                             <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-100 dark:border-dark-700 pb-2">{t.search.programs}</h3>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {filteredPrograms.map(program => (
                                   <Link 
                                      key={program.id} 
                                      to={`/programs/${program.id}`}
                                      onClick={() => setIsSearchOpen(false)}
                                      className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors group"
                                   >
                                      <img src={program.image} alt="" className="w-20 h-20 object-cover rounded-md" />
                                      <div>
                                         <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{program.title[language]}</h4>
                                         <p className="text-xs text-gray-500 mt-1 line-clamp-2">{program.description[language]}</p>
                                      </div>
                                   </Link>
                                ))}
                             </div>
                          </div>
                       )}

                       {/* News Results */}
                       {filteredNews.length > 0 && (
                          <div className="mb-10">
                             <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-100 dark:border-dark-700 pb-2">{t.search.news}</h3>
                             <div className="space-y-4">
                                {filteredNews.map(news => (
                                   <Link 
                                      key={news.id} 
                                      to="/news"
                                      onClick={() => setIsSearchOpen(false)}
                                      className="block p-4 rounded-lg border border-gray-100 dark:border-dark-700 hover:border-primary-200 dark:hover:border-primary-900 bg-white dark:bg-dark-800 transition-colors group"
                                   >
                                      <div className="flex justify-between items-start">
                                         <div>
                                            <span className="text-xs font-bold text-primary-600 mb-1 block">{news.category}</span>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{news.title[language]}</h4>
                                         </div>
                                         <ArrowIcon size={20} className="text-gray-300 group-hover:text-primary-500" />
                                      </div>
                                   </Link>
                                ))}
                             </div>
                          </div>
                       )}

                       {filteredPrograms.length === 0 && filteredNews.length === 0 && (
                          <div className="text-center py-10 text-gray-500">
                             <p>{t.search.noResults}</p>
                          </div>
                       )}
                    </>
                 )}
              </div>
           </div>
        </div>
      )}
    </>
  );
};