'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookie-consent');
  });

  const updateConsentMode = (granted: boolean) => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
      });
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      updateConsentMode(consent === 'granted');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'granted');
    updateConsentMode(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'denied');
    updateConsentMode(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[--surface] border-t border-[--border] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Message */}
          <div className="flex-1 text-sm text-[--muted]">
            <p>
              We use cookies to analyze site traffic and improve your experience. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
              <a 
                href="/privacy" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Learn more
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-[--muted] bg-[--surface-alt] hover:bg-[--surface-alt] rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, string>) => void;
  }
}