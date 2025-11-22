import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  isLive?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, isLive }) => {
  return (
    <div className="relative w-full aspect-video bg-black rounded-md sm:rounded-lg overflow-hidden group">
      {src ? (
        <iframe
          src={src}
          title="Video Player"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900 text-white">
            {poster && <img src={poster} alt="Poster" className="absolute inset-0 w-full h-full object-cover opacity-50" />}
            <div className="z-10 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-600 flex items-center justify-center mb-3 sm:mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <Play fill="white" className="ml-1" size={24} />
                    <Play fill="white" className="ml-1 hidden sm:block" size={32} />
                </div>
                {isLive && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="font-bold tracking-widest uppercase text-xs sm:text-sm md:text-base">Live Signal</span>
                    </div>
                )}
            </div>
        </div>
      )}
      {isLive && (
         <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 rtl:right-2 sm:rtl:right-3 md:rtl:right-4 rtl:left-auto bg-red-600 text-white text-[0.7rem] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1 z-20">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span> LIVE
         </div>
      )}
    </div>
  );
};