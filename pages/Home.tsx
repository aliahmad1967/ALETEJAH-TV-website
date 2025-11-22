import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockNews, mockPrograms, mockSchedule, mockEpisodes } from '../constants';
import { Link } from 'react-router-dom';
import { Play, Clock, ChevronRight, ChevronLeft, Radio, Calendar, ArrowRight, ArrowLeft, Mail } from 'lucide-react';

export const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % mockNews.length);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featuredNews = mockNews[currentSlide];
  const ArrowIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;
  const DirectionArrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // Mock Data Slices
  const upNext = mockSchedule.slice(1, 3);
  const trendingEpisodes = mockEpisodes.slice(0, 4);

  return (
    <div className="min-h-screen pb-0 w-full max-w-full">
      {/* Hero Section */}
      <section className="relative h-[350px] xs:h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] bg-dark-900 text-white overflow-hidden group">
        {/* Background Image with Fade Transition */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
           <img
            src={featuredNews.image}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 transition-transform duration-[10000ms] ease-linear scale-105 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className={`max-w-2xl transition-all duration-700 transform ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <span className="inline-block bg-primary-600 text-white text-[0.7rem] xs:text-xs sm:text-sm font-bold px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full mb-2 xs:mb-3 sm:mb-4">
              {featuredNews.category}
            </span>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 xs:mb-4 sm:mb-6">
              {featuredNews.title[language]}
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 mb-4 xs:mb-5 sm:mb-6 md:mb-8 line-clamp-2 sm:line-clamp-3">
              {featuredNews.summary[language]}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
              <Link to="/live" className="bg-primary-600 hover:bg-primary-700 text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-primary-600/50 text-xs xs:text-sm sm:text-base">
                <Play fill="currentColor" size={16} />
                {t.hero.watchLive}
              </Link>
              <Link to={`/news`} className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-bold transition-colors text-center text-xs xs:text-sm sm:text-base">
                {t.hero.readMore}
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 left-3 right-3 xs:left-4 xs:right-4 flex justify-center gap-1.5 xs:gap-2">
            {mockNews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-0.5 xs:h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-5 xs:w-6 sm:w-8 bg-accent-500' : 'w-1 xs:w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* On Air & Up Next Section */}
      <section className="bg-dark-900 text-white py-6 xs:py-8 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Current Program - Main Focus */}
              <div className="flex-1">
                 <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-red-600"></span>
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide uppercase text-primary-500">{t.hero.liveSectionTitle}</h2>
                 </div>
                 <div className="bg-dark-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-dark-700 hover:border-primary-900 transition-colors group">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                       <div className="relative w-full sm:w-1/2 aspect-video rounded-lg overflow-hidden">
                          <img src="https://picsum.photos/800/450?random=99" alt="Live" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <Link to="/live" className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 group-hover:scale-110">
                                <Play fill="currentColor" className="ml-1" size={20} />
                                <Play fill="currentColor" className="ml-1 hidden sm:block" size={28} />
                             </Link>
                          </div>
                       </div>
                       <div className="flex-1 w-full text-center sm:text-start">
                          <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 sm:mb-3 animate-pulse">LIVE</span>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{mockSchedule[0].title[language]}</h3>
                          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 line-clamp-2">Join our coverage of the most important events happening around the globe right now.</p>
                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                             <span className="flex items-center gap-1 sm:gap-2"><Clock size={14} className="sm:hidden" /><Clock size={16} className="hidden sm:block" /> 08:00 - 09:00</span>
                             <span className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></span>
                             <span className="hidden sm:inline">{t.hero.joinViewers}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Up Next List */}
              <div className="w-full lg:w-1/3">
                 <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-300">{t.live.upNext}</h3>
                 <div className="space-y-3 sm:space-y-4">
                    {upNext.map((item, idx) => (
                       <div key={idx} className="bg-dark-800 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center gap-3 sm:gap-4 border border-dark-700/50 hover:bg-dark-700 transition-colors">
                          <div className="text-center min-w-[50px] sm:min-w-[60px]">
                             <span className="block text-base sm:text-lg font-bold text-primary-500">{item.time}</span>
                             <span className="text-[0.65rem] sm:text-xs text-gray-500 uppercase">GMT</span>
                          </div>
                          <div className="h-8 sm:h-10 w-[1px] bg-dark-600"></div>
                          <div className="flex-1 min-w-0">
                             <h4 className="font-bold text-white text-sm sm:text-base md:text-lg truncate">{item.title[language]}</h4>
                             <span className="text-xs sm:text-sm text-gray-400">{item.type}</span>
                          </div>
                       </div>
                    ))}
                    <Link to="/schedule" className="block text-center py-2.5 sm:py-3 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors border border-dashed border-dark-600 rounded-lg sm:rounded-xl hover:bg-dark-800">
                       {t.schedule.title} <ArrowIcon className="inline w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-end gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-s-4 border-primary-500 ps-3 sm:ps-4">
            {t.news.title}
          </h2>
          <Link to="/news" className="text-sm sm:text-base text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1 group">
            {t.hero.readMore} <ArrowIcon size={16} className="sm:hidden group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            <ArrowIcon size={18} className="hidden sm:block group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mockNews.map((news) => (
            <div key={news.id} className="bg-white dark:bg-dark-800 rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="aspect-w-16 aspect-h-9 relative h-40 sm:h-48 overflow-hidden">
                <img src={news.image} alt={news.title[language]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-primary-600 text-[0.7rem] sm:text-xs">{news.category}</span>
                    <span className="flex items-center gap-1 text-[0.7rem] sm:text-xs"><Clock size={11} className="sm:hidden" /><Clock size={12} className="hidden sm:block" /> {news.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
                  {news.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 flex-1">
                  {news.summary[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Episodes (Horizontal Scroll) */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white dark:bg-dark-800 border-y border-gray-100 dark:border-dark-700">
         <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                    <Radio className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6" />
                    {t.hero.trendingTitle}
                </h2>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {trendingEpisodes.map((episode) => (
                   <Link to={`/programs/${episode.programId}`} key={episode.id} className="group block">
                      <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-md">
                         <img src={episode.thumbnail} alt={episode.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 text-primary-600 rounded-full flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                <Play fill="currentColor" className="ml-1" size={18} />
                                <Play fill="currentColor" className="ml-1 hidden sm:block" size={20} />
                             </div>
                         </div>
                         <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[0.7rem] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-medium">{episode.duration}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg leading-tight mb-1 group-hover:text-primary-600 transition-colors line-clamp-2">{episode.title[language]}</h3>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-2">
                         <Calendar size={12} className="sm:hidden" />
                         <Calendar size={14} className="hidden sm:block" />
                         <span>{episode.date}</span>
                      </div>
                   </Link>
                ))}
             </div>
         </div>
      </section>

      {/* Featured Programs */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-dark-900">
         <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-s-4 border-primary-500 ps-3 sm:ps-4">
                    {t.programs.title}
                </h2>
                <Link to="/programs" className="text-sm sm:text-base text-primary-600 font-semibold flex items-center gap-1 group">
                    {t.programs.filterAll} <ArrowIcon size={16} className="sm:hidden group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    <ArrowIcon size={18} className="hidden sm:block group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
             </div>

             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {mockPrograms.map((prog) => (
                    <Link
                      key={prog.id}
                      to={`/programs/${prog.id}`}
                      className="group relative rounded-lg sm:rounded-xl overflow-hidden aspect-[3/4] block shadow-md sm:shadow-lg"
                    >
                        <img src={prog.image} alt={prog.title[language]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-primary-400 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1">{prog.category}</p>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 line-clamp-2">{prog.title[language]}</h3>
                            <p className="text-gray-300 text-[0.65rem] sm:text-xs mb-2 sm:mb-3 hidden sm:block">{t.schedule.time}: 20:00 GMT</p>
                            <span className="inline-block w-full text-center bg-primary-600 text-white text-xs sm:text-sm py-1.5 sm:py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                                {t.programs.watchEpisodes}
                            </span>
                        </div>
                    </Link>
                ))}
             </div>
         </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-primary-600 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10 text-center">
             <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-4 sm:mb-6 text-white">
                <Mail size={24} className="sm:hidden" />
                <Mail size={32} className="hidden sm:block" />
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">{t.hero.newsletterTitle}</h2>
             <p className="text-primary-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {t.hero.newsletterDesc}
             </p>
             <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t.footer.subscribePlaceholder}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400 shadow-lg text-sm sm:text-base"
                />
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-dark-900 text-white font-bold rounded-lg hover:bg-dark-800 transition-colors shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                   {t.footer.subscribe} <DirectionArrow size={16} className="sm:hidden" />
                   <DirectionArrow size={18} className="hidden sm:block" />
                </button>
             </form>
         </div>
      </section>
    </div>
  );
};