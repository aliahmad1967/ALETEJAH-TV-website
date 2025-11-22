import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe, Moon, Sun, Radio, Search, ChevronRight, ChevronLeft, Facebook, Twitter, Youtube, Instagram, Calendar } from 'lucide-react';
import { mockNews, mockPrograms } from '../constants';

export const Header: React.FC = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

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

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return currentDate.toLocaleDateString(language === 'en' ? 'en-US' : 'ar-EG', options);
  };

  const formatTime = () => {
    return currentDate.toLocaleTimeString(language === 'en' ? 'en-US' : 'ar-EG', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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
      <header className="sticky top-0 z-50 bg-white dark:bg-dark-900 shadow-md">
        {/* Utility Bar - Date, Time, Socials */}
        <div className="bg-black text-white border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-8 text-xs">
              {/* Date & Time */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span className="hidden sm:inline font-medium">{formatDate()}</span>
                  <span className="sm:hidden font-medium">{formatTime()}</span>
                </div>
                <div className="hidden md:flex items-center gap-1.5 text-gray-400">
                  <span className="font-medium">{formatTime()}</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="Facebook">
                  <Facebook size={14} />
                </a>
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="Twitter">
                  <Twitter size={14} />
                </a>
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="Youtube">
                  <Youtube size={14} />
                </a>
                <a href="#" className="hover:text-accent-500 transition-colors hidden sm:inline" aria-label="Instagram">
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white dark:bg-dark-900 border-b-2 border-primary-600">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              {/* Logo - Sharp & Bold */}
              <div className="flex-shrink-0 flex items-center min-w-0">
                <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group">
                  <div className="bg-primary-600 text-white p-2 sharp group-hover:bg-primary-700 transition-colors flex-shrink-0">
                    <Radio size={20} className="sm:hidden" strokeWidth={2.5} />
                    <Radio size={24} className="hidden sm:block" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                      {language === 'en' ? 'ALETEJAH' : 'الاتجاه'}
                    </span>
                    <span className="text-[0.6rem] sm:text-[0.65rem] font-bold text-primary-600 dark:text-accent-500 tracking-widest uppercase hidden xs:block">
                      {language === 'en' ? 'NEWS NETWORK' : 'شبكة الأخبار'}
                    </span>
                  </div>
                </NavLink>
              </div>

              {/* Desktop Navigation - Sharp & Dense */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 sharp font-headline text-sm font-semibold tracking-wide uppercase transition-all ${
                        isActive
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                      } ${link.path === '/live' ? 'live-indicator' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Desktop Actions - Sharp Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 sharp text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 sharp text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-2 sharp font-headline text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                >
                  <Globe size={14} />
                  <span>{language === 'en' ? 'عربي' : 'EN'}</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 sharp text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 sharp text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 sharp text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                  aria-label="Menu"
                >
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Sharp Design */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-dark-900 border-t-2 border-primary-600 shadow-lg">
            <div className="px-3 xs:px-4 sm:px-6 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 sharp font-headline text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                className="w-full text-start px-4 py-3 sharp font-headline text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors flex items-center gap-2"
              >
                <Globe size={16} />
                {language === 'en' ? 'عربي' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Overlay - Sharp Design */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-dark-900 flex flex-col">
           <div className="max-w-7xl mx-auto w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-6">
              {/* Overlay Header */}
              <div className="flex justify-between items-center mb-6 border-b-2 border-primary-600 pb-4">
                  <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">{t.search.placeholder}</h2>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 sharp bg-black text-white hover:bg-gray-800 transition-colors"
                    aria-label="Close search"
                  >
                    <X size={24} />
                  </button>
              </div>

              {/* Search Input */}
              <div className="relative mb-8">
                 <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.search.typeToSearch}
                    className="w-full text-2xl sm:text-3xl md:text-4xl font-headline font-bold uppercase bg-transparent border-b-2 border-gray-300 dark:border-dark-700 pb-4 focus:outline-none focus:border-primary-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-dark-600"
                 />
                 <Search className="absolute right-0 rtl:left-0 rtl:right-auto top-2 text-gray-400" size={32} />
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