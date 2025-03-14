import React from 'react';
import { Code2, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-300">
              {t('about.p2')}
            </p>
            {/* <p className="text-lg text-gray-300">
              {t('about.p3')}
            </p> */}
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {t('about.cta')}
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Code2 size={40} className="text-indigo-400" />, title: 'about.backend', desc: 'about.backend.desc' },
              { icon: <Database size={40} className="text-indigo-400" />, title: 'about.database', desc: 'about.database.desc' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 transform-gpu">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{t(item.title)}</h3>
                <p className="text-gray-400">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;