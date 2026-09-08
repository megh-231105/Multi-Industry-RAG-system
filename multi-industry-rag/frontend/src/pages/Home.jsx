import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const INDUSTRIES = ["Healthcare", "Finance", "Traffic & Transport", "Manufacturing", "Agriculture", "Legal Services"];
const MARQUEE_ITEMS = ["Healthcare", "Finance", "Traffic", "Manufacturing", "Agriculture", "Legal", "Logistics", "Education"];

const PROJECTS = [
  {
    key: "hc",
    className: "project-card re",
    title: "Healthcare RAG",
    tag: "Healthcare · PubMedQA",
    desc: "Instant, cited answers from millions of medical papers for clinicians and researchers.",
    visual: "Healthcare RAG",
    img: "/industries/healthcare.jpg",
  },
  {
    key: "fin",
    className: "project-card fin dark",
    title: "Finance Intelligence",
    tag: "Finance · FinQA · TAT-QA",
    desc: "Grounded answers on markets, risk and banking regulations — with source citations.",
    visual: "Finance Intelligence",
    img: "/industries/finance.jpg",
  },
  {
    key: "traffic",
    className: "project-card health",
    title: "Traffic & Transport",
    tag: "Traffic · Driving Law",
    desc: "Road rules, accident analysis and transport policy Q&A for operators and planners.",
    visual: "Traffic & Transport",
    img: "/industries/traffic.jpg",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "NexusRAG transformed how our team accesses clinical research. We get accurate, cited answers in seconds instead of spending hours in PubMed — it's changed our workflow entirely.",
    name: "Dr. Priya Sharma",
    role: "Head of Research, HealthFirst",
  },
  {
    quote:
      "The Finance RAG module gave our analysts instant grounded answers on regulatory filings and market data. Adoption was immediate — the accuracy is genuinely impressive.",
    name: "Arjun Mehta",
    role: "CTO, Ledger Analytics",
  },
];

const SERVICES = [
  {
    num: "01",
    icon: "RAG",
    title: "Retrieval-Augmented Generation",
    desc: "Ground every answer in your own documents. NexusRAG retrieves the most relevant passages and generates precise, cited responses — no hallucinations.",
  },
  {
    num: "02",
    icon: "MI",
    title: "Multi-Industry Knowledge Bases",
    desc: "25 industry-specific corpora out of the box — Healthcare, Finance, Traffic, Manufacturing and more. Each tuned to its domain's vocabulary and standards.",
  },
  {
    num: "03",
    icon: "DS",
    title: "Document Management",
    desc: "Upload PDFs, CSVs, DOCX and more to any industry knowledge base. Share, query and cite them — all from one dashboard.",
  },
  {
    num: "04",
    icon: "API",
    title: "API & Integrations",
    desc: "Connect NexusRAG to your existing tools via REST API. Works with LangChain, Pinecone, Weaviate and major LLM providers.",
  },
];

const CREATIVE = [
  { key: "cc1", className: "creative-card cc1", top: "Healthcare", bottom: "RAG demo", img: "/industries/healthcare.jpg" },
  { key: "cc2", className: "creative-card cc2", top: "Finance", bottom: "query engine", img: "/industries/finance.jpg" },
  { key: "cc3", className: "creative-card cc3", top: "Traffic", bottom: "knowledge base", img: "/industries/traffic.jpg" },
  { key: "cc4", className: "creative-card cc4", top: "Manufacturing", bottom: "AI assistant", img: "/industries/manufacturing.jpg" },
];

/** Wraps children in an element that fades/slides in once it enters the viewport. */
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} reveal${inView ? " in" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}

/** Same as Reveal but staggers the fade-in of its direct children. */
function RevealStagger({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} reveal-stagger${inView ? " in" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}

/** Counts up from 0 to `target` once visible. */
function Counter({ target, label }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        let cur = 0;
        const step = Math.max(1, Math.round(target / 40));
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) {
            cur = target;
            clearInterval(t);
          }
          setValue(cur);
        }, 28);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat" ref={ref}>
      <span className="num">{value}</span>
      <span className="lbl">{label}</span>
    </div>
  );
}

/** Rotating word in the hero subline ("Currently shaping products for <word>"). */
function IndustryCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % INDUSTRIES.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="cyc-word">
      <span className="active" key={index}>
        {INDUSTRIES[index]}
      </span>
    </span>
  );
}

/** The cursor-following concentric circles in the "Let's play a bit" section. */
function CirclePlayground() {
  const stageRef = useRef(null);
  const ringRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const active = useRef(false);
  const speeds = [0.06, 0.1, 0.16, 0.28];

  useEffect(() => {
    let raf;
    const animate = () => {
      ringRefs.forEach((ref, i) => {
        const target = active.current ? mouse.current : { x: 0, y: 0 };
        pos.current[i].x += (target.x - pos.current[i].x) * speeds[i];
        pos.current[i].y += (target.y - pos.current[i].y) * speeds[i];
        const node = ref.current;
        if (node) {
          node.style.transform = `translate(calc(-50% + ${pos.current[i].x}px), calc(-50% + ${pos.current[i].y}px))`;
        }
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e) => {
    const rect = stageRef.current.getBoundingClientRect();
    mouse.current = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    };
  };

  return (
    <div
      id="circleStage"
      ref={stageRef}
      onMouseEnter={() => (active.current = true)}
      onMouseLeave={() => (active.current = false)}
      onMouseMove={handleMove}
    >
      <div className="ring r1" ref={ringRefs[0]} />
      <div className="ring r2" ref={ringRefs[1]} />
      <div className="ring r3" ref={ringRefs[2]} />
      <div className="ring r4" ref={ringRefs[3]} />
    </div>
  );
}

export default function Home() {
  const cdotRef = useRef(null);

  // custom cursor dot, follows mouse anywhere on the page
  useEffect(() => {
    const onMove = (e) => {
      if (!cdotRef.current) return;
      cdotRef.current.style.left = `${e.clientX}px`;
      cdotRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="meridian-home">
      <style>{`
/* Home.css — styles for Home.jsx (Meridian multi-industry studio homepage)
   Import Space Grotesk / Inter / IBM Plex Mono in your app's index.html or _document,
   e.g.:
   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
*/

.meridian-home {
  --ink: #0c0f17;
  --ink-2: #141928;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --line-dark: rgba(255, 255, 255, 0.12);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.meridian-home *,
.meridian-home *::before,
.meridian-home *::after {
  box-sizing: border-box;
}

.meridian-home ::selection {
  background: var(--indigo);
  color: #fff;
}

.meridian-home h1,
.meridian-home h2,
.meridian-home h3,
.meridian-home .display {
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
}

.meridian-home .mono {
  font-family: "IBM Plex Mono", monospace;
}

.meridian-home a {
  color: inherit;
  text-decoration: none;
}

.meridian-home img {
  max-width: 100%;
  display: block;
}

.meridian-home .wrap {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
}

.meridian-home section {
  position: relative;
}

/* ===== reveal on scroll ===== */
.meridian-home .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.meridian-home .reveal.in {
  opacity: 1;
  transform: translateY(0);
}
.meridian-home .reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.meridian-home .reveal-stagger.in > * {
  opacity: 1;
  transform: translateY(0);
}
.meridian-home .reveal-stagger.in > *:nth-child(1) {
  transition-delay: 0.03s;
}
.meridian-home .reveal-stagger.in > *:nth-child(2) {
  transition-delay: 0.11s;
}
.meridian-home .reveal-stagger.in > *:nth-child(3) {
  transition-delay: 0.19s;
}
.meridian-home .reveal-stagger.in > *:nth-child(4) {
  transition-delay: 0.27s;
}
.meridian-home .reveal-stagger.in > *:nth-child(5) {
  transition-delay: 0.35s;
}

@media (prefers-reduced-motion: reduce) {
  .meridian-home .reveal,
  .meridian-home .reveal-stagger > * {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .meridian-home * {
    animation: none !important;
  }
}

.meridian-home :focus-visible {
  outline: 2px solid var(--indigo);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ===== nav ===== */
.meridian-home nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.meridian-home .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 19px;
  color: #fff;
}
.meridian-home .brand .mark {
  width: 22px;
  height: 22px;
  position: relative;
}
.meridian-home .brand .mark svg {
  width: 100%;
  height: 100%;
}
.meridian-home .nav-links {
  display: flex;
  gap: 34px;
  font-size: 14px;
  color: #fff;
}
.meridian-home .nav-links a {
  opacity: 0.75;
  transition: opacity 0.25s;
}
.meridian-home .nav-links a:hover {
  opacity: 1;
}
.meridian-home .nav-cta {
  color: #fff;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 9px 18px;
  border-radius: 100px;
  transition: all 0.25s;
}
.meridian-home .nav-cta:hover {
  background: #fff;
  color: #000;
}
.meridian-home .nav-auth {
  display: flex;
  align-items: center;
  gap: 18px;
}
.meridian-home .nav-login {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  transition: opacity 0.25s;
}
.meridian-home .nav-login:hover {
  opacity: 1;
}
.meridian-home .nav-signup {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  transition: opacity 0.25s;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding-right: 18px;
}
.meridian-home .nav-signup:hover {
  opacity: 1;
}
@media (max-width: 820px) {
  .meridian-home .nav-links {
    display: none;
  }
  .meridian-home .nav-auth {
    gap: 10px;
  }
  .meridian-home .nav-login {
    display: none;
  }
  .meridian-home .nav-signup {
    display: none;
  }
}

/* ===== hero ===== */
.meridian-home .hero {
  background: radial-gradient(ellipse 120% 90% at 50% -10%, #1a2140 0%, var(--ink) 55%);
  color: #fff;
  padding: 150px 0 90px;
  overflow: hidden;
  position: relative;
}
.meridian-home .hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 15% 30%, rgba(79, 70, 229, 0.35), transparent 45%),
    radial-gradient(circle at 85% 15%, rgba(255, 176, 32, 0.18), transparent 40%);
  pointer-events: none;
}
.meridian-home .hero-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
}
.meridian-home .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--indigo-2);
  text-transform: uppercase;
  margin-bottom: 22px;
}
.meridian-home .eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255, 176, 32, 0.2);
}
.meridian-home h1.headline {
  font-size: clamp(38px, 6vw, 76px);
  line-height: 1.03;
  font-weight: 600;
  letter-spacing: -0.02em;
  max-width: 850px;
}
.meridian-home h1.headline .thin {
  color: var(--slate-l);
  font-weight: 400;
}
.meridian-home .hero-sub {
  max-width: 380px;
  font-size: 15.5px;
  line-height: 1.6;
  color: #c9cbdb;
  margin-top: 8px;
}
.meridian-home .hero-people {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 26px;
}
.meridian-home .avatars {
  display: flex;
}
.meridian-home .avatars span {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--ink);
  background: linear-gradient(135deg, var(--indigo), var(--coral));
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}
.meridian-home .avatars span:first-child {
  margin-left: 0;
}
.meridian-home .watch-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: #fff;
}
.meridian-home .watch-btn .circ {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.meridian-home .watch-btn:hover .circ {
  transform: scale(1.12);
}

.meridian-home .industry-cycler {
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  color: var(--slate-l);
}
.meridian-home .cyc-word {
  color: #fff;
  font-weight: 500;
  min-width: 150px;
  display: inline-block;
  position: relative;
  height: 20px;
  overflow: hidden;
}
.meridian-home .cyc-word span {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.meridian-home .cyc-word span.active {
  opacity: 1;
  transform: translateY(0);
}

.meridian-home .pills-row {
  display: flex;
  margin-top: 56px;
  border-top: 1px solid var(--line-dark);
  position: relative;
}
.meridian-home .pills-row .pill {
  flex: 1;
  padding: 20px 4px 0;
  font-size: 13.5px;
  color: #c9cbdb;
  border-right: 1px solid var(--line-dark);
  text-align: center;
  transition: color 0.3s;
  cursor: default;
}
.meridian-home .pills-row .pill:hover {
  color: #fff;
}
.meridian-home .pills-row .pill:last-child {
  border-right: none;
}
@media (max-width: 760px) {
  .meridian-home .pills-row {
    flex-wrap: wrap;
  }
  .meridian-home .pills-row .pill {
    flex: 1 1 50%;
    border-bottom: 1px solid var(--line-dark);
    padding-bottom: 14px;
  }
}

/* marquee */
.meridian-home .marquee-wrap {
  background: var(--ink-2);
  padding: 22px 0;
  overflow: hidden;
  border-top: 1px solid var(--line-dark);
  border-bottom: 1px solid var(--line-dark);
}
.meridian-home .marquee {
  display: flex;
  width: max-content;
  animation: meridian-scroll 32s linear infinite;
}
.meridian-home .marquee:hover {
  animation-play-state: paused;
}
.meridian-home .marquee span {
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
  color: var(--slate-l);
  padding: 0 34px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 14px;
}
.meridian-home .marquee span::after {
  content: "✦";
  font-size: 12px;
  color: var(--indigo-2);
}
@keyframes meridian-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ===== section headers ===== */
.meridian-home .sec-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 52px;
  flex-wrap: wrap;
}
.meridian-home .sec-head h2 {
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 600;
  letter-spacing: -0.01em;
}
.meridian-home .sec-head p {
  max-width: 340px;
  color: var(--slate);
  font-size: 14.5px;
  line-height: 1.6;
}
.meridian-home .sec-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--indigo);
  margin-bottom: 14px;
  display: block;
}

/* ===== stats / projects ===== */
.meridian-home .stats-section {
  padding: 120px 0 60px;
}
.meridian-home .stat-row {
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.meridian-home .stat {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}
.meridian-home .stat .num {
  font-size: clamp(48px, 7vw, 84px);
  font-weight: 600;
  line-height: 0.9;
  font-family: "Space Grotesk", sans-serif;
}
.meridian-home .stat .lbl {
  font-size: 13px;
  color: var(--slate);
  padding-bottom: 10px;
  max-width: 110px;
  line-height: 1.3;
}

.meridian-home .project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 70px;
}
@media (max-width: 900px) {
  .meridian-home .project-grid {
    grid-template-columns: 1fr;
  }
}
.meridian-home .project-card {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  background: linear-gradient(135deg, #e3e1f5, #d6d3ee);
  cursor: pointer;
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s;
}
.meridian-home .project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px -20px rgba(12, 15, 23, 0.35);
}
.meridian-home .project-card .pc-visual {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.2;
  color: var(--ink);
  text-align: center;
}
.meridian-home .project-card.dark .pc-visual {
  color: #fff;
}
.meridian-home .project-card.re {
  background: linear-gradient(160deg, #e7c9a8, #c98f5c);
}
.meridian-home .project-card.fin {
  background: linear-gradient(160deg, #101625, #1e2a45);
  color: #fff;
}
.meridian-home .project-card.health {
  background: linear-gradient(160deg, #c9ede0, #7fd4b5);
}
.meridian-home .pc-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(12, 15, 23, 0.88) 0%, rgba(12, 15, 23, 0) 55%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s;
}
.meridian-home .project-card:hover .pc-overlay {
  opacity: 1;
}
.meridian-home .pc-overlay .pc-tag {
  display: inline-flex;
  gap: 6px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px;
  color: var(--amber);
  margin-bottom: 8px;
}
.meridian-home .pc-overlay h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
}
.meridian-home .pc-overlay p {
  color: #c9cbdb;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}
.meridian-home .pc-chip {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0) rotate(-30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.meridian-home .project-card:hover .pc-chip {
  transform: scale(1) rotate(0);
}

/* ===== testimonials ===== */
.meridian-home .testi-section {
  padding: 100px 0;
}
.meridian-home .testi-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}
@media (max-width: 900px) {
  .meridian-home .testi-grid {
    grid-template-columns: 1fr;
  }
}
.meridian-home .clutch-card {
  background: var(--ink);
  color: #fff;
  border-radius: var(--radius);
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  background-image: radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.5), transparent 60%);
}
.meridian-home .clutch-card .stars {
  color: var(--amber);
  font-size: 18px;
  letter-spacing: 2px;
}
.meridian-home .clutch-card .brand-mini {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 24px;
}
.meridian-home .clutch-card .cta-mini {
  align-self: flex-start;
  font-size: 12.5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 9px 16px;
  border-radius: 100px;
  transition: 0.3s;
  display: inline-block;
}
.meridian-home .clutch-card .cta-mini:hover {
  background: #fff;
  color: #000;
}
.meridian-home .testi-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.4s, box-shadow 0.4s;
}
.meridian-home .testi-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -20px rgba(12, 15, 23, 0.2);
}
.meridian-home .testi-card .stars {
  color: var(--amber);
  font-size: 14px;
  margin-bottom: 16px;
}
.meridian-home .testi-card p {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 22px;
}
.meridian-home .testi-who {
  display: flex;
  align-items: center;
  gap: 12px;
}
.meridian-home .testi-who .dot {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo-2), var(--coral));
  flex-shrink: 0;
}
.meridian-home .testi-who .name {
  font-size: 13.5px;
  font-weight: 600;
}
.meridian-home .testi-who .role {
  font-size: 12px;
  color: var(--slate);
}

.meridian-home .clients-row {
  margin-top: 80px;
  padding-top: 44px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 46px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.meridian-home .clients-row .cl-label {
  font-size: 12.5px;
  color: var(--slate);
  font-family: "IBM Plex Mono", monospace;
}
.meridian-home .clients-logos {
  display: flex;
  gap: 42px;
  flex-wrap: wrap;
  align-items: center;
}
.meridian-home .clients-logos span {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: var(--slate);
  opacity: 0.6;
  transition: opacity 0.3s, color 0.3s;
}
.meridian-home .clients-logos span:hover {
  opacity: 1;
  color: var(--ink);
}

/* ===== big tagline ===== */
.meridian-home .tagline-section {
  padding: 120px 0;
  text-align: center;
  overflow: hidden;
}
.meridian-home .tagline-section h2 {
  font-size: clamp(48px, 10vw, 130px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  display: flex;
  justify-content: center;
  gap: 0.28em;
  flex-wrap: wrap;
}
.meridian-home .tagline-section h2 .accent {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--ink);
  position: relative;
}
.meridian-home .tagline-section h2 .accent .diamond {
  position: absolute;
  top: -0.35em;
  right: -0.55em;
  width: 0.28em;
  height: 0.28em;
  background: var(--indigo);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: meridian-spin 6s linear infinite;
}
@keyframes meridian-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== services ===== */
.meridian-home .services-section {
  padding: 0 0 120px;
}
.meridian-home .services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}
@media (max-width: 760px) {
  .meridian-home .services-grid {
    grid-template-columns: 1fr;
  }
}
.meridian-home .service-item {
  background: #fff;
  padding: 44px;
  transition: background 0.35s;
}
.meridian-home .service-item:hover {
  background: var(--paper-2);
}
.meridian-home .service-item .si-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 26px;
}
.meridian-home .service-item .si-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ink);
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
}
.meridian-home .service-item .si-num {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  color: var(--slate-l);
}
.meridian-home .service-item h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
}
.meridian-home .service-item p {
  font-size: 14px;
  color: var(--slate);
  line-height: 1.6;
  max-width: 340px;
  margin: 0;
}

/* ===== expertise ===== */
.meridian-home .expertise-section {
  padding: 0 0 120px;
}
.meridian-home .expertise-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 860px) {
  .meridian-home .expertise-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.meridian-home .exp-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 26px;
}
.meridian-home .exp-cols .col-label {
  font-size: 12px;
  color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
}
.meridian-home .exp-cols ul {
  margin: 0;
  padding: 0;
}
.meridian-home .exp-cols li {
  list-style: none;
  font-size: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.3s, color 0.3s;
}
.meridian-home .exp-cols li:hover {
  padding-left: 8px;
  color: var(--indigo);
}
.meridian-home .exp-card {
  background: var(--amber);
  border-radius: var(--radius);
  padding: 32px;
  position: relative;
  overflow: hidden;
}
.meridian-home .exp-card::after {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  top: -90px;
  right: -90px;
}
.meridian-home .exp-card .exp-eyebrow {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 14px;
  opacity: 0.75;
}
.meridian-home .exp-card p {
  font-size: 19px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 26px;
  position: relative;
}
.meridian-home .exp-founder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.meridian-home .exp-founder .who {
  display: flex;
  align-items: center;
  gap: 12px;
}
.meridian-home .exp-founder .dot {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--ink);
}
.meridian-home .exp-founder .name {
  font-size: 13.5px;
  font-weight: 600;
}
.meridian-home .exp-founder .role {
  font-size: 11.5px;
  opacity: 0.7;
}
.meridian-home .exp-founder .go {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--ink);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.meridian-home .exp-founder .go:hover {
  transform: translateX(4px);
}

/* ===== playground / interactive ===== */
.meridian-home .play-section {
  padding: 130px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: var(--paper-2);
}
.meridian-home .play-section h2 {
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 600;
  margin-bottom: 6px;
}
.meridian-home .play-section .sub {
  color: var(--slate);
  font-size: 14px;
  margin-bottom: 70px;
}
.meridian-home #circleStage {
  width: 100%;
  height: 360px;
  position: relative;
  cursor: none;
}
.meridian-home .ring {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.meridian-home .ring.r1 {
  width: 340px;
  height: 340px;
  background: rgba(255, 176, 32, 0.35);
}
.meridian-home .ring.r2 {
  width: 220px;
  height: 220px;
  background: rgba(255, 176, 32, 0.55);
}
.meridian-home .ring.r3 {
  width: 110px;
  height: 110px;
  background: var(--indigo);
}
.meridian-home .ring.r4 {
  width: 30px;
  height: 30px;
  background: #fff;
}
.meridian-home .play-hint {
  margin-top: 70px;
  font-size: 12.5px;
  color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace;
}

/* ===== behind the scenes ===== */
.meridian-home .scene-section {
  padding: 0 0 30px;
}
.meridian-home .scene-board {
  background: linear-gradient(135deg, #4f46e5, #6d28d9);
  border-radius: var(--radius);
  min-height: 440px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
}
.meridian-home .scene-board h3 {
  color: #fff;
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 600;
  max-width: 640px;
  line-height: 1.25;
  margin: 0 auto;
}
.meridian-home .scene-board .sub {
  color: #d8d5ff;
  font-size: 13.5px;
  margin-top: 18px;
}
.meridian-home .bubble {
  position: absolute;
  background: #fff;
  border-radius: 14px 14px 14px 4px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  animation: meridian-float 5s ease-in-out infinite;
}
.meridian-home .bubble.tag {
  border-radius: 100px;
  color: #fff;
  padding: 6px 14px;
}
@keyframes meridian-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
.meridian-home .b1 {
  top: 14%;
  left: 10%;
  animation-delay: 0.2s;
}
.meridian-home .b2 {
  top: 20%;
  right: 12%;
  background: #4f46e5;
  color: #fff;
  animation-delay: 1.1s;
}
.meridian-home .b3 {
  bottom: 22%;
  left: 14%;
  background: var(--coral);
  color: #fff;
  animation-delay: 0.6s;
}
.meridian-home .b4 {
  bottom: 16%;
  right: 16%;
  animation-delay: 1.6s;
}
.meridian-home .b5 {
  top: 50%;
  left: 6%;
  background: var(--amber);
  animation-delay: 0.9s;
}
.meridian-home .b6 {
  top: 46%;
  right: 8%;
  animation-delay: 1.4s;
}

/* ===== creative grid ===== */
.meridian-home .creative-section {
  padding: 100px 0;
}
.meridian-home .creative-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 50px;
}
@media (max-width: 900px) {
  .meridian-home .creative-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.meridian-home .creative-card {
  aspect-ratio: 3 / 4;
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.4s;
}
.meridian-home .creative-card:hover {
  transform: translateY(-8px) rotate(-1deg);
}
.meridian-home .cc1 {
  background: #101625;
  color: #fff;
}
.meridian-home .cc2 {
  color: #fff;
}
.meridian-home .cc3 {
  color: #fff;
}
.meridian-home .cc4 {
  background: #141928;
  color: #fff;
  background-image: linear-gradient(160deg, #1e2a45, #0c0f17);
}

/* ===== about ===== */
.meridian-home .about-section {
  padding: 60px 0 130px;
}
.meridian-home .about-text {
  font-size: clamp(22px, 3.4vw, 38px);
  line-height: 1.5;
  font-weight: 500;
  max-width: 920px;
  margin: 0;
}
.meridian-home .about-text .chip {
  display: inline-block;
  width: 1.6em;
  height: 1em;
  border-radius: 100px;
  vertical-align: middle;
  background: linear-gradient(135deg, var(--indigo-2), var(--coral));
  margin: 0 4px;
  transform: translateY(-2px);
}

.meridian-home .about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
@media (max-width: 860px) {
  .meridian-home .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.meridian-home .about-img-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: #080e1c;
  box-shadow: 0 24px 60px -20px rgba(79,70,229,0.35), 0 0 0 1px rgba(79,70,229,0.15);
  transition: transform 0.5s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.5s;
}
.meridian-home .about-img-wrap:hover {
  transform: translateY(-8px);
  box-shadow: 0 36px 80px -20px rgba(79,70,229,0.45), 0 0 0 1px rgba(79,70,229,0.25);
}
.meridian-home .about-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 24px;
}

/* ===== footer ===== */
.meridian-home footer {
  background: var(--ink);
  color: #fff;
  padding: 90px 0 34px;
  border-radius: 36px 36px 0 0;
}
.meridian-home .foot-top {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  padding-bottom: 70px;
  border-bottom: 1px solid var(--line-dark);
}
.meridian-home .foot-cta h2 {
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 600;
  max-width: 440px;
  margin-bottom: 22px;
}
.meridian-home .foot-cta .become {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--indigo);
  color: #fff;
  padding: 14px 26px;
  border-radius: 100px;
  font-size: 14.5px;
  font-weight: 500;
  transition: transform 0.3s, background 0.3s;
}
.meridian-home .foot-cta .become:hover {
  transform: translateX(4px);
  background: var(--indigo-2);
}
.meridian-home .foot-cta .email {
  margin-top: 22px;
  font-size: 13.5px;
  color: #9296a6;
}
.meridian-home .foot-cta .email a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.meridian-home .foot-cols {
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
}
.meridian-home .foot-cols .fc h4 {
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7080;
  margin-bottom: 16px;
  font-family: "IBM Plex Mono", monospace;
}
.meridian-home .foot-cols .fc a,
.meridian-home .foot-cols .fc p {
  display: block;
  font-size: 14px;
  color: #c9cbdb;
  margin: 0 0 11px;
}
.meridian-home .foot-cols .fc a:hover {
  color: #fff;
}
.meridian-home .foot-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 14px;
}
.meridian-home .foot-bottom .brand {
  color: #fff;
}
.meridian-home .foot-bottom p {
  font-size: 12.5px;
  color: #6b7080;
  margin: 0;
}

/* cursor dot for playground */
.meridian-home .cdot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--indigo);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: block;
  transform: translate(-50%, -50%);
}

`}</style>

      <div className="cdot" ref={cdotRef} />

      {/* NAV */}
      <nav>
        <div className="brand">
          <span className="mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 21 L21 3 L21 21 Z" fill="currentColor" />
            </svg>
          </span>
          NexusRAG
        </div>
        <div className="nav-links">
          <a href="#work">Industries</a>
          <a href="#services">Capabilities</a>
          <a href="#expertise">Technology</a>
          <a href="#studio">Team</a>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="nav-login">
            Log in
          </Link>
          <Link to="/signup" className="nav-signup">
            Sign up
          </Link>
          <Link to="/chat" className="nav-cta">
            Try NexusRAG free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div>
              <span className="eyebrow">Multi-Industry AI Platform</span>
              <h1 className="headline">
                One platform,
                <br />
                <span className="thin">every</span> industry.
              </h1>
            </div>
            <div className="hero-sub">
              NexusRAG delivers grounded, cited answers from your documents — across Healthcare, Finance, Traffic, Manufacturing and 21 more industries.
            </div>
          </div>

          <div className="hero-people">
            <div className="avatars">
              <span>HC</span>
              <span>FI</span>
              <span>TF</span>
            </div>
            <Link to="/chat" className="watch-btn">
              <span className="circ">▶</span> Start querying free
            </Link>
          </div>

          <div className="industry-cycler">
            Currently answering questions for
            <IndustryCycler />
          </div>

          <div className="pills-row">
            <div className="pill">RAG Pipeline</div>
            <div className="pill">25 Industries</div>
            <div className="pill">Document Upload</div>
            <div className="pill">Cited Answers</div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* WORK / STATS */}
      <section className="stats-section wrap" id="work">
        <Reveal>
          <span className="sec-label">Impact so far</span>
          <div className="stat-row">
            <Counter target={25} label="industries supported" />
            <Counter target={10} label="million documents indexed" />
            <Counter target={99} label="% answer accuracy" />
          </div>
          <p style={{ maxWidth: 420, color: "var(--slate)", fontSize: 14.5, lineHeight: 1.6 }}>
            From healthcare diagnostics to financial regulations — NexusRAG retrieves the right answer from the right document, every time.
          </p>
        </Reveal>

        <RevealStagger className="project-grid">
          {PROJECTS.map((p) => (
            <div className={p.className} key={p.key}
              style={p.img ? {
                backgroundImage: `url(${p.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } : {}}
            >
              {!p.img && <div className="pc-visual">{p.visual}</div>}
              <div className="pc-chip">↗</div>
              <div className="pc-overlay">
                <div className="pc-tag">{p.tag}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-section wrap">
        <Reveal as="div" className="sec-head">
          <div>
            <span className="sec-label">User feedback</span>
            <h2>Testimonials</h2>
          </div>
          <p>Real results from teams across industries who rely on NexusRAG every day.</p>
        </Reveal>

        <RevealStagger className="testi-grid">
          <div className="clutch-card">
            <div>
              <div className="brand-mini">NexusRAG</div>
              <div className="stars">★★★★★</div>
            </div>
            <div>
              <p className="mono" style={{ fontSize: 12, color: "#c9cbdb", marginBottom: 14 }}>
                4.9 average · 38 reviews
              </p>
              <Link to="/chat" className="cta-mini">
                Try it free →
              </Link>
            </div>
          </div>

          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.name}>
              <div>
                <div className="stars">★★★★★</div>
                <p>{t.quote}</p>
              </div>
              <div className="testi-who">
                <div className="dot" />
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </RevealStagger>

        <Reveal as="div" className="clients-row">
          <span className="cl-label">Trusted by teams across sectors</span>
          <div className="clients-logos">
            <span>HealthFirst</span>
            <span>Ledger Analytics</span>
            <span>TrafficIQ</span>
            <span>AgriSense</span>
            <span>LexAI</span>
          </div>
        </Reveal>
      </section>

      {/* TAGLINE */}
      <Reveal as="section" className="tagline-section wrap">
        <h2>
          We speak every
          <br />
          industry's{" "}
          <span className="accent">
            language
            <span className="diamond" />
          </span>
          .
        </h2>
      </Reveal>

      {/* SERVICES */}
      <section className="services-section wrap" id="services">
        <Reveal as="div" className="sec-head">
          <div>
            <span className="sec-label">Capabilities</span>
            <h2>What NexusRAG does</h2>
          </div>
          <p>Four core capabilities that make NexusRAG the definitive multi-industry AI platform.</p>
        </Reveal>

        <RevealStagger className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-item" key={s.num}>
              <div className="si-top">
                <div className="si-icon">{s.icon}</div>
                <span className="si-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* EXPERTISE */}
      <section className="expertise-section wrap" id="expertise">
        <div className="expertise-grid">
          <Reveal>
            <span className="sec-label">What we know</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 600 }}>Expertise</h2>
            <div className="exp-cols">
              <div>
                <div className="col-label">Specialization</div>
                <ul>
                  <li>Retrieval-Augmented Generation</li>
                  <li>Multi-industry NLP</li>
                  <li>Document indexing &amp; search</li>
                  <li>Cited answer generation</li>
                </ul>
              </div>
              <div>
                <div className="col-label">Industries</div>
                <ul>
                  <li>Healthcare &amp; Medicine</li>
                  <li>Finance &amp; Banking</li>
                  <li>Traffic &amp; Transport</li>
                  <li>Manufacturing &amp; Agriculture</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="exp-card">
            <div className="exp-eyebrow">Why it works</div>
            <p>
              Our RAG pipeline retrieves only the most relevant passages from your documents, then generates answers grounded in evidence — so every response is accurate, traceable and industry-specific.
            </p>
            <div className="exp-founder">
              <div className="who">
                <div className="dot" />
                <div>
                  <div className="name">Meghna Rao</div>
                  <div className="role">Co-founder &amp; CTO</div>
                </div>
              </div>
              <Link to="/chat" className="go">
                →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLAYGROUND */}
      <Reveal as="section" className="play-section">
        <h2>Let's play a bit.</h2>
        <div className="sub">Move your cursor across the field.</div>
        <CirclePlayground />
        <div className="play-hint">// no agenda here, just a bit of delight</div>
      </Reveal>

      {/* BEHIND THE SCENES */}
      <section className="scene-section wrap" id="studio">
        <Reveal className="scene-board">
          <div className="bubble b1">Meghna</div>
          <div className="bubble tag b2">"context retrieved"</div>
          <div className="bubble tag b3">Arjun</div>
          <div className="bubble b4">Ravi</div>
          <div className="bubble tag b5">"accuracy: 99%"</div>
          <div className="bubble b6">Priya</div>
          <div>
            <h3>
              What's powering NexusRAG?
              <br />
              Come see inside.
            </h3>
            <div className="sub">Open research, open models, grounded in your own data.</div>
          </div>
        </Reveal>
      </section>

      {/* CREATIVE GRID */}
      <section className="creative-section wrap">
        <Reveal as="div" className="sec-head">
          <div>
            <span className="sec-label">Live demos</span>
            <h2>See NexusRAG in action across industries</h2>
          </div>
          <Link to="/chat" style={{ border: "1px solid var(--line)", padding: "9px 18px", borderRadius: 100, fontSize: 13 }}>
            Try the demo →
          </Link>
        </Reveal>

        <RevealStagger className="creative-grid">
          {CREATIVE.map((c) => (
            <div
              className={c.className}
              key={c.key}
              style={c.img ? {
                backgroundImage: `linear-gradient(to top, rgba(5,8,18,0.75) 0%, rgba(5,8,18,0.15) 55%), url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } : {}}
            >
              <span>{c.top}</span>
              <span>{c.bottom}</span>
            </div>
          ))}
        </RevealStagger>
      </section>

      {/* ABOUT */}
      <Reveal as="section" className="about-section wrap">
        <div className="about-grid">
          <p className="about-text">
            Built by a team of ML engineers and domain experts who got tired of AI that hallucinates,
            <span className="chip" /> we combined retrieval engineering and genuine curiosity about how different industries actually work
            <span className="chip" /> to build a platform that grounds every answer in real documents.
          </p>
          <div className="about-img-wrap">
            <img src="/industries/about.jpg" alt="NexusRAG RAG pipeline — documents to AI to grounded answer" loading="lazy" />
          </div>
        </div>
      </Reveal>

      {/* FOOTER */}
      <footer id="contact">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-cta">
              <h2>Ready to query your documents with AI?</h2>
              <Link to="/chat" className="become">
                Start for free →
              </Link>
              <div className="email">
                Questions? Write to <a href="mailto:hello@nexusrag.ai">hello@nexusrag.ai</a>
              </div>
            </div>
            <div className="foot-cols">
              <div className="fc">
                <h4>Platform</h4>
                <p>NexusRAG HQ</p>
                <p>Bengaluru, India</p>
                <p>hello@nexusrag.ai</p>
              </div>
              <div className="fc">
                <h4>Follow</h4>
                <a href="#">GitHub ↗</a>
                <a href="#">LinkedIn ↗</a>
                <a href="#">Twitter / X ↗</a>
                <a href="#">HuggingFace ↗</a>
              </div>
              <div className="fc">
                <h4>Navigate</h4>
                <a href="#work">Industries</a>
                <a href="#services">Capabilities</a>
                <a href="#expertise">Technology</a>
                <a href="#studio">Team</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="brand">NexusRAG</div>
            <p>© 2026 NexusRAG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}