import { useState } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "What industries does NexusRAG support?",
    a: "NexusRAG currently supports Healthcare (PubMedQA), Banking & Finance (FinQA / TAT-QA), and Traffic & Transport (custom dataset). You can add new industry collections via the admin upload wizard.",
  },
  {
    q: "How does the RAG pipeline work?",
    a: "Your question is first transformed using HyPE (Hypothetical Passage Embeddings) retrieval. Relevant chunks are fetched from the HNSW vector index using cosine similarity, then re-ranked by MiniLM cross-encoder. The top results are passed to the LLM to generate a grounded answer.",
  },
  {
    q: "Why do answers show cited sources?",
    a: "Every answer is grounded in retrieved documents. The citations (title, page reference, relevance %) let you verify the source of each fact — a core requirement for trustworthy RAG systems in high-stakes domains like healthcare and finance.",
  },
  {
    q: "How do I upload new documents?",
    a: "Ask your administrator. Admins log in via /admin-login, then use the Upload page to select an industry, drag-and-drop files, and trigger indexing. Only administrators can modify the knowledge base.",
  },
  {
    q: "What file types are supported?",
    a: "PDF, DOCX, TXT, JSON, and CSV are all supported. Files are semantically chunked before embedding. Maximum file size is 50 MB per file.",
  },
  {
    q: "Can I use NexusRAG for my own industry?",
    a: "Yes. The admin can create a new collection by selecting 'Add New Sector' in the upload wizard and uploading relevant documents. The same HyPE + MiniLM pipeline applies to any domain.",
  },
];

const ARTICLES = [
  { icon: "🚀", title: "Getting Started",          desc: "How to sign up, pick an industry, and ask your first RAG question." },
  { icon: "💬", title: "Using the Chat Interface", desc: "Industry selector, cited sources, suggestion chips, and chat history." },
  { icon: "📁", title: "Understanding Collections", desc: "What a collection is, how documents are chunked and indexed." },
  { icon: "🔍", title: "How Retrieval Works",      desc: "HyPE, cosine similarity, HNSW index, BM25 hybrid search explained." },
  { icon: "⚙️", title: "Admin Guide",              desc: "Uploading documents, managing collections, and pipeline settings." },
  { icon: "🔒", title: "Security & Privacy",        desc: "Role separation, admin-only access, and data retention policies." },
];

function Icon({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "chevron":  return <svg {...p}><path d="M9 6l6 6-6 6"/></svg>;
    case "search":   return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-4.35-4.35"/></svg>;
    case "mail":     return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case "chat":     return <svg {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"/></svg>;
    case "send":     return <svg {...p}><path d="M22 2L11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/></svg>;
    default: return null;
  }
}

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [subject, setSubject] = useState("");
  const [msgBody, setMsgBody] = useState("");
  const [sent, setSent]       = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!subject.trim() || !msgBody.trim()) return;
    setSent(true);
    setSubject(""); setMsgBody("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="help-page">
      <style>{`
.help-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --amber: #f59e0b; --green: #22c55e;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--paper); color: var(--ink);
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.help-page *, .help-page *::before, .help-page *::after { box-sizing: border-box; margin: 0; }
.help-page h1, .help-page h2, .help-page h3 { font-family: "Space Grotesk", sans-serif; }
.help-page a { color: inherit; text-decoration: none; }
.help-page button { font-family: inherit; cursor: pointer; }
.help-page textarea, .help-page input { font-family: inherit; }

/* nav */
.help-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.help-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.help-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.help-page .nav-right { display: flex; align-items: center; gap: 14px; }
.help-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.help-page .nav-link:hover { color: #fff; }

/* hero */
.help-page .help-hero {
  background: linear-gradient(135deg, var(--navy) 0%, #1e2d5a 100%);
  padding: 60px 24px 80px; text-align: center; color: #fff;
}
.help-page .help-hero h1 { font-size: clamp(26px, 4vw, 40px); font-weight: 700; margin-bottom: 12px; }
.help-page .help-hero p { font-size: 15.5px; color: rgba(255,255,255,0.6); margin-bottom: 30px; }
.help-page .hero-search {
  display: flex; align-items: center; gap: 12px;
  background: #fff; border-radius: 16px; padding: 13px 18px;
  max-width: 520px; margin: 0 auto;
  box-shadow: 0 12px 40px -10px rgba(0,0,0,0.3);
}
.help-page .hero-search input {
  flex: 1; border: none; outline: none; font-size: 15px; color: var(--ink); background: transparent;
}
.help-page .hero-search input::placeholder { color: var(--slate-l); }

/* page */
.help-page .page-wrap { max-width: 960px; margin: 0 auto; padding: 52px 28px 100px; }

/* articles */
.help-page .articles-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; margin-bottom: 52px;
}
@media (max-width: 760px) { .help-page .articles-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .help-page .articles-grid { grid-template-columns: 1fr; } }
.help-page .article-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 18px; padding: 22px;
  cursor: pointer; transition: all 0.2s;
  text-align: left; width: 100%;
}
.help-page .article-card:hover { box-shadow: 0 6px 20px -8px rgba(12,15,23,0.15); border-color: rgba(79,70,229,0.2); transform: translateY(-2px); }
.help-page .article-icon { font-size: 28px; margin-bottom: 14px; }
.help-page .article-title { font-size: 15px; font-weight: 700; margin-bottom: 7px; font-family: "Space Grotesk", sans-serif; }
.help-page .article-desc { font-size: 13px; color: var(--slate); line-height: 1.55; }

/* faq */
.help-page .faq-section { margin-bottom: 52px; }
.help-page .section-head { margin-bottom: 24px; }
.help-page .section-head h2 { font-size: 24px; font-weight: 700; margin-bottom: 6px; }
.help-page .section-head p { font-size: 14.5px; color: var(--slate); }
.help-page .faq-list { display: flex; flex-direction: column; gap: 10px; }
.help-page .faq-item {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 16px; overflow: hidden; transition: border-color 0.2s;
}
.help-page .faq-item.open { border-color: rgba(79,70,229,0.25); }
.help-page .faq-q {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 22px; cursor: pointer; border: none; background: none;
  width: 100%; text-align: left; font-size: 15px; font-weight: 600;
  color: var(--ink); font-family: inherit; gap: 12px;
  transition: background 0.2s;
}
.help-page .faq-q:hover { background: var(--paper); }
.help-page .faq-chev { color: var(--slate-l); flex-shrink: 0; transition: transform 0.25s; }
.help-page .faq-item.open .faq-chev { transform: rotate(90deg); color: var(--indigo); }
.help-page .faq-a {
  padding: 0 22px 18px; font-size: 14.5px;
  color: var(--slate); line-height: 1.65;
}

/* contact form */
.help-page .contact-section {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 22px; padding: 36px;
}
.help-page .contact-section h2 { font-size: 24px; font-weight: 700; margin-bottom: 6px; }
.help-page .contact-section > p { font-size: 14.5px; color: var(--slate); margin-bottom: 28px; }
.help-page .field { margin-bottom: 18px; }
.help-page .field label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 7px; }
.help-page .field input, .help-page .field textarea {
  width: 100%; padding: 12px 16px; border-radius: 12px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 14.5px; color: var(--ink); outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.help-page .field input:focus, .help-page .field textarea:focus {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.help-page .field textarea { resize: vertical; min-height: 100px; }
.help-page .send-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 26px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
}
.help-page .send-btn:hover { background: var(--indigo); }
.help-page .success-msg {
  background: #f0fdf4; border: 1px solid #86efac;
  border-radius: 12px; padding: 14px 18px;
  font-size: 14px; color: #15803d; font-weight: 600;
  margin-bottom: 18px; display: flex; align-items: center; gap: 8px;
}
`}</style>

      <nav>
        <Link to="/" className="brand"><span className="brand-mark">N</span> NexusRAG</Link>
        <div className="nav-right">
          <Link to="/dashboard" className="nav-link">← Dashboard</Link>
          <Link to="/chat" className="nav-link">Chat</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="help-hero">
        <h1>Help &amp; Support</h1>
        <p>Find answers, guides, and contact us if you need more.</p>
        <div className="hero-search">
          <Icon name="search" size={18} />
          <input placeholder="Search documentation…" />
        </div>
      </div>

      <div className="page-wrap">
        {/* Quick articles */}
        <div className="section-head">
          <h2>Popular Articles</h2>
          <p>Get up to speed quickly with these guides.</p>
        </div>
        <div className="articles-grid">
          {ARTICLES.map((a) => (
            <button key={a.title} className="article-card">
              <div className="article-icon">{a.icon}</div>
              <div className="article-title">{a.title}</div>
              <div className="article-desc">{a.desc}</div>
            </button>
          ))}
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about NexusRAG answered.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-chev"><Icon name="chevron" size={18} /></span>
                </button>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-section">
          <h2>Contact Support</h2>
          <p>Didn't find your answer? Send us a message and we'll get back to you.</p>

          {sent && (
            <div className="success-msg">✅ Message sent! We'll respond within 24 hours.</div>
          )}

          <form onSubmit={handleSend} noValidate>
            <div className="field">
              <label>Subject</label>
              <input
                placeholder="e.g. Issue with Healthcare collection"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea
                placeholder="Describe your issue or question…"
                rows={4}
                value={msgBody}
                onChange={(e) => setMsgBody(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="send-btn">
              <Icon name="send" size={15} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
