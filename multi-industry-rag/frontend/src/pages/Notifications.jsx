import { useState } from "react";
import { Link } from "react-router-dom";

const NOTIFICATIONS = [
  {
    id: "n1",
    type: "success",
    icon: "✅",
    title: "Healthcare collection updated",
    desc: "842 new documents indexed from PubMedQA batch upload. 18,420 new chunks created.",
    time: "2 hours ago",
    read: false,
    action: { label: "View Collection", href: "/collections" },
  },
  {
    id: "n2",
    type: "info",
    icon: "🔔",
    title: "New query milestone",
    desc: "The Finance knowledge base has received 3,000+ queries this month — your most-used sector.",
    time: "5 hours ago",
    read: false,
    action: { label: "Ask Finance Q&A", href: "/chat" },
  },
  {
    id: "n3",
    type: "success",
    icon: "✅",
    title: "Traffic dataset indexed",
    desc: "Custom traffic dataset successfully embedded using all-MiniLM-L6-v2. HyPE retrieval is now active.",
    time: "3 days ago",
    read: true,
    action: { label: "Query Traffic", href: "/chat" },
  },
  {
    id: "n4",
    type: "warning",
    icon: "⚠️",
    title: "Legal collection is empty",
    desc: "The Legal Services knowledge base has no documents. Upload files to enable querying this sector.",
    time: "5 days ago",
    read: true,
    action: { label: "Upload Documents", href: "/upload" },
  },
  {
    id: "n5",
    type: "info",
    icon: "🔔",
    title: "System update: Semantic chunking enabled",
    desc: "All future uploads will use topic-based semantic chunking instead of fixed-length chunking. This improves retrieval accuracy.",
    time: "1 week ago",
    read: true,
    action: null,
  },
  {
    id: "n6",
    type: "success",
    icon: "✅",
    title: "MiniLM reranker activated",
    desc: "Cross-encoder reranking (MiniLM) is now the default second-stage model. BGE reranker remains available for comparison.",
    time: "2 weeks ago",
    read: true,
    action: { label: "Try Reranked Q&A", href: "/chat" },
  },
];

function Icon({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "check": return <svg {...p}><path d="M5 12.5l4.5 4.5L19 7" /></svg>;
    case "bell": return <svg {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
    case "close": return <svg {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case "arrow": return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    default: return null;
  }
}

export default function Notifications() {
  const [notes, setNotes] = useState(NOTIFICATIONS);
  const [filter, setFilter] = useState("all");

  const markAllRead = () => setNotes((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id) => setNotes((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  const dismiss = (id) => setNotes((prev) => prev.filter((n) => n.id !== id));

  const unreadCount = notes.filter((n) => !n.read).length;
  const filtered = filter === "unread" ? notes.filter((n) => !n.read) : notes;

  return (
    <div className="rag-notif">
      <style>{`
.rag-notif {
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
.rag-notif *, .rag-notif *::before, .rag-notif *::after { box-sizing: border-box; }
.rag-notif h1, .rag-notif h2, .rag-notif h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-notif a { color: inherit; text-decoration: none; }
.rag-notif button { font-family: inherit; cursor: pointer; }

/* nav */
.rag-notif nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.rag-notif .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-notif .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-notif .nav-right {
  display: flex; align-items: center; gap: 16px;
}
.rag-notif .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.rag-notif .nav-link:hover { color: #fff; }
.rag-notif .nav-btn {
  padding: 9px 18px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.35);
  background: transparent; color: #fff;
  font-size: 13.5px; font-weight: 500;
  transition: all 0.25s;
}
.rag-notif .nav-btn:hover { background: #fff; color: #000; }

/* page */
.rag-notif .page-wrap {
  max-width: 800px; margin: 0 auto; padding: 52px 24px 100px;
}

/* header */
.rag-notif .page-head {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 36px; gap: 16px; flex-wrap: wrap;
}
.rag-notif .head-left .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo);
  margin-bottom: 12px;
}
.rag-notif .head-left .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber); box-shadow: 0 0 0 4px rgba(255,176,32,0.2);
}
.rag-notif .head-left h1 {
  font-size: clamp(24px, 4vw, 36px); font-weight: 700;
  letter-spacing: -0.01em;
  display: flex; align-items: center; gap: 12px;
}
.rag-notif .unread-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--indigo); color: #fff;
  font-size: 13px; font-weight: 700;
}
.rag-notif .head-actions { display: flex; gap: 10px; align-items: flex-start; }
.rag-notif .mark-all-btn {
  padding: 9px 16px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--panel);
  font-size: 13.5px; font-weight: 500; color: var(--ink);
  transition: all 0.2s;
}
.rag-notif .mark-all-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }

/* filter tabs */
.rag-notif .filter-tabs {
  display: flex; gap: 4px; margin-bottom: 28px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 4px;
  display: inline-flex;
}
.rag-notif .ftab {
  padding: 8px 18px; border-radius: 9px;
  border: none; background: transparent;
  font-size: 13.5px; font-weight: 500; color: var(--slate);
  transition: all 0.2s;
}
.rag-notif .ftab.active { background: var(--ink); color: #fff; }
.rag-notif .ftab:hover:not(.active) { background: var(--paper-2); color: var(--ink); }

/* notification items */
.rag-notif .notif-list { display: flex; flex-direction: column; gap: 12px; }
.rag-notif .notif-item {
  background: var(--panel); border: 1.5px solid var(--line);
  border-radius: 20px; padding: 22px 24px;
  display: flex; gap: 16px; align-items: flex-start;
  transition: border-color 0.25s, box-shadow 0.25s;
  position: relative;
}
.rag-notif .notif-item:hover {
  border-color: rgba(79,70,229,0.25);
  box-shadow: 0 4px 18px -8px rgba(12,15,23,0.15);
}
.rag-notif .notif-item.unread { border-color: rgba(79,70,229,0.2); background: #fdfcff; }
.rag-notif .notif-item.unread::before {
  content: ""; position: absolute;
  left: -6px; top: 50%; transform: translateY(-50%);
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--indigo);
  box-shadow: 0 0 0 3px rgba(79,70,229,0.2);
}
.rag-notif .notif-icon {
  width: 44px; height: 44px; border-radius: 14px;
  background: var(--paper-2); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
}
.rag-notif .notif-icon.success { background: #dcfce7; }
.rag-notif .notif-icon.warning { background: #fef3c7; }
.rag-notif .notif-icon.info { background: #dbeafe; }
.rag-notif .notif-body { flex: 1; min-width: 0; }
.rag-notif .notif-title {
  font-size: 15px; font-weight: 700; margin-bottom: 5px;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
}
.rag-notif .notif-time {
  font-size: 12px; color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace; flex-shrink: 0;
}
.rag-notif .notif-desc {
  font-size: 13.5px; color: var(--slate); line-height: 1.55;
  margin-bottom: 14px;
}
.rag-notif .notif-actions { display: flex; gap: 8px; align-items: center; }
.rag-notif .notif-action-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 14px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 12.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-notif .notif-action-btn:hover { background: var(--indigo); }
.rag-notif .notif-mark-btn {
  padding: 7px 12px; border-radius: 100px;
  border: 1px solid var(--line); background: transparent;
  font-size: 12.5px; color: var(--slate);
  transition: all 0.2s;
}
.rag-notif .notif-mark-btn:hover { background: var(--paper-2); color: var(--ink); }
.rag-notif .notif-dismiss {
  position: absolute; top: 14px; right: 14px;
  background: none; border: none; color: var(--slate-l);
  padding: 4px; border-radius: 8px; display: flex;
  transition: color 0.2s, background 0.2s;
}
.rag-notif .notif-dismiss:hover { color: var(--ink); background: var(--paper-2); }

/* empty */
.rag-notif .empty {
  text-align: center; padding: 60px 24px;
  background: var(--panel); border: 1px solid var(--line); border-radius: 22px;
}
.rag-notif .empty-icon { font-size: 52px; margin-bottom: 16px; }
.rag-notif .empty h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
.rag-notif .empty p { font-size: 14.5px; color: var(--slate); }
`}</style>

      {/* ── NAV ── */}
      <nav>
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          NexusRAG
        </Link>
        <div className="nav-right">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/chat"      className="nav-link">Query</Link>
          <Link to="/settings"  className="nav-btn">Settings →</Link>
        </div>
      </nav>

      <div className="page-wrap">
        <div className="page-head">
          <div className="head-left">
            <div className="eyebrow">System Alerts</div>
            <h1>
              Notifications
              {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
            </h1>
          </div>
          <div className="head-actions">
            {unreadCount > 0 && (
              <button className="mark-all-btn" onClick={markAllRead}>
                <Icon name="check" size={14} /> Mark all read
              </button>
            )}
          </div>
        </div>

        <div className="filter-tabs">
          <button className={`ftab${filter === "all" ? " active" : ""}`} onClick={() => setFilter("all")}>
            All ({notes.length})
          </button>
          <button className={`ftab${filter === "unread" ? " active" : ""}`} onClick={() => setFilter("unread")}>
            Unread ({unreadCount})
          </button>
        </div>

        <div className="notif-list">
          {filtered.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">🔔</div>
              <h3>All caught up!</h3>
              <p>No {filter === "unread" ? "unread " : ""}notifications to show.</p>
            </div>
          ) : (
            filtered.map((n) => (
              <div key={n.id} className={`notif-item ${n.read ? "" : "unread"}`}>
                <div className={`notif-icon ${n.type}`}>{n.icon}</div>
                <div className="notif-body">
                  <div className="notif-title">
                    {n.title}
                    <span className="notif-time">{n.time}</span>
                  </div>
                  <div className="notif-desc">{n.desc}</div>
                  <div className="notif-actions">
                    {n.action && (
                      <Link to={n.action.href} className="notif-action-btn">
                        {n.action.label} →
                      </Link>
                    )}
                    {!n.read && (
                      <button className="notif-mark-btn" onClick={() => markRead(n.id)}>
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
                <button className="notif-dismiss" onClick={() => dismiss(n.id)} aria-label="Dismiss">
                  <Icon name="close" size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
