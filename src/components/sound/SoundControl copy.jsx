// // src\components\sound\SoundControl.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import { dsnCN } from '../../hooks/helper';
// import './style.scss';

// const SoundControl = () => {
//     const [isMuted, setIsMuted] = useState(() => {
//         const storedValue = localStorage.getItem('isMuted');
//         return storedValue === null ? false : storedValue === 'true'; // По умолчанию звук включён
//     });
//     const [isPlaying, setIsPlaying] = useState(false);
//     const audioRef = useRef(null);

//     const tryPlay = () => {
//         if (audioRef.current) {
//             audioRef.current.play()
//                 .then(() => {
//                     setIsPlaying(true);
//                 })
//                 .catch((error) => {
//                     console.log('Autoplay blocked by browser:', error);
//                     setIsPlaying(false);
//                 });
//         }
//     };

//     // Управление воспроизведением при изменении isMuted
//     useEffect(() => {
//         localStorage.setItem('isMuted', isMuted.toString());
//         if (audioRef.current) {
//             if (isMuted) {
//                 audioRef.current.pause();
//                 setIsPlaying(false); // Устанавливаем isPlaying в false, если звук выключен
//             } else {
//                 tryPlay();
//             }
//         }
//     }, [isMuted]);

//     // Инициализация при монтировании
//     useEffect(() => {
//         const audio = audioRef.current;
//         if (audio) {
//             const handlePlay = () => setIsPlaying(true);
//             const handlePause = () => setIsPlaying(false);
    
//             audio.addEventListener('play', handlePlay);
//             audio.addEventListener('pause', handlePause);
    
//             if (!isMuted) {
//                 tryPlay();
//             } else {
//                 setIsPlaying(false);
//             }
    
//             return () => {
//                 audio.removeEventListener('play', handlePlay);
//                 audio.removeEventListener('pause', handlePause);
//             };
//         }
//     }, [isMuted]);

//     const toggleSound = () => {
//         setIsMuted((prev) => !prev);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             toggleSound();
//         }
//     };

//     return (
//         <div className="sound-control">
//             <audio ref={audioRef} loop>
//                 <source src="/assets/sound/Sound.mp3" type="audio/mpeg" />
//                 Your browser does not support the audio element.
//             </audio>

//             <div
//                 className="sound-toggle-btn"
//                 onClick={toggleSound}
//                 onKeyDown={handleKeyDown}
//                 role="button"
//                 tabIndex={0}
//                 title={isMuted ? 'Unmute' : 'Mute'}
//                 aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
//             >
//                 <svg
//                     className={dsnCN('equalizer-icon', isPlaying && 'playing')}
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                     fill="none"
//                 >
//                     <rect className="bar bar1" x="4" y="15" width="3" height="10" fill="currentColor" />
//                     <rect className="bar bar2" x="9" y="15" width="3" height="10" fill="currentColor" />
//                     <rect className="bar bar3" x="14" y="15" width="3" height="10" fill="currentColor" />
//                     <rect className="bar bar4" x="19" y="15" width="3" height="10" fill="currentColor" />
//                 </svg>
//             </div>
//         </div>
//     );
// };

// export default SoundControl;