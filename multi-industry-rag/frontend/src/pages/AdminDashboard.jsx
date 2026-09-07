import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const COLLECTIONS = [
  {
    key: "healthcare",
    emoji: "🏥",
    label: "Healthcare",
    docs: 1842,
    chunks: 38410,
    lastUpdated: "2 hours ago",
    status: "active",
    color: "#22c55e",
    bg: "#dcfce7",
    queries: 4820,
    embeddingModel: "all-MiniLM-L6-v2",
  },
  {
    key: "finance",
    emoji: "💰",
    label: "Banking & Finance",
    docs: 973,
    chunks: 21560,
    lastUpdated: "1 day ago",
    status: "active",
    color: "#3b82f6",
    bg: "#dbeafe",
    queries: 3310,
    embeddingModel: "all-MiniLM-L6-v2",
  },
  {
    key: "traffic",
    emoji: "🚦",
    label: "Traffic & Transport",
    docs: 312,
    chunks: 6890,
    lastUpdated: "3 days ago",
    status: "active",
    color: "#f59e0b",
    bg: "#fef3c7",
    queries: 1204,
    embeddingModel: "all-MiniLM-L6-v2",
  },
  {
    key: "legal",
    emoji: "⚖️",
    label: "Legal Services",
    docs: 0,
    chunks: 0,
    lastUpdated: "Never",
    status: "empty",
    color: "#8b5cf6",
    bg: "#ede9fe",
    queries: 0,
    embeddingModel: "—",
  },
];

const RECENT_UPLOADS = [
  { name: "pubmed_qa_train.json", size: "14.2 MB", industry: "Healthcare", time: "2h ago", status: "done" },
  { name: "finqa_corpus_v2.pdf", size: "8.7 MB", industry: "Finance", time: "1d ago", status: "done" },
  { name: "traffic_rules_2024.pdf", size: "3.1 MB", industry: "Traffic", time: "3d ago", status: "done" },
  { name: "tat_qa_dataset.csv", size: "22.5 MB", industry: "Finance", time: "4d ago", status: "done" },
];

const PIPELINE_CONFIG = [
  { label: "Retrieval Strategy", value: "HyPE (Hypothetical Passage Embeddings)", accent: "#4f46e5" },
  { label: "Similarity Metric", value: "Cosine + Inner Product", accent: "#22c55e" },
  { label: "Reranker", value: "MiniLM (cross-encoder)", accent: "#f59e0b" },
  { label: "Index Type", value: "HNSW (Hierarchical NSW)", accent: "#3b82f6" },
  { label: "Chunking", value: "Semantic (topic-based)", accent: "#8b5cf6" },
  { label: "Hybrid Search", value: "Dense + BM25 keyword", accent: "#ec4899" },
];

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "upload": return <svg {...common}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" /></svg>;
    case "file": return <svg {...common}><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z" /><path d="M14 3.5V8h4.5" /></svg>;
    case "check": return <svg {...common}><path d="M5 12.5l4.5 4.5L19 7" /></svg>;
    case "plus": return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
    case "settings": return <svg {...common}><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9" /></svg>;
    case "database": return <svg {...common}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>;
    case "chart": return <svg {...common}><path d="M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4" /></svg>;
    case "logout": return <svg {...common}><path d="M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5" /><path d="M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9" /></svg>;
    case "users": return <svg {...common}><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.87 2.69-7 6-7h.5" /><circle cx="16" cy="10" r="2.5" /><path d="M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5" /></svg>;
    case "trash": return <svg {...common}><path d="M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7" /></svg>;
    case "chevron": return <svg {...common}><path d="M9 6l6 6-6 6" /></svg>;
    default: return null;
  }
}

function StatCard({ icon, label, value, sub, accent }) {
  return (
    <div className="stat-card" style={{ "--accent": accent }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-val">{value}</div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`rag-admin${mounted ? " mounted" : ""}`}>
      <style>{`
/* ===== Admin Dashboard ===== */
.rag-admin {
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
  -webkit-font-smoothing: antialiased;
}
.rag-admin *, .rag-admin *::before, .rag-admin *::after { box-sizing: border-box; }
.rag-admin h1, .rag-admin h2, .rag-admin h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-admin a { color: inherit; text-decoration: none; }
.rag-admin button { font-family: inherit; cursor: pointer; }

/* ===== shell ===== */
.rag-admin .shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}
@media (max-width: 900px) {
  .rag-admin .shell { grid-template-columns: 1fr; }
  .rag-admin .sidebar { display: none; }
}

/* ===== sidebar ===== */
.rag-admin .sidebar {
  background: var(--navy);
  color: #fff;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}
.rag-admin .sb-brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 36px; padding-bottom: 28px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.rag-admin .sb-brand-mark {
  width: 34px; height: 34px; border-radius: 10px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 700;
}
.rag-admin .sb-section { margin-bottom: 28px; }
.rag-admin .sb-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.35); margin-bottom: 10px; padding: 0 8px;
}
.rag-admin .sb-item {
  display: flex; align-items: center; gap: 11px;
  padding: 10px 12px; border-radius: 11px;
  font-size: 14px; color: rgba(255,255,255,0.65);
  cursor: pointer; transition: all 0.2s;
  background: none; border: none; width: 100%; text-align: left;
  margin-bottom: 2px;
}
.rag-admin .sb-item:hover { background: rgba(255,255,255,0.08); color: #fff; }
.rag-admin .sb-item.active { background: rgba(79,70,229,0.35); color: #fff; }
.rag-admin .sb-spacer { flex: 1; }
.rag-admin .sb-user {
  display: flex; align-items: center; gap: 10px;
  padding: 12px; border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
}
.rag-admin .sb-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo), #b8a6ff);
  flex-shrink: 0;
}
.rag-admin .sb-name { font-size: 13.5px; font-weight: 600; }
.rag-admin .sb-role { font-size: 11.5px; color: rgba(255,255,255,0.45); }

/* ===== main ===== */
.rag-admin .main {
  min-width: 0;
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.rag-admin.mounted .main { opacity: 1; transform: none; }

/* ===== topbar ===== */
.rag-admin .topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 36px;
  border-bottom: 1px solid var(--line);
  background: var(--panel);
  position: sticky; top: 0; z-index: 10;
}
.rag-admin .topbar h1 { font-size: 22px; font-weight: 700; }
.rag-admin .topbar-right { display: flex; gap: 12px; align-items: center; }
.rag-admin .topbar-badge {
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px; padding: 4px 10px; border-radius: 100px;
  background: #dcfce7; color: #15803d; font-weight: 600;
}
.rag-admin .topbar-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 13.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-admin .topbar-btn:hover { background: var(--indigo); }

/* ===== tabs ===== */
.rag-admin .tabs {
  display: flex; gap: 0;
  border-bottom: 1px solid var(--line);
  padding: 0 36px;
  background: var(--panel);
}
.rag-admin .tab-btn {
  padding: 14px 20px; border: none; background: none;
  font-size: 14px; font-weight: 500; color: var(--slate);
  cursor: pointer; border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -1px;
}
.rag-admin .tab-btn:hover { color: var(--ink); }
.rag-admin .tab-btn.active {
  color: var(--indigo); border-bottom-color: var(--indigo); font-weight: 600;
}

/* ===== content ===== */
.rag-admin .content { padding: 36px; }

/* ===== stat cards ===== */
.rag-admin .stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 18px; margin-bottom: 36px;
}
@media (max-width: 1100px) {
  .rag-admin .stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .rag-admin .stats-row { grid-template-columns: 1fr; }
}
.rag-admin .stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.rag-admin .stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px -10px rgba(12,15,23,0.18);
}
.rag-admin .stat-icon {
  width: 42px; height: 42px; border-radius: 12px;
  background: color-mix(in srgb, var(--accent, var(--indigo)) 12%, white);
  display: flex; align-items: center; justify-content: center;
  color: var(--accent, var(--indigo));
  margin-bottom: 16px;
}
.rag-admin .stat-val {
  font-size: 32px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.02em; line-height: 1;
  margin-bottom: 6px;
}
.rag-admin .stat-label { font-size: 13.5px; font-weight: 600; margin-bottom: 4px; }
.rag-admin .stat-sub { font-size: 12px; color: var(--slate-l); }

/* ===== section headers ===== */
.rag-admin .sec-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px;
}
.rag-admin .sec-head h2 { font-size: 18px; font-weight: 700; }
.rag-admin .sec-link {
  font-size: 13.5px; color: var(--indigo); font-weight: 500;
  display: flex; align-items: center; gap: 4px;
}
.rag-admin .sec-link:hover { text-decoration: underline; }

/* ===== collections grid ===== */
.rag-admin .collections-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 18px; margin-bottom: 36px;
}
@media (max-width: 860px) {
  .rag-admin .collections-grid { grid-template-columns: 1fr; }
}
.rag-admin .coll-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; padding: 26px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.rag-admin .coll-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px -10px rgba(12,15,23,0.15);
}
.rag-admin .coll-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 20px;
}
.rag-admin .coll-label-row {
  display: flex; align-items: center; gap: 12px;
}
.rag-admin .coll-emoji {
  font-size: 28px; width: 52px; height: 52px;
  background: var(--paper-2); border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
}
.rag-admin .coll-name { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
.rag-admin .coll-updated { font-size: 12px; color: var(--slate-l); }
.rag-admin .status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 600; padding: 4px 10px;
  border-radius: 100px;
}
.rag-admin .status-pill.active { background: #dcfce7; color: #15803d; }
.rag-admin .status-pill.empty { background: var(--paper-2); color: var(--slate); }
.rag-admin .status-pill::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: currentColor;
}
.rag-admin .coll-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 14px; padding-top: 18px;
  border-top: 1px solid var(--line);
}
.rag-admin .cs-val { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
.rag-admin .cs-label { font-size: 11.5px; color: var(--slate-l); margin-top: 3px; }
.rag-admin .coll-actions {
  display: flex; gap: 8px; margin-top: 18px;
}
.rag-admin .coll-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 100px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 12.5px; font-weight: 500; color: var(--ink);
  transition: all 0.2s;
}
.rag-admin .coll-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.rag-admin .coll-btn.primary {
  background: var(--ink); color: #fff; border-color: transparent;
}
.rag-admin .coll-btn.primary:hover { background: var(--indigo); }

/* ===== recent uploads table ===== */
.rag-admin .table-wrap {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; overflow: hidden; margin-bottom: 36px;
}
.rag-admin table {
  width: 100%; border-collapse: collapse;
}
.rag-admin th {
  text-align: left; padding: 14px 20px;
  font-size: 11.5px; font-weight: 600;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--slate-l); background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.rag-admin td {
  padding: 14px 20px; font-size: 13.5px;
  border-bottom: 1px solid var(--line);
}
.rag-admin tr:last-child td { border-bottom: none; }
.rag-admin tr:hover td { background: var(--paper); }
.rag-admin .td-file { display: flex; align-items: center; gap: 10px; }
.rag-admin .td-icon {
  width: 32px; height: 32px; border-radius: 8px;
  background: var(--paper-2); display: flex; align-items: center; justify-content: center;
  color: var(--indigo); flex-shrink: 0;
}
.rag-admin .td-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 600; padding: 3px 9px;
  border-radius: 100px; background: #dcfce7; color: #15803d;
}

/* ===== pipeline config ===== */
.rag-admin .pipeline-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; margin-bottom: 36px;
}
@media (max-width: 860px) {
  .rag-admin .pipeline-grid { grid-template-columns: repeat(2, 1fr); }
}
.rag-admin .config-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 16px; padding: 20px;
}
.rag-admin .config-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em;
  color: var(--slate-l); margin-bottom: 10px;
}
.rag-admin .config-val {
  font-size: 15px; font-weight: 600;
  line-height: 1.4;
}
.rag-admin .config-dot {
  width: 8px; height: 8px; border-radius: 50%;
  display: inline-block; margin-right: 6px;
}
`}</style>

      <div className="shell">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div className="sb-brand">
            <div className="sb-brand-mark">N</div>
            NexusRAG
          </div>

          <div className="sb-section">
            <div className="sb-label">Admin</div>
            <button className={`sb-item${activeTab === "overview" ? " active" : ""}`} onClick={() => setActiveTab("overview")}>
              <Icon name="chart" size={16} /> Overview
            </button>
            <button className={`sb-item${activeTab === "collections" ? " active" : ""}`} onClick={() => setActiveTab("collections")}>
              <Icon name="database" size={16} /> Collections
            </button>
            <Link to="/upload" className="sb-item">
              <Icon name="upload" size={16} /> Upload Docs
            </Link>
            <button className={`sb-item${activeTab === "pipeline" ? " active" : ""}`} onClick={() => setActiveTab("pipeline")}>
              <Icon name="settings" size={16} /> Pipeline Config
            </button>
            <button className="sb-item">
              <Icon name="users" size={16} /> Users
            </button>
          </div>

          <div className="sb-spacer" />

          <div className="sb-section">
            <Link to="/dashboard" className="sb-item">
              <Icon name="chevron" size={16} /> User View
            </Link>
            <Link to="/" className="sb-item">
              <Icon name="logout" size={16} /> Back to Home
            </Link>
          </div>

          <div className="sb-user">
            <div className="sb-avatar" />
            <div>
              <div className="sb-name">Admin</div>
              <div className="sb-role">System Administrator</div>
            </div>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <div className="main">
          <div className="topbar">
            <h1>
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "collections" && "Document Collections"}
              {activeTab === "pipeline" && "Pipeline Configuration"}
            </h1>
            <div className="topbar-right">
              <span className="topbar-badge">● System Active</span>
              <Link to="/upload" className="topbar-btn">
                <Icon name="upload" size={14} /> Upload Docs
              </Link>
            </div>
          </div>

          <div className="tabs">
            {[
              { key: "overview", label: "Overview" },
              { key: "collections", label: "Collections" },
              { key: "pipeline", label: "Pipeline Config" },
            ].map((t) => (
              <button
                key={t.key}
                className={`tab-btn${activeTab === t.key ? " active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="content">

            {/* ── OVERVIEW TAB ── */}
            {activeTab === "overview" && (
              <>
                <div className="stats-row">
                  <StatCard icon={<Icon name="database" size={20} />} label="Total Documents" value="3,127" sub="Across 3 active sectors" accent="#4f46e5" />
                  <StatCard icon={<Icon name="chart" size={20} />} label="Total Chunks" value="66,860" sub="Embedded vectors" accent="#22c55e" />
                  <StatCard icon={<Icon name="users" size={20} />} label="Total Queries" value="9,334" sub="Last 30 days" accent="#f59e0b" />
                  <StatCard icon={<Icon name="file" size={20} />} label="Collections" value="4" sub="3 active · 1 empty" accent="#3b82f6" />
                </div>

                <div className="sec-head">
                  <h2>Knowledge Base Collections</h2>
                  <Link to="/upload" className="sec-link">Upload new docs <Icon name="chevron" size={14} /></Link>
                </div>

                <div className="collections-grid">
                  {COLLECTIONS.map((c) => (
                    <div key={c.key} className="coll-card">
                      <div className="coll-top">
                        <div className="coll-label-row">
                          <div className="coll-emoji">{c.emoji}</div>
                          <div>
                            <div className="coll-name">{c.label}</div>
                            <div className="coll-updated">Updated {c.lastUpdated}</div>
                          </div>
                        </div>
                        <span className={`status-pill ${c.status}`}>{c.status}</span>
                      </div>
                      <div className="coll-stats">
                        <div>
                          <div className="cs-val">{c.docs.toLocaleString()}</div>
                          <div className="cs-label">Documents</div>
                        </div>
                        <div>
                          <div className="cs-val">{c.chunks.toLocaleString()}</div>
                          <div className="cs-label">Chunks</div>
                        </div>
                        <div>
                          <div className="cs-val">{c.queries.toLocaleString()}</div>
                          <div className="cs-label">Queries</div>
                        </div>
                      </div>
                      <div className="coll-actions">
                        <Link to="/upload" className="coll-btn primary">
                          <Icon name="upload" size={13} /> Add Docs
                        </Link>
                        <button className="coll-btn">
                          <Icon name="chart" size={13} /> Stats
                        </button>
                        {c.status !== "empty" && (
                          <button className="coll-btn">
                            <Icon name="trash" size={13} /> Clear
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sec-head">
                  <h2>Recent Uploads</h2>
                  <Link to="/upload" className="sec-link">Upload more <Icon name="chevron" size={14} /></Link>
                </div>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>File</th>
                        <th>Size</th>
                        <th>Industry</th>
                        <th>Uploaded</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RECENT_UPLOADS.map((u, i) => (
                        <tr key={i}>
                          <td>
                            <div className="td-file">
                              <div className="td-icon"><Icon name="file" size={16} /></div>
                              {u.name}
                            </div>
                          </td>
                          <td>{u.size}</td>
                          <td>{u.industry}</td>
                          <td>{u.time}</td>
                          <td><span className="td-badge"><Icon name="check" size={11} /> {u.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* ── COLLECTIONS TAB ── */}
            {activeTab === "collections" && (
              <>
                <div className="sec-head">
                  <h2>All Collections</h2>
                  <Link to="/upload" className="topbar-btn" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 18px", borderRadius: 100, background: "var(--ink)", color: "#fff", border: "none", fontSize: 13.5, fontWeight: 600 }}>
                    <Icon name="plus" size={14} /> New Collection
                  </Link>
                </div>
                <div className="collections-grid">
                  {COLLECTIONS.map((c) => (
                    <div key={c.key} className="coll-card">
                      <div className="coll-top">
                        <div className="coll-label-row">
                          <div className="coll-emoji">{c.emoji}</div>
                          <div>
                            <div className="coll-name">{c.label}</div>
                            <div className="coll-updated">Model: {c.embeddingModel}</div>
                          </div>
                        </div>
                        <span className={`status-pill ${c.status}`}>{c.status}</span>
                      </div>
                      <div className="coll-stats">
                        <div>
                          <div className="cs-val">{c.docs.toLocaleString()}</div>
                          <div className="cs-label">Documents</div>
                        </div>
                        <div>
                          <div className="cs-val">{c.chunks.toLocaleString()}</div>
                          <div className="cs-label">Chunks</div>
                        </div>
                        <div>
                          <div className="cs-val">{c.queries.toLocaleString()}</div>
                          <div className="cs-label">Queries</div>
                        </div>
                      </div>
                      <div className="coll-actions">
                        <Link to="/upload" className="coll-btn primary">
                          <Icon name="upload" size={13} /> Add Docs
                        </Link>
                        <Link to="/dashboard" className="coll-btn">
                          <Icon name="chart" size={13} /> Query
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── PIPELINE CONFIG TAB ── */}
            {activeTab === "pipeline" && (
              <>
                <div className="sec-head">
                  <h2>Active Pipeline Configuration</h2>
                  <span style={{ fontSize: 13, color: "var(--slate)", fontFamily: '"IBM Plex Mono", monospace' }}>Based on Elkiran & Rasheed, IEEE Access 2026</span>
                </div>
                <div className="pipeline-grid">
                  {PIPELINE_CONFIG.map((c) => (
                    <div key={c.label} className="config-card">
                      <div className="config-label">{c.label}</div>
                      <div className="config-val">
                        <span className="config-dot" style={{ background: c.accent }} />
                        {c.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: 28, marginBottom: 28 }}>
                  <h3 style={{ marginBottom: 16, fontSize: 16 }}>Why these settings?</h3>
                  <p style={{ fontSize: 14.5, color: "var(--slate)", lineHeight: 1.7, margin: 0 }}>
                    The base paper (Elkiran & Rasheed, IEEE Access 2026) found that <strong>retrieval strategy</strong> and
                    <strong> similarity metric</strong> matter most — statistically significant with large effect sizes (η² ≈ 0.31).
                    HyPE retrieval and cosine/inner-product similarity clearly outperformed alternatives.
                    MiniLM reranking was added as a second-stage refinement.
                    Our project extends this with <strong>hybrid search</strong> (dense + BM25), <strong>semantic chunking</strong>,
                    and <strong>multi-industry generalisation</strong> — directly addressing the paper's stated limitations.
                  </p>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
