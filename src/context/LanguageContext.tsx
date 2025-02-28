import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.hello': 'Привет, я',
    'hero.role': 'Java Backend Разработчик',
    'hero.cta': 'Мои работы',
    
    // About
    'about.title': 'Обо мне',
    'about.p1': 'Привет! Я Эрлан Курманов, увлеченный Java Backend разработчик с опытом создания надежных и масштабируемых серверных приложений. Мне нравится решать сложные задачи и создавать эффективные решения, которые приносят пользу бизнесу.',
    'about.p2': 'Имея прочную основу в Java и связанных технологиях, я специализируюсь на разработке высокопроизводительных бэкенд-систем и RESTful API. Я стремлюсь писать чистый, поддерживаемый код и следовать лучшим практикам в разработке программного обеспечения.',
    'about.p3': 'Когда я не пишу код, вы можете найти меня изучающим новые технологии, вносящим вклад в проекты с открытым исходным кодом или наслаждающимся активным отдыхом для поддержания здорового баланса между работой и личной жизнью.',
    'about.cta': 'Связаться со мной',
    'about.backend': 'Backend Разработка',
    'about.backend.desc': 'Создание надежных серверных приложений',
    'about.database': 'Проектирование баз данных',
    'about.database.desc': 'Оптимизация хранения и извлечения данных',
    
    // Projects
    'projects.title': 'Мои проекты',
    'projects.subtitle': 'Вот некоторые из проектов, над которыми я работал. Каждый проект представляет различные задачи и решения в backend-разработке.',
    'projects.code': 'Код',
    'projects.demo': 'Демо',
    
    // Skills
    'skills.title': 'Навыки и опыт',
    'skills.technical': 'Технические навыки',
    'skills.additional': 'Дополнительные навыки',
    
    // Contact
    'contact.title': 'Связаться со мной',
    'contact.subtitle': 'Не стесняйтесь обращаться ко мне по любым вопросам или предложениям',
    'contact.info': 'Контактная информация',
    'contact.open': 'Я открыт для новых возможностей и сотрудничества. Не стесняйтесь обращаться, если у вас есть вопрос или просто хотите поздороваться!',
    'contact.email': 'Электронная почта',
    'contact.location': 'Местоположение',
    'contact.phone': 'Телефон',
    'contact.form': 'Отправить мне сообщение',
    'contact.name': 'Ваше имя',
    'contact.your.email': 'Ваш email',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить сообщение',
    'contact.sending': 'Отправка...',
    'contact.success': 'Спасибо! Ваше сообщение успешно отправлено.',
    
    // Footer
    'footer.rights': 'Все права защищены.',
    
    // Project titles and descriptions
    'project1.title': 'E-Commerce Микросервисы',
    'project1.desc': 'Масштабируемая платформа электронной коммерции, созданная с использованием Spring Boot, Spring Cloud и Kafka для архитектуры, управляемой событиями.',
    'project2.title': 'Банковская API Система',
    'project2.desc': 'Безопасный банковский API с управлением транзакциями, аутентификацией и комплексным логированием.',
    'project3.title': 'Система управления задачами',
    'project3.desc': 'Приложение для совместного управления задачами с обновлениями и уведомлениями в реальном времени.',
    'project4.title': 'API управления контентом',
    'project4.desc': 'Headless CMS API с версионированием контента, контролем доступа на основе ролей и управлением медиа.'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.hello': 'Hello, I\'m',
    'hero.role': 'Java Backend Developer',
    'hero.cta': 'View My Work',
    
    // About
    'about.title': 'About Me',
    'about.p1': 'Hello! I\'m Erlan Kurmanov, a passionate Java Backend Developer with expertise in building robust and scalable server-side applications. I enjoy solving complex problems and creating efficient solutions that drive business value.',
    'about.p2': 'With a strong foundation in Java and related technologies, I specialize in developing high-performance backend systems and RESTful APIs. I\'m committed to writing clean, maintainable code and following best practices in software development.',
    'about.p3': 'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.',
    'about.cta': 'Get In Touch',
    'about.backend': 'Backend Development',
    'about.backend.desc': 'Building robust server-side applications',
    'about.database': 'Database Design',
    'about.database.desc': 'Optimizing data storage and retrieval',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Here are some of the projects I\'ve worked on. Each project represents different challenges and solutions in backend development.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.technical': 'Technical Proficiency',
    'skills.additional': 'Additional Skills',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Feel free to contact me for any work or suggestions below',
    'contact.info': 'Contact Information',
    'contact.open': 'I\'m open for new opportunities and collaborations. Feel free to reach out if you have a question or just want to say hi!',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.phone': 'Phone',
    'contact.form': 'Send Me a Message',
    'contact.name': 'Your Name',
    'contact.your.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Your message has been sent successfully.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Project titles and descriptions
    'project1.title': 'E-Commerce Microservices',
    'project1.desc': 'A scalable e-commerce platform built with Spring Boot, Spring Cloud, and Kafka for event-driven architecture.',
    'project2.title': 'Banking API System',
    'project2.desc': 'Secure banking API with transaction management, authentication, and comprehensive logging.',
    'project3.title': 'Task Management System',
    'project3.desc': 'A collaborative task management application with real-time updates and notifications.',
    'project4.title': 'Content Management API',
    'project4.desc': 'Headless CMS API with content versioning, role-based access control, and media management.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};