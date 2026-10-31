
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
    tag: 'Warehouse management system',
    status: 'Team MVP · Spring hackathon', 
    role: 'Backend developer & DevOps',
    stack: ['ASP.NET', 'React', 'Vite', 'TypeScript', 'SQL', 'Docker'],
    text: 'A warehouse management and goods receiving MVP built by a team at a spring hackathon. I worked on the backend and the DevOps side: the ASP.NET API and the Docker setup that runs the backend, database and frontend together on a server.',
    points: [                             
      'REST API on ASP.NET',
      'Database design and data access',
      'Dockerized deployment of backend, database and frontend',
      'Server deployment and environment setup',
    ],
    links: [
      { label: 'Team demo video', href: '#' },   
      { label: 'GitHub & setup guide', href: 'https://github.com/pelmenchik52/LoTaS.git' },     
    ],
  },
  {
    title: 'DocIndex',
    tag: 'Search and clustering',
    status: 'Desktop · WPF',
    stack: ['C#', 'WPF', 'MVVM'],
    text: 'The application indexes documents, clusters them, finds the most similar ones, and calculates word weights.',
    points: [
      'Indexing and Word Weight',
      'Document Clustering',
      'Search for the most similar',
      'Command, Singleton, and other GoF patterns.',
    ],
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Flutter + Firebase',
    tag: 'Web-application',
    status: 'In progress',
    stack: ['Flutter', 'Firebase Auth', 'Web'],
    text: 'A Flutter web app with Firebase Auth login and a complete interface. Errors and crashes are tracked with Sentry. Persistent data storage is the next updates.',
    points: [
      'Authentication with Firebase Auth',
      'Error and crash tracking with Sentry',
      'Full UI and app functionality',
      'Persistent data storage (in progress)  ',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/pelmenchik52/pantry_app.git' }],
  },
]

export const small = [
  { title: 'RiskManager', text: 'Application for risk management: creating risks, their priority, calculating price of every risk and more', stack: ['C#', '.NET 8', 'WPF'], href: 'https://github.com/pelmenchik52/RiskManager.git' },

]

export const contacts = [
  { label: 'GitHub', href: 'https://github.com/pelmenchik52' },     
  { label: 'Email', href: 'vladzo16092006@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/владислав-андреєв-b6962b336?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { label: 'Telegram', href: 'https://t.me/vladzoa'},
  { label: 'Facebook', href: 'https://www.facebook.com/share/19tvvXT3Kr/'}
]
