// Project data. Every page that shows projects reads from this one array.
// Each slug must be unique: lowercase words separated by hyphens.
export const projects = [
  {
    slug: "react-portfolio",
    title: "React Portfolio Site",
    category: "Web",
    technologies: ["React", "Vite", "React Router", "GitHub Actions"],
    summary:
      "This site: a routed single-page portfolio built from reusable components and deployed automatically to GitHub Pages.",
    problem:
      "I needed one place where a recruiter could see what I can do, what I have built, and how to reach my work, and it had to keep working when someone refreshes a deep link on a static host.",
    role:
      "Built the whole site myself: page structure, reusable components (Layout, ProjectCard, ExperienceCard, SkillList, ThemeToggle), the project data model, styling, and the deployment workflow.",
    approach:
      "Project cards and detail pages are generated from a single data array. HashRouter keeps refreshes working on GitHub Pages, Vite's base setting fixes asset paths, and a GitHub Actions workflow lints, builds and deploys on every push to main.",
    outcome:
      "Learned the difference between asset paths (fixed by Vite's base) and route paths (fixed by hash routing), and why filtered lists should be computed during render rather than copied into state.",
  },
  {
    slug: "http-crawl-measurement",
    title: "HTTP Web-Crawl Measurement",
    category: "Networking",
    technologies: ["HTTP", "curl", "JavaScript", "Browser DevTools"],
    summary:
      "A Web Technologies homework that measured how real websites respond to requests, using curl from the command line and browser-based scraping.",
    problem:
      "Websites look the same in a browser but behave very differently underneath: redirects, headers, status codes and response times vary a lot between sites.",
    role:
      "Ran the requests, collected headers and timing information, and compared what the command line and the browser each revealed.",
    approach:
      "Used curl to inspect status codes, redirects and response headers directly, and the browser's developer tools and in-page scripting to collect data from rendered pages.",
    outcome:
      "Learned to read raw HTTP exchanges, and saw that a command-line client and a full browser can get different results from the same URL.",
  },
  {
    slug: "dom-browser-forensics",
    title: "HTML, DOM & Browser Forensics Lab",
    category: "Web",
    technologies: ["HTML", "DOM", "JavaScript", "Browser DevTools"],
    summary:
      "A lab investigating how browsers turn HTML into a live document, and how to trace what a page is actually doing.",
    problem:
      "The source HTML of a page often differs from what the browser ends up showing, which makes pages hard to debug or audit.",
    role:
      "Worked through the lab tasks: inspecting page structure, querying and modifying the DOM, and tracing page behaviour with developer tools.",
    approach:
      "Compared the original markup with the live DOM tree, used JavaScript in the console to query elements, and followed network and storage activity in DevTools.",
    outcome:
      "Gained a working mental model of the DOM that made React's rendering model much easier to understand later in the course.",
  },
  {
    slug: "sap-enterprise-structure",
    title: "SAP Enterprise Structure & EWM Study",
    category: "Enterprise Systems",
    technologies: ["SAP ERP", "SPRO configuration", "EWM", "SD / MM"],
    summary:
      "Coursework configuring an SAP enterprise structure and studying Extended Warehouse Management and core business processes.",
    problem:
      "ERP systems only work when the organisational structure (client, company code, plant, storage location) is defined and linked correctly before any transaction runs.",
    role:
      "Worked through the configuration steps and documented what each one does in my own notes, covering both definition and assignment of organisational units.",
    approach:
      "Defined and assigned organisational units in SPRO, then followed the Procure-to-Pay and Order-to-Cash cycles through their key transactions and the tables behind them.",
    outcome:
      "Learned how master, configuration and transactional data relate, and how warehouse structure in EWM connects to plants and company codes.",
  },
  {
    slug: "swift-auth-app",
    title: "iOS App with Supabase Auth",
    category: "Mobile",
    technologies: ["Swift", "Xcode", "Supabase"],
    summary:
      "An iOS app project in Swift that integrates sign-up and sign-in through Supabase authentication.",
    problem:
      "Most apps need user accounts, but writing secure authentication from scratch is risky and slow.",
    role:
      "Built the app in Xcode and wired its sign-up and sign-in flows to a Supabase backend.",
    approach:
      "Used Supabase's hosted authentication instead of a custom backend, and connected the app's screens to its session state.",
    outcome:
      "Learned how a client app hands identity off to a managed service, and how session state drives which screens a user sees.",
  },
];
