export const profile = {
  name: 'Anusha Payidiparthi',
  firstName: 'Anusha',
  lastName: 'Payidiparthi',
  title: 'Senior Frontend & Full-Stack Developer',
  location: 'San Francisco Bay Area',
  phone: '341-356-2072',
  phoneHref: 'tel:3413562072',
  email: 'anushapayidiparthi406@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anusha-p-678a25251/',
  resumeUrl: '/Anusha-Payidiparthi-Resume.pdf',
  availability: 'Actively interviewing',
  headline: 'Enterprise frontend systems that scale under real scrutiny.',
  summary:
    '10+ years shipping React, Angular, and Node platforms for Fortune 500 banking and telecom teams—secure, accessible, and release-ready.',
  mailto:
    'mailto:anushapayidiparthi406@gmail.com?subject=Senior%20Frontend%20Role%20%E2%80%94%20Anusha%20Payidiparthi&body=Hi%20Anusha%2C%0A%0AWe%20have%20a%20role%20that%20may%20be%20a%20fit.%0A%0A',
};

export const highlights = [
  { value: '10+', label: 'Years in production UI' },
  { value: '4', label: 'Fortune-facing platforms' },
  { value: 'WCAG', label: 'Accessibility by default' },
  { value: 'BFF', label: 'Node orchestration layer' },
];

export const jobs = [
  {
    id: 'wells-fargo',
    company: 'Wells Fargo',
    role: 'Senior UI Developer',
    period: 'Dec 2021 — Present',
    location: 'San Francisco, CA',
    product: 'Banker Compass',
    tagline:
      'Authentication-gated account workflows for bankers handling sensitive customer actions.',
    points: [
      'Shipped React + TypeScript interfaces for mission-critical banking transactions.',
      'Built OTP and QR multi-factor flows that adapt to customer authentication status.',
      'Owned Redux Saga state for sessions, audit filters, and reporting pathways.',
      'Delivered a Node.js BFF to coordinate multi-service APIs with lower latency.',
      'Raised release confidence with Jest, React Testing Library, and BDD automation.',
    ],
    stack: ['React', 'TypeScript', 'Redux Saga', 'Node.js', 'Vite', 'Jest', 'Azure'],
  },
  {
    id: 't-mobile',
    company: 'T-Mobile',
    role: 'Frontend Developer',
    period: 'Jul 2020 — Dec 2020',
    location: 'Hyderabad, India',
    product: 'Customer Service Platform',
    tagline:
      'Plan registration, offers, and account history for customers and service-desk teams.',
    points: [
      'Built high-performance React + TypeScript UI for plan discovery and service workflows.',
      'Designed Express BFF contracts for secure, low-latency frontend–backend communication.',
      'Improved initial load with Webpack code-splitting and lazy-loading.',
      'Embedded WCAG 2.1 accessibility into component specs and implementation.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webpack'],
  },
  {
    id: 'berkadia',
    company: 'Berkadia',
    role: 'UI Developer',
    period: 'Jan 2018 — Jul 2020',
    location: 'Hyderabad, India',
    product: 'Enterprise OCR Document Platform',
    tagline:
      'Converted scanned mortgage documents into searchable, structured digital formats.',
    points: [
      'Delivered Angular 10 + TypeScript document upload, processing, and management workflows.',
      'Built drag-and-drop uploads with live progress for large document volumes.',
      'Implemented REST APIs for OCR processing and published OpenAPI / Swagger contracts.',
      'Maintained 80%+ unit coverage with Jasmine and Karma.',
    ],
    stack: ['Angular 10', 'TypeScript', 'Node.js', 'GraphQL', 'OpenAPI', 'Jasmine'],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'UI Developer',
    period: 'Sep 2016 — Dec 2017',
    location: 'Hyderabad, India',
    product: 'Digital Transformation SPA',
    tagline:
      'Enterprise collaboration and innovation-tracking experience with real-time workflows.',
    points: [
      'Built AngularJS SPAs with reusable directives, services, and filters.',
      'Integrated REST services for interactive, real-time UI synchronization.',
      'Hardened quality with Jasmine unit tests and cross-functional delivery.',
    ],
    stack: ['AngularJS', 'JavaScript', 'REST', 'Jasmine'],
  },
  {
    id: 'earlier',
    company: 'Earlier roles',
    role: 'Software Developer',
    period: '2015 — 2016',
    location: 'India',
    product: 'MEAN / MERN product work',
    tagline: 'Hotel, e-commerce, and SaaS SPAs with API development and data modeling.',
    points: [
      'Shipped AngularJS + Node applications with client routing and modular components.',
      'Built Express REST APIs and MongoDB persistence with Mongoose.',
      'Established Jasmine / Karma testing in Agile delivery cycles.',
    ],
    stack: ['AngularJS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind', 'MUI'],
  },
  {
    title: 'Architecture',
    items: ['Redux / Saga', 'NgRx', 'GraphQL', 'REST', 'WebSockets', 'Micro-frontends mindset'],
  },
  {
    title: 'Full-stack',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'BFF patterns'],
  },
  {
    title: 'Delivery',
    items: ['Jest', 'RTL', 'Cypress', 'CI/CD', 'Docker', 'Jenkins', 'GitHub Actions'],
  },
];

export const education = {
  degree: 'B.Tech, Computer Science',
  school: 'JNTU',
  year: '2014',
};
