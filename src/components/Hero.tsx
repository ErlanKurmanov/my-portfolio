import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ErlanImage from '../assets/images/Erlan.png';

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    
    const startAnimation = () => {
      let iteration = 0;
      const originalText = text.dataset.value || "";
      
      clearInterval(interval as number);
      
      interval = setInterval(() => {
        text.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(interval as number);
        }
        
        iteration += 1 / 3;
      }, 30) as unknown as number;
    };

    startAnimation();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
      
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-indigo-400 text-xl md:text-2xl font-medium mb-4">{t('hero.hello')}</h2>
          <h1 
            ref={textRef} 
            data-value="ERLAN KURMANOV"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            ERLAN KURMANOV
          </h1>
          <h3 className="text-2xl md:text-3xl text-gray-300 mb-8">{t('hero.role')}</h3>
          
          <div className="flex justify-center md:justify-start space-x-4 mb-12">
            <a href="https://github.com/ErlanKurmanov?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/erlan-kurmanov-561aa3233/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:erlan.kurmanov@outlook.com" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            {t('hero.cta')}
            <ArrowDown size={18} className="ml-2 animate-bounce" />
          </a>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl shadow-indigo-500/20 animate-float">
              <img 
                src={ErlanImage} 
                alt="Erlan Kurmanov" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-0.5 bg-indigo-500 opacity-20 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;