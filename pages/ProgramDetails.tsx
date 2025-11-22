import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPrograms, mockEpisodes } from '../constants';
import { Episode } from '../types';
import { Play, Calendar, Clock, User, ArrowLeft, ArrowRight, Facebook, Twitter, Copy, Check, Timer, Bell } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';

export const ProgramDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language, dir } = useLanguage();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [copiedEpisodeId, setCopiedEpisodeId] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const playerRef = useRef<HTMLDivElement>(null);

  const program = mockPrograms.find(p => p.id === id);
  const episodes = mockEpisodes.filter(e => e.programId === id);

  const relatedPrograms = program 
    ? mockPrograms
        .filter(p => p.category === program.category && p.id !== program.id)
        .slice(0, 4)
    : [];

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for episode in URL query params
    const episodeId = searchParams.get('episode');
    if (episodeId) {
        const ep = episodes.find(e => e.id === episodeId);
        if (ep) {
            setSelectedEpisode(ep);
            // Scroll to player if deeply linked
            setTimeout(() => {
                playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 800);
        } else {
            setSelectedEpisode(null);
        }
    } else {
        setSelectedEpisode(null);
    }
  }, [id, searchParams]); 

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">{t.search.noResults}</h2>
        <button 
          onClick={() => navigate('/programs')}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          {t.programDetails.back}
        </button>
      </div>
    );
  }

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
    setSearchParams({ episode: episode.id }, { replace: true });
    setTimeout(() => {
      playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'copy') => {
      const url = window.location.href.split('?')[0]; // Share base program URL
      const text = program.title[language];

      if (platform === 'copy') {
          navigator.clipboard.writeText(url);
          setLinkCopied(true);
          setTimeout(() => setLinkCopied(false), 2000);
      } else if (platform === 'facebook') {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      } else if (platform === 'twitter') {
          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
      }
  };

  const handleEpisodeShare = (e: React.MouseEvent, episode: Episode, platform: 'facebook' | 'twitter' | 'copy') => {
      e.stopPropagation(); // Prevent card click
      // Use window.location.href to ensure we keep the HashRouter path (e.g. /#/programs/p1)
      const url = `${window.location.href.split('?')[0]}?episode=${episode.id}`;
      const text = `${episode.title[language]} - ${program.title[language]}`;

      if (platform === 'copy') {
          navigator.clipboard.writeText(url);
          setCopiedEpisodeId(episode.id);
          setTimeout(() => setCopiedEpisodeId(null), 2000);
      } else if (platform === 'facebook') {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      } else if (platform === 'twitter') {
          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
      }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-12 sm:pb-16">
      {/* Hero Header - Sharp Professional Design */}
      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-full overflow-hidden sharp">
        <img
          src={program.image}
          alt={program.title[language]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end pb-8 sm:pb-10 md:pb-12">
            <div className="max-w-7xl mx-auto w-full px-3 xs:px-4 sm:px-6 lg:px-8">
                <Link to="/programs" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors font-bold uppercase text-sm tracking-wider">
                    <BackIcon size={20} className="me-2" />
                    {t.programDetails.back}
                </Link>
                <div className="category-label mb-4 inline-block">
                    {program.category}
                </div>
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-white mb-6 dense high-contrast">{program.title[language]}</h1>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm">
                    <span className="flex items-center gap-2 bg-black/50 px-3 py-1.5 sharp">
                        <User size={16} className="text-primary-500" />
                        <span className="font-bold uppercase text-white">{program.host[language]}</span>
                    </span>
                    <span className="flex items-center gap-2 bg-black/50 px-3 py-1.5 sharp">
                        <Clock size={16} className="text-primary-500" />
                        <span className="font-bold text-white">20:00 GMT</span>
                    </span>
                    <span className="flex items-center gap-2 bg-black/50 px-3 py-1.5 sharp">
                        <Timer size={16} className="text-primary-500" />
                        <span className="font-bold text-white">{program.duration}</span>
                    </span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
                
                {/* Active Video Player Section - Sharp Design */}
                {selectedEpisode && (
                   <div ref={playerRef} className="animate-in slide-in-from-top-4 duration-500 mb-10 sharp overflow-hidden border-2 border-gray-800 bg-black">
                      <VideoPlayer src={selectedEpisode.videoUrl} />
                      <div className="p-4 sm:p-5 bg-gray-900 dark:bg-dark-900 border-t-2 border-gray-800">
                         <div className="flex items-center justify-between">
                            <h3 className="font-headline text-base sm:text-lg font-bold uppercase text-white flex items-center gap-2">
                               <div className="live-indicator"></div>
                               {selectedEpisode.title[language]}
                            </h3>
                         </div>
                      </div>
                   </div>
                )}

                {/* Description Card - Sharp Professional Design */}
                <div className="bg-gray-50 dark:bg-dark-900 p-6 sm:p-8 sharp border-2 border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 pb-4 border-b-2 border-primary-600">
                        <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-gray-900 dark:text-white">{t.programDetails.about}</h2>
                        
                        {/* Main Program Share Buttons */}
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-dark-700/50 p-1.5 rounded-full border border-gray-100 dark:border-dark-600">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2">{t.programDetails.share}</span>
                            <button 
                                onClick={() => handleShare('facebook')}
                                className="p-2 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity"
                                title="Facebook"
                            >
                                <Facebook size={16} />
                            </button>
                            <button 
                                onClick={() => handleShare('twitter')}
                                className="p-2 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity"
                                title="Twitter"
                            >
                                <Twitter size={16} />
                            </button>
                            <button 
                                onClick={() => handleShare('copy')}
                                className="p-2 bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors"
                                title="Copy Link"
                            >
                                {linkCopied ? <Check size={16} className="text-green-600 dark:text-green-400" /> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                        {program.description[language]}
                    </p>

                    {/* Subscribe CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-gray-50 dark:bg-dark-700/30 rounded-xl border border-gray-100 dark:border-dark-600">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white dark:bg-dark-600 rounded-full shadow-sm text-red-600 dark:text-red-500 shrink-0">
                                <Bell size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                    {language === 'en' ? 'Subscribe to this program' : 'اشترك في هذا البرنامج'}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {language === 'en' ? 'Get notified about new episodes.' : 'احصل على إشعارات حول الحلقات الجديدة.'}
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsSubscribed(!isSubscribed)}
                            className={`w-full sm:w-auto px-6 py-3 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                                isSubscribed 
                                ? 'bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300' 
                                : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/20'
                            }`}
                        >
                            <Bell size={18} className={isSubscribed ? 'hidden' : 'block'} />
                            {isSubscribed 
                                ? (language === 'en' ? 'Subscribed' : 'تم الاشتراك') 
                                : (language === 'en' ? 'Subscribe' : 'اشتراك')
                            }
                            {isSubscribed && <Check size={18} />}
                        </button>
                    </div>
                </div>

                {/* Episodes Section - Dense Professional Grid */}
                <div>
                    <div className="mb-6 pb-3 border-b-2 border-primary-600">
                        <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-gray-900 dark:text-white">
                            {t.programDetails.episodes}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {episodes.length > 0 ? (
                            episodes.map((ep) => {
                                const isPlaying = selectedEpisode?.id === ep.id;
                                return (
                                    <div
                                        key={ep.id}
                                        onClick={() => handleEpisodeClick(ep)}
                                        className={`bg-gray-50 dark:bg-dark-900 sharp overflow-hidden border-2 transition-all group cursor-pointer flex flex-col ${
                                            isPlaying
                                            ? 'border-primary-600'
                                            : 'border-gray-200 dark:border-gray-800 hover:border-primary-600'
                                        }`}
                                    >
                                        <div className="relative aspect-video">
                                            <img src={ep.thumbnail} alt={ep.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className={`absolute inset-0 transition-colors flex items-center justify-center ${isPlaying ? 'bg-black/40' : 'bg-black/30 group-hover:bg-black/50'}`}>
                                                <div className={`w-14 h-14 sharp flex items-center justify-center transition-transform ${isPlaying ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 group-hover:scale-110'}`}>
                                                    <Play fill="currentColor" size={24} className="ml-1" />
                                                </div>
                                            </div>
                                            <span className="absolute bottom-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 sharp">
                                                {ep.duration}
                                            </span>
                                            {isPlaying && (
                                                <div className="absolute top-2 left-2 live-indicator bg-primary-600 text-white text-xs font-bold px-3 py-1 sharp">
                                                    PLAYING
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4 flex-1 flex flex-col">
                                            <div className="timestamp text-[0.65rem] mb-2">
                                                {ep.date}
                                            </div>
                                            <h3 className={`font-headline text-base sm:text-lg font-bold uppercase dense line-clamp-2 transition-colors mb-4 ${isPlaying ? 'text-primary-600' : 'text-gray-900 dark:text-white group-hover:text-primary-600'}`}>
                                                {ep.title[language]}
                                            </h3>
                                            
                                            {/* Episode Share Buttons */}
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-dark-700 mt-auto">
                                                <span className="text-xs text-gray-400 font-medium">{t.programDetails.share}:</span>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={(e) => handleEpisodeShare(e, ep, 'facebook')}
                                                        className="p-1.5 text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                                                        title="Facebook"
                                                    >
                                                        <Facebook size={14} />
                                                    </button>
                                                    <button 
                                                        onClick={(e) => handleEpisodeShare(e, ep, 'twitter')}
                                                        className="p-1.5 text-gray-400 hover:text-[#1DA1F2] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                                                        title="Twitter"
                                                    >
                                                        <Twitter size={14} />
                                                    </button>
                                                    <button 
                                                        onClick={(e) => handleEpisodeShare(e, ep, 'copy')}
                                                        className={`p-1.5 rounded-full transition-colors ${
                                                            copiedEpisodeId === ep.id 
                                                            ? 'text-green-600 bg-green-50 dark:bg-green-900/20' 
                                                            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                                                        }`}
                                                        title="Copy Link"
                                                    >
                                                        {copiedEpisodeId === ep.id ? <Check size={14} /> : <Copy size={14} />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full py-10 text-center text-gray-500">
                                {t.search.noResults}
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Programs Section */}
                {relatedPrograms.length > 0 && (
                  <div className="pt-10 border-t border-gray-200 dark:border-dark-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-s-4 border-primary-500 ps-4">
                        {t.programDetails.relatedPrograms}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedPrograms.map((prog) => (
                            <Link 
                                key={prog.id} 
                                to={`/programs/${prog.id}`}
                                className="group block bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-dark-700"
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img 
                                        src={prog.image} 
                                        alt={prog.title[language]} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>
                                <div className="p-4">
                                    <span className="text-xs font-bold text-primary-600 mb-1 block uppercase">{prog.category}</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors line-clamp-1">
                                        {prog.title[language]}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
                 {/* Latest Episode Highlight (First one) */}
                 {episodes[0] && (
                     <div className="bg-primary-600 text-white rounded-xl p-6 shadow-lg">
                         <h3 className="font-bold text-lg mb-4 opacity-90">{t.live.upNext}</h3>
                         <div 
                            className="relative rounded-lg overflow-hidden mb-4 aspect-video border-2 border-white/20 cursor-pointer group"
                            onClick={() => handleEpisodeClick(episodes[0])}
                         >
                             <img src={episodes[0].thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                 <Play fill="white" size={32} />
                             </div>
                         </div>
                         <h4 className="font-bold text-lg mb-2">{episodes[0].title[language]}</h4>
                         <p className="text-sm text-primary-100 mb-4 line-clamp-2">{program.description[language]}</p>
                         <button 
                            onClick={() => handleEpisodeClick(episodes[0])}
                            className="w-full py-2 bg-white text-primary-600 font-bold rounded text-sm hover:bg-gray-100 transition-colors"
                         >
                             {t.programs.watchEpisodes}
                         </button>
                     </div>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
};