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
  headline: 'I turn complex enterprise workflows into fast, secure, production-ready UI.',
  summary:
    'Senior frontend engineer with 10+ years across banking, telecom, and tech. I lead React/Angular delivery, Node BFF layers, accessibility, and test automation for Fortune 500 teams.',
  mailto:
    'mailto:anushapayidiparthi406@gmail.com?subject=Senior%20Frontend%20Role%20%E2%80%94%20Anusha%20Payidiparthi&body=Hi%20Anusha%2C%0A%0AWe%20have%20a%20role%20that%20may%20be%20a%20fit.%0A%0A',
};

export const highlights = [
  { value: '10+', label: 'Years shipping production UI' },
  { value: 'Fortune 500', label: 'Banking & telecom platforms' },
  { value: '80%+', label: 'Test coverage on key modules' },
  { value: 'Full-stack', label: 'React/Angular + Node BFF' },
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
      'Mission-critical banker platform for sensitive account actions—gated by dynamic multi-factor authentication.',
    outcomes: [
      { value: 'MFA-first', label: 'OTP + QR auth flows' },
      { value: 'BFF', label: 'Multi-API orchestration' },
      { value: 'TDD/BDD', label: 'Release quality gates' },
    ],
    points: [
      'Architected and shipped React + TypeScript UI for high-risk banking workflows used by bankers in production.',
      'Built adaptive OTP and QR authentication that chooses the right MFA path from customer status before account actions proceed.',
      'Implemented Redux Saga for session, authentication, audit filters, and reporting—keeping complex state predictable under load.',
      'Designed a Node.js BFF to fan out and reshape multiple microservice calls, reducing UI complexity and latency.',
      'Partnered with UX in Figma to validate flows early, then enforced standards through code reviews and junior mentoring.',
      'Strengthened release safety with Jest, React Testing Library, and BDD automation across critical paths.',
      'Used GitHub Copilot to accelerate delivery while reviewing all AI-assisted code for security and compliance alignment.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Redux Saga',
      'Node.js',
      'Vite',
      'Jest',
      'Azure',
      'Microservices',
    ],
  },
  {
    id: 't-mobile',
    company: 'T-Mobile',
    role: 'Frontend Developer',
    period: 'Jul 2020 — Dec 2020',
    location: 'Hyderabad, India',
    product: 'Customer Service Platform',
    tagline:
      'Customer and service-desk experience for plans, offers, account history, and support workflows.',
    outcomes: [
      { value: 'Faster loads', label: 'Code-splitting + lazy routes' },
      { value: 'WCAG 2.1', label: 'Inclusive UI foundation' },
      { value: 'BFF', label: 'Secure API contracts' },
    ],
    points: [
      'Delivered React + TypeScript interfaces that helped customers and agents discover plans, offers, and account history.',
      'Built an Express BFF with clear REST contracts so the UI stayed secure, thin, and low-latency.',
      'Cut initial page weight with Webpack code-splitting and lazy-loading for heavier service flows.',
      'Authored UI/component guidance with WCAG 2.1 baked in—so accessibility was part of the build, not a retrofit.',
      'Aligned engineering, UX, QA, and DevOps across time zones on patterns that supported continuous delivery.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webpack', 'Figma'],
  },
  {
    id: 'berkadia',
    company: 'Berkadia',
    role: 'UI Developer',
    period: 'Jan 2018 — Jul 2020',
    location: 'Hyderabad, India',
    product: 'Enterprise OCR Document Platform',
    tagline:
      'Mortgage document automation—turning scanned files into searchable, structured digital records.',
    outcomes: [
      { value: '80%+', label: 'Unit test coverage' },
      { value: 'OCR pipeline', label: 'Upload → process → search' },
      { value: 'OpenAPI', label: 'Documented REST contracts' },
    ],
    points: [
      'Owned Angular 10 + TypeScript experiences for document upload, processing status, and management at commercial-mortgage scale.',
      'Built drag-and-drop uploads with progress feedback so large document batches were usable, not opaque.',
      'Implemented Node/Express APIs for OCR processing and storage, plus OpenAPI/Swagger docs for cross-team adoption.',
      'Drove reliability with Jasmine/Karma suites at 80%+ coverage and automated regression gates.',
      'Improved processing efficiency by connecting async workflows to high-volume document intake.',
    ],
    stack: ['Angular 10', 'TypeScript', 'Node.js', 'GraphQL', 'OpenAPI', 'Jasmine', 'Karma'],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'UI Developer',
    period: 'Sep 2016 — Dec 2017',
    location: 'Hyderabad, India',
    product: 'Digital Transformation SPA',
    tagline:
      'Enterprise collaboration platform for innovation tracking and data-driven workflow visibility.',
    outcomes: [
      { value: 'SPA', label: 'Reusable UI architecture' },
      { value: 'REST', label: 'Live data integration' },
      { value: 'Quality', label: 'Jasmine-backed delivery' },
    ],
    points: [
      'Built AngularJS single-page applications that kept collaboration and innovation tracking interactive in real time.',
      'Created reusable directives, services, and filters that reduced duplicate UI work across feature teams.',
      'Integrated REST backends for live data flow and smoother cross-team handoffs.',
      'Stabilized releases with Jasmine unit tests and close collaboration with product and QA.',
    ],
    stack: ['AngularJS', 'JavaScript', 'REST', 'Jasmine', 'Agile'],
  },
  {
    id: 'earlier',
    company: 'Earlier roles',
    role: 'Software Developer',
    period: '2015 — 2016',
    location: 'India',
    product: 'MEAN / MERN product foundations',
    tagline:
      'Full-stack SPA delivery for hotel, e-commerce, and SaaS products—UI, APIs, and data models.',
    outcomes: [
      { value: 'MEAN', label: 'End-to-end ownership' },
      { value: 'CRUD APIs', label: 'Express + MongoDB' },
      { value: 'Agile', label: 'Sprint-based delivery' },
    ],
    points: [
      'Shipped AngularJS + Node applications with routing, two-way binding, and modular UI components.',
      'Built Express REST APIs and MongoDB/Mongoose models for reliable CRUD and persistence.',
      'Set early quality habits with Jasmine/Karma tests inside Agile sprint delivery.',
    ],
    stack: ['AngularJS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Angular / AngularJS',
      'TypeScript',
      'JavaScript',
      'HTML/CSS/SCSS',
      'Tailwind',
      'Material UI',
    ],
  },
  {
    title: 'Architecture',
    items: ['Redux / Saga', 'NgRx', 'GraphQL', 'REST', 'WebSockets', 'Microservices UI', 'BFF'],
  },
  {
    title: 'Full-stack',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Quality & Ops',
    items: [
      'Jest / RTL',
      'Cypress',
      'Jasmine / Karma',
      'CI/CD',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Datadog / Splunk',
    ],
  },
];

export const education = {
  degree: 'B.Tech, Computer Science',
  school: 'JNTU',
  year: '2014',
};
