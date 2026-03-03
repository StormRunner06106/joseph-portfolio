const header = {
  homepage: "https://porfolio.simbl.dev",
  title: "JS.",
};

const about = {
  name: "Shield J. Alan",
  location: "Austin, TX",
  role: "Dynamic Full Stack Developer / AI Developer",
  description: `Dynamic Full Stack Developer / AI Developer with over 11 years of experience in designing, developing, and optimizing scalable web applications serving more than 1 million users across diverse industries. Expertise in React.js, Angular, Node.js, and Python enables the delivery of high-performance solutions that enhance system efficiency by up to 40%. A strong focus on building secure architectures and improving code quality ensures maintainability while leading cross-functional teams to complete projects 30% faster using agile methodologies. Committed to driving innovation and continuous improvement, consistently delivering exceptional user experiences through robust software solutions tailored to client needs.`,
  resume: "/api/resume",
  social: {
    linkedin: "https://www.linkedin.com/in/shield-a-511a513b2",
    github: "https://github.com/happy-code-vector",
  },
};

const projects: never[] = [];

const skills = [
  // Languages
  "Java",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Python",
  "C/C++",
  "C#",
  "QT",
  "Kotlin",
  "Swift",
  "HTML5",
  "CSS",
  // Framework
  "React",
  "Node.js",
  "Angular",
  "Laravel",
  "Django",
  ".NET",
  "Spring Boot",
  "FastAPI",
  // Database
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "NoSQL",
  // Cloud & Tools
  "AWS",
  "Kubernetes",
  "Firebase",
  "Apache Tomcat",
  "Apache Kafka",
  // Mobile Development
  "Android",
  "Flutter",
  "React Native",
  "iOS",
  // AI
  "LLM",
  "GPT",
  "Llama",
  "TensorFlow",
  "PyTorch",
  // Other
  "Design Patterns",
  "Git",
  "Scripting",
];

const experience = [
  {
    name: "TSS, Inc",
    year: "10/2024 - Current",
    description:
      "Transitioned into Full Stack AI Development, integrating AI models into React, TypeScript, and PostgreSQL-based applications. Built machine learning models and AI algorithms to enhance product features, leveraging tools such as Python, TensorFlow, and AWS AI services. Enhanced customer retention by 20% by developing personalized recommendation systems using machine learning. Achieved a 40% reduction in time-to-insight by automating data visualization processes using Python. Fostered an environment of continuous learning toward delivering high-quality websites that resulted in a remarkable 30% increase in project completion speed.",
    stack: ["React", "TypeScript", "PostgreSQL", "Python", "TensorFlow", "AWS"],
  },
  {
    name: "DFPS",
    year: "10/2023 - 09/2024",
    description:
      "Orchestrated the creation of scalable microservices utilizing Spring Boot, ASP.NET Core, and Hibernate, curtailing API response times by 35% and optimized system efficiency. Developed responsive web interfaces with React.js, Redux, and TypeScript, enhancing user experience and resulting in a 28% increase in conversion rates. Revamped RESTful APIs using Python and optimized SQL/T-SQL queries to elevate data infrastructure, consequently slashing database latency by 36% and improving application stability for end-users. Implemented a secure CI/CD pipeline using Maven, Jenkins, and GitHub Actions, automating software delivery and reducing deployment time by 30%. Supervised the implementation of automated testing frameworks and integrated code quality checks into the CI/CD pipeline, cutting Sev1/P1 incidents by 2 per quarter. Spearheaded the modernization of 10 legacy applications by migrating to a microservices architecture.",
    stack: [
      "Spring Boot",
      "ASP.NET Core",
      "Hibernate",
      "React.js",
      "Redux",
      "TypeScript",
      "Python",
      "SQL",
      "Maven",
      "Jenkins",
    ],
  },
  {
    name: "Washington Workforce Association",
    year: "01/2022 - 09/2023",
    description:
      "Developed and maintained internal workforce management tools using Java Spring Framework, ASP.NET MVC, and React.js, improving user satisfaction with 15% positive feedback. Refactored legacy components of distributed microservices into modern, modular architectures, improving API response time by 35%. Modernized data synchronization workflows with Informix, SQL Server, and T-SQL, cutting down data pipeline latency by 20% and enabling faster reporting for management tools.",
    stack: [
      "Java",
      "Spring Framework",
      "ASP.NET MVC",
      "React.js",
      "Informix",
      "SQL Server",
      "T-SQL",
    ],
  },
  {
    name: "Cigna Healthcare",
    year: "12/2019 - 12/2021",
    description:
      "Implemented healthcare data platforms using ASP.NET Core and Spring Boot, achieving 32% reduction in data breaches. Built secure and efficient REST APIs for internal data services, handling 100+ API requests per day and improving data accessibility. Revamped database architecture and API communication protocols for patient record systems, raising data accuracy by 20%.",
    stack: ["ASP.NET Core", "Spring Boot", "REST APIs"],
  },
  {
    name: "T-Mobile",
    year: "10/2017 - 11/2019",
    description:
      "Designed and maintained telecom service portals and customer data systems using React.js, ASP.NET MVC, and Spring Boot, resulting in a 23% increase in user engagement. Orchestrated the construction of 12+ modular REST APIs utilizing Spring Boot, achieving a 99.99% API request success rate on mobile and web platforms. Pioneered a standardized Git branching strategy and enforced code reviews, directly resulting in zero rollback incidents.",
    stack: ["React.js", "ASP.NET MVC", "Spring Boot", "Git"],
  },
  {
    name: "Fluke Corporation",
    year: "01/2015 - 09/2017",
    description:
      "Programmed engineering applications for calibration systems, decreasing defect density by 45% and enabling successful communication with 500+ IoT devices while meeting strict regulatory requirements. Spearheaded the refactoring of core applications into modular Spring Boot services, increasing system uptime to 99.9% and leading the effort to resolve the top three performance bottlenecks. Integrated third-party APIs and ensured high performance for real-time monitoring systems.",
    stack: ["Spring Boot", "IoT", "Third-party APIs"],
  },
  {
    name: "HPL Global Services Pvt.Ltd",
    year: "07/2014 - 12/2014",
    description:
      "Architected front-end modules utilizing Angular, enhancing test coverage by 20% through implementation of unit and integration tests, and minimizing regressions in subsequent releases. Championed code quality initiatives, slashing defect density by 25% in software solutions delivered to 6 international clients, improving overall client satisfaction and system stability.",
    stack: ["Angular", "Unit Testing", "Integration Testing"],
  },
];

const contact = {
  email: "shieldjosephalan@gmail.com",
  phone: "+1 (916) 672-0983",
};

const education = [
  {
    school: "Coleman University",
    location: "San Diego, CA",
    degree: "Master of Science in Software Engineering",
    gpa: "3.6",
    duration: "09/2008 - 06/2014",
  },
];

export { header, about, projects, skills, experience, contact, education };
