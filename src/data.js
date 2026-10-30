
export const profile = {
  name: 'Andreiev Vladyslav',                   
  role: 'Full-stack developer',            
  intro: 'Third-year student at Lviv Polytechnic. I build web, desktop and cross-platform apps with .NET, Vue.js and Flutter).', 
  about: [                                  
    'I am a 3rd-year Software Engineering student at the National University of Lviv Polytechnic. At a spring hackathon, I worked in a team to build LoTaS, a warehouse management application.',
    'I work with .NET (WPF, Entity Framework Core, ASP.NET, ADO.NET), C++ and JavaScript (Vue.js, React.js, Node.js), and with MS SQL Server and MySQL. I also build cross-platform apps with Flutter and Firebase.',
    'I am skilled in software requirements engineering, write unit tests (MSTest, xUnit), and I am familiar with SDLC, UML and Git. I have worked with Jira, Confluence, TestRail, ReQtest, GitHub and GitLab, and I use AI tools such as Claude, Gemini, ChatGPT and Grok in my workflow.',
  ],
  skills: ['C#', '.NET', 'ASP.NET', 'WPF', 'EF Core', 'ADO.NET', 'C++',
    'JavaScript', 'React', 'Vue.js', 'Node.js', 'Flutter', 'Firebase',
    'MS SQL Server', 'MySQL', 'xUnit', 'MSTest', 'UML', 'Git', 'Jira', 'GitHub / GitLab'], 
}

export const projects = [
  {
    title: 'LoTaS',
    tag: 'Керування складами',
    status: 'MVP · працює на сервері',     // ← статус
    stack: ['ASP.NET', 'React', 'Vite', 'SQL'],
    text: 'Повноцінний MVP для керування складами та прийому товарів: бекенд, база даних і фронтенд, розгорнуті на сервері.',
    points: [                                // ← ключові можливості
      'Облік складів і залишків',
      'Прийом товарів',
      'REST API на ASP.NET',
      'Клієнт на React + Vite',
    ],
    links: [
      { label: 'Відкрити демо', href: '#' },   // ← посилання на живий сайт
      { label: 'GitHub', href: '#' },          // ← репозиторій
    ],
  },
  {
    title: 'Індексатор документів',
    tag: 'Пошук і кластеризація',
    status: 'Десктоп · WPF',
    stack: ['C#', 'WPF', 'MVVM'],
    text: 'Застосунок індексує документи, кластеризує їх, шукає найподібніші та рахує вагу слів.',
    points: [
      'Індексація та вага слів',
      'Кластеризація документів',
      'Пошук найподібніших',
      'Патерни Command, Singleton та ін.',
    ],
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Flutter + Firebase',
    tag: 'Веб-застосунок',
    status: 'У розробці',
    stack: ['Flutter', 'Firebase Auth', 'Web'],
    text: 'Є бекенд, авторизація через Firebase Auth і весь функціонал. Залишилось довести збереження даних.',
    points: [
      'Авторизація через Firebase Auth',
      'Повний функціонал інтерфейсу',
      'Збереження даних — наступний крок',
    ],
    links: [{ label: 'GitHub', href: '#' }],
  },
]

export const small = [
  { title: 'Таємний Санта', text: 'Взаємодія процесів через канали (pipes) і спільну памʼять — IPC.', stack: ['IPC', 'Pipes', 'Shared memory'], href: '#' },
  // ← додавай ще дрібні проекти за цим зразком
]

export const contacts = [
  { label: 'GitHub', href: 'https://github.com/твій-нік' },     // ← твої посилання
  { label: 'Email', href: 'mailto:you@example.com' },
  { label: 'LinkedIn', href: '#' },
]
