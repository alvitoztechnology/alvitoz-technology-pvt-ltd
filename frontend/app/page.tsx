
const services = [
  {
    icon: "⌘",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance and growth.",
  },
  {
    icon: "⚡",
    title: "Backend Development",
    description:
      "Secure APIs, scalable server-side systems, and reliable database architecture.",
  },
  {
    icon: "▣",
    title: "Mobile Applications",
    description:
      "Intuitive mobile experiences designed to connect your business with its customers.",
  },
  {
    icon: "◇",
    title: "UI/UX Design",
    description:
      "Thoughtful user journeys, clean interfaces, and engaging digital experiences.",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    description:
      "Deployment, automation, and infrastructure built to support your next stage of growth.",
  },
  {
    icon: "◎",
    title: "IT Consulting",
    description:
      "Practical technology strategy to help you make confident product decisions.",
  },
];

const projects = [
  { name: "Business Management Platform", type: "Web Application", color: "pink" },
  { name: "Analytics Dashboard", type: "Data & Analytics", color: "purple" },
  { name: "E-commerce Experience", type: "Mobile Application", color: "blue" },
];

export default function Home() {
  return (
    <>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="pulse-dot" />
              INNOVATE. BUILD. GROW.
            </span>

            <h1>
              Transforming Ideas Into{" "}
              <span className="gradient-text">Digital Solutions.</span>
            </h1>

            <p className="hero-description">
              We help ambitious businesses turn ideas into powerful digital
              products through thoughtful design, modern engineering, and
              technology that scales.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="button button-primary">
                Start Your Project <span>→</span>
              </a>
              <a href="/portfolio" className="button button-secondary">
                Explore Our Work <span>↗</span>
              </a>
            </div>

            <div className="hero-proof">
              <div className="proof-icon">✦</div>
              <div>
                <strong>Built around your vision</strong>
                <p>People-first thinking. Quality-first engineering.</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="floating-label label-top">
              <span>✦</span> Ideas into impact
            </div>

            <div className="dashboard">
              <div className="dashboard-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="dashboard-status">LIVE PREVIEW</span>
              </div>

              <div className="dashboard-body">
                <aside className="dashboard-sidebar">
                  <div className="sidebar-logo">A</div>
                  <span className="sidebar-item active">▦</span>
                  <span className="sidebar-item">◈</span>
                  <span className="sidebar-item">▤</span>
                  <span className="sidebar-item">⚙</span>
                </aside>

                <div className="dashboard-content">
                  <div className="dashboard-heading">
                    <div>
                      <small>YOUR DIGITAL SPACE</small>
                      <h3>Welcome aboard.</h3>
                    </div>
                    <div className="avatar">A</div>
                  </div>

                  <div className="metric-grid">
                    <div className="metric">
                      <span>Performance</span>
                      <strong>Excellent</strong>
                      <small>Built to scale ↗</small>
                    </div>
                    <div className="metric">
                      <span>Experience</span>
                      <strong>Seamless</strong>
                      <small>Made for people ✦</small>
                    </div>
                  </div>

                  <div className="chart-card">
                    <div className="chart-heading">
                      <strong>Growth mindset</strong>
                      <span>Our approach</span>
                    </div>
                    <svg
                      viewBox="0 0 320 105"
                      className="growth-chart"
                      role="img"
                      aria-label="Illustrative upward growth chart"
                    >
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ed1745" stopOpacity=".24" />
                          <stop offset="100%" stopColor="#ed1745" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 85 C35 72 40 80 70 55 S115 65 145 43 S190 50 220 27 S270 34 320 5 L320 105 L0 105 Z"
                        fill="url(#chartFill)"
                      />
                      <path
                        d="M0 85 C35 72 40 80 70 55 S115 65 145 43 S190 50 220 27 S270 34 320 5"
                        fill="none"
                        stroke="#ed1745"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="dashboard-footer">
                    <span>Design</span>
                    <span>Development</span>
                    <span>Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-label label-bottom">
              <span>↗</span>
              Designed for growth
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div>
            <strong>Thoughtful design</strong>
            <span>Built around real users</span>
          </div>
          <div>
            <strong>Modern engineering</strong>
            <span>Ready for what&apos;s next</span>
          </div>
          <div>
            <strong>Reliable delivery</strong>
            <span>Focused on outcomes</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              The right technology.
              <br />
              <span className="gradient-text">The right direction.</span>
            </h2>
            <p>
              From the first sketch to the final deployment, we help transform
              business challenges into digital opportunities.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/services" className="text-link">
                  Explore service <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="portfolio">
          <div className="section-heading">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>
              Ideas made
              <span className="gradient-text"> tangible.</span>
            </h2>
            <p>
              A preview of the kinds of digital experiences we can create for
              your business.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className={`project-art ${project.color}`}>
                  <div className="project-window">
                    <div className="project-window-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-window-body">
                      <div className="project-mini-sidebar" />
                      <div className="project-mini-content">
                        <div className="project-mini-heading" />
                        <div className="project-mini-cards">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="project-mini-chart" />
                      </div>
                    </div>
                  </div>
                  <span className="project-number">0{index + 1}</span>
                </div>

                <div className="project-info">
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                  <a href="/portfolio" aria-label={`Explore ${project.name}`}>
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center-action">
            <a href="/portfolio" className="button button-secondary">
              Explore Our Portfolio →
            </a>
          </div>
        </section>

        <section className="section about-preview">
          <div className="about-panel">
            <div className="about-decoration">A</div>
            <div className="about-copy">
              <span className="eyebrow">WHY ALVITOZ?</span>
              <h2>
                Your vision deserves
                <span className="gradient-text"> better technology.</span>
              </h2>
              <p>
                We combine creative problem-solving with disciplined
                engineering to create solutions that are useful today and
                adaptable for tomorrow.
              </p>
              <a href="/about" className="button button-primary">
                Get to Know Us →
              </a>
            </div>
            <div className="about-points">
              <div><span>01</span><strong>People-first approach</strong></div>
              <div><span>02</span><strong>Quality-driven delivery</strong></div>
              <div><span>03</span><strong>Long-term thinking</strong></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="final-cta">
            <span className="eyebrow">HAVE AN IDEA?</span>
            <h2>
              Let&apos;s build something
              <br />
              <span>remarkable together.</span>
            </h2>
            <p>
              Tell us what you&apos;re imagining. We&apos;ll help you figure
              out the next step.
            </p>
            <a href="/contact" className="button button-light">
              Start a Conversation ↗
            </a>
            <div className="cta-decoration cta-decoration-one" />
            <div className="cta-decoration cta-decoration-two" />
          </div>
        </section>
      </main>

    </>
  );
}
