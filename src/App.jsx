import "./App.css";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const company = {
  name: "NovaTech Design Studio",
  tagline: "Design that ships. Branding that scales.",
  subtag:
    "A product & brand design company crafting modern interfaces, identities, and web experiences for startups and small businesses.",
  location: "Penang, Malaysia",
  email: "hello@novatech.design",
  phone: "+60 12-345 6789",
};

const stats = [
  { label: "Design Systems", value: "8+" },
  { label: "Web Projects", value: "12+" },
  { label: "Responsive Coverage", value: "100%" },
  { label: "Delivery Cycle", value: "1–2 wks" },
];

const services = [
  {
    title: "UI/UX & Product Design",
    desc: "User flows, wireframes, prototypes, and high-fidelity UI with a consistent design system.",
    bullets: ["User flows & IA", "Wireframe → Hi-Fi", "Design system (tokens/components)"],
    icon: "✨",
  },
  {
    title: "Brand Identity",
    desc: "Logos, color systems, typography, and brand guidelines that look premium and cohesive.",
    bullets: ["Logo & visual direction", "Brand colors & type", "Brand guideline PDF"],
    icon: "🎛️",
  },
  {
    title: "Web Experience",
    desc: "High-performance marketing sites and landing pages that feel modern, responsive, and clear.",
    bullets: ["Landing page build", "Performance & SEO basics", "Deploy to Vercel"],
    icon: "⚡",
  },
  {
    title: "Design Consulting",
    desc: "Audit your UI, fix consistency issues, and create a practical improvement roadmap.",
    bullets: ["UI audit checklist", "Quick wins + roadmap", "Usability recommendations"],
    icon: "🧠",
  },
];

const work = [
  {
    title: "FinTech Landing",
    tag: "Web + Brand",
    img: "/work/work1.jpg",
    note: "A clean landing page with strong hierarchy and trust-building sections.",
  },
  {
    title: "Mobile App UI Kit",
    tag: "Design System",
    img: "/work/work2.jpg",
    note: "Reusable components and tokens for fast feature delivery.",
  },
  {
    title: "Startup Rebrand",
    tag: "Brand Identity",
    img: "/work/work3.jpg",
    note: "Modern typography + color palette with clear usage rules.",
  },
  {
    title: "Dashboard UI",
    tag: "Product UI",
    img: "/work/work4.jpg",
    note: "Information-dense layout with readable spacing and contrast.",
  },
];

const processSteps = [
  { title: "Discover", desc: "Understand goals, audience, and constraints. Define scope and success metrics." },
  { title: "Design", desc: "Wireframe, prototype, and iterate. Build a consistent UI direction and system." },
  { title: "Build", desc: "Implement responsive UI, optimize performance, and prepare production deployment." },
  { title: "Launch", desc: "Final QA, polish, and handover assets (guidelines, components, documentation)." },
];

const team = [
  {
    id: "ceo",
    name: "Zhang Shuo",
    position: "CEO",
    dept: "Leadership",
    photo: "/team/member1.jpg",
    shortBio: "Leads strategy, client alignment, and delivery standards across projects.",
    responsibilities: [
      "Define project scope and milestones",
      "Coordinate team execution and reviews",
      "Own final quality and submission readiness",
    ],
    skills: ["Leadership", "Strategy", "Client Communication"],
    contributions: ["Roadmap & delivery plan", "Review cycles", "Final QA checklist"],
  },
  {
    id: "cto",
    name: "Wu Bingying",
    position: "CTO",
    dept: "Engineering",
    photo: "/team/member2.jpg",
    shortBio: "Owns the technical direction and builds the website experience with modern frontend tooling.",
    responsibilities: [
      "Implement the UI layout and responsive grid",
      "Improve navigation, spacing, and consistency",
      "Deploy and maintain the online website",
    ],
    skills: ["React", "Vite", "CSS", "Deployment"],
    contributions: ["Component structure", "Responsive behavior", "Vercel deployment"],
  },
  {
    id: "cdo",
    name: "Liang Hao",
    position: "CDO (Design)",
    dept: "Design",
    photo: "/team/member3.jpg",
    shortBio: "Owns brand tone, copywriting, visuals, and the intro video direction.",
    responsibilities: [
      "Write brand story and section content",
      "Prepare images / portfolio assets",
      "Produce intro video (local mp4 or YouTube)",
    ],
    skills: ["UI Writing", "Visual Design", "Media Editing"],
    contributions: ["About & services copy", "Portfolio visuals", "Intro video"],
  },
];

// --- YouTube 导入视频配置 ---
// 1. 设置为 false 表示不使用本地视频
const USE_LOCAL_VIDEO = false; 
// 2. 将此 ID 替换为你 YouTube 视频链接中 v= 后面的那串字符
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; 

function HomePage() {
  return (
    <div className="page">
      <header className="nav glass">
        <div className="brand">
          <span className="brandDot" aria-hidden="true" />
          {company.name}
        </div>

        <nav className="links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#video">Video</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="snap">
        {/* HERO */}
        <section className="screen heroScreen" id="top">
          <div className="heroBG" aria-hidden="true" />
          <div className="container heroWrap">
            <div className="heroLeft">
              <div className="pill">Design • Brand • Web</div>
              <h1 className="heroTitle">{company.tagline}</h1>
              <p className="heroText">{company.subtag}</p>

              <div className="heroBtns">
                <a className="btn" href="#work">View Work</a>
                <a className="btn secondary" href="#contact">Talk to Us</a>
              </div>

              <div className="heroMeta">
                <span>📍 {company.location}</span>
                <span>✉️ {company.email}</span>
              </div>
            </div>

            <div className="heroRight">
              <div className="heroCard glass">
                <div className="heroCardTitle">What we deliver</div>
                <ul className="list tight">
                  <li>Clean UI with a consistent design system</li>
                  <li>Responsive layouts tested on multiple devices</li>
                  <li>Production deployment (Vercel) + handover assets</li>
                </ul>
                <div className="heroCardFoot muted">
                  Built with React + Vite • Designed for clarity & speed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="screen" id="about">
          <div className="container">
            <h2 className="sectionTitle">Company Information</h2>
            <p className="sectionSub">
              We operate like a real studio: clear process, consistent outputs, and modern design delivery.
            </p>

            <div className="grid two">
              <div className="card glass">
                <h3>Who we are</h3>
                <p className="muted">
                  {company.name} is a product & brand design studio delivering modern UI, brand identity,
                  and web experiences for startups and small businesses.
                </p>
                <p className="muted">
                  Our focus is simple: clear hierarchy, consistent systems, and fast iteration that leads to real results.
                </p>
              </div>

              <div className="card glass">
                <h3>Why teams choose us</h3>
                <ul className="list">
                  <li><b>Premium look</b> with modern typography and spacing</li>
                  <li><b>System-first</b> components & tokens to scale UI</li>
                  <li><b>Fast delivery</b> with milestones and review cycles</li>
                  <li><b>Deploy ready</b> performance & production handover</li>
                </ul>
              </div>
            </div>

            <div className="grid four topGap">
              {stats.map((s) => (
                <div className="card glass stat" key={s.label}>
                  <div className="statValue">{s.value}</div>
                  <div className="muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="screen" id="services">
          <div className="container">
            <h2 className="sectionTitle">Products / Services</h2>
            <p className="sectionSub">Clear offerings with deliverables—like a real design company.</p>

            <div className="grid two">
              {services.map((s) => (
                <div className="card glass hoverLift" key={s.title}>
                  <div className="cardTop">
                    <div className="iconGlow" aria-hidden="true">{s.icon}</div>
                    <h3 className="cardTitle">{s.title}</h3>
                  </div>
                  <p className="muted">{s.desc}</p>
                  <div className="subTitle">Deliverables</div>
                  <ul className="list">
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="screen" id="work">
          <div className="container">
            <h2 className="sectionTitle">Selected Work</h2>
            <p className="sectionSub">A preview of our design directions and UI outcomes.</p>

            <div className="grid two">
              {work.map((w) => (
                <div className="card glass hoverLift" key={w.title}>
                  <div className="workThumb">
                    <img
                      src={w.img}
                      alt={w.title}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="workPlaceholder" aria-hidden="true" />
                  </div>
                  <div className="workRow">
                    <div>
                      <div className="workTitle">{w.title}</div>
                      <div className="muted small">{w.note}</div>
                    </div>
                    <span className="tag">{w.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="screen" id="process">
          <div className="container">
            <h2 className="sectionTitle">How We Work</h2>
            <p className="sectionSub">A simple, professional workflow used by design studios.</p>

            <div className="grid two">
              {processSteps.map((p, idx) => (
                <div className="card glass hoverLift" key={p.title}>
                  <div className="processTop">
                    <div className="stepNum">{String(idx + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="cardTitle">{p.title}</h3>
                      <p className="muted">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card glass topGap">
              <h3>Mission & Vision</h3>
              <div className="grid three topGap">
                <div className="mini glassInner">
                  <div className="miniTitle">Mission</div>
                  <div className="muted">Deliver premium and user-friendly design systems and web experiences for real clients.</div>
                </div>
                <div className="mini glassInner">
                  <div className="miniTitle">Vision</div>
                  <div className="muted">Become a trusted design studio known for clarity, consistency, and fast execution.</div>
                </div>
                <div className="mini glassInner">
                  <div className="miniTitle">Values</div>
                  <ul className="list tight">
                    <li>Consistency & simplicity</li>
                    <li>Responsive-first thinking</li>
                    <li>Clear communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION - 此时已配置为 YouTube 模式 */}
        <section className="screen" id="video">
          <div className="container">
            <h2 className="sectionTitle">Company Intro Video</h2>
            <p className="sectionSub">Short overview of our studio and what we deliver.</p>

            <div className="card glass">
              {USE_LOCAL_VIDEO ? (
                <video className="localVideo" controls src="/intro.mp4" />
              ) : (
                <div className="videoWrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                    title="Company Intro"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="muted small topGap">
                {!USE_LOCAL_VIDEO ? "Currently streaming via YouTube Embedded API." : "Playing local file."}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="screen" id="team">
          <div className="container">
            <h2 className="sectionTitle">Leadership Team</h2>
            <p className="sectionSub">Click a member to view a detailed profile.</p>

            <div className="grid three">
              {team.map((m) => (
                <Link to={`/team/${m.id}`} className="card glass hoverLift teamLink" key={m.id}>
                  <div className="avatarWrap">
                    <img
                      className="avatar"
                      src={m.photo}
                      alt={m.name}
                      onError={(e) => (e.currentTarget.src = "/team/placeholder.jpg")}
                    />
                    <div className="ring" aria-hidden="true" />
                  </div>

                  <div className="teamName">{m.name}</div>
                  <div className="teamTags">
                    <span className="tag">{m.position}</span>
                    <span className="tag ghost">{m.dept}</span>
                  </div>
                  <div className="muted small">{m.shortBio}</div>
                  <div className="viewMore">View profile →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="screen" id="contact">
          <div className="container">
            <h2 className="sectionTitle">Contact</h2>
            <p className="sectionSub">Let’s build something clean, fast, and professional.</p>

            <div className="grid three">
              <div className="card glass">
                <h3>Email</h3>
                <p className="muted">{company.email}</p>
              </div>
              <div className="card glass">
                <h3>Phone</h3>
                <p className="muted">{company.phone}</p>
              </div>
              <div className="card glass">
                <h3>Location</h3>
                <p className="muted">{company.location}</p>
              </div>
            </div>

            <footer className="footer muted">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function TeamDetailPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const member = team.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="page">
        <div className="detailTop glass">
          <button className="btn secondary" onClick={() => nav(-1)}>← Back</button>
          <Link className="btn" to="/">Home</Link>
        </div>
        <div className="container padTop">
          <h2 className="sectionTitle">Member not found</h2>
          <p className="muted">Go back and select a team member.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="detailTop glass">
        <button className="btn secondary" onClick={() => nav(-1)}>← Back</button>
        <Link className="btn" to="/">Home</Link>
      </div>

      <div className="container padTop">
        <div className="detailGrid">
          <div className="card glass">
            <div className="avatarWrap big">
              <img
                className="avatar big"
                src={member.photo}
                alt={member.name}
                onError={(e) => (e.currentTarget.src = "/team/placeholder.jpg")}
              />
              <div className="ring" aria-hidden="true" />
            </div>

            <div className="teamName big">{member.name}</div>
            <div className="teamTags">
              <span className="tag">{member.position}</span>
              <span className="tag ghost">{member.dept}</span>
            </div>
            <p className="muted">{member.shortBio}</p>
          </div>

          <div className="detailRight">
            <div className="card glass">
              <h3>Responsibilities</h3>
              <ul className="list">
                {member.responsibilities.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>

            <div className="card glass">
              <h3>Skills</h3>
              <div className="chips">
                {member.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>

            <div className="card glass">
              <h3>Key Contributions</h3>
              <ul className="list">
                {member.contributions.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team/:id" element={<TeamDetailPage />} />
    </Routes>
  );
}