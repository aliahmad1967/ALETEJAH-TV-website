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
    <div className="min-h-screen bg-black py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Main Player Section - Broadcast Style */}
          <div className="lg:col-span-2 space-y-2">
            {/* Live Indicator Bar - Enhanced with Broadcast Features */}
            <div className="bg-red-600 sharp p-3 flex items-center justify-between broadcast-bars">
                <div className="flex items-center gap-3">
                    <div className="live-indicator text-white font-bold uppercase text-sm tracking-wider">
                        {t.live.liveStream}
                    </div>
                    <div className="quality-badge hidden sm:inline-block">HD</div>
                    <div className="signal-indicator hidden md:flex">
                        <div className="signal-bar"></div>
                        <div className="signal-bar"></div>
                        <div className="signal-bar"></div>
                        <div className="signal-bar"></div>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-white text-xs">
                    <span className="broadcast-time hidden sm:inline-block">{currentProgram.time}</span>
                    <span className="font-bold hidden xs:inline">●</span>
                    <span className="font-medium truncate max-w-[150px] sm:max-w-none">{currentProgram.title[language]}</span>
                </div>
            </div>

            {/* Video Player - Sharp Design */}
            <div className="bg-black sharp border-2 border-gray-800">
                <VideoPlayer
                    isLive={true}
                    poster="https://picsum.photos/1280/720?blur=2"
                />
            </div>

            {/* Program Info - Professional Layout */}
            <div className="bg-gray-900 dark:bg-dark-900 sharp p-4 sm:p-5 border-2 border-gray-800">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="category-label text-[0.65rem]">{currentProgram.type}</span>
                            <span className="timestamp text-[0.65rem]">{currentProgram.time}</span>
                        </div>
                        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white mb-2">
                            {currentProgram.title[language]}
                        </h1>
                        <p className="text-sm text-gray-400">
                            {t.live.nowPlaying}
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Sidebar Schedule - TV Guide Style */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 dark:bg-dark-900 sharp border-2 border-gray-800 overflow-hidden lg:sticky lg:top-24">
                <div className="bg-primary-600 sharp p-4 border-b-2 border-primary-700">
                    <h3 className="font-headline text-lg font-bold uppercase tracking-wide text-white">{t.live.upNext}</h3>
                </div>
                <div className="divide-y divide-gray-800 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto">
                    {mockSchedule.map((item, idx) => (
                        <div key={item.id} className={`p-4 flex items-start gap-3 transition-colors ${idx === 0 ? 'bg-red-600/20 border-l-4 border-red-600' : 'hover:bg-gray-800'}`}>
                            <div className="flex flex-col items-center min-w-[60px]">
                                <span className="text-sm font-bold text-white">{item.time}</span>
                                {idx === 0 && (
                                    <div className="live-indicator mt-1">
                                        <span className="text-[10px] uppercase font-bold text-red-500">Now</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`font-headline text-sm sm:text-base font-bold uppercase dense ${idx === 0 ? 'text-white' : 'text-gray-300'}`}>
                                    {item.title[language]}
                                </h4>
                                <span className="category-label text-[0.6rem] mt-1.5 inline-block">
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