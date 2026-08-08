export const profile = {
  name: 'Anusha Payidiparthi',
  title: 'Senior Frontend & Full-Stack Developer',
  location: 'San Francisco Bay Area',
  phone: '341-356-2072',
  email: 'anushapayidiparthi406@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anusha-p-678a25251/',
  resumeUrl: '/Anusha-Payidiparthi-Resume.pdf',
  availability: 'Open to senior frontend / full-stack roles',
  summary:
    'Results-driven senior UI engineer with 10+ years architecting scalable, accessible enterprise web apps for Fortune 500 teams across banking, telecom, and technology.',
};

export const highlights = [
  { value: '10+', label: 'Years shipping production UI' },
  { value: 'Fortune 500', label: 'Banking & telecom platforms' },
  { value: 'WCAG 2.1', label: 'Accessible, inclusive interfaces' },
  { value: 'MERN / MEAN', label: 'End-to-end product delivery' },
];

export const experience = [
  {
    company: 'Wells Fargo',
    location: 'San Francisco, CA',
    role: 'Senior UI Developer',
    period: 'Dec 2021 — Present',
    project: 'Banker Compass — Customer Account Management',
    blurb:
      'Frontend platform used by bankers for sensitive account actions, gated by dynamic multi-factor authentication based on customer status.',
    impact: [
      'Designed and shipped scalable React + TypeScript UI for mission-critical banking workflows.',
      'Built secure OTP and QR authentication flows aligned with enterprise compliance standards.',
      'Implemented Redux / Redux Saga state for sessions, auth, audit filters, and reporting.',
      'Delivered a Node.js BFF layer to orchestrate multi-API calls with lower latency.',
      'Raised quality with Jest, React Testing Library, and BDD automation gates.',
      'Partnered with UX via Figma prototypes before engineering commitment; mentored juniors and enforced review standards.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Redux Saga',
      'Node.js',
      'REST',
      'Vite',
      'Jest',
      'Azure',
      'Microservices',
    ],
  },
  {
    company: 'T-Mobile',
    location: 'Hyderabad, India',
    role: 'Frontend Developer',
    period: 'Jul 2020 — Dec 2020',
    project: 'Customer Service Platform',
    blurb:
      'Customer and service-desk experience for plan registration, offers, history, and account lookups.',
    impact: [
      'Built high-performance React + TypeScript interfaces for plan discovery and service workflows.',
      'Designed Express BFF contracts for secure, low-latency frontend–backend communication.',
      'Cut initial load time with Webpack code-splitting and lazy-loading patterns.',
      'Embedded WCAG 2.1 accessibility into component specifications and implementation.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webpack', 'Jasmine'],
  },
  {
    company: 'Berkadia Commercial Mortgage',
    location: 'Hyderabad, India',
    role: 'UI Developer',
    period: 'Jan 2018 — Jul 2020',
    project: 'Enterprise OCR Document Platform',
    blurb:
      'Angular + Node platform that turned scanned mortgage documents into searchable structured data.',
    impact: [
      'Delivered Angular 10 + TypeScript document upload, processing, and management workflows.',
      'Built drag-and-drop uploads with live progress for large document volumes.',
      'Implemented REST APIs for OCR processing and published OpenAPI / Swagger contracts.',
      'Maintained 80%+ unit coverage with Jasmine and Karma.',
    ],
    stack: ['Angular 10', 'TypeScript', 'Node.js', 'GraphQL', 'OpenAPI', 'Jasmine'],
  },
  {
    company: 'Microsoft',
    location: 'Hyderabad, India',
    role: 'UI Developer',
    period: 'Sep 2016 — Dec 2017',
    project: 'Digital Transformation SPA',
    blurb:
      'Enterprise collaboration and innovation-tracking SPA with real-time, data-driven workflows.',
    impact: [
      'Built AngularJS SPAs with reusable directives, services, and filters.',
      'Integrated REST services for interactive, real-time UI synchronization.',
      'Hardened quality with Jasmine unit tests and cross-functional delivery.',
    ],
    stack: ['AngularJS', 'JavaScript', 'REST', 'Jasmine'],
  },
  {
    company: 'Smart Data Enterprises',
    location: 'Hyderabad, India',
    role: 'Associate Software Developer',
    period: 'Mar 2016 — Aug 2016',
    project: 'Hotel & E-commerce SPAs',
    blurb: 'AngularJS + Node SPAs focused on dynamic UI, API integration, and scalable services.',
    impact: [
      'Shipped client-routed SPAs with two-way binding and modular components.',
      'Integrated MongoDB via Mongoose and Express REST APIs for CRUD workflows.',
    ],
    stack: ['AngularJS', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    company: 'Grandeur Educational Services',
    location: 'India',
    role: 'Software Developer',
    period: 'May 2015 — Dec 2015',
    project: 'MEAN Stack SaaS & E-commerce',
    blurb: 'Full-stack MEAN applications with API development, data modeling, and scalable UI.',
    impact: [
      'Delivered AngularJS UI plus Express REST APIs and MongoDB persistence.',
      'Established Jasmine / Karma testing in an Agile delivery cadence.',
    ],
    stack: ['AngularJS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Angular / AngularJS',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3 / SCSS',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    title: 'State & Data',
    items: ['Redux', 'Redux Saga', 'Context API', 'NgRx', 'GraphQL', 'REST', 'Axios'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'WebSockets', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Quality & Delivery',
    items: [
      'Jest',
      'React Testing Library',
      'Cypress',
      'Jasmine / Karma',
      'TDD / BDD',
      'CI/CD',
      'Jenkins',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    title: 'Product & Ops',
    items: [
      'WCAG 2.1',
      'Responsive Design',
      'Figma',
      'Agile / Scrum',
      'Datadog',
      'Splunk',
      'FullStory',
      'GitHub Copilot',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science',
  school: 'Jawaharlal Nehru Technological University (JNTU)',
  year: '2014',
};
