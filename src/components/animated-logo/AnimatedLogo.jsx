// src\components\AnimatedLogo.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './AnimatedLogo.scss';

const AnimatedLogo = () => {
    const logoRef = useRef(null);
    const leftBracketRef = useRef(null);
    const rightBracketRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Разбиваем текст на буквы
        const text = textRef.current;
        if (text) {
            text.innerHTML = text.textContent
                .split('')
                .map(char => `<span class="char">${char}</span>`)
                .join('');
        }

        // Устанавливаем начальное положение скобок ближе друг к другу
        gsap.set(leftBracketRef.current, { x: 60 });
        gsap.set(rightBracketRef.current, { x: -60 });

        // Скрываем буквы текста изначально и задаём начальное смещение
        const chars = textRef.current.querySelectorAll('.char');
        gsap.set(chars, { autoAlpha: 0, y: 10 }); // Начальное смещение вверх на 10px

        const tl = gsap.timeline({ delay: 3 });

        // Появление скобок
        tl.fromTo(
            [leftBracketRef.current, rightBracketRef.current],
            { autoAlpha: 0, scale: 0 },
            { autoAlpha: 1, scale: 1, duration: 1.8, ease: "back.out(1.7)" }
        );

        // Разъезд скобок
        tl.to(leftBracketRef.current, { x: -20, duration: 0.6, ease: "power2.out" }, "-=0.2");
        tl.to(rightBracketRef.current, { x: 20, duration: 0.6, ease: "power2.out" }, "<");

        // Постепенное и плавное появление букв DEXSA
        tl.fromTo(
            chars,
            { autoAlpha: 0, y: 10 }, // Начальное состояние: невидимы и смещены вверх
            { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" } // Конечное состояние: видимы и на месте
        );
    }, []);

    return (
        <div className="animated-logo" ref={logoRef}>
            <span className="bracket left-bracket" ref={leftBracketRef}>{"{"}</span>
            <span className="logo-text" ref={textRef}>DEXSA</span>
            <span className="bracket right-bracket" ref={rightBracketRef}>{"}"}</span>
        </div>
    );
};

export default AnimatedLogo;