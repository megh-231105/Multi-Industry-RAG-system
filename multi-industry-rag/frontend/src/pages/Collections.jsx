import { useState } from "react";
import { Link } from "react-router-dom";

const COLLECTIONS = [
  {
    key: "healthcare",
    emoji: "🏥",
    label: "Healthcare",
    desc: "PubMedQA, clinical notes, medical research papers",
    docs: 1842,
    chunks: 38410,
    queries: 4820,
    size: "2.4 GB",
    lastUpdated: "2 hours ago",
    status: "active",
    embeddingModel: "all-MiniLM-L6-v2",
    retriever: "HyPE",
    similarity: "Cosine",
    reranker: "MiniLM",
    color: "#22c55e",
    bg: "#dcfce7",
  },
  {
    key: "finance",
    emoji: "💰",
    label: "Banking & Finance",
    desc: "FinQA, TAT-QA, market analysis, risk and regulatory documents",
    docs: 973,
    chunks: 21560,
    queries: 3310,
    size: "1.1 GB",
    lastUpdated: "1 day ago",
    status: "active",
    embeddingModel: "all-MiniLM-L6-v2",
    retriever: "HyPE",
    similarity: "Inner Product",
    reranker: "MiniLM",
    color: "#3b82f6",
    bg: "#dbeafe",
  },
  {
    key: "traffic",
    emoji: "🚦",
    label: "Traffic & Transport",
    desc: "Driving rules, government road safety docs, traffic law, exam question banks",
    docs: 312,
    chunks: 6890,
    queries: 1204,
    size: "380 MB",
    lastUpdated: "3 days ago",
    status: "active",
    embeddingModel: "all-MiniLM-L6-v2",
    retriever: "HyPE",
    similarity: "Cosine",
    reranker: "MiniLM",
    color: "#f59e0b",
    bg: "#fef3c7",
  },
  {
    key: "legal",
    emoji: "⚖️",
    label: "Legal Services",
    desc: "Contracts, regulations, case law, compliance documents",
    docs: 0,
    chunks: 0,
    queries: 0,
    size: "—",
    lastUpdated: "Never",
    status: "empty",
    embeddingModel: "—",
    retriever: "—",
    similarity: "—",
    reranker: "—",
    color: "#8b5cf6",
    bg: "#ede9fe",
  },
];

function Icon({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "upload": return <svg {...p}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" /></svg>;
    case "database": return <svg {...p}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>;
    case "chart": return <svg {...p}><path d="M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4" /></svg>;
    case "chat": return <svg {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z" /></svg>;
    case "trash": return <svg {...p}><path d="M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7" /></svg>;
    case "search": return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4.35-4.35" /></svg>;
    case "plus": return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
    case "check": return <svg {...p}><path d="M5 12.5l4.5 4.5L19 7" /></svg>;
    case "arrow": return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    default: return null;
  }
}

export default function Collections() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  const filtered = COLLECTIONS.filter((c) => {
    const matchSearch = c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="rag-collections">
      <style>{`
.rag-collections {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
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
.rag-collections *, .rag-collections *::before, .rag-collections *::after { box-sizing: border-box; }
.rag-collections h1, .rag-collections h2, .rag-collections h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-collections a { color: inherit; text-decoration: none; }
.rag-collections button { font-family: inherit; cursor: pointer; }

/* nav */
.rag-collections nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.rag-collections .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-collections .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-collections .nav-right {
  display: flex; align-items: center; gap: 16px;
}
.rag-collections .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.rag-collections .nav-link:hover { color: #fff; }
.rag-collections .nav-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--indigo); color: #fff;
  border: none; font-size: 13.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-collections .nav-btn:hover { background: var(--indigo-2); }

/* page */
.rag-collections .page-wrap {
  max-width: 1100px; margin: 0 auto; padding: 52px 32px 100px;
}

/* header */
.rag-collections .page-head { margin-bottom: 44px; }
.rag-collections .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo);
  margin-bottom: 14px;
}
.rag-collections .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber); box-shadow: 0 0 0 4px rgba(255,176,32,0.2);
}
.rag-collections .page-head h1 {
  font-size: clamp(30px, 4vw, 44px); font-weight: 700;
  letter-spacing: -0.02em; margin-bottom: 12px;
}
.rag-collections .page-head p { font-size: 15.5px; color: var(--slate); line-height: 1.6; max-width: 520px; }

/* toolbar */
.rag-collections .toolbar {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 32px; flex-wrap: wrap;
}
.rag-collections .search-wrap {
  flex: 1; min-width: 200px;
  display: flex; align-items: center; gap: 10px;
  background: var(--panel); border: 1.5px solid var(--line);
  border-radius: 12px; padding: 10px 16px;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.rag-collections .search-wrap:focus-within {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.rag-collections .search-wrap input {
  border: none; background: transparent; flex: 1;
  font-size: 14.5px; color: var(--ink); outline: none;
  font-family: "Inter", sans-serif;
}
.rag-collections .search-wrap input::placeholder { color: var(--slate-l); }
.rag-collections .filter-btns { display: flex; gap: 8px; }
.rag-collections .filter-btn {
  padding: 9px 16px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--panel);
  font-size: 13px; font-weight: 500; color: var(--slate);
  transition: all 0.2s;
}
.rag-collections .filter-btn:hover { color: var(--ink); border-color: var(--ink); }
.rag-collections .filter-btn.active {
  background: var(--ink); color: #fff; border-color: transparent;
}

/* summary stats */
.rag-collections .summary-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 16px; margin-bottom: 36px;
}
@media (max-width: 860px) {
  .rag-collections .summary-row { grid-template-columns: repeat(2, 1fr); }
}
.rag-collections .sum-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 16px; padding: 20px;
}
.rag-collections .sum-val {
  font-size: 26px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.01em; margin-bottom: 5px;
}
.rag-collections .sum-label { font-size: 12.5px; color: var(--slate-l); }

/* collection cards */
.rag-collections .coll-list { display: flex; flex-direction: column; gap: 18px; }
.rag-collections .coll-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 22px; overflow: hidden;
  transition: box-shadow 0.25s;
}
.rag-collections .coll-card:hover { box-shadow: 0 8px 28px -10px rgba(12,15,23,0.15); }
.rag-collections .coll-main {
  display: flex; align-items: center; gap: 20px;
  padding: 24px 28px;
}
.rag-collections .coll-emoji-wrap {
  width: 58px; height: 58px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; flex-shrink: 0;
}
.rag-collections .coll-info { flex: 1; min-width: 0; }
.rag-collections .coll-name-row {
  display: flex; align-items: center; gap: 10px; margin-bottom: 5px;
}
.rag-collections .coll-name { font-size: 17px; font-weight: 700; }
.rag-collections .status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 600; padding: 3px 9px; border-radius: 100px;
}
.rag-collections .status-pill.active { background: #dcfce7; color: #15803d; }
.rag-collections .status-pill.empty { background: var(--paper-2); color: var(--slate); }
.rag-collections .status-pill::before {
  content: ""; width: 5px; height: 5px; border-radius: 50%; background: currentColor;
}
.rag-collections .coll-desc { font-size: 13px; color: var(--slate); line-height: 1.5; }
.rag-collections .coll-metrics {
  display: flex; gap: 28px; align-items: center;
}
@media (max-width: 760px) {
  .rag-collections .coll-main { flex-wrap: wrap; }
  .rag-collections .coll-metrics { gap: 16px; }
}
.rag-collections .metric { text-align: right; }
.rag-collections .metric-val {
  font-size: 18px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
}
.rag-collections .metric-label { font-size: 11.5px; color: var(--slate-l); }
.rag-collections .coll-actions-row {
  display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0;
}
.rag-collections .ca-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 100px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 12.5px; font-weight: 500; color: var(--ink);
  transition: all 0.2s;
}
.rag-collections .ca-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.rag-collections .ca-btn.primary {
  background: var(--ink); color: #fff; border-color: transparent;
}
.rag-collections .ca-btn.primary:hover { background: var(--indigo); }
.rag-collections .ca-btn.danger { color: #dc2626; border-color: #fecaca; }
.rag-collections .ca-btn.danger:hover { background: #fef2f2; }

/* expanded details */
.rag-collections .coll-details {
  border-top: 1px solid var(--line);
  padding: 20px 28px;
  background: var(--paper);
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
@media (max-width: 760px) {
  .rag-collections .coll-details { grid-template-columns: repeat(2, 1fr); }
}
.rag-collections .detail-item .d-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.07em;
  color: var(--slate-l); margin-bottom: 5px;
}
.rag-collections .detail-item .d-val {
  font-size: 14px; font-weight: 600;
}
.rag-collections .expand-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-radius: 8px;
  border: none; background: none;
  font-size: 12.5px; color: var(--slate);
  transition: color 0.2s, background 0.2s;
}
.rag-collections .expand-btn:hover { color: var(--indigo); background: var(--paper-2); }

/* empty state */
.rag-collections .empty-state {
  text-align: center; padding: 60px 24px;
  background: var(--panel); border: 1px solid var(--line); border-radius: 22px;
}
.rag-collections .empty-icon {
  font-size: 48px; margin-bottom: 18px;
}
.rag-collections .empty-state h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
.rag-collections .empty-state p { font-size: 14.5px; color: var(--slate); margin-bottom: 24px; }
`}</style>

      {/* ── NAV ── */}
      <nav>
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          NexusRAG
        </Link>
        <div className="nav-right">
          <Link to="/chat" className="nav-link">Query</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
          <Link to="/upload" className="nav-btn">
            <Icon name="plus" size={14} /> Add Documents
          </Link>
        </div>
      </nav>

      <div className="page-wrap">
        <div className="page-head">
          <span className="eyebrow">Knowledge Base</span>
          <h1>Document Collections</h1>
          <p>
            Each collection is a separate vector store for one industry. All share the same
            retrieval pipeline — only the document set being searched changes.
          </p>
        </div>

        {/* Summary stats */}
        <div className="summary-row">
          <div className="sum-card">
            <div className="sum-val">3,127</div>
            <div className="sum-label">Total Documents</div>
          </div>
          <div className="sum-card">
            <div className="sum-val">66,860</div>
            <div className="sum-label">Embedded Chunks</div>
          </div>
          <div className="sum-card">
            <div className="sum-val">9,334</div>
            <div className="sum-label">Total Queries</div>
          </div>
          <div className="sum-card">
            <div className="sum-val">3 / 4</div>
            <div className="sum-label">Active Collections</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="search-wrap">
            <Icon name="search" size={16} />
            <input
              type="text"
              placeholder="Search collections…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-btns">
            {["all", "active", "empty"].map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Collections list */}
        <div className="coll-list">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No collections match</h3>
              <p>Try a different search or filter.</p>
            </div>
          ) : (
            filtered.map((c) => (
              <div key={c.key} className="coll-card">
                <div className="coll-main">
                  <div className="coll-emoji-wrap" style={{ background: c.bg }}>
                    {c.emoji}
                  </div>
                  <div className="coll-info">
                    <div className="coll-name-row">
                      <span className="coll-name">{c.label}</span>
                      <span className={`status-pill ${c.status}`}>{c.status}</span>
                    </div>
                    <div className="coll-desc">{c.desc}</div>
                    <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                      <button
                        className="expand-btn"
                        onClick={() => setExpanded(expanded === c.key ? null : c.key)}
                      >
                        {expanded === c.key ? "▲ Hide details" : "▼ Show details"}
                      </button>
                    </div>
                  </div>

                  {c.status === "active" && (
                    <div className="coll-metrics">
                      <div className="metric">
                        <div className="metric-val">{c.docs.toLocaleString()}</div>
                        <div className="metric-label">Docs</div>
                      </div>
                      <div className="metric">
                        <div className="metric-val">{(c.chunks / 1000).toFixed(1)}k</div>
                        <div className="metric-label">Chunks</div>
                      </div>
                      <div className="metric">
                        <div className="metric-val">{c.queries.toLocaleString()}</div>
                        <div className="metric-label">Queries</div>
                      </div>
                    </div>
                  )}

                  <div className="coll-actions-row">
                    {c.status === "active" && (
                      <Link to="/chat" className="ca-btn primary">
                        <Icon name="chat" size={13} /> Query
                      </Link>
                    )}
                    <Link to="/upload" className="ca-btn">
                      <Icon name="upload" size={13} /> Add Docs
                    </Link>
                    {c.status === "active" && (
                      <button className="ca-btn danger">
                        <Icon name="trash" size={13} />
                      </button>
                    )}
                  </div>
                </div>

                {expanded === c.key && (
                  <div className="coll-details">
                    <div className="detail-item">
                      <div className="d-label">Embedding Model</div>
                      <div className="d-val">{c.embeddingModel}</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Retriever</div>
                      <div className="d-val">{c.retriever}</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Similarity</div>
                      <div className="d-val">{c.similarity}</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Reranker</div>
                      <div className="d-val">{c.reranker}</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Storage Size</div>
                      <div className="d-val">{c.size}</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Last Updated</div>
                      <div className="d-val">{c.lastUpdated}</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Chunking</div>
                      <div className="d-val">Semantic (topic-based)</div>
                    </div>
                    <div className="detail-item">
                      <div className="d-label">Hybrid Search</div>
                      <div className="d-val">Dense + BM25</div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
