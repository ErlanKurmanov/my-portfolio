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
    'hero.role': 'Backend Разработчик',
    'hero.cta': 'Мои работы',
    
    // About
    'about.title': 'Обо мне',
    'about.p1': 'Привет! Я Эрлан, начинающий Backend разработчик. Всегда стремлюсь самообразовываться, и идти в ногу со временем. ',
    'about.p2': 'В прошлом работал в Pepsico аналиток, где были рутинные задачи, и мне захотелось автоматизировать занесения данных клиентов. С этого начался мой путь в освоении программирования. Изучив javascript, смог написать небольшой скрипт, который сам заносил данные в систему. Во время изучения и написания кода, я понял, что мне нравится решать задачи бизнеса с помощью программирования. И в прошлом году уволившись с основной работы развиваюсь в backend разработке.',
    // 'about.p3': 'Когда я не пишу код, вы можете найти меня изучающим новые технологии.',
    'about.cta': 'Связаться со мной',
    'about.backend': 'Backend Разработка',
    'about.backend.desc': 'Создание серверных приложений',
    'about.database': 'Базы данных',
    'about.database.desc': 'Хранения и извлечения данных',
    
    // Projects
    'projects.title': 'Мои проекты',
    'projects.subtitle': 'Вот некоторые из проектов, над которыми я работал. Каждый проект представляет различные задачи и решения в backend-разработке.',
    'projects.code': 'Код',
    'projects.demo': 'Демо',
    
    // Skills
    'skills.title': 'Навыки',
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
    'project1.title': 'Backend электронной коммерции',
    'project1.desc': 'Включает в себя функциoналы: yправления товарами, пользователями, категориями, корзиной покупок, обработки заказов и т.д.',
    'project2.title': 'Система управления задачами',
    'project2.desc': '',
    'project3.title': 'Консольные приложения',
    // 'project3.desc': 'Писал консольные приложения для освоении языка java.',
    'project4.title': 'Сайт покупки/продажа авто',
    'project4.desc': '.'
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
    'hero.role': 'Backend Developer',
    'hero.cta': 'View My Work',
    
    // About
    'about.title': 'About Me',
    'about.p1': 'Hello! I\'m Erlan Kurmanov, a passionate Backend Developer with expertise in building server-side applications. I enjoy solving complex problems and creating efficient solutions that drive business value.',
    'about.p2': 'With a strong foundation in and related technologies, I specialize in developing backend systems. I\'m committed to writing clean, maintainable code and following best practices in software development.',
    'about.p3': 'When I\'m not coding, you can find me exploring new technologies.',
    'about.cta': 'Get In Touch',
    'about.backend': 'Backend Development',
    'about.backend.desc': 'Building server-side applications',
    'about.database': 'Database',
    'about.database.desc': 'Data storage and retrieval',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Here are some of the projects I\'ve worked on. Each project represents different challenges and solutions in backend development.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    
    // Skills
    'skills.title': 'Skills',
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
    'project1.title': 'E-commerce backend API',
    'project1.desc': 'It includes functionalities: product management, user management, categories, shopping cart, order processing, etc.',
    'project2.title': 'Task management system',
    'project2.desc': '',
    'project3.title': 'Console apps',
    'project3.desc': '',
    // 'project4.title': 'Content Management API',
    // 'project4.desc': 'Headless CMS API with content versioning, role-based access control, and media management.'
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