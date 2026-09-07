import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Social sharing helper ──────────────────────────────── */
function buildShareText(msg, industry) {
  const intro = `💡 Ask NexusRAG about ${industry?.label || "AI"}:\n\n`;
  const plain = msg.text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\n•/g, "\n•");
  return intro + plain.slice(0, 600) + (plain.length > 600 ? "…" : "");
}

const SOCIALS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    color: "#25D366",
    icon: "W",
    url: (text) => `https://wa.me/?text=${encodeURIComponent(text)}`,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    color: "#000",
    icon: "𝕏",
    url: (text) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text.slice(0, 280))}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    color: "#0A66C2",
    icon: "in",
    url: (text) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text.slice(0, 300))}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    color: "#1877F2",
    icon: "f",
    url: (text) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text.slice(0, 300))}`,
  },
  {
    id: "telegram",
    label: "Telegram",
    color: "#26A5E4",
    icon: "✈",
    url: (text) => `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text.slice(0, 400))}`,
  },
  {
    id: "email",
    label: "Email",
    color: "#6b7280",
    icon: "✉",
    url: (text) => `mailto:?subject=NexusRAG%20Answer&body=${encodeURIComponent(text)}`,
  },
];

function ShareModal({ msg, industry, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareText = buildShareText(msg, industry);

  const handleCopyLink = () => {
    const full = `${shareText}\n\n${window.location.href}`;
    navigator.clipboard.writeText(full).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="share-overlay" onClick={onClose}>
      <div className="share-box" onClick={(e) => e.stopPropagation()}>
        <div className="share-hd">
          <div className="share-title">Share this answer</div>
          <button className="share-close" onClick={onClose}>✕</button>
        </div>
        <div className="share-preview">
          <div className="share-preview-label">{industry?.emoji} {industry?.label} · NexusRAG</div>
          <div className="share-preview-text">{shareText.slice(0, 200)}{shareText.length > 200 ? "…" : ""}</div>
        </div>
        <div className="share-grid">
          {SOCIALS.map((s) => (
            <a
              key={s.id}
              href={s.url(shareText)}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              style={{ "--sc": s.color }}
            >
              <span className="social-icon">{s.icon}</span>
              <span className="social-label">{s.label}</span>
            </a>
          ))}
        </div>
        <div className="share-divider">or</div>
        <button className={`copy-link-btn${copied ? " copied" : ""}`} onClick={handleCopyLink}>
          {copied ? "✓ Copied to clipboard!" : "🔗 Copy answer + link"}
        </button>
      </div>
    </div>
  );
}

const INDUSTRIES = [
  {
    key: "healthcare",
    emoji: "🏥",
    label: "Healthcare",
    desc: "PubMedQA — diagnostics, patient care, medical research",
    color: "#22c55e",
    bg: "#dcfce7",
    samples: [
      "What are the common symptoms of Type 2 diabetes?",
      "How is CRISPR used in gene therapy?",
      "What treatment options exist for early-stage lung cancer?",
    ],
  },
  {
    key: "finance",
    emoji: "💰",
    label: "Banking & Finance",
    desc: "FinQA / TAT-QA — market analysis, risk, banking regulations",
    color: "#3b82f6",
    bg: "#dbeafe",
    samples: [
      "What are the Basel III capital adequacy requirements?",
      "How does quantitative easing affect inflation?",
      "Explain the difference between CDOs and CMOs.",
    ],
  },
  {
    key: "traffic",
    emoji: "🚦",
    label: "Traffic & Transport",
    desc: "Custom dataset — driving rules, road safety, traffic law",
    color: "#f59e0b",
    bg: "#fef3c7",
    samples: [
      "What is the legal blood alcohol limit for driving?",
      "When must a driver yield to pedestrians at a zebra crossing?",
      "What are the rules for overtaking on a single-lane road?",
    ],
  },
];

// Simulated RAG responses with cited sources
const SIMULATED_RESPONSES = {
  healthcare: {
    text: "Based on the retrieved medical literature, **Type 2 diabetes** is characterised by insulin resistance and relative insulin deficiency. Common symptoms include:\n\n• **Polyuria** — frequent urination, especially at night\n• **Polydipsia** — increased thirst\n• **Unexplained weight loss**\n• **Fatigue and lethargy**\n• **Blurred vision**\n• **Slow-healing wounds**\n• **Recurrent infections** (particularly skin, gum, bladder)\n\nMany patients remain **asymptomatic** for years, which is why routine screening is recommended for at-risk individuals (BMI > 25, family history, age > 45).",
    sources: [
      { id: "src-1", title: "PubMedQA: Biomedical Research QA", page: "p. 42", relevance: 0.94 },
      { id: "src-2", title: "WHO Diabetes Fact Sheet 2023", page: "§ 2.1", relevance: 0.91 },
      { id: "src-3", title: "ADA Standards of Medical Care 2024", page: "p. 118", relevance: 0.87 },
    ],
  },
  finance: {
    text: "**Quantitative Easing (QE)** is a monetary policy tool where a central bank purchases financial assets to inject liquidity into the economy. Its effects on inflation include:\n\n• **Increases money supply** — more currency in circulation can drive prices up\n• **Lowers interest rates** — stimulates borrowing, spending, and investment\n• **Weakens currency** — makes imports more expensive (imported inflation)\n• **Asset price inflation** — raises stock and real estate prices\n\nThe relationship is complex: QE did not trigger hyperinflation post-2008 as expected, partly because banks held excess reserves. However, the 2021–22 inflation surge was partly attributed to aggressive pandemic-era QE combined with supply shocks.",
    sources: [
      { id: "src-1", title: "FinQA: Financial Question Answering", page: "p. 28", relevance: 0.96 },
      { id: "src-2", title: "Federal Reserve Working Paper 2022", page: "§ 4.3", relevance: 0.89 },
      { id: "src-3", title: "IMF Global Financial Stability Report", page: "p. 74", relevance: 0.85 },
    ],
  },
  traffic: {
    text: "According to the retrieved traffic regulations:\n\n**Zebra crossing (uncontrolled pedestrian crossing) rules:**\n\n• Drivers **must give way** to any pedestrian who has stepped onto or is waiting at a zebra crossing\n• You must **slow down and stop** if a pedestrian intends to cross — do not wave them across or assume they will wait\n• **Overtaking** a vehicle that has stopped at a zebra crossing is illegal\n• In some jurisdictions, cyclists must also dismount or give way\n• **Flashing amber Belisha beacons** mark zebra crossings — approach at a speed that allows you to stop safely\n\nPenalties for failing to yield can include fines and penalty points on the driver's licence.",
    sources: [
      { id: "src-1", title: "Highway Code — Rule 195", page: "Rule 195", relevance: 0.97 },
      { id: "src-2", title: "Road Traffic Act 1988 (UK)", page: "§ 25", relevance: 0.92 },
      { id: "src-3", title: "DfT Driving Standards Guide 2023", page: "p. 61", relevance: 0.84 },
    ],
  },
};

function Icon({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "send": return <svg {...p}><path d="M22 2L11 13" /><path d="M22 2 15 22 11 13 2 9l20-7z" /></svg>;
    case "close": return <svg {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case "refresh": return <svg {...p}><path d="M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6" /><path d="M18.5 3.5v4h-4M5.5 20.5v-4h4" /></svg>;
    case "share": return <svg {...p}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" /></svg>;
    case "chevron": return <svg {...p}><path d="M9 6l6 6-6 6" /></svg>;
    case "info": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>;
    case "clipboard": return <svg {...p}><rect x="8" y="2" width="8" height="4" rx="1.5" /><path d="M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" /></svg>;
    case "arrow": return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    default: return null;
  }
}

function TypingDots() {
  return (
    <div className="typing-dots">
      <span /><span /><span />
    </div>
  );
}

function MarkdownText({ text }) {
  // Very simple inline markdown rendering
  const lines = text.split("\n");
  return (
    <div className="md-text">
      {lines.map((line, i) => {
        if (line.startsWith("• ")) {
          const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, (_, m) => `<strong>${m}</strong>`);
          return <li key={i} dangerouslySetInnerHTML={{ __html: content }} />;
        }
        const content = line.replace(/\*\*(.*?)\*\*/g, (_, m) => `<strong>${m}</strong>`);
        return line ? <p key={i} dangerouslySetInnerHTML={{ __html: content }} /> : <br key={i} />;
      })}
    </div>
  );
}

export default function Chat() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isReplying, setIsReplying] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [shareMsg, setShareMsg] = useState(null); // { msg, industry }
  const threadRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isReplying]);

  const getSimulatedReply = (ind) => {
    const key = ind?.key || "healthcare";
    return SIMULATED_RESPONSES[key] || SIMULATED_RESPONSES.healthcare;
  };

  const handleSend = () => {
    const trimmed = question.trim();
    if (!trimmed || !selectedIndustry) return;

    const userMsg = { id: `u-${Date.now()}`, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setQuestion("");

    setIsReplying(true);
    const ind = selectedIndustry;

    setTimeout(() => {
      const reply = getSimulatedReply(ind);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: reply.text,
          sources: reply.sources,
          industry: ind,
        },
      ]);
      setIsReplying(false);
    }, 1400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSampleClick = (sample) => {
    setQuestion(sample);
    textareaRef.current?.focus();
  };

  const handleNewChat = () => {
    setMessages([]);
    setQuestion("");
    setIsReplying(false);
  };

  return (
    <div className="rag-chat">
      <style>{`
/* ===== RAG Chat Page ===== */
.rag-chat {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --green: #22c55e;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
}
.rag-chat *, .rag-chat *::before, .rag-chat *::after { box-sizing: border-box; }
.rag-chat h1, .rag-chat h2, .rag-chat h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-chat a { color: inherit; text-decoration: none; }
.rag-chat button { font-family: inherit; cursor: pointer; }
.rag-chat textarea { font-family: inherit; }

/* ===== nav ===== */
.rag-chat nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 32px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
  position: sticky; top: 0; z-index: 100;
}
.rag-chat .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-chat .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-chat .nav-right {
  display: flex; align-items: center; gap: 14px;
}
.rag-chat .nav-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 100px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  font-size: 13px; color: #fff;
}
.rag-chat .nav-link {
  color: rgba(255,255,255,0.6); font-size: 14px;
  transition: color 0.2s;
}
.rag-chat .nav-link:hover { color: #fff; }
.rag-chat .nav-btn {
  padding: 8px 16px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.35);
  background: transparent; color: #fff;
  font-size: 13.5px; font-weight: 500;
  transition: all 0.25s;
}
.rag-chat .nav-btn:hover { background: #fff; color: #000; }

/* ===== layout ===== */
.rag-chat .layout {
  display: flex; flex: 1; min-height: 0;
  height: calc(100vh - 64px);
}

/* ===== left panel: industry selector ===== */
.rag-chat .left-panel {
  width: 300px; flex-shrink: 0;
  background: var(--panel);
  border-right: 1px solid var(--line);
  display: flex; flex-direction: column;
  overflow-y: auto;
}
@media (max-width: 860px) {
  .rag-chat .left-panel { display: none; }
}
.rag-chat .lp-head {
  padding: 24px 20px 18px;
  border-bottom: 1px solid var(--line);
}
.rag-chat .lp-head h2 { font-size: 15px; font-weight: 700; margin-bottom: 5px; }
.rag-chat .lp-head p { font-size: 12.5px; color: var(--slate); line-height: 1.5; }
.rag-chat .industry-list {
  padding: 16px 16px;
  display: flex; flex-direction: column; gap: 10px;
}
.rag-chat .ind-btn {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-radius: 16px;
  border: 1.5px solid var(--line);
  background: var(--paper); width: 100%; text-align: left;
  cursor: pointer; transition: all 0.2s;
}
.rag-chat .ind-btn:hover {
  border-color: var(--indigo-2);
  background: #f5f3ff;
}
.rag-chat .ind-btn.selected {
  border-color: var(--indigo);
  background: #eef2ff;
}
.rag-chat .ind-emoji { font-size: 24px; flex-shrink: 0; }
.rag-chat .ind-meta { flex: 1; min-width: 0; }
.rag-chat .ind-name { font-size: 14px; font-weight: 700; margin-bottom: 3px; }
.rag-chat .ind-desc { font-size: 11.5px; color: var(--slate); line-height: 1.4; }
.rag-chat .lp-footer {
  margin-top: auto; padding: 16px;
  border-top: 1px solid var(--line);
}
.rag-chat .admin-link {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; border-radius: 12px;
  background: var(--paper-2); border: 1px solid var(--line);
  font-size: 13px; font-weight: 600; color: var(--indigo);
  transition: background 0.2s;
}
.rag-chat .admin-link:hover { background: #eef2ff; }

/* ===== main chat area ===== */
.rag-chat .chat-main {
  flex: 1; display: flex; flex-direction: column; min-width: 0;
}

/* ===== select-industry prompt ===== */
.rag-chat .select-prompt {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 40px 24px; text-align: center;
}
.rag-chat .sp-icon {
  width: 80px; height: 80px; border-radius: 24px;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  display: flex; align-items: center; justify-content: center;
  font-size: 36px; margin: 0 auto 24px;
}
.rag-chat .select-prompt h1 {
  font-size: 28px; font-weight: 700;
  letter-spacing: -0.01em; margin-bottom: 12px;
}
.rag-chat .select-prompt p {
  font-size: 15px; color: var(--slate);
  line-height: 1.6; max-width: 420px; margin-bottom: 40px;
}
.rag-chat .mobile-industries {
  display: none;
  grid-template-columns: repeat(3, 1fr); gap: 14px;
  width: 100%; max-width: 620px;
}
@media (max-width: 860px) {
  .rag-chat .mobile-industries { display: grid; }
}
.rag-chat .mob-ind-btn {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 18px 10px; border-radius: 16px;
  border: 1.5px solid var(--line); background: #fff;
  cursor: pointer; transition: all 0.2s;
}
.rag-chat .mob-ind-btn:hover { border-color: var(--indigo-2); background: #f5f3ff; }
.rag-chat .mob-ind-btn.selected { border-color: var(--indigo); background: #eef2ff; }
.rag-chat .mob-ind-emoji { font-size: 28px; }
.rag-chat .mob-ind-label { font-size: 12.5px; font-weight: 700; }

/* ===== chat thread ===== */
.rag-chat .chat-thread {
  flex: 1; overflow-y: auto;
  padding: 28px 0;
  display: flex; flex-direction: column; gap: 22px;
}
.rag-chat .thread-inner {
  max-width: 760px; margin: 0 auto; width: 100%; padding: 0 24px;
}

/* industry header in chat */
.rag-chat .chat-industry-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 100px;
  font-size: 13px; font-weight: 600;
  background: var(--paper-2); border: 1px solid var(--line);
  margin-bottom: 24px;
  cursor: pointer; transition: background 0.2s;
}
.rag-chat .chat-industry-badge:hover { background: #eef2ff; color: var(--indigo); }

/* messages */
.rag-chat .msg-user {
  display: flex; justify-content: flex-end;
}
.rag-chat .msg-user .bubble {
  background: var(--ink); color: #fff;
  padding: 14px 18px; border-radius: 20px 20px 6px 20px;
  font-size: 15px; line-height: 1.55; max-width: 560px;
}
.rag-chat .msg-assistant {
  display: flex; align-items: flex-start; gap: 12px;
}
.rag-chat .asst-avatar {
  width: 36px; height: 36px; border-radius: 12px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 16px; flex-shrink: 0; margin-top: 2px;
}
.rag-chat .asst-body { flex: 1; min-width: 0; }
.rag-chat .asst-name {
  font-size: 12.5px; font-weight: 700; color: var(--slate);
  font-family: "IBM Plex Mono", monospace;
  margin-bottom: 8px;
  display: flex; align-items: center; gap: 8px;
}
.rag-chat .asst-tag {
  font-size: 10.5px; padding: 2px 8px; border-radius: 100px;
  background: var(--paper-2); color: var(--slate);
}
.rag-chat .asst-bubble {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 6px 20px 20px 20px;
  padding: 18px 20px;
  font-size: 14.5px; line-height: 1.65;
}
.rag-chat .md-text p { margin: 0 0 8px; }
.rag-chat .md-text p:last-child { margin-bottom: 0; }
.rag-chat .md-text li {
  margin: 4px 0; padding-left: 4px;
  list-style: none;
}
.rag-chat .md-text li::before {
  content: "·"; margin-right: 8px; color: var(--indigo); font-weight: 700;
}

/* sources */
.rag-chat .sources-section {
  margin-top: 16px; padding-top: 14px;
  border-top: 1px solid var(--line);
}
.rag-chat .sources-label {
  font-size: 11px; font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--slate-l); margin-bottom: 10px;
}
.rag-chat .sources-list {
  display: flex; flex-direction: column; gap: 7px;
}
.rag-chat .source-tag {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 12px; border-radius: 10px;
  background: var(--paper); border: 1px solid var(--line);
  font-size: 12.5px; width: 100%;
  transition: background 0.2s, border-color 0.2s;
  cursor: default;
}
.rag-chat .source-tag:hover {
  background: #eef2ff; border-color: #c7d2fe;
}
.rag-chat .src-num {
  width: 22px; height: 22px; border-radius: 6px;
  background: var(--indigo); color: #fff;
  font-size: 10.5px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.rag-chat .src-title { flex: 1; font-weight: 600; }
.rag-chat .src-page { font-family: "IBM Plex Mono", monospace; font-size: 11px; color: var(--slate-l); }
.rag-chat .src-score {
  font-family: "IBM Plex Mono", monospace; font-size: 11px;
  color: var(--green); font-weight: 600;
}

/* msg actions */
.rag-chat .msg-actions {
  display: flex; gap: 6px; margin-top: 10px;
}
.rag-chat .action-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 10px; border-radius: 8px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 12px; color: var(--slate);
  transition: all 0.2s;
}
.rag-chat .action-btn:hover { background: var(--paper-2); color: var(--ink); }
.rag-chat .action-btn.copied { color: var(--green); border-color: #86efac; }

/* typing dots */
.rag-chat .typing-dots {
  display: flex; align-items: center; gap: 4px; padding: 4px 0;
}
.rag-chat .typing-dots span {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--slate-l);
  animation: rag-dot-pulse 1.2s ease-in-out infinite;
}
.rag-chat .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.rag-chat .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes rag-dot-pulse {
  0%, 60%, 100% { transform: scale(0.7); opacity: 0.5; }
  30% { transform: scale(1); opacity: 1; }
}

/* sample questions */
.rag-chat .samples-row {
  max-width: 760px; margin: 0 auto; padding: 0 24px 24px;
  display: flex; flex-direction: column; gap: 8px;
}
.rag-chat .samples-label {
  font-size: 11.5px; font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--slate-l); margin-bottom: 4px;
}
.rag-chat .sample-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; border-radius: 12px;
  border: 1px solid var(--line); background: var(--panel);
  font-size: 13.5px; color: var(--ink); text-align: left;
  cursor: pointer; transition: all 0.2s;
}
.rag-chat .sample-btn:hover {
  background: #eef2ff; border-color: #c7d2fe; color: var(--indigo);
}

/* ===== input bar ===== */
.rag-chat .input-bar {
  flex-shrink: 0;
  padding: 16px 24px 20px;
  border-top: 1px solid var(--line);
  background: var(--panel);
}
.rag-chat .input-wrap {
  max-width: 760px; margin: 0 auto;
  background: var(--paper); border: 1.5px solid var(--line);
  border-radius: 18px; display: flex; align-items: flex-end;
  gap: 10px; padding: 12px 16px;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.rag-chat .input-wrap:focus-within {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.rag-chat .input-wrap textarea {
  flex: 1; border: none; background: transparent;
  font-size: 15px; line-height: 1.55;
  color: var(--ink); resize: none; outline: none;
  min-height: 24px; max-height: 140px;
  overflow-y: auto;
}
.rag-chat .input-wrap textarea::placeholder { color: var(--slate-l); }
.rag-chat .send-btn {
  width: 40px; height: 40px; border-radius: 12px;
  background: var(--ink); color: #fff; border: none;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s, transform 0.2s;
}
.rag-chat .send-btn:hover:not(:disabled) { background: var(--indigo); transform: scale(1.05); }
.rag-chat .send-btn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }
.rag-chat .input-hint {
  max-width: 760px; margin: 8px auto 0;
  font-size: 12px; color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace;
  text-align: center;
}
`}</style>

      {/* ── NAV ── */}
      <nav>
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          NexusRAG
        </Link>
        <div className="nav-right">
          {selectedIndustry && (
            <span className="nav-chip">
              {selectedIndustry.emoji} {selectedIndustry.label}
            </span>
          )}
          <Link to="/dashboard" className="nav-link">My Chats</Link>
          <button className="nav-btn" onClick={handleNewChat}>+ New Chat</button>
        </div>
      </nav>

      <div className="layout">
        {/* ── LEFT PANEL: INDUSTRY SELECTOR ── */}
        <aside className="left-panel">
          <div className="lp-head">
            <h2>Select Industry</h2>
            <p>Choose a knowledge base to query. Each sector has its own curated document collection.</p>
          </div>
          <div className="industry-list">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.key}
                className={`ind-btn${selectedIndustry?.key === ind.key ? " selected" : ""}`}
                onClick={() => { setSelectedIndustry(ind); setMessages([]); }}
              >
                <span className="ind-emoji">{ind.emoji}</span>
                <div className="ind-meta">
                  <div className="ind-name">{ind.label}</div>
                  <div className="ind-desc">{ind.desc}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="lp-footer">
            <span className="lp-footer-note">Select an industry to start asking questions.</span>
          </div>
        </aside>

        {/* ── MAIN CHAT AREA ── */}
        <main className="chat-main">
          {/* No industry selected */}
          {!selectedIndustry ? (
            <div className="select-prompt">
              <div className="sp-icon">🧠</div>
              <h1>Multi-Industry RAG Q&A</h1>
              <p>
                Select an industry from the left panel to start querying its knowledge base.
                Each answer is grounded in retrieved documents with cited sources.
              </p>
              {/* Mobile industry selection */}
              <div className="mobile-industries">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.key}
                    className={`mob-ind-btn${selectedIndustry?.key === ind.key ? " selected" : ""}`}
                    onClick={() => setSelectedIndustry(ind)}
                  >
                    <span className="mob-ind-emoji">{ind.emoji}</span>
                    <span className="mob-ind-label">{ind.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Chat thread */}
              <div className="chat-thread" ref={threadRef}>
                <div className="thread-inner">
                  <button
                    className="chat-industry-badge"
                    onClick={() => { setSelectedIndustry(null); setMessages([]); }}
                  >
                    {selectedIndustry.emoji} {selectedIndustry.label}
                    <span style={{ fontSize: 11, opacity: 0.6 }}>· click to change ✕</span>
                  </button>

                  {messages.map((msg) =>
                    msg.role === "user" ? (
                      <div key={msg.id} className="msg-user" style={{ marginBottom: 18 }}>
                        <div className="bubble">{msg.text}</div>
                      </div>
                    ) : (
                      <div key={msg.id} className="msg-assistant" style={{ marginBottom: 18 }}>
                        <div className="asst-avatar">✦</div>
                        <div className="asst-body">
                          <div className="asst-name">
                            NexusRAG
                            <span className="asst-tag">
                              {msg.industry?.emoji} {msg.industry?.label}
                            </span>
                          </div>
                          <div className="asst-bubble">
                            <MarkdownText text={msg.text} />

                            {/* Cited Sources */}
                            {msg.sources && msg.sources.length > 0 && (
                              <div className="sources-section">
                                <div className="sources-label">Retrieved Sources</div>
                                <div className="sources-list">
                                  {msg.sources.map((src, i) => (
                                    <div key={src.id} className="source-tag">
                                      <span className="src-num">{i + 1}</span>
                                      <span className="src-title">{src.title}</span>
                                      <span className="src-page">{src.page}</span>
                                      <span className="src-score">{Math.round(src.relevance * 100)}%</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="msg-actions">
                            <button
                              className={`action-btn${copiedId === msg.id ? " copied" : ""}`}
                              onClick={() => handleCopy(msg.id, msg.text)}
                            >
                              <Icon name="clipboard" size={13} />
                              {copiedId === msg.id ? "Copied!" : "Copy"}
                            </button>
                            <button
                              className="action-btn share-action"
                              onClick={() => setShareMsg({ msg, industry: msg.industry })}
                            >
                              <Icon name="share" size={13} /> Share
                            </button>
                            <button className="action-btn" onClick={handleNewChat}>
                              <Icon name="refresh" size={13} /> New chat
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}

                  {isReplying && (
                    <div className="msg-assistant" style={{ marginBottom: 18 }}>
                      <div className="asst-avatar">✦</div>
                      <div className="asst-body">
                        <div className="asst-name">NexusRAG <span className="asst-tag">Retrieving…</span></div>
                        <div className="asst-bubble">
                          <TypingDots />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sample questions (only when no messages yet) */}
              {messages.length === 0 && !isReplying && (
                <div className="samples-row">
                  <div className="samples-label">Try asking…</div>
                  {selectedIndustry.samples.map((s) => (
                    <button key={s} className="sample-btn" onClick={() => handleSampleClick(s)}>
                      <Icon name="arrow" size={15} />
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input bar */}
              <div className="input-bar">
                <div className="input-wrap">
                  <textarea
                    ref={textareaRef}
                    rows={1}
                    placeholder={`Ask anything about ${selectedIndustry.label}…`}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onInput={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${Math.min(e.target.scrollHeight, 140)}px`;
                    }}
                  />
                  <button
                    className="send-btn"
                    onClick={handleSend}
                    disabled={!question.trim() || isReplying}
                    aria-label="Send question"
                  >
                    <Icon name="send" size={17} />
                  </button>
                </div>
                <div className="input-hint">
                  Enter to send · Shift+Enter for new line · Answers grounded in {selectedIndustry.label} knowledge base
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      {/* ── Share Modal ── */}
      {shareMsg && (
        <div className="rag-chat">
          <ShareModal
            msg={shareMsg.msg}
            industry={shareMsg.industry}
            onClose={() => setShareMsg(null)}
          />
        </div>
      )}
    </div>
  );
}
