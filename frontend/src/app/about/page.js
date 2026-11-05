import "./about-page.css";

const BASE_URL = "https://afsalt.in";

// Add these images inside public/images/
const PROFILE_IMAGE = `${BASE_URL}/images/afsal-profile.jpg`;
const OG_IMAGE = `${BASE_URL}/images/afsal-og.jpg`;

const socialLinks = {
  linkedin:
    "https://www.linkedin.com/in/mohammed-afsalt",
  github:
    "https://github.com/mhdafsalt",
  instagram:
    "https://www.instagram.com/qubix.dzn",
};

const skills = [
  {
    category: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "CRUD Operations",
    ],
  },
  {
    category: "Database & Tools",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "PostgreSQL",
      "MySQL",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    category: "Development Practices",
    items: [
      "API Integration",
      "Database Architecture",
      "Responsive Design",
      "Authentication & Authorization",
      "Cloud Deployment",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Arts (BA)",
    field: "English Language & Literature",
    institution: "University of Calicut",
    year: "2024",
    type: "Degree",
  },
  {
    title: "Full Stack Web Development",
    field: "Full Stack Development Training",
    institution: "G-TEC Centre of Excellence, Perinthalmanna",
    type: "Professional Training",
  },
  {
    title: "Full Stack Development",
    field: "Full Stack Development Certification",
    institution: "Medhavi Skill University, Sikkim",
    type: "Certification",
  },
];

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "GlobaOne",
    period: "July 2026 – August 2026",
    description:
      "Worked on practical web development projects involving ERP and e-commerce applications, gaining experience in application development and collaborative software engineering.",
    responsibilities: [
      "Contributed to frontend development for a team-based ERP application.",
      "Worked on e-commerce application development tasks.",
      "Gained practical experience with modern web development workflows.",
      "Collaborated with team members during project development.",
    ],
  },
];

const projects = [
  {
    name: "UCare",
    category: "Healthcare Management",
    description:
      "A hospital management application designed to support healthcare workflows and role-based access for administrators, doctors and receptionists.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "RBAC",
    ],
  },
  {
    name: "TripzyGo",
    category: "Travel & AI Platform",
    description:
      "A travel platform for exploring travel packages, discovering destinations and creating travel experiences with AI-assisted features.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "AI Integration",
    ],
  },
  {
    name: "Baytora",
    category: "Rental Property Platform",
    description:
      "A rental property platform concept focused on helping users discover rental homes and property listings through location-based browsing.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    name: "FlintSector",
    category: "Fashion E-commerce",
    description:
      "A modern streetwear e-commerce experience featuring oversized apparel, product collections and a streamlined shopping interface.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
    ],
  },
  {
    name: "Camora",
    category: "Camera & Accessories E-commerce",
    description:
      "An online shopping experience focused on cameras and accessories, with a product-focused interface and responsive design.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
    ],
  },
];

// 1. PERSON SCHEMA
const personSchema = {
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Mohammed Afsal",
  alternateName: "Afsal",
  url: BASE_URL,
  image: PROFILE_IMAGE,
  mainEntityOfPage: `${BASE_URL}/about`,
  jobTitle: "Full-Stack Software Developer",
  description:
    "Mohammed Afsal is a Full-Stack Software Developer based in Malappuram, Kerala, India, specializing in modern web application development using Next.js, React.js, Node.js, Express.js and MongoDB.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Full-Stack Web Development",
    "Next.js",
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST API Development",
    "Database Architecture",
    "Authentication and Authorization",
    "E-commerce Development",
  ],

  // Personal professional profiles only.
  // QUBIX Instagram remains visible on the About page.
  sameAs: [
    socialLinks.linkedin,
    socialLinks.github,
    socialLinks.instagram,
  ],
};

// 2. PROFILE PAGE SCHEMA
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/about#profilepage`,
  url: `${BASE_URL}/about`,
  name: "About Mohammed Afsal - Full-Stack Software Developer",
  description:
    "Professional profile, technical skills, education, internship experience and projects of Mohammed Afsal.",
  mainEntity: personSchema,
};

// 3. BREADCRUMB SCHEMA
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${BASE_URL}/about`,
    },
  ],
};

// 4 & 5. SEO METADATA + OPEN GRAPH + TWITTER
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title:
    "About Mohammed Afsal | Full-Stack Software Developer",

  description:
    "Explore the professional profile of Mohammed Afsal, a Full-Stack Software Developer from Malappuram, Kerala. Discover his technical skills, education, internship experience and projects.",

  keywords: [
    "Mohammed Afsal",
    "Afsal Full Stack Developer",
    "Full Stack Developer Kerala",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Malappuram",
  ],

  alternates: {
    canonical: `${BASE_URL}/about`,
  },

  openGraph: {
    title:
      "About Mohammed Afsal | Full-Stack Software Developer",

    description:
      "Professional biography, skills, education, experience and development projects of Mohammed Afsal.",

    url: `${BASE_URL}/about`,
    siteName: "Mohammed Afsal",
    type: "profile",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mohammed Afsal - Full-Stack Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Mohammed Afsal | Full-Stack Software Developer",

    description:
      "Explore Mohammed Afsal's skills, education, experience and web development projects.",

    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="profile-page">

      {/* PERSON + PROFILE PAGE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* BREADCRUMB STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* INTERNAL NAVIGATION / BREADCRUMBS */}
      <nav
        className="profile-breadcrumb"
        aria-label="Breadcrumb"
      >
        <a href="/">Home</a>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">About</span>
      </nav>

      <nav
        className="profile-quick-links"
        aria-label="About page sections"
      >
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact-profiles">Profiles</a>
      </nav>

      {/* HERO / BIOGRAPHY */}
      <header className="profile-hero">
        <span className="profile-eyebrow">
          PERSONAL PROFILE / 01
        </span>

        <h1>Mohammed Afsal</h1>

        <h2>Full-Stack Software Developer</h2>

        <p className="profile-location">
          Malappuram, Kerala, India
        </p>

        <p className="profile-intro">
          I am Mohammed Afsal, a Full-Stack Software Developer
          focused on building modern, scalable and production-ready
          web applications.

          I work with technologies including Next.js, React.js,
          Node.js, Express.js and MongoDB. My development approach
          combines thoughtful system architecture, clean code,
          responsive interfaces and reliable backend engineering.

          I enjoy transforming ideas into practical digital
          products that solve real-world problems.
        </p>

        <div className="profile-actions">
          <a href="/" className="profile-button">
            Explore Portfolio ↗
          </a>

          <a
            href="#contact-profiles"
            className="profile-text-link"
          >
            Connect With Me
          </a>
        </div>
      </header>

      {/* TECHNICAL SKILLS */}
      <section
        className="profile-section"
        id="skills"
      >
        <div className="profile-section-heading">
          <span>02 / CAPABILITIES</span>

          <h2>Technical Skills</h2>

          <p>
            Technologies and tools I use to develop modern web
            applications and full-stack solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <article
              className="skill-card"
              key={group.category}
            >
              <h3>{group.category}</h3>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        className="profile-section"
        id="education"
      >
        <div className="profile-section-heading">
          <span>03 / ACADEMIC BACKGROUND</span>

          <h2>Education & Certifications</h2>

          <p>
            My academic background and professional development
            training in software development.
          </p>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article
              className="timeline-card"
              key={item.title + item.institution}
            >
              <span className="timeline-type">
                {item.type}
              </span>

              <h3>{item.title}</h3>

              <p>{item.field}</p>

              <strong>{item.institution}</strong>

              {item.year && (
                <span>{item.year}</span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* INTERNSHIP EXPERIENCE */}
      <section
        className="profile-section"
        id="experience"
      >
        <div className="profile-section-heading">
          <span>04 / PROFESSIONAL JOURNEY</span>

          <h2>Internship Experience</h2>

          <p>
            Practical software development experience through
            collaborative projects and real development workflows.
          </p>
        </div>

        {experience.map((item) => (
          <article
            className="experience-card"
            key={item.company}
          >
            <div className="experience-top">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>

              <span>{item.period}</span>
            </div>

            <p className="experience-description">
              {item.description}
            </p>

            <ul>
              {item.responsibilities.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* FEATURED PROJECTS */}
      <section
        className="profile-section"
        id="projects"
      >
        <div className="profile-section-heading">
          <span>05 / SELECTED WORK</span>

          <h2>Featured Projects</h2>

          <p>
            A selection of web applications and digital products
            developed across different domains.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.name}
            >
              <span className="project-number">
                0{index + 1}
              </span>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL PROFILES */}
      <section
        className="profile-section profile-contact"
        id="contact-profiles"
      >
        <div className="profile-section-heading">
          <span>06 / LET'S CONNECT</span>

          <h2>Professional Profiles</h2>

          <p>
            Explore my professional background, development work
            and online presence.
          </p>
        </div>

        <div className="social-links">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
          )}

          <a href={BASE_URL}>
            Portfolio ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="profile-footer">
        <p>
          © {new Date().getFullYear()} Mohammed Afsal.
          Full-Stack Software Developer.
        </p>

        <a href="/">
          Back to Portfolio ↑
        </a>
      </footer>

    </main>
  );
}