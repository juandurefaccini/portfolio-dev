export const personalInfo = {
  name: "Juan Faccini",
  title: "Desarrollador de Software",
  location: "Argentina 🇦🇷",
  email: "juan.durefaccini@outlook.com.ar",
  linkedin: "https://www.linkedin.com/in/juan-agustín-duré-faccini",
  github: "https://github.com/juandurefaccini",
};

export const summary = `
Actualmente me encuentro finalizando mis estudios de la carrera Ingeniería de Sistemas. 
Busco seguir creciendo en roles donde pueda aplicar mis conocimientos, liderar equipos y 
contribuir con soluciones tecnológicas innovadoras.

Trabajo hace más de 4 años en la industria del desarrollo de software, y he tenido la 
oportunidad de trabajar en diferentes proyectos, tanto en el ámbito académico como en el 
profesional. Me apasiona el desarrollo de software y la tecnología en general.
`;

export type Technology = {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "mobile" | "servicios" | "otros";
  level: "principiante" | "intermedio" | "avanzado";
};

export const technologies: Technology[] = [
  {
    name: "React",
    icon: "vscode-icons:file-type-reactjs",
    category: "frontend",
    level: "avanzado",
  },
  {
    name: "Next.js",
    icon: "vscode-icons:file-type-next",
    category: "frontend",
    level: "intermedio",
  },
  {
    name: "Tailwind",
    icon: "vscode-icons:file-type-tailwind",
    category: "frontend",
    level: "intermedio",
  },
  {
    name: "Redux",
    icon: "devicon:redux",
    category: "frontend",
    level: "intermedio",
  },
  {
    name: "TypeScript",
    icon: "devicon:typescript",
    category: "frontend",
    level: "intermedio",
  },
  {
    name: "Astro",
    icon: "devicon:astro",
    category: "frontend",
    level: "intermedio",
  },
  {
    name: "Node.js",
    icon: "vscode-icons:file-type-node",
    category: "backend",
    level: "intermedio",
  },
  {
    name: "Springboot",
    icon: "devicon:spring",
    category: "backend",
    level: "intermedio",
  },
  {
    name: ".NET",
    icon: "devicon:dot-net",
    category: "backend",
    level: "intermedio",
  },
  {
    name: "SQL",
    icon: "devicon:postgresql",
    category: "backend",
    level: "intermedio",
  },
  {
    name: "React Native",
    icon: "vscode-icons:file-type-reactjs",
    category: "mobile",
    level: "intermedio",
  },
  {
    name: "Flutter",
    icon: "vscode-icons:file-type-flutter",
    category: "mobile",
    level: "intermedio",
  },
  {
    name: "Android",
    icon: "devicon:androidstudio",
    category: "mobile",
    level: "principiante",
  },
  {
    name: "Firebase",
    icon: "vscode-icons:file-type-firebase",
    category: "servicios",
    level: "intermedio",
  },
  {
    name: "AWS",
    icon: "vscode-icons:file-type-aws",
    category: "servicios",
    level: "principiante",
  },
  {
    name: "OpenAI",
    icon: "simple-icons:openai",
    category: "servicios",
    level: "principiante",
  },
  {
    name: "Gemini AI",
    icon: "devicon:google",
    category: "servicios",
    level: "principiante",
  },
  {
    name: "Git",
    icon: "vscode-icons:file-type-git",
    category: "otros",
    level: "avanzado",
  },
  {
    name: "bash",
    icon: "devicon:bash",
    category: "otros",
    level: "avanzado",
  },
  {
    name: "Docker",
    icon: "vscode-icons:file-type-docker",
    category: "otros",
    level: "intermedio",
  },
  {
    name: "Unity",
    icon: "devicon:unity",
    category: "otros",
    level: "intermedio",
  },
  {
    name: "nginx",
    icon: "vscode-icons:file-type-nginx",
    category: "otros",
    level: "principiante",
  },
  {
    name: "Figma",
    icon: "devicon:figma",
    category: "otros",
    level: "principiante",
  },
  {
    name: "Electron",
    icon: "vscode-icons:file-type-reactjs",
    category: "otros",
    level: "principiante",
  },
  {
    name: "Google Play",
    icon: "logos:google-play-console-icon",
    category: "otros",
    level: "principiante",
  },
];

export const softSkills = [
  {
    name: "Liderar",
    description: "Experiencia liderando equipos de desarrollo de software.",
  },
  {
    name: "Analizar",
    description: "Experiencia en el análisis funcional de sistemas.",
  },
  {
    name: "Comunicar",
    description:
      "Experiencia en comunicación con clientes para presentar avances.",
  },
  {
    name: "Presupuestar",
    description:
      "Experiencia en la definición de presupuestos para proyectos de desarrollo de software.",
  },
];

export const projects = [
  {
    name: "Registro de lactancia para infancia",
    description:
      "Generé una aplicación web para llevar registro acerca de las ingestas de leche de una recién nacida en Paraguay. La aplicación permitía llevar un registro de las tomas, la cantidad de leche ingerida y el tiempo que duraba cada toma. Esta aplicación permitió a la madre llevar un registro de la alimentación de su hija más ágil y a los médicos tener un seguimiento más detallado de la misma.",
    link: null,
    tags: ["Proyecto individual", "Proyecto no remunerado"],
  },
  {
    name: "Sistema de administración para UNICEN",
    description:
      "Mi trabajo de tesis, en el cual estoy trabajando actualmente, se enfoca en un sistema de administración para digitalizar los diferentes procesos existentes en las residencias universitarias de la UNICEN.",
    link: null,
    tags: ["Proyecto de tesis"],
  },
  {
    name: "Gestión de documentos académicos",
    description:
      "Desarrollé una aplicación que permite a los alumnos gestionar sus documentos académicos desde una interfaz intuitiva tanto en versión web como de escritorio. La aplicación fue una solución entregada como trabajo final de la materia Programación Orientada a Objetos. Busca replicar el sistema de alojamiento y gestión de archivos en la nube.",
    link: null,
    tags: ["Proyecto de materia", "Proyecto grupal"],
  },
  {
    name: "Participación en el dictado de curso introductorio al desarrollo de videojuegos",
    description:
      "Colaboré en un proyecto de extensión de la UNICEN, brindando apoyo en un curso introductorio sobre el desarrollo de videojuegos. Trabajamos en la historia de los mismos, los diferentes recursos utilizados para optimizar la performance y dimos varias clases de introducción al desarrollo. El ciclo culminó con una jornada donde los participantes del curso tenían que realizar un juego en 6 horas.",
    link: null,
    tags: [
      "Proyecto de extensión",
      "Proyecto no remunerado",
      "Proyecto grupal",
    ],
  },
];

type JobExperienceDetail = {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
  tags?: string[];
};

type JobExperience = {
  title: string;
  period: string;
  details: JobExperienceDetail[];
};


export const experience: JobExperience[] = [
  {
    title: "Freelance",
    period: "Ene. 2024 - Actualidad · 10 meses",
    details: [
      {
        title: "Zenova",
        description:
          "Consultora de desarrollo de software. Fuí responsable de crear la landing page",
        link: "https://www.zanova.tech/",
        technologies: ["NextJs", "Tailwind CSS"],
        tags: ["Landing Page"],
      },
      {
        title: "Hermes",
        description:
          "Agencia de asistentes con inteligencia artificial. Fui responsable de crear el branding, la landing page y el desarrollo del producto, además de generar demostraciones para potenciales clientes, lo que resultó clave para atraer interesados.",
        link: "https://www.hermes-chatbot.online/",
        technologies: ["Astro", "Tailwind CSS", "OpenAI", "Gemini"],
        tags: ["Landing Page", "Branding", "Formulario de contacto"],
      },
      {
        title: "Venom Store",
        description:
          "Desarrollo de una tienda de ecommerce con punto de venta. El proyecto fue redirigido a una plataforma de tienda nube por cambios en los requerimientos del cliente.",
        technologies: ["React", "Tailwind CSS"],
        tags: ["E-Commerce", "Punto de Venta"],
      },
      {
        title: "Tracking de lactancia",
        description:
          "Desarrollé una plataforma para llevar registro de la lactancia de una madre, y así evitar el uso de documentos papel. Este proyecto facilitó la vida de la madre y permitió un seguimiento más detallado de la alimentación del bebé.",
        technologies: ["React", "Tailwind CSS"],
        tags: ["Single Page Application"],
      },
    ],
  },
  {
    title: "FixRiver",
    period: "Jul. 2022 - Ago. 2024 · 2 años 2 meses",
    details: [
      {
        title: "2B Conexión",
        description:
          "Desarrollo y mantenimiento de un CRM para una empresa de telecomunicaciones. Participé en todo el ciclo de vida del proyecto, incluyendo autentificación, procesamiento de tablas tanto en el servidor como en el cliente, chat, notificaciones internas y por email, administración de roles, panel de estadísticas y generación de reportes en PDF.",
        technologies: ["React", "PostgreSQL", "Springboot"],
        tags: ["CRM", "Telecomunicaciones"],
      },
      {
        title: "Aplicación de cursos de Inteligencia Artificial",
        description:
          "Presupuesté y desarrollé una aplicación en React Native, mejorando el código y añadiendo funcionalidades como reproducción de videos con Chromecast para iOS y Android, listas de favoritos, diseño responsive y descarga de videos para reproducción offline.",
        link: "https://play.google.com/store/apps/developer?id=Jonhernandez.education&hl=en-US",
        technologies: ["React Native", "Chromecast"],
        tags: ["Educación", "Inteligencia Artificial"],
      },
      {
        title: "Asistente comandado por voz",
        description:
          "Presupuesté y desarrollé un prototipo en FlutterFlow para un cliente, que convertí a Flutter una vez aprobado el presupuesto. La aplicación hace uso de la API de OpenAI para generar respuestas y se integra con servicios de generación de voz. Diseñada para ser completamente responsive y configurable desde un panel externo provisto por Make.",
        technologies: ["Flutter", "OpenAI"],
        tags: ["Asistente de voz", "FlutterFlow", "Prototipo"],
      },
      {
        title: "Mantenimiento de frontend y backend",
        description:
          "Mantenimiento de frontend y backend en diversos proyectos de la empresa.",
      },
    ],
  },
  {
    title: "NSK WHANAU",
    period: "Jul. 2021 - Jun. 2022 · 1 año",
    details: [
      {
        title: "Sistema ERP",
        description:
          "Realicé tareas de mantenimiento y mejoras para diferentes sistemas ERP. Implementé mejoras en el frontend, base de datos y backend, contribuyendo a optimizar el rendimiento y la usabilidad de los sistemas. Generación de API Rest. En ciertos casos participé en la comunicación con los clientes para la toma de requerimientos y el informe de avances.",
        technologies: ["HTML", ".NET", "SQL Server", "Razor"],
      },
    ],
  },
  {
    title: "PIP POP",
    period: "Dic. 2020 - Jun. 2021 · 7 meses",
    details: [
      {
        title: "My Ice Cream Journey",
        description:
          "Participé en el desarrollo temprano de My Ice Cream Journey, un videojuego mobile. Contribuí con el diseño de interfaces visuales, la lógica de game design y la implementación del prototipo. El juego fué lanzado en la Play Store pero actualmente no se encuentra disponible.",
        link: "https://youtube.com/shorts/dhVPdSjEFpU?si=MFJyXheWL8eT8GYH",
        technologies: ["Unity", "C#"],
      },
    ],
  },
];
