import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockNews, mockPrograms, mockSchedule, mockEpisodes } from '../constants';
import { Link } from 'react-router-dom';
import { Play, Clock, ChevronRight, ChevronLeft, Radio, Calendar, ArrowRight, ArrowLeft, Mail } from 'lucide-react';

export const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;
  const DirectionArrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // Mock Data Slices for Mosaic Grid
  const mainStory = mockNews[0];
  const sideStories = mockNews.slice(1, 4);
  const upNext = mockSchedule.slice(1, 3);
  const trendingEpisodes = mockEpisodes.slice(0, 4);

  return (
    <div className="min-h-screen pb-0 w-full max-w-full bg-gray-100 dark:bg-dark-900">
      {/* Hero Mosaic Grid - Professional News Network Style */}
      <section className="bg-black">
        <div className="mosaic-grid h-[400px] sm:h-[500px] md:h-[600px]">
          {/* Main Story - Large Left Panel */}
          <Link
            to={`/news`}
            className="mosaic-main relative overflow-hidden group news-card"
          >
            <img
              src={mainStory.image}
              alt={mainStory.title[language]}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="news-card-overlay"></div>
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
              <div className="category-label mb-3">
                {mainStory.category}
              </div>
              <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-3 sm:mb-4 text-white high-contrast dense">
                {mainStory.title[language]}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 line-clamp-2 md:line-clamp-3 high-contrast">
                {mainStory.summary[language]}
              </p>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                <span className="timestamp">{mainStory.date}</span>
                <span>•</span>
                <span className="font-semibold">{mainStory.author}</span>
              </div>
            </div>
          </Link>

          {/* Side Story 1 */}
          <Link
            to={`/news`}
            className="mosaic-side-1 relative overflow-hidden group news-card"
          >
            <img
              src={sideStories[0].image}
              alt={sideStories[0].title[language]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="news-card-overlay"></div>
            <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end">
              <div className="category-label mb-2 text-[0.65rem]">
                {sideStories[0].category}
              </div>
              <h2 className="font-headline text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase leading-tight text-white high-contrast dense line-clamp-2">
                {sideStories[0].title[language]}
              </h2>
              <span className="timestamp mt-2 hidden sm:block">{sideStories[0].date}</span>
            </div>
          </Link>

          {/* Side Story 2 */}
          <Link
            to={`/news`}
            className="mosaic-side-2 relative overflow-hidden group news-card"
          >
            <img
              src={sideStories[1].image}
              alt={sideStories[1].title[language]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="news-card-overlay"></div>
            <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end">
              <div className="category-label mb-2 text-[0.65rem]">
                {sideStories[1].category}
              </div>
              <h2 className="font-headline text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase leading-tight text-white high-contrast dense line-clamp-2">
                {sideStories[1].title[language]}
              </h2>
              <span className="timestamp mt-2 hidden sm:block">{sideStories[1].date}</span>
            </div>
          </Link>

          {/* Side Story 3 */}
          <Link
            to={`/news`}
            className="mosaic-side-3 relative overflow-hidden group news-card"
          >
            <img
              src={sideStories[2].image}
              alt={sideStories[2].title[language]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="news-card-overlay"></div>
            <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end">
              <div className="category-label mb-2 text-[0.65rem]">
                {sideStories[2].category}
              </div>
              <h2 className="font-headline text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase leading-tight text-white high-contrast dense line-clamp-2">
                {sideStories[2].title[language]}
              </h2>
              <span className="timestamp mt-2 hidden sm:block">{sideStories[2].date}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* On Air & Up Next Section - Sharp Professional Design */}
      <section className="bg-white dark:bg-dark-900 py-8 sm:py-12 border-t-4 border-primary-600">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Current Program - Main Focus */}
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-red-600">
                    <div className="live-indicator font-headline text-sm font-bold uppercase tracking-wider text-red-600">
                      {t.hero.liveSectionTitle}
                    </div>
                 </div>
                 <div className="bg-black sharp p-5 sm:p-6 border-2 border-gray-800 hover:border-primary-600 transition-colors group">
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

      {/* Latest News Grid - Dense Professional Layout */}
      <section className="py-8 sm:py-12 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 pb-3 border-b-2 border-primary-600">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
              {t.news.title}
            </h2>
            <Link to="/news" className="btn-sharp bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 text-xs sm:text-sm transition-colors">
              {t.hero.readMore}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {mockNews.map((news) => (
              <Link key={news.id} to="/news" className="news-card relative overflow-hidden group bg-white dark:bg-dark-900 sharp border border-gray-200 dark:border-gray-800 hover:border-primary-600 transition-all">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={news.image} alt={news.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2">
                    <span className="category-label text-[0.65rem]">{news.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-headline text-base sm:text-lg md:text-xl font-bold uppercase dense text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {news.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3">
                    {news.summary[language]}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="timestamp text-[0.65rem]">{news.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[0.65rem] text-gray-500 dark:text-gray-400 font-semibold">{news.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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