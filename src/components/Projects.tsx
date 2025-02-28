import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: 1,
      titleKey: "project1.title",
      descKey: "project1.desc",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "Docker"],
      github: "https://github.com/ErlanKurmanov",
      demo: "https://example.com"
    },
    {
      id: 2,
      titleKey: "project2.title",
      descKey: "project2.desc",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Java", "Spring Security", "JPA", "PostgreSQL", "JUnit"],
      github: "https://github.com/ErlanKurmanov"
    },
    {
      id: 3,
      titleKey: "project3.title",
      descKey: "project3.desc",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      tags: ["Java", "Spring WebFlux", "MongoDB", "WebSockets", "React"],
      github: "https://github.com/ErlanKurmanov",
      demo: "https://example.com"
    },
    {
      id: 4,
      titleKey: "project4.title",
      descKey: "project4.desc",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "Redis", "AWS S3"],
      github: "https://github.com/ErlanKurmanov"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-indigo-500/20 hover:shadow-xl transform-gpu"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredId === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t(project.titleKey)}</h3>
                <p className="text-gray-400 mb-4">{t(project.descKey)}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-indigo-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      hoveredId === project.id 
                        ? 'bg-indigo-600 text-white transform scale-105' 
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    <Github size={18} className="mr-2" />
                    {t('projects.code')}
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
                        hoveredId === project.id 
                          ? 'bg-gray-700 text-white transform scale-105' 
                          : 'bg-gray-700/50 text-gray-400'
                      }`}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;