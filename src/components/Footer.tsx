import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">Erlan Kurmanov</h3>
            <p>Java Backend Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/ErlanKurmanov" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/erlan-kurmanov-561aa3233/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:erlan.kurmanov@outlook.com" className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 transform-gpu"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Erlan Kurmanov. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;