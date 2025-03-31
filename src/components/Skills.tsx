import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Skill {
  name: string;
}

const Skills = () => {
  const { t } = useLanguage();
  
  const technicalSkills: Skill[] = [
    { name: "PHP" },
    { name: "Laravel" },
    { name: "Java" },
    { name: "Spring Boot" },
    { name: "PostgreSQL" },
    
  ];
  
  const otherSkills = [
    "Git", "HTML", "CSS"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">{t('skills.technical')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg text-center hover:bg-indigo-600 transition-all duration-300 hover:scale-105 transform-gpu"
                >
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">{t('skills.additional')}</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 transform-gpu"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;