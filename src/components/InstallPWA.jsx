import { useState, useEffect } from 'react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // Stop auto-prompt
      setDeferredPrompt(e); // Save the event
      setIsVisible(true); // Show your button
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show install prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA installed!');
      } else {
        console.log('PWA install dismissed');
      }
      setDeferredPrompt(null);
      setIsVisible(false);
    });
  };

  return (
    isVisible && (
      <button onClick={handleInstallClick}>
        Download App
      </button>
    )
  );
};
