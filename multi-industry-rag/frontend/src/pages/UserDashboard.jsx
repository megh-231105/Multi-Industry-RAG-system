import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ─── Static data ─────────────────────────────────────────── */
const SUGGESTIONS = [
  "How do I prepare for a web designer interview?",
  "What are the key principles of effective web design?",
  "What are the best design trends for websites in 2025?",
];

const RECENT_CHATS = [
  { key: "rc1", title: "New chat", time: "20 secs ago" },
  { key: "rc2", title: "Give me unique name logo for CRM dashboard", time: "45 mins ago" },
  { key: "rc3", title: "Create SaaS web app categories", time: "3 hours ago" },
];

const HISTORY = [
  {
    group: "Today",
    items: [
      { key: "h1", title: "New Chat", time: "Today, 11:50 pm" },
      { key: "h2", title: "Give me unique name logo for...", time: "Today, 11:05 pm" },
      { key: "h3", title: "Create SaaS web app categori...", time: "Today, 08:57 pm" },
    ],
  },
  {
    group: "Yesterday",
    items: [
      { key: "h4", title: "Custom platform solution", time: "Yesterday, 09:15 am" },
      { key: "h5", title: "Investment insights monetizati...", time: "Yesterday, 07:02 am" },
      { key: "h6", title: "Give me 10 similar ecommerce...", time: "Yesterday, 04:50 am" },
      { key: "h7", title: "5 top ecommerce integration a...", time: "Yesterday, 04:11 am" },
      { key: "h8", title: "Create content for privacy poli...", time: "Yesterday, 02:15 am" },
    ],
  },
];

const INDUSTRIES = [
  { key: "health",        emoji: "🏥", label: "Health",              color: "#22c55e", bg: "#dcfce7", areas: "Diagnostics, patient care, medical records" },
  { key: "finance",       emoji: "💰", label: "Finance",             color: "#3b82f6", bg: "#dbeafe", areas: "Banking, investing, risk & fraud detection" },
  { key: "traffic",       emoji: "🚦", label: "Traffic",             color: "#f59e0b", bg: "#fef3c7", areas: "Route planning, congestion monitoring, signals" },
  { key: "manufacturing", emoji: "🏭", label: "Manufacturing",       color: "#8b5cf6", bg: "#ede9fe", areas: "Production, quality control, predictive maintenance" },
  { key: "retail",        emoji: "🛒", label: "Retail & E-commerce", color: "#ec4899", bg: "#fce7f3", areas: "Shopping, recommendations, inventory" },
  { key: "logistics",     emoji: "🚚", label: "Logistics & Supply",  color: "#0ea5e9", bg: "#e0f2fe", areas: "Warehousing, delivery, shipment tracking" },
  { key: "agriculture",   emoji: "🌾", label: "Agriculture",         color: "#84cc16", bg: "#f7fee7", areas: "Crop monitoring, irrigation, pest detection" },
  { key: "energy",        emoji: "⚡",  label: "Energy & Utilities",  color: "#eab308", bg: "#fefce8", areas: "Solar, electricity, power management" },
  { key: "construction",  emoji: "🏗️", label: "Construction",        color: "#f97316", bg: "#fff7ed", areas: "Site monitoring, safety, project management" },
  { key: "education",     emoji: "🎓", label: "Education",           color: "#6366f1", bg: "#eef2ff", areas: "Online learning, tutoring, student assessment" },
  { key: "hospitality",   emoji: "🏨", label: "Hospitality",         color: "#14b8a6", bg: "#f0fdfa", areas: "Hotels, travel planning, customer service" },
  { key: "food",          emoji: "🍔", label: "Food & Restaurants",  color: "#ef4444", bg: "#fef2f2", areas: "Restaurant management, food delivery" },
  { key: "aviation",      emoji: "✈️", label: "Aviation",            color: "#06b6d4", bg: "#ecfeff", areas: "Airport operations, aircraft maintenance" },
  { key: "maritime",      emoji: "🚢", label: "Maritime",            color: "#1d4ed8", bg: "#eff6ff", areas: "Ports, cargo, vessel management" },
  { key: "railways",      emoji: "🚆", label: "Railways",            color: "#4f46e5", bg: "#eef2ff", areas: "Train operations, maintenance, passenger services" },
  { key: "realestate",    emoji: "🏢", label: "Real Estate",         color: "#64748b", bg: "#f8fafc", areas: "Property management, valuation, smart buildings" },
  { key: "telecom",       emoji: "📡", label: "Telecommunications",  color: "#7c3aed", bg: "#f5f3ff", areas: "Network optimization, customer support" },
  { key: "itsoftware",    emoji: "💻", label: "IT & Software",       color: "#059669", bg: "#ecfdf5", areas: "Cybersecurity, cloud services, automation" },
  { key: "gaming",        emoji: "🎮", label: "Entertainment",       color: "#dc2626", bg: "#fef2f2", areas: "Games, streaming, content recommendation" },
  { key: "legal",         emoji: "⚖️", label: "Legal Services",      color: "#92400e", bg: "#fffbeb", areas: "Legal research, contracts, case management" },
  { key: "insurance",     emoji: "🛡️", label: "Insurance",           color: "#0f766e", bg: "#f0fdfa", areas: "Claims, risk assessment, customer service" },
  { key: "government",    emoji: "🏛️", label: "Government",          color: "#374151", bg: "#f9fafb", areas: "Citizen services, document processing" },
  { key: "research",      emoji: "🔬", label: "Research & Science",  color: "#9333ea", bg: "#faf5ff", areas: "Data analysis, simulations, labs" },
  { key: "automotive",    emoji: "🚗", label: "Automotive",          color: "#be123c", bg: "#fff1f2", areas: "Manufacturing, autonomous systems, maintenance" },
  { key: "defense",       emoji: "🛩️", label: "Defense & Aerospace", color: "#1e3a5f", bg: "#eff6ff", areas: "Aircraft, satellites, mission systems" },
];

const INDUSTRY_DOCS_SEED = {
  health:  [
    { id: "hc-1", name: "PubMedQA Dataset v2.pdf",        size: "14.2 MB", date: "2 hrs ago",   type: "pdf", sharedBy: "Dr. Priya S.",  note: "Useful for diagnostics Q&A benchmarking." },
    { id: "hc-2", name: "WHO Diabetes Fact Sheet 2023.pdf", size: "3.8 MB", date: "1 day ago",  type: "pdf", sharedBy: "Dr. Meghna R.", note: "Latest WHO diabetes global report." },
    { id: "hc-3", name: "ADA Standards of Care 2024.pdf", size: "22.1 MB", date: "3 days ago", type: "pdf", sharedBy: "Dr. Meghna R.", note: "Clinical care standards from ADA." },
  ],
  finance: [
    { id: "fi-1", name: "FinQA Benchmark Dataset.pdf",              size: "9.5 MB",  date: "5 hrs ago",  type: "pdf", sharedBy: "Wei L.",   note: "Financial reasoning evaluation corpus." },
    { id: "fi-2", name: "Federal Reserve Working Paper 2022.pdf",    size: "2.1 MB",  date: "2 days ago", type: "pdf", sharedBy: "Arjun M.", note: "Key macroeconomic risk insights." },
    { id: "fi-3", name: "IMF Global Financial Stability Report.pdf", size: "18.7 MB", date: "1 week ago", type: "pdf", sharedBy: "Arjun M.", note: "Key Q3 risk review document." },
  ],
  traffic: [
    { id: "tr-1", name: "Highway Code 2024.pdf",               size: "6.3 MB", date: "1 day ago",  type: "pdf", sharedBy: "Samira K.", note: "Updated 2024 driving licence rules." },
    { id: "tr-2", name: "Road Traffic Act 1988 (UK).pdf",       size: "1.9 MB", date: "4 days ago", type: "pdf", sharedBy: "Samira K.", note: "UK traffic legislation reference." },
    { id: "tr-3", name: "DfT Driving Standards Guide 2023.pdf", size: "4.4 MB", date: "1 week ago", type: "pdf", sharedBy: "Samira K.", note: "DVSA standards guide 2023." },
  ],
};

const SHARE_SOCIALS = [
  { id: "whatsapp", label: "WhatsApp",   color: "#25D366", icon: "W",
    url: (t) => `https://wa.me/?text=${encodeURIComponent(t)}` },
  { id: "twitter",  label: "X / Twitter", color: "#000",   icon: "𝕏",
    url: (t) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(t.slice(0, 280))}` },
  { id: "linkedin", label: "LinkedIn",   color: "#0A66C2", icon: "in",
    url: (t) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(t.slice(0, 300))}` },
  { id: "facebook", label: "Facebook",   color: "#1877F2", icon: "f",
    url: (t) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(t.slice(0, 300))}` },
  { id: "telegram", label: "Telegram",   color: "#26A5E4", icon: "✈",
    url: (t) => `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(t.slice(0, 400))}` },
  { id: "email",    label: "Email",      color: "#6b7280", icon: "✉",
    url: (t) => `mailto:?subject=NexusRAG%20Document&body=${encodeURIComponent(t)}` },
];

function DocShareModal({ doc, industry, onClose }) {
  const [copied, setCopied] = useState(false);
  const text = `📄 ${doc.name}\n🏭 Industry: ${industry.label}\nShared via NexusRAG\n\n${window.location.origin}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(() => { });
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="jd-overlay" onClick={onClose}>
      <div className="jd-modal" onClick={(e) => e.stopPropagation()}>
        <div className="jd-modal-hd">
          <div className="jd-modal-title">Share Document</div>
          <button className="jd-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="jd-modal-preview">
          <div className="jd-modal-ind" style={{ background: industry.bg, color: industry.color }}>
            {industry.emoji} {industry.label}
          </div>
          <div className="jd-modal-docname">📄 {doc.name}</div>
          {doc.note && <div className="jd-modal-note">{doc.note}</div>}
        </div>
        <div className="jd-modal-grid">
          {SHARE_SOCIALS.map((s) => (
            <a key={s.id} href={s.url(text)} target="_blank" rel="noopener noreferrer"
              className="jd-social-btn" style={{ "--sc": s.color }}>
              <span className="jd-social-icon">{s.icon}</span>
              <span className="jd-social-label">{s.label}</span>
            </a>
          ))}
        </div>
        <div className="jd-modal-divider">or</div>
        <button className={`jd-copy-btn${copied ? " copied" : ""}`} onClick={handleCopy}>
          {copied ? "✓ Copied!" : "🔗 Copy link"}
        </button>
      </div>
    </div>
  );
}

/* ─── Icon set ────────────────────────────────────────────── */
function Icon({ name, size = 18 }) {
  const c = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "home": return <svg {...c}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" /></svg>;
    case "calendar": return <svg {...c}><rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M8 3v4M16 3v4M3.5 10h17" /></svg>;
    case "chat": return <svg {...c}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z" /></svg>;
    case "share": return <svg {...c}><circle cx="18" cy="5" r="2.3" /><circle cx="6" cy="12" r="2.3" /><circle cx="18" cy="19" r="2.3" /><path d="M8.1 10.8 15.9 6.2M8.1 13.2l7.8 4.6" /></svg>;
    case "note": return <svg {...c}><path d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" /><path d="M9 10h6M9 13.5h6M9 17h3.5" /></svg>;
    case "grid": return <svg {...c}><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>;
    case "settings": return <svg {...c}><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9" /></svg>;
    case "help": return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.3a2.5 2.5 0 1 1 3.4 2.3c-.8.4-1.1.9-1.1 1.7v.4" /><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" /></svg>;
    case "sidebar": return <svg {...c}><rect x="3.5" y="4" width="17" height="16" rx="2.5" /><path d="M9.5 4v16" /></svg>;
    case "plus": return <svg {...c}><path d="M12 5v14M5 12h14" /></svg>;
    case "shareTop": return <svg {...c}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" /></svg>;
    case "trash": return <svg {...c}><path d="M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7" /></svg>;
    case "close": return <svg {...c}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case "clip": return <svg {...c}><path d="M8 12.5 15 5.5a3 3 0 1 1 4.2 4.2l-8.5 8.5a5 5 0 1 1-7.1-7.1L12 2.5" /></svg>;
    case "up": return <svg {...c}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
    case "search": return <svg {...c}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4.35-4.35" /></svg>;
    case "chevron": return <svg {...c}><path d="M9 6l6 6-6 6" /></svg>;
    case "refresh": return <svg {...c}><path d="M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6" /><path d="M18.5 3.5v4h-4M5.5 20.5v-4h4" /></svg>;
    case "check": return <svg {...c}><path d="M5 12.5l4.5 4.5L19 7" /></svg>;
    case "industry": return <svg {...c}><path d="M3.5 20.5V10l6-4v14.5M9.5 20.5V6l5-3v17.5M14.5 20.5V9l6 3v8.5" /><path d="M3.5 20.5h17" /></svg>;
    case "file": return <svg {...c}><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z" /><path d="M14 3.5V8h4.5" /></svg>;
    case "upload": return <svg {...c}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" /></svg>;
    case "bell": return <svg {...c}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
    case "logout": return <svg {...c}><path d="M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5" /><path d="M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9" /></svg>;
    default: return null;
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/* ─── Component ───────────────────────────────────────────── */
export default function UserDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [question, setQuestion]               = useState("");
  const [showBanner, setShowBanner]           = useState(true);
  const [showTopBar, setShowTopBar]           = useState(true);
  const [attachments, setAttachments]         = useState([]);
  const [expandedMenu, setExpandedMenu]       = useState(null);
  const [contentTags, setContentTags]         = useState([]);
  const [showContentMenu, setShowContentMenu] = useState(false);
  const [historySearch, setHistorySearch]     = useState("");
  const [messages, setMessages]               = useState([]);
  const [isReplying, setIsReplying]           = useState(false);
  const [rightTab, setRightTab]               = useState("history");
  const [docShareTarget, setDocShareTarget]   = useState(null);
  const [industryDocs, setIndustryDocs] = useState(() =>
    Object.fromEntries(INDUSTRIES.map((ind) => [ind.key, [...(INDUSTRY_DOCS_SEED[ind.key] || [])]]))
  );
  const [activeIndustryKey, setActiveIndustryKey] = useState(null);
  const fileInputRef = useRef(null);
  const docFileRef   = useRef(null);
  const threadEndRef = useRef(null);

  const activeIndustry = INDUSTRIES.find((i) => i.key === activeIndustryKey) || null;
  const activeDocs     = activeIndustryKey ? (industryDocs[activeIndustryKey] || []) : [];

  const handleDocUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length || !activeIndustryKey) return;
    const newDocs = files.map((f) => ({
      id: `doc-${Date.now()}-${Math.random()}`,
      name: f.name,
      size: f.size < 1024*1024 ? `${Math.round(f.size/1024)} KB` : `${(f.size/(1024*1024)).toFixed(1)} MB`,
      date: "Just now", type: f.name.split(".").pop().toLowerCase(),
      sharedBy: "Me", note: "",
    }));
    setIndustryDocs((prev) => ({ ...prev, [activeIndustryKey]: [...newDocs, ...(prev[activeIndustryKey] || [])] }));
    e.target.value = "";
  };
  const handleDocDelete = (indKey, docId) =>
    setIndustryDocs((prev) => ({ ...prev, [indKey]: (prev[indKey] || []).filter((d) => d.id !== docId) }));

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isReplying]);

  /* ── file handling ── */
  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setAttachments((prev) => [
      ...prev,
      ...files.map((f) => ({ id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`, file: f })),
    ]);
    e.target.value = "";
  };
  const removeAttachment = (id) => setAttachments((prev) => prev.filter((a) => a.id !== id));

  /* ── content tag ── */
  const toggleContentTag = (tag) => {
    setContentTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
    setShowContentMenu(false);
  };
  const removeContentTag = (tag) => setContentTags((prev) => prev.filter((t) => t !== tag));

  /* ── send message ── */
  const handleSend = () => {
    const trimmed = question.trim();
    if (!trimmed && !attachments.length && !contentTags.length) return;

    const userMsg = {
      id: `msg-${Date.now()}-${Math.random()}`,
      role: "user",
      text: trimmed,
      attachments: attachments.map((a) => ({ id: a.id, name: a.file.name, size: a.file.size })),
      tags: contentTags,
    };
    setMessages((prev) => [...prev, userMsg]);
    setQuestion("");
    setAttachments([]);
    setContentTags([]);

    setIsReplying(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}-${Math.random()}`,
          role: "assistant",
          text: "Thanks for your question! This is a placeholder reply — wire this up to the NexusRAG /rag/query API endpoint to get real grounded answers with cited sources.",
        },
      ]);
      setIsReplying(false);
    }, 900);
  };

  const handleNewChat = () => {
    setMessages([]);
    setQuestion("");
    setAttachments([]);
    setContentTags([]);
    setIsReplying(false);
    setActiveIndustryKey(null);
  };

  const isChatView = messages.length > 0;

  const trimmedSearch = historySearch.trim().toLowerCase();
  const filteredHistory = HISTORY
    .map((g) => ({
      ...g,
      items: trimmedSearch
        ? g.items.filter((i) => i.title.toLowerCase().includes(trimmedSearch))
        : g.items,
    }))
    .filter((g) => g.items.length > 0);
  const hasNoResults = trimmedSearch.length > 0 && filteredHistory.length === 0;

  /* ── sidebar menu config ── */
  const MENU_ITEMS = [
    { key: "home",       label: "Home",          icon: "home",     href: "/" },
    { key: "meetings",   label: "My Meetings",   icon: "calendar", href: "/meetings" },
    { key: "chat",       label: "NexusRAG Chat", icon: "chat",     badge: "NEW", active: !activeIndustryKey, href: "/chat" },
    {
      key: "industries",
      label: "Industries",
      icon: "industry",
      children: INDUSTRIES.map((ind) => ({
        key: ind.key, label: ind.label, emoji: ind.emoji,
        action: () => setActiveIndustryKey(ind.key),
      })),
    },
    { key: "shared",        label: "Shared with Me",  icon: "share",
      action: () => { setActiveIndustryKey(null); setRightTab("shared"); } },
    { key: "notes",         label: "Notes",            icon: "note",  href: "/notes" },
    { key: "notifications", label: "Notifications",    icon: "bell",  href: "/notifications" },
  ];

  return (
    <div className="jolly-dash">
      <style>{`
/* ===== Jolly / NexusRAG User Dashboard ===== */
.jolly-dash {
  --ink: #0f1115;
  --paper: #ececef;
  --panel: #ffffff;
  --line: #e7e7ea;
  --line-soft: #f0f0f2;
  --violet: #7c5cff;
  --violet-soft: #efeaff;
  --text: #14151a;
  --text-soft: #6b6d76;
  --text-faint: #9a9ca4;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  min-height: 100vh;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}
.jolly-dash *, .jolly-dash *::before, .jolly-dash *::after { box-sizing: border-box; }
.jolly-dash button { font-family: inherit; }

/* ── top bar ── */
.jolly-dash .top-bar {
  background: #0b0c10; color: #fff;
  font-size: 13px;
  display: flex; align-items: center; justify-content: center;
  gap: 10px; padding: 9px 16px; position: relative;
}
.jolly-dash .top-bar .badges { display: inline-flex; gap: 4px; align-items: center; }
.jolly-dash .top-bar .badges span {
  width: 16px; height: 16px; border-radius: 4px;
  background: rgba(255,255,255,0.15); display: inline-block;
}
.jolly-dash .top-bar a { color: #fff; text-decoration: underline; font-weight: 600; margin-left: 4px; }
.jolly-dash .top-bar .close {
  position: absolute; right: 18px; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: #fff; opacity: 0.7; cursor: pointer; display: flex;
}
.jolly-dash .top-bar .close:hover { opacity: 1; }

/* ── shell ── */
.jolly-dash .shell { max-width: 1440px; margin: 0 auto; padding: 22px; }
.jolly-dash .app-frame {
  background: var(--panel); border-radius: 22px;
  box-shadow: 0 20px 50px -20px rgba(15,17,21,0.15);
  display: grid; grid-template-columns: 250px 1fr 280px;
  min-height: calc(100vh - 44px); overflow: hidden;
}
@media (max-width: 1100px) {
  .jolly-dash .app-frame { grid-template-columns: 220px 1fr; }
  .jolly-dash .right-panel { display: none; }
}
@media (max-width: 760px) {
  .jolly-dash .app-frame { grid-template-columns: 1fr; }
  .jolly-dash .side-panel { display: none; }
}

/* ── sidebar ── */
.jolly-dash .side-panel {
  border-right: 1px solid var(--line);
  padding: 22px 18px;
  display: flex; flex-direction: column;
}
.jolly-dash .brand-row {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 26px; padding: 0 4px;
}
.jolly-dash .brand-mark {
  width: 34px; height: 34px; border-radius: 10px;
  background: var(--violet); display: flex; align-items: center; justify-content: center;
  color: #fff; flex-shrink: 0;
}
.jolly-dash .brand-name { font-weight: 700; font-size: 18px; letter-spacing: -0.01em; }

.jolly-dash .profile-card {
  display: flex; align-items: center; gap: 10px;
  padding: 10px; border-radius: 14px; border: 1px solid var(--line);
  margin-bottom: 22px; cursor: pointer; transition: background 0.2s;
}
.jolly-dash .profile-card:hover { background: var(--line-soft); }
.jolly-dash .avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--violet), #b8a6ff); flex-shrink: 0;
}
.jolly-dash .profile-meta { flex: 1; min-width: 0; }
.jolly-dash .profile-name { font-size: 13.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .profile-plan { font-size: 12px; color: var(--text-faint); }
.jolly-dash .profile-card .chev { color: var(--text-faint); flex-shrink: 0; }

.jolly-dash .menu-label {
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  color: var(--text-faint); padding: 0 10px; margin-bottom: 8px;
}
.jolly-dash .menu-list { display: flex; flex-direction: column; gap: 2px; }
.jolly-dash .menu-item {
  display: flex; align-items: center; gap: 11px;
  padding: 10px 12px; border-radius: 10px;
  font-size: 14px; color: var(--text-soft);
  cursor: pointer; transition: background 0.2s, color 0.2s;
  border: none; background: none; width: 100%; text-align: left;
}
.jolly-dash .menu-item:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .menu-item.active { background: var(--violet-soft); color: var(--violet); font-weight: 600; }
.jolly-dash .menu-item .badge {
  margin-left: auto; font-size: 9.5px; font-weight: 700;
  background: var(--violet); color: #fff;
  padding: 2px 6px; border-radius: 6px;
}
.jolly-dash .menu-chev {
  margin-left: auto; color: var(--text-faint);
  display: flex; transition: transform 0.2s;
}
.jolly-dash .menu-item.expanded .menu-chev { transform: rotate(90deg); }
.jolly-dash .menu-group { display: flex; flex-direction: column; }
.jolly-dash .submenu { display: flex; flex-direction: column; gap: 1px; padding: 2px 0 4px 36px; max-height: 280px; overflow-y: auto; }
.jolly-dash .submenu-item {
  display: flex; align-items: center; gap: 7px; width: 100%; text-align: left;
  border: none; background: none; font-size: 12.5px; color: var(--text-soft);
  padding: 7px 10px; border-radius: 8px; cursor: pointer;
  transition: background 0.2s, color 0.2s; font-family: inherit;
}
.jolly-dash .submenu-item:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .submenu-item.active { background: var(--violet-soft); color: var(--violet); font-weight: 600; }
.jolly-dash .sub-label { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .sub-count { font-size: 9.5px; font-weight: 700; padding: 1px 6px; border-radius: 100px; background: var(--line); color: var(--text-faint); flex-shrink: 0; transition: background 0.2s; }
.jolly-dash .submenu-item.active .sub-count { background: var(--violet); color: #fff; }

.jolly-dash .side-spacer { flex: 1; }
.jolly-dash .bottom-links { display: flex; flex-direction: column; gap: 2px; }

/* ── main panel ── */
.jolly-dash .main-panel {
  display: flex; flex-direction: column; min-width: 0; min-height: 0;
  max-height: calc(100vh - 44px); overflow-y: auto;
}
.jolly-dash .main-top {
  display: flex; align-items: center; justify-content: space-between; padding: 20px 26px;
}
.jolly-dash .icon-btn {
  width: 36px; height: 36px; border-radius: 10px;
  border: 1px solid var(--line); background: #fff;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-soft); cursor: pointer; transition: background 0.2s;
}
.jolly-dash .icon-btn:hover { background: var(--line-soft); }
.jolly-dash .main-top-left { display: flex; gap: 8px; }
.jolly-dash .main-top-right { display: flex; gap: 10px; }
.jolly-dash .pill-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 14px; border-radius: 100px;
  border: 1px solid var(--line); background: #fff;
  font-size: 13.5px; font-weight: 500; color: var(--text);
  cursor: pointer; transition: background 0.2s;
}
.jolly-dash .pill-btn:hover { background: var(--line-soft); }
.jolly-dash .pill-btn.danger { color: #e0433d; border-color: #f3c9c7; }
.jolly-dash .pill-btn.danger:hover { background: #fdf1f0; }

.jolly-dash .promo-banner {
  margin: 0 26px 18px;
  display: flex; align-items: center; gap: 12px;
  padding: 11px 16px; border-radius: 14px;
  background: var(--violet-soft); border: 1px solid #e2d9ff; font-size: 13.5px;
}
.jolly-dash .promo-tag {
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em;
  background: var(--violet); color: #fff; padding: 3px 8px; border-radius: 6px; flex-shrink: 0;
}
.jolly-dash .promo-text { color: var(--text); flex: 1; }
.jolly-dash .promo-text a { color: var(--violet); font-weight: 600; text-decoration: underline; }
.jolly-dash .promo-close {
  background: none; border: none; color: var(--text-faint); cursor: pointer; display: flex; flex-shrink: 0;
}
.jolly-dash .promo-close:hover { color: var(--text); }

/* ── chat hero ── */
.jolly-dash .chat-hero { text-align: center; padding: 30px 26px 26px; }
.jolly-dash .chat-hero h1 {
  font-size: 34px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px;
  display: flex; align-items: center; justify-content: center; gap: 10px;
}
.jolly-dash .chat-hero h1 .mascot {
  width: 34px; height: 34px; border-radius: 9px; background: var(--violet);
  display: inline-flex; align-items: center; justify-content: center; color: #fff;
}
.jolly-dash .chat-hero h1 .brand-word { color: var(--violet); }
.jolly-dash .chat-hero p { color: var(--text-soft); font-size: 14.5px; line-height: 1.6; max-width: 520px; margin: 0 auto; }

/* ── chat thread ── */
.jolly-dash .chat-thread {
  flex: 1; padding: 10px 26px 20px;
  display: flex; flex-direction: column; gap: 16px;
  max-width: 760px; margin: 0 auto; width: 100%;
}
.jolly-dash .msg-row { display: flex; align-items: flex-end; gap: 10px; }
.jolly-dash .msg-row.user { flex-direction: row-reverse; }
.jolly-dash .msg-avatar {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.jolly-dash .msg-avatar.assistant { background: var(--violet); color: #fff; }
.jolly-dash .msg-avatar.user { background: linear-gradient(135deg, var(--violet), #b8a6ff); }
.jolly-dash .msg-bubble { max-width: 72%; padding: 12px 15px; border-radius: 16px; font-size: 14px; line-height: 1.55; }
.jolly-dash .msg-row.assistant .msg-bubble { background: var(--line-soft); color: var(--text); border-bottom-left-radius: 4px; }
.jolly-dash .msg-row.user .msg-bubble { background: var(--ink); color: #fff; border-bottom-right-radius: 4px; }
.jolly-dash .msg-text { white-space: pre-wrap; word-break: break-word; }
.jolly-dash .msg-meta-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.jolly-dash .msg-tag { font-size: 10.5px; font-weight: 600; padding: 3px 8px; border-radius: 100px; background: rgba(255,255,255,0.18); }
.jolly-dash .msg-row.assistant .msg-tag { background: var(--violet-soft); color: var(--violet); }
.jolly-dash .msg-file { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; padding: 3px 8px; border-radius: 100px; background: rgba(255,255,255,0.18); }
.jolly-dash .msg-bubble.typing { display: flex; align-items: center; gap: 4px; padding: 14px 16px; }
.jolly-dash .typing-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--text-faint); animation: jolly-typing 1.2s infinite ease-in-out; }
.jolly-dash .typing-dot:nth-child(2) { animation-delay: 0.15s; }
.jolly-dash .typing-dot:nth-child(3) { animation-delay: 0.3s; }
@keyframes jolly-typing { 0%,60%,100%{opacity:0.3;transform:translateY(0)} 30%{opacity:1;transform:translateY(-3px)} }

/* ── composer ── */
.jolly-dash .composer-wrap { padding: 0 26px 30px; max-width: 700px; margin: 0 auto; width: 100%; }
.jolly-dash .composer { border: 1px solid var(--line); border-radius: 20px; padding: 16px 18px 14px; background: #fff; }
.jolly-dash .composer textarea {
  width: 100%; border: none; outline: none; resize: none;
  font-size: 14.5px; font-family: "Inter", sans-serif;
  color: var(--text); min-height: 46px; margin-bottom: 10px;
}
.jolly-dash .composer textarea::placeholder { color: var(--text-faint); }
.jolly-dash .composer-bottom { display: flex; align-items: center; justify-content: space-between; }
.jolly-dash .composer-bottom-left { display: flex; align-items: center; gap: 8px; }
.jolly-dash .attach-btn {
  width: 32px; height: 32px; border-radius: 9px; border: 1px solid var(--line);
  background: #fff; color: var(--text-soft);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s; flex-shrink: 0;
}
.jolly-dash .attach-btn:hover { background: var(--violet-soft); border-color: var(--violet); color: var(--violet); }
.jolly-dash .model-select {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; color: var(--text-soft);
  border: 1px solid var(--line); padding: 6px 10px; border-radius: 10px; cursor: pointer; background: #fff;
}
.jolly-dash .send-btn {
  width: 34px; height: 34px; border-radius: 10px; background: var(--ink);
  color: #fff; border: none; display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background 0.2s;
}
.jolly-dash .send-btn:hover { background: var(--violet); }

/* ── content extras ── */
.jolly-dash .add-content-row { display: flex; align-items: center; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.jolly-dash .add-content-btn {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12.5px; font-weight: 600; color: var(--violet);
  background: var(--violet-soft); border: 1px solid #e2d9ff;
  cursor: pointer; padding: 8px 13px; border-radius: 10px;
  transition: background 0.2s; font-family: inherit;
}
.jolly-dash .add-content-btn:hover { background: #e2d9ff; border-color: var(--violet); }
.jolly-dash .add-content-menu-wrap { position: relative; flex-shrink: 0; }
.jolly-dash .content-dropdown {
  position: absolute; top: calc(100% + 6px); left: 0;
  background: #fff; border: 1px solid var(--line); border-radius: 12px;
  box-shadow: 0 12px 30px -10px rgba(15,17,21,0.18);
  padding: 6px; min-width: 160px; z-index: 20;
  display: flex; flex-direction: column; gap: 1px;
}
.jolly-dash .content-dropdown-item {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 9px 10px; border-radius: 8px; border: none; background: none;
  font-size: 13.5px; color: var(--text); cursor: pointer; text-align: left;
  font-family: inherit; transition: background 0.2s;
}
.jolly-dash .content-dropdown-item:hover { background: var(--line-soft); }
.jolly-dash .content-dropdown-item.selected { color: var(--violet); font-weight: 600; }
.jolly-dash .industries-dropdown { min-width: 260px; max-height: 320px; overflow-y: auto; }
.jolly-dash .industry-emoji { flex-shrink: 0; font-size: 14px; line-height: 1; }
.jolly-dash .content-dropdown-label { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .hidden-file-input { display: none; }
.jolly-dash .attachment-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.jolly-dash .attachment-chip {
  display: flex; align-items: center; gap: 8px;
  background: var(--line-soft); border: 1px solid var(--line);
  border-radius: 12px; padding: 7px 8px 7px 10px; max-width: 220px;
}
.jolly-dash .content-tag-chip {
  display: flex; align-items: center; gap: 8px;
  background: var(--violet-soft); border: 1px solid #e2d9ff;
  border-radius: 100px; padding: 6px 6px 6px 12px;
}
.jolly-dash .content-tag-name { font-size: 12.5px; font-weight: 600; color: var(--violet); }
.jolly-dash .attachment-icon { color: var(--violet); flex-shrink: 0; display: flex; }
.jolly-dash .attachment-meta { min-width: 0; flex: 1; }
.jolly-dash .attachment-name { font-size: 12px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .attachment-size { font-size: 10.5px; color: var(--text-faint); }
.jolly-dash .attachment-remove {
  background: none; border: none; color: var(--text-faint); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; padding: 2px; border-radius: 50%; transition: background 0.2s, color 0.2s;
}
.jolly-dash .attachment-remove:hover { background: #fff; color: var(--text); }
.jolly-dash .suggestion-chip {
  font-size: 12.5px; color: var(--text-soft); background: var(--line-soft);
  border: 1px solid var(--line); padding: 9px 13px; border-radius: 12px;
  cursor: pointer; transition: background 0.2s, border-color 0.2s;
  text-align: left; line-height: 1.4; max-width: 220px;
}
.jolly-dash .suggestion-chip:hover { background: #fff; border-color: var(--violet); color: var(--text); }

/* ── recent cards ── */
.jolly-dash .recent-section { padding: 0 26px 30px; }
.jolly-dash .recent-label { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 12px; }
.jolly-dash .recent-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
@media (max-width: 900px) { .jolly-dash .recent-grid { grid-template-columns: 1fr; } }
.jolly-dash .recent-card {
  border: 1px solid var(--line); border-radius: 14px; padding: 16px;
  cursor: pointer; transition: border-color 0.2s, background 0.2s;
  display: flex; flex-direction: column; gap: 26px;
  background: #fff; text-align: left; font-family: inherit; width: 100%;
}
.jolly-dash .recent-card:hover { border-color: var(--violet); background: var(--violet-soft); }
.jolly-dash .recent-card .r-icon {
  width: 28px; height: 28px; border-radius: 8px; background: var(--line-soft);
  display: flex; align-items: center; justify-content: center; color: var(--text-soft);
}
.jolly-dash .recent-card .r-title { font-size: 13.5px; font-weight: 600; line-height: 1.4; }
.jolly-dash .recent-card .r-time { font-size: 12px; color: var(--text-faint); }

/* ── back btn ── */
.jolly-dash .back-btn { display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--paper); font-size: 13px; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: background 0.2s; font-family: inherit; }
.jolly-dash .back-btn:hover { background: var(--line-soft); color: var(--text); }

/* ── industry doc panel ── */
.jolly-dash .ind-panel { padding: 0 26px 30px; }
.jolly-dash .ind-hd { display: flex; align-items: center; gap: 16px; padding: 20px 0 18px; border-bottom: 1px solid var(--line); margin-bottom: 22px; }
.jolly-dash .ind-hd-emoji { width: 56px; height: 56px; border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; }
.jolly-dash .ind-hd-info { flex: 1; min-width: 0; }
.jolly-dash .ind-hd-title { font-size: 21px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 4px; }
.jolly-dash .ind-hd-desc { font-size: 13px; color: var(--text-soft); }
.jolly-dash .ind-stats { display: flex; gap: 20px; flex-shrink: 0; text-align: center; }
.jolly-dash .ind-stat-val { font-size: 22px; font-weight: 700; color: var(--violet); }
.jolly-dash .ind-stat-lbl { font-size: 11px; color: var(--text-faint); }
.jolly-dash .ind-upload-zone { border: 2px dashed var(--line); border-radius: 18px; padding: 32px 24px; text-align: center; margin-bottom: 24px; cursor: pointer; transition: border-color 0.2s, background 0.2s; }
.jolly-dash .ind-upload-zone:hover { border-color: var(--violet); background: var(--violet-soft); }
.jolly-dash .ind-upload-zone .uicon { font-size: 36px; margin-bottom: 10px; }
.jolly-dash .ind-upload-zone .utxt { font-size: 14.5px; font-weight: 600; margin-bottom: 4px; }
.jolly-dash .ind-upload-zone .uhint { font-size: 12px; color: var(--text-faint); }
.jolly-dash .ind-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.jolly-dash .ind-toolbar-title { font-size: 14px; font-weight: 600; }
.jolly-dash .ind-add-btn { display: inline-flex; align-items: center; gap: 7px; padding: 8px 16px; border-radius: 10px; border: none; background: var(--violet); color: #fff; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 0.2s; font-family: inherit; }
.jolly-dash .ind-add-btn:hover { background: #6b4ef5; }
.jolly-dash .ind-doc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 14px; }
.jolly-dash .ind-doc-card { border: 1px solid var(--line); border-radius: 16px; padding: 16px; background: #fff; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s, box-shadow 0.2s; }
.jolly-dash .ind-doc-card:hover { border-color: var(--violet); box-shadow: 0 4px 20px -8px rgba(124,92,255,0.2); }
.jolly-dash .ind-card-top { display: flex; align-items: flex-start; gap: 12px; }
.jolly-dash .ind-type-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.jolly-dash .ind-type-icon.pdf { background: #fee2e2; } .jolly-dash .ind-type-icon.csv { background: #dcfce7; } .jolly-dash .ind-type-icon.xlsx { background: #dbeafe; } .jolly-dash .ind-type-icon.other { background: var(--line-soft); }
.jolly-dash .ind-card-meta { flex: 1; min-width: 0; }
.jolly-dash .ind-card-name { font-size: 13px; font-weight: 600; line-height: 1.4; word-break: break-word; color: var(--text); }
.jolly-dash .ind-card-info { font-size: 11px; color: var(--text-faint); margin-top: 2px; }
.jolly-dash .ind-card-note { font-size: 12px; color: var(--text-soft); background: var(--line-soft); border-radius: 8px; padding: 7px 10px; line-height: 1.4; }
.jolly-dash .ind-card-actions { display: flex; gap: 6px; flex-wrap: wrap; }
.jolly-dash .idc-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 11px; border-radius: 8px; border: 1px solid var(--line); background: var(--paper); font-size: 11.5px; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: all 0.2s; font-family: inherit; }
.jolly-dash .idc-btn:hover { background: #fff; color: var(--text); border-color: var(--violet); }
.jolly-dash .idc-btn.share { color: var(--violet); border-color: var(--violet); background: var(--violet-soft); } .jolly-dash .idc-btn.share:hover { background: var(--violet); color: #fff; }
.jolly-dash .idc-btn.del:hover { color: #dc2626; border-color: #fecaca; background: #fef2f2; }
.jolly-dash .ind-empty { text-align: center; padding: 60px 24px; border: 2px dashed var(--line); border-radius: 18px; }
.jolly-dash .ind-empty-icon { font-size: 42px; margin-bottom: 12px; } .jolly-dash .ind-empty-title { font-size: 16px; font-weight: 700; margin-bottom: 6px; } .jolly-dash .ind-empty-desc { font-size: 13.5px; color: var(--text-soft); margin-bottom: 20px; }

/* ── right panel ── */
.jolly-dash .right-panel { border-left: 1px solid var(--line); padding: 20px 18px; overflow-y: auto; }
.jolly-dash .rp-tabs { display: flex; margin-bottom: 18px; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
.jolly-dash .rp-tab { flex: 1; padding: 9px 0; border: none; background: none; font-size: 12.5px; font-weight: 600; color: var(--text-soft); cursor: pointer; transition: background 0.2s, color 0.2s; font-family: inherit; }
.jolly-dash .rp-tab:first-child { border-right: 1px solid var(--line); }
.jolly-dash .rp-tab.active { background: var(--violet); color: #fff; }
.jolly-dash .rp-tab:not(.active):hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .search-box { display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 12px; padding: 9px 12px; margin-bottom: 22px; }
.jolly-dash .search-box input { border: none; outline: none; font-size: 13.5px; flex: 1; color: var(--text); background: none; }
.jolly-dash .search-box input::placeholder { color: var(--text-faint); }
.jolly-dash .search-box .kbd { font-size: 11px; color: var(--text-faint); border: 1px solid var(--line); border-radius: 5px; padding: 2px 5px; flex-shrink: 0; }
.jolly-dash .search-clear { background: none; border: none; color: var(--text-faint); cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 2px; border-radius: 50%; transition: background 0.2s, color 0.2s; }
.jolly-dash .search-clear:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .no-results { font-size: 12.5px; color: var(--text-faint); padding: 8px 4px 16px; line-height: 1.5; }
.jolly-dash .history-group { margin-bottom: 20px; }
.jolly-dash .history-group-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 8px; padding: 0 4px; }
.jolly-dash .history-item { display: flex; align-items: flex-start; gap: 10px; padding: 9px 6px; border-radius: 10px; cursor: pointer; transition: background 0.2s; border: none; background: none; width: 100%; text-align: left; font-family: inherit; }
.jolly-dash .history-item:hover { background: var(--line-soft); }
.jolly-dash .history-item .h-icon { color: var(--text-faint); margin-top: 2px; flex-shrink: 0; }
.jolly-dash .history-item .h-meta { flex: 1; min-width: 0; }
.jolly-dash .history-item .h-title { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .history-item .h-time { font-size: 11.5px; color: var(--text-faint); margin-top: 1px; }
.jolly-dash .shared-ind-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.jolly-dash .shared-count-badge { font-size: 10px; font-weight: 700; padding: 1px 7px; border-radius: 100px; }
.jolly-dash .shared-card { border: 1px solid var(--line); border-radius: 14px; padding: 13px; background: #fff; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.2s, box-shadow 0.2s; margin-bottom: 8px; }
.jolly-dash .shared-card:hover { border-color: var(--violet); box-shadow: 0 4px 16px -8px rgba(124,92,255,0.2); }
.jolly-dash .shared-card-top { display: flex; align-items: flex-start; gap: 10px; }
.jolly-dash .shared-doc-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; background: #fee2e2; }
.jolly-dash .shared-doc-meta { flex: 1; min-width: 0; }
.jolly-dash .shared-doc-name { font-size: 12.5px; font-weight: 600; line-height: 1.4; word-break: break-word; color: var(--text); }
.jolly-dash .shared-doc-by { font-size: 11px; color: var(--text-faint); margin-top: 2px; }
.jolly-dash .shared-doc-note { font-size: 11.5px; color: var(--text-soft); padding: 6px 9px; border-radius: 8px; background: var(--line-soft); line-height: 1.45; }
.jolly-dash .shared-actions { display: flex; gap: 6px; }
.jolly-dash .shared-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--paper); font-size: 11.5px; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: all 0.2s; font-family: inherit; }
.jolly-dash .shared-btn:hover { background: #fff; color: var(--text); border-color: var(--violet); }
.jolly-dash .shared-btn.share { color: var(--violet); border-color: var(--violet); background: var(--violet-soft); } .jolly-dash .shared-btn.share:hover { background: var(--violet); color: #fff; }
.jolly-dash .jd-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(15,17,21,0.5); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; padding: 24px; }
.jolly-dash .jd-modal { background: var(--panel); border-radius: 22px; box-shadow: 0 30px 60px -20px rgba(15,17,21,0.35); padding: 26px; width: 100%; max-width: 400px; }
.jolly-dash .jd-modal-hd { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.jolly-dash .jd-modal-title { font-size: 16px; font-weight: 700; }
.jolly-dash .jd-modal-close { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--line); background: var(--paper); color: var(--text-soft); font-size: 13px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
.jolly-dash .jd-modal-close:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .jd-modal-preview { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; margin-bottom: 18px; display: flex; flex-direction: column; gap: 7px; }
.jolly-dash .jd-modal-ind { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; width: fit-content; }
.jolly-dash .jd-modal-docname { font-size: 13px; font-weight: 600; color: var(--text); }
.jolly-dash .jd-modal-note { font-size: 12px; color: var(--text-soft); line-height: 1.4; }
.jolly-dash .jd-modal-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 16px; }
.jolly-dash .jd-social-btn { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 12px 6px; border-radius: 12px; border: 1.5px solid var(--line); background: var(--paper); text-decoration: none; color: var(--text); transition: all 0.2s; cursor: pointer; }
.jolly-dash .jd-social-btn:hover { background: var(--sc, var(--violet)); color: #fff; border-color: transparent; box-shadow: 0 4px 14px -4px var(--sc,rgba(124,92,255,0.5)); }
.jolly-dash .jd-social-icon { font-size: 18px; font-weight: 700; line-height: 1; } .jolly-dash .jd-social-label { font-size: 10px; font-weight: 600; white-space: nowrap; }
.jolly-dash .jd-modal-divider { text-align: center; color: var(--text-faint); font-size: 11.5px; position: relative; margin-bottom: 14px; }
.jolly-dash .jd-modal-divider::before,.jolly-dash .jd-modal-divider::after { content:""; position: absolute; top: 50%; width: calc(50% - 18px); height: 1px; background: var(--line); }
.jolly-dash .jd-modal-divider::before { left: 0; } .jolly-dash .jd-modal-divider::after { right: 0; }
.jolly-dash .jd-copy-btn { width: 100%; padding: 11px; border-radius: 10px; border: 1.5px solid var(--line); background: var(--paper); font-size: 13.5px; font-weight: 600; color: var(--text); cursor: pointer; transition: all 0.2s; font-family: inherit; }
.jolly-dash .jd-copy-btn:hover { background: var(--line-soft); } .jolly-dash .jd-copy-btn.copied { background: #dcfce7; border-color: #86efac; color: #15803d; }
`}</style>

      {/* ── TOP ANNOUNCEMENT BAR ── */}
      {showTopBar && (
        <div className="top-bar">
          <span className="badges"><span /><span /><span /></span>
          Get NexusRAG for Chrome <Link to="/chat">Open Chat →</Link>
          <button className="close" onClick={() => setShowTopBar(false)} aria-label="Dismiss">
            <Icon name="close" size={15} />
          </button>
        </div>
      )}

      <div className="shell">
        <div className="app-frame">

          {/* ── LEFT SIDEBAR ── */}
          <div className="side-panel">
            <div className="brand-row">
              <div className="brand-mark"><Icon name="chat" size={17} /></div>
              <div className="brand-name">NexusRAG</div>
            </div>

            {/* Profile */}
            <div className="profile-card" onClick={() => navigate("/dashboard")}>
              <div className="avatar" />
              <div className="profile-meta">
                <div className="profile-name">Matthew Johnson</div>
                <div className="profile-plan">Free account</div>
              </div>
              <span className="chev"><Icon name="chevron" size={16} /></span>
            </div>

            {/* Navigation */}
            <div className="menu-label">MENU</div>
            <div className="menu-list">
              {MENU_ITEMS.map((item) =>
                item.children ? (
                  <div className="menu-group" key={item.key}>
                    <button
                      className={`menu-item${expandedMenu === item.key ? " expanded" : ""}`}
                      onClick={() => setExpandedMenu((c) => c === item.key ? null : item.key)}
                    >
                      <Icon name={item.icon} size={17} />
                      {item.label}
                      <span className="menu-chev"><Icon name="chevron" size={14} /></span>
                    </button>
                    {expandedMenu === item.key && (
                      <div className="submenu">
                        {item.children.map((child) => (
                          <button
                            key={child.key}
                            className={`submenu-item${activeIndustryKey === child.key ? " active" : ""}`}
                            onClick={child.action || (() => navigate(child.href))}
                          >
                            <span style={{ fontSize: 13, flexShrink: 0 }}>{child.emoji}</span>
                            <span className="sub-label">{child.label}</span>
                            <span className="sub-count">{(industryDocs[child.key] || []).length}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.key}
                    className={`menu-item${item.active ? " active" : ""}`}
                    onClick={item.action || (() => navigate(item.href))}
                  >
                    <Icon name={item.icon} size={17} />
                    {item.label}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </button>
                )
              )}
            </div>

            <div className="side-spacer" />

            {/* Bottom links */}
            <div className="bottom-links">
              <button className="menu-item" onClick={() => navigate("/settings")}>
                <Icon name="settings" size={17} /> Settings
              </button>
              <button className="menu-item" onClick={() => navigate("/help")}>
                <Icon name="help" size={17} /> Help &amp; Support
              </button>
              <button className="menu-item" onClick={() => { logout(); navigate("/login"); }}>
                <Icon name="logout" size={17} /> Sign Out
              </button>
            </div>
          </div>

          {/* ── MAIN PANEL ── */}
          <div className="main-panel">
            {/* Topbar */}
            <div className="main-top">
              <div className="main-top-left">
                <button className="icon-btn" aria-label="Toggle sidebar">
                  <Icon name="sidebar" size={17} />
                </button>
                {activeIndustryKey ? (
                  <button className="back-btn" onClick={() => setActiveIndustryKey(null)}>← Back to Chat</button>
                ) : (
                  <button className="icon-btn" aria-label="New chat" onClick={handleNewChat}>
                    <Icon name="plus" size={17} />
                  </button>
                )}
              </div>
              <div className="main-top-right">
                {activeIndustryKey ? (
                  <button className="pill-btn" onClick={() => navigate("/chat")}>
                    <Icon name="chat" size={15} /> Open in Chat
                  </button>
                ) : (
                  <>
                    <button className="pill-btn" onClick={() => navigate("/chat")}>
                      <Icon name="shareTop" size={15} /> Open Full Chat
                    </button>
                    <button className="pill-btn danger" onClick={handleNewChat}>
                      <Icon name="trash" size={15} /> Clear Chat
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Promo banner – only in chat mode */}
            {showBanner && !activeIndustryKey && (
              <div className="promo-banner">
                <span className="promo-tag">LIMITED</span>
                <span className="promo-text">
                  Get 1 month FREE by paying annually{" "}
                  <Link to="/chat">Start Querying →</Link>
                </span>
                <button className="promo-close" onClick={() => setShowBanner(false)}>
                  <Icon name="close" size={15} />
                </button>
              </div>
            )}

            {/* ── Industry Doc Panel OR Chat ── */}
            {activeIndustryKey && activeIndustry ? (
              <div className="ind-panel">
                <div className="ind-hd">
                  <div className="ind-hd-emoji" style={{ background: activeIndustry.bg }}>{activeIndustry.emoji}</div>
                  <div className="ind-hd-info">
                    <div className="ind-hd-title">{activeIndustry.label}</div>
                    <div className="ind-hd-desc">{activeIndustry.areas}</div>
                  </div>
                  <div className="ind-stats">
                    <div><div className="ind-stat-val">{activeDocs.length}</div><div className="ind-stat-lbl">Documents</div></div>
                  </div>
                </div>
                <div className="ind-upload-zone" onClick={() => docFileRef.current?.click()}>
                  <div className="uicon">📤</div>
                  <div className="utxt">Drop files here or click to upload</div>
                  <div className="uhint">PDF, CSV, XLSX, DOCX, TXT, MD — all accepted</div>
                </div>
                <input ref={docFileRef} type="file" multiple style={{ display: "none" }}
                  accept=".pdf,.csv,.xlsx,.xls,.docx,.txt,.md" onChange={handleDocUpload} />
                <div className="ind-toolbar">
                  <div className="ind-toolbar-title">📄 {activeDocs.length} document{activeDocs.length !== 1 ? "s" : ""} — {activeIndustry.label}</div>
                  <button className="ind-add-btn" onClick={() => docFileRef.current?.click()}>
                    <Icon name="upload" size={14} /> Add Document
                  </button>
                </div>
                {activeDocs.length === 0 ? (
                  <div className="ind-empty">
                    <div className="ind-empty-icon">📭</div>
                    <div className="ind-empty-title">No documents yet</div>
                    <div className="ind-empty-desc">Upload your first document for the {activeIndustry.label} knowledge base.</div>
                    <button className="ind-add-btn" onClick={() => docFileRef.current?.click()}>
                      <Icon name="upload" size={14} /> Upload First Document
                    </button>
                  </div>
                ) : (
                  <div className="ind-doc-grid">
                    {activeDocs.map((doc) => {
                      const ext = doc.type || "other";
                      const iconMap = { pdf: "📄", csv: "📊", xlsx: "📊", xls: "📊", docx: "📝", txt: "📝", md: "📝" };
                      const iconCls = ["pdf","csv","xlsx"].includes(ext) ? ext : "other";
                      return (
                        <div key={doc.id} className="ind-doc-card">
                          <div className="ind-card-top">
                            <div className={`ind-type-icon ${iconCls}`}>{iconMap[ext] || "📄"}</div>
                            <div className="ind-card-meta">
                              <div className="ind-card-name">{doc.name}</div>
                              <div className="ind-card-info">{doc.size} · {doc.date}{doc.sharedBy && doc.sharedBy !== "Me" && ` · by ${doc.sharedBy}`}</div>
                            </div>
                          </div>
                          {doc.note && <div className="ind-card-note">{doc.note}</div>}
                          <div className="ind-card-actions">
                            <button className="idc-btn share" onClick={() => setDocShareTarget({ doc, industry: activeIndustry })}>↑ Share</button>
                            <button className="idc-btn" onClick={() => navigate("/chat")}>💬 Query</button>
                            <button className="idc-btn del" onClick={() => handleDocDelete(activeIndustryKey, doc.id)}><Icon name="trash" size={12} /></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
            <>{/* Chat view vs hero */}
            {isChatView ? (
              <div className="chat-thread">
                {messages.map((m) => (
                  <div className={`msg-row ${m.role}`} key={m.id}>
                    {m.role === "assistant" && (
                      <div className="msg-avatar assistant"><Icon name="chat" size={14} /></div>
                    )}
                    <div className="msg-bubble">
                      {(m.tags?.length > 0 || m.attachments?.length > 0) && (
                        <div className="msg-meta-row">
                          {m.tags?.map((t) => <span className="msg-tag" key={t}>{t}</span>)}
                          {m.attachments?.map((a) => (
                            <span className="msg-file" key={a.id}><Icon name="file" size={12} /> {a.name}</span>
                          ))}
                        </div>
                      )}
                      {m.text && <div className="msg-text">{m.text}</div>}
                    </div>
                    {m.role === "user" && <div className="msg-avatar user" />}
                  </div>
                ))}
                {isReplying && (
                  <div className="msg-row assistant">
                    <div className="msg-avatar assistant"><Icon name="chat" size={14} /></div>
                    <div className="msg-bubble typing">
                      <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                    </div>
                  </div>
                )}
                <div ref={threadEndRef} />
              </div>
            ) : (
              <div className="chat-hero">
                <h1>Start talking to <span className="mascot"><Icon name="chat" size={17} /></span>{" "}<span className="brand-word">NexusRAG</span></h1>
                <p>Your multi-industry RAG assistant. Ask questions about Healthcare, Finance, Traffic and more — every answer is grounded in retrieved documents with cited sources.</p>
              </div>
            )}

            {/* Composer */}
            <div className="composer-wrap">
              <div className="composer">
                {(attachments.length > 0 || contentTags.length > 0) && (
                  <div className="attachment-row">
                    {contentTags.map((tag) => (
                      <div className="content-tag-chip" key={tag}>
                        <span className="content-tag-name">{tag}</span>
                        <button
                          type="button"
                          className="attachment-remove"
                          onClick={() => removeContentTag(tag)}
                        >
                          <Icon name="close" size={12} />
                        </button>
                      </div>
                    ))}
                    {attachments.map((a) => (
                      <div className="attachment-chip" key={a.id}>
                        <span className="attachment-icon"><Icon name="file" size={14} /></span>
                        <div className="attachment-meta">
                          <div className="attachment-name">{a.file.name}</div>
                          <div className="attachment-size">{formatFileSize(a.file.size)}</div>
                        </div>
                        <button
                          type="button"
                          className="attachment-remove"
                          onClick={() => removeAttachment(a.id)}
                        >
                          <Icon name="close" size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <textarea
                  placeholder="Write a question…"
                  rows={2}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
                  }}
                />

                <div className="composer-bottom">
                  <div className="composer-bottom-left">
                    <button
                      type="button"
                      className="attach-btn"
                      onClick={() => fileInputRef.current?.click()}
                      aria-label="Attach files"
                    >
                      <Icon name="clip" size={16} />
                    </button>
                    <div className="model-select">
                      NexusRAG <Icon name="chevron" size={13} />
                    </div>
                  </div>
                  <button className="send-btn" onClick={handleSend} aria-label="Send">
                    <Icon name="up" size={16} />
                  </button>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden-file-input"
                onChange={handleFilesSelected}
              />

              <div className="add-content-row">
                <div className="add-content-menu-wrap">
                  <button
                    type="button"
                    className="add-content-btn"
                    onClick={() => setShowContentMenu((s) => !s)}
                  >
                    <Icon name="clip" size={14} /> Add industry context
                    <Icon name="chevron" size={12} />
                  </button>
                  {showContentMenu && (
                    <div className="content-dropdown industries-dropdown">
                      {INDUSTRIES.map((ind) => (
                        <button
                          key={ind.key}
                          type="button"
                          className={`content-dropdown-item${contentTags.includes(ind.label) ? " selected" : ""}`}
                          onClick={() => toggleContentTag(ind.label)}
                        >
                          <span className="industry-emoji">{ind.emoji}</span>
                          <span className="content-dropdown-label">{ind.label}</span>
                          {contentTags.includes(ind.label) && <Icon name="check" size={14} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="suggestion-chip" onClick={() => setQuestion(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent chats */}
            {!isChatView && (
              <div className="recent-section">
                <div className="recent-label">Recent Chats</div>
                <div className="recent-grid">
                  {RECENT_CHATS.map((c) => (
                    <button className="recent-card" key={c.key}
                      onClick={() => c.title.toLowerCase() === "new chat" ? handleNewChat()
                        : setMessages([{ id: `seed-${c.key}`, role: "user", text: c.title, attachments: [], tags: [] }])
                      }>
                      <div className="r-icon"><Icon name="chat" size={15} /></div>
                      <div><div className="r-title">{c.title}</div><div className="r-time">{c.time}</div></div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            </>)}
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="right-panel">
            <div className="rp-tabs">
              <button className={`rp-tab${rightTab === "history" ? " active" : ""}`} onClick={() => setRightTab("history")}>💬 History</button>
              <button className={`rp-tab${rightTab === "shared" ? " active" : ""}`} onClick={() => setRightTab("shared")}>🔗 Shared</button>
            </div>

            {rightTab === "history" ? (
              <>
                <div className="search-box">
                  <Icon name="search" size={15} />
                  <input type="text" placeholder="Search history" value={historySearch} onChange={(e) => setHistorySearch(e.target.value)} />
                  {historySearch ? (
                    <button type="button" className="search-clear" onClick={() => setHistorySearch("")}><Icon name="close" size={13} /></button>
                  ) : <span className="kbd">⌘ K</span>}
                </div>
                {hasNoResults && <div className="no-results">No chats match "{historySearch}"</div>}
                {filteredHistory.map((group) => (
                  <div className="history-group" key={group.group}>
                    <div className="history-group-label">{group.group}</div>
                    {group.items.map((item) => (
                      <button className="history-item" key={item.key}
                        onClick={() => item.title.toLowerCase() === "new chat" ? handleNewChat()
                          : setMessages([{ id: `seed-${item.key}`, role: "user", text: item.title, attachments: [], tags: [] }])
                        }>
                        <span className="h-icon"><Icon name="chat" size={15} /></span>
                        <div className="h-meta"><div className="h-title">{item.title}</div><div className="h-time">{item.time}</div></div>
                      </button>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <div>
                {INDUSTRIES.filter((ind) => (industryDocs[ind.key] || []).length > 0).map((ind) => (
                  <div key={ind.key} style={{ marginBottom: 18 }}>
                    <div className="shared-ind-label" style={{ color: ind.color }}>
                      {ind.emoji} {ind.label}
                      <span className="shared-count-badge" style={{ background: ind.bg, color: ind.color }}>
                        {(industryDocs[ind.key] || []).length}
                      </span>
                    </div>
                    {(industryDocs[ind.key] || []).map((doc) => (
                      <div key={doc.id} className="shared-card">
                        <div className="shared-card-top">
                          <div className="shared-doc-icon">📄</div>
                          <div className="shared-doc-meta">
                            <div className="shared-doc-name">{doc.name}</div>
                            <div className="shared-doc-by">{doc.sharedBy !== "Me" ? `from ${doc.sharedBy}` : "Uploaded by you"} · {doc.date}</div>
                          </div>
                        </div>
                        {doc.note && <div className="shared-doc-note">{doc.note}</div>}
                        <div className="shared-actions">
                          <button className="shared-btn share" onClick={() => setDocShareTarget({ doc, industry: ind })}>↑ Share</button>
                          <button className="shared-btn" onClick={() => { setActiveIndustryKey(ind.key); setExpandedMenu("industries"); }}>📁 View</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                {INDUSTRIES.every((ind) => (industryDocs[ind.key] || []).length === 0) && (
                  <div style={{ textAlign: "center", color: "var(--text-faint)", padding: "40px 16px", fontSize: 13 }}>
                    <div style={{ fontSize: 32, marginBottom: 10 }}>📂</div>
                    No documents yet. Use the Industries menu to add docs per sector.
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>

      {docShareTarget && (
        <DocShareModal doc={docShareTarget.doc} industry={docShareTarget.industry} onClose={() => setDocShareTarget(null)} />
      )}
    </div>
  );
}