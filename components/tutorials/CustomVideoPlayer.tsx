'use client';

import { useState, useEffect, useRef } from 'react';

interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail?: string;
}

interface CustomVideoPlayerProps {
  videos: Video[];
  playlistTitle: string;
}

// YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function CustomVideoPlayer({ videos, playlistTitle }: CustomVideoPlayerProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentVideoIndexRef = useRef(0);
  const shouldAutoplayRef = useRef(false);
  const currentVideo = videos[currentVideoIndex];
  const isLastVideo = currentVideoIndex === videos.length - 1;

  // Keep ref in sync with state
  useEffect(() => {
    currentVideoIndexRef.current = currentVideoIndex;
  }, [currentVideoIndex]);

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      // API already loaded, initialize player
      const timer = setTimeout(() => {
        initializePlayer();
      }, 100);
      return () => clearTimeout(timer);
    }

    // Load the API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Set up callback
    window.onYouTubeIframeAPIReady = () => {
      setTimeout(() => {
        initializePlayer();
      }, 100);
    };

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, []);

  // Initialize or update player when video changes
  useEffect(() => {
    if (window.YT && window.YT.Player && containerRef.current) {
      setShowContinueButton(false);
      
      if (playerRef.current) {
        // Destroy old player and create new one to ensure event handlers are updated
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore errors
        }
        playerRef.current = null;
      }
      
      // Initialize new player with current video
      const timer = setTimeout(() => {
        initializePlayer();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [currentVideo.id, currentVideoIndex, videos.length]);

  const initializePlayer = () => {
    if (!containerRef.current || !window.YT || !window.YT.Player) return;
    
    const videoId = videos[currentVideoIndexRef.current]?.id;
    if (!videoId) return;

    const shouldAutoplay = shouldAutoplayRef.current;
    // Reset the autoplay flag after using it
    shouldAutoplayRef.current = false;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: shouldAutoplay ? 1 : 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onStateChange: (event: any) => {
          // YT.PlayerState.ENDED = 0
          // Only show continue button if not the last video
          const currentIndex = currentVideoIndexRef.current;
          if (event.data === 0 && currentIndex < videos.length - 1) {
            setShowContinueButton(true);
          }
        },
      },
    });
  };

  const handleContinue = () => {
    if (currentVideoIndex < videos.length - 1) {
      // Set autoplay flag before changing video
      shouldAutoplayRef.current = true;
      setCurrentVideoIndex(currentVideoIndex + 1);
      setShowContinueButton(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Player - Left Side (2/3 width) */}
      <div className="lg:col-span-2">
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
          
          {/* Continue Button Overlay */}
          {showContinueButton && !isLastVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <button
                onClick={handleContinue}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
              >
                <span>Continue to Next Video</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Current Video Info */}
        <div className="mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-700">
              Video {currentVideoIndex + 1} of {videos.length}
            </span>
            <span>•</span>
            <span>{currentVideo.duration}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {currentVideo.title}
          </h3>
        </div>
      </div>

      {/* Video List - Right Side (1/3 width) */}
      <div className="lg:col-span-1">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
            <h3 className="font-semibold text-gray-900">{playlistTitle}</h3>
            <p className="text-sm text-gray-500">{videos.length} videos</p>
          </div>
          
          <div className="max-h-[600px] overflow-y-auto">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  setShowContinueButton(false);
                }}
                className={`w-full flex gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 text-left ${
                  index === currentVideoIndex ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                }`}
              >
                {/* Video Number */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-sm font-medium text-gray-700">
                  {index + 1}
                </div>
                
                {/* Video Info */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium line-clamp-2 ${
                    index === currentVideoIndex ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {video.duration}
                  </p>
                </div>

                {/* Playing indicator */}
                {index === currentVideoIndex && (
                  <div className="flex-shrink-0 flex items-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}