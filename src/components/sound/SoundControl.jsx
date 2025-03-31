// src/components/sound/SoundControl.jsx
import React, { useEffect, useRef, useState } from 'react';
import { dsnCN } from '../../hooks/helper';
import './style.scss';

const wrapText = (text) =>
  text.split('').map((char, i) => (
    <span key={i} className="char">
      {char}
    </span>
  ));

const SoundControl = () => {
  const [isMuted, setIsMuted] = useState(() => {
    const storedValue = localStorage.getItem('isMuted');
    return storedValue === null ? false : storedValue === 'true';
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const tryPlay = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  useEffect(() => {
    localStorage.setItem('isMuted', isMuted.toString());
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        tryPlay();
      }
    }
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      if (!isMuted) tryPlay();
      else setIsPlaying(false);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, [isMuted]);

  const toggleSound = () => setIsMuted((prev) => !prev);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSound();
    }
  };

  const toggleClass = () => {
    if (!isMuted && isPlaying) return 'open'; // playing → show Pause
    return ''; // not playing → show Play
  };

  return (
    <div className="sound-control">
      <audio ref={audioRef} loop>
        <source src="/assets/sound/Sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div
        className={dsnCN('sound-toggle-btn', toggleClass())}
        onClick={toggleSound}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        title={isMuted}
        aria-label={isMuted}
      >
        <div className="toggle-text">
          <div className="text-open">{wrapText('Play')}</div>
          <div className="text-close">{wrapText('Pause')}</div>
          <div className="text-menu">{wrapText('Sound')}</div>
        </div>
      </div>
    </div>
  );
};

export default SoundControl;
