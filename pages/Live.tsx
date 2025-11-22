import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { VideoPlayer } from '../components/VideoPlayer';
import { mockSchedule } from '../constants';

export const Live: React.FC = () => {
  const { t, language } = useLanguage();

  // Mock current and next programs
  const currentProgram = mockSchedule[0];
  const nextProgram = mockSchedule[1];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Player Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-dark-800 p-0.5 sm:p-1 rounded-lg sm:rounded-xl shadow-lg">
                <VideoPlayer
                    isLive={true}
                    poster="https://picsum.photos/1280/720?blur=2"
                />
            </div>

            <div className="bg-white dark:bg-dark-800 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 dark:border-dark-700">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0">
                    <div className="flex-1">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                            {t.live.liveStream}
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
                            {t.live.nowPlaying}: <span className="text-primary-600 font-semibold">{currentProgram.title[language]}</span>
                        </p>
                    </div>
                    <div className="text-start sm:text-end">
                         <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-bold">
                            LIVE
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Sidebar Schedule */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-800 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 dark:border-dark-700 overflow-hidden lg:sticky lg:top-24">
                <div className="bg-gray-100 dark:bg-dark-700 p-3 sm:p-4 border-b border-gray-200 dark:border-dark-600">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{t.live.upNext}</h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-dark-700 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto">
                    {mockSchedule.map((item, idx) => (
                        <div key={item.id} className={`p-3 sm:p-4 flex items-start gap-3 sm:gap-4 ${idx === 0 ? 'bg-primary-50 dark:bg-primary-900/10' : ''}`}>
                            <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
                                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{item.time}</span>
                                {idx === 0 && <span className="text-[9px] sm:text-[10px] uppercase font-bold text-red-600 mt-1">Now</span>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`font-semibold text-sm sm:text-base truncate ${idx === 0 ? 'text-primary-600' : 'text-gray-800 dark:text-gray-200'}`}>
                                    {item.title[language]}
                                </h4>
                                <span className="text-[0.7rem] sm:text-xs text-gray-500 bg-gray-100 dark:bg-dark-700 px-1.5 sm:px-2 py-0.5 rounded mt-1 inline-block">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};