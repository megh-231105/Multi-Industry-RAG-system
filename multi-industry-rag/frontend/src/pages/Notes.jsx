import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ─── Sample notes data ───────────────────────────────────── */
const INITIAL_NOTES = [
  {
    id: "n1",
    title: "HyPE Retrieval — Key Takeaways",
    body: "HyPE (Hypothetical Passage Embeddings) generates hypothetical answer passages for each query before retrieval. This bridges the gap between sparse query embeddings and dense document embeddings, especially for short or ambiguous questions.\n\n- Improves recall by ~12% over vanilla dense retrieval\n- Works best when combined with BM25 hybrid search\n- MiniLM reranker further pushes precision after HyPE retrieval",
    tag: "Research",
    color: "#eef2ff",
    border: "#c7d2fe",
    pinned: true,
    updatedAt: "Today, 10:30 am",
  },
  {
    id: "n2",
    title: "Dataset Notes — Healthcare (PubMedQA)",
    body: "PubMedQA contains 1K expert-annotated QA pairs from PubMed abstracts. Labels: yes/no/maybe.\n\n- Use semantic chunking at sentence boundary\n- Cosine similarity outperforms Inner Product on this corpus\n- Avg chunk size: 180 tokens",
    tag: "Healthcare",
    color: "#f0fdf4",
    border: "#86efac",
    pinned: true,
    updatedAt: "Today, 9:15 am",
  },
  {
    id: "n3",
    title: "Finance Dataset — FinQA / TAT-QA",
    body: "FinQA requires numerical reasoning over financial tables + text. TAT-QA mixes tabular and textual evidence.\n\nChallenges:\n- Numbers extracted from tables need special handling\n- Hybrid retrieval (BM25 + dense) significantly helps table-heavy queries\n- Consider adding table-aware chunking strategy",
    tag: "Finance",
    color: "#fffbeb",
    border: "#fcd34d",
    pinned: false,
    updatedAt: "Yesterday, 4:00 pm",
  },
  {
    id: "n4",
    title: "Traffic Dataset — Driving Rules (India)",
    body: "Custom dataset compiled from:\n- Motor Vehicles Act, 1988\n- CMVR rules\n- State transport department PDFs\n\nIndexing strategy: IVF with 256 clusters works well for ~50K chunks.",
    tag: "Traffic",
    color: "#fff1f2",
    border: "#fda4af",
    pinned: false,
    updatedAt: "2 days ago",
  },
  {
    id: "n5",
    title: "Project Guide Review — Action Items",
    body: "From guide meeting on Sept 5:\n✅ Add ANOVA table to Chapter 4\n✅ Update retrieval strategy diagram\n⬜ Write discussion for effect size results\n⬜ Cross-check references (IEEE format)\n⬜ Submit draft by Sept 20",
    tag: "Project",
    color: "#fdf4ff",
    border: "#e9d5ff",
    pinned: false,
    updatedAt: "3 days ago",
  },
  {
    id: "n6",
    title: "MiniLM vs BGE Reranker — Comparison",
    body: "Empirical results from evaluation:\n\nMiniLM cross-encoder:\n- MRR@10: 0.74\n- Latency: ~18ms\n\nBGE Reranker:\n- MRR@10: 0.71\n- Latency: ~42ms\n\nConclusion: MiniLM wins on both accuracy and speed for this use case.",
    tag: "Research",
    color: "#eef2ff",
    border: "#c7d2fe",
    pinned: false,
    updatedAt: "4 days ago",
  },
];

const TAGS = ["All", "Research", "Healthcare", "Finance", "Traffic", "Project"];
const COLORS = [
  { bg: "#eef2ff", border: "#c7d2fe" },  // indigo
  { bg: "#f0fdf4", border: "#86efac" },  // green
  { bg: "#fffbeb", border: "#fcd34d" },  // amber
  { bg: "#fff1f2", border: "#fda4af" },  // rose
  { bg: "#fdf4ff", border: "#e9d5ff" },  // purple
  { bg: "#f0f9ff", border: "#7dd3fc" },  // sky
];

function Icon({ name, size = 18 }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "plus":    return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case "pin":     return <svg {...p}><path d="M12 17v5M8 8l2 5h4l2-5"/><path d="M5 8h14M9 8V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/></svg>;
    case "trash":   return <svg {...p}><path d="M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"/></svg>;
    case "close":   return <svg {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case "search":  return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-4.35-4.35"/></svg>;
    case "pencil":  return <svg {...p}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
    case "note":    return <svg {...p}><path d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"/><path d="M9 10h6M9 13.5h6M9 17h3.5"/></svg>;
    case "check":   return <svg {...p}><path d="M5 12.5l4.5 4.5L19 7"/></svg>;
    default: return null;
  }
}

/* ─── Editor modal ────────────────────────────────────────── */
function NoteModal({ note, onSave, onClose }) {
  const [title, setTitle] = useState(note?.title || "");
  const [body,  setBody]  = useState(note?.body  || "");
  const [tag,   setTag]   = useState(note?.tag   || "Research");
  const [color, setColor] = useState(
    note ? { bg: note.color, border: note.border } : COLORS[0]
  );

  const isNew = !note?.id;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isNew ? "New Note" : "Edit Note"}</h2>
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" size={17} />
          </button>
        </div>

        <input
          className="modal-title-input"
          placeholder="Note title…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        <textarea
          className="modal-body-input"
          placeholder="Write your note here…"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={10}
        />

        <div className="modal-footer">
          <div className="modal-footer-left">
            <select
              className="tag-select"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              {TAGS.filter((t) => t !== "All").map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <div className="color-row">
              {COLORS.map((c) => (
                <button
                  key={c.bg}
                  type="button"
                  className={`color-dot${color.bg === c.bg ? " active" : ""}`}
                  style={{ background: c.bg, border: `2px solid ${c.border}` }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>
          <button
            className="modal-save-btn"
            disabled={!title.trim()}
            onClick={() => {
              if (!title.trim()) return;
              onSave({
                id: note?.id || `n${Date.now()}`,
                title: title.trim(),
                body: body.trim(),
                tag,
                color: color.bg,
                border: color.border,
                pinned: note?.pinned || false,
                updatedAt: "Just now",
              });
              onClose();
            }}
          >
            <Icon name="check" size={15} /> Save Note
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export default function Notes() {
  const navigate = useNavigate();
  const [notes,        setNotes]        = useState(INITIAL_NOTES);
  const [activeTag,    setActiveTag]    = useState("All");
  const [search,       setSearch]       = useState("");
  const [editing,      setEditing]      = useState(null);   // null | note obj | "new"
  const [deleteId,     setDeleteId]     = useState(null);

  /* ── helpers ── */
  const filtered = notes
    .filter((n) => activeTag === "All" || n.tag === activeTag)
    .filter((n) =>
      !search.trim() ||
      n.title.toLowerCase().includes(search.trim().toLowerCase()) ||
      n.body.toLowerCase().includes(search.trim().toLowerCase())
    )
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  const handleSave = (updated) => {
    setNotes((prev) => {
      const idx = prev.findIndex((n) => n.id === updated.id);
      return idx >= 0
        ? prev.map((n) => (n.id === updated.id ? updated : n))
        : [updated, ...prev];
    });
  };

  const togglePin = (id) =>
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n))
    );

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    setDeleteId(null);
  };

  const pinnedCount = notes.filter((n) => n.pinned).length;

  return (
    <div className="notes-page">
      <style>{`
/* ===== Notes Page ===== */
.notes-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--paper); color: var(--ink);
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.notes-page *, .notes-page *::before, .notes-page *::after { box-sizing: border-box; margin: 0; }
.notes-page h1, .notes-page h2, .notes-page h3 { font-family: "Space Grotesk", sans-serif; }
.notes-page a { color: inherit; text-decoration: none; }
.notes-page button, .notes-page select { font-family: inherit; cursor: pointer; }
.notes-page textarea, .notes-page input { font-family: inherit; }

/* ── nav ── */
.notes-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.notes-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.notes-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.notes-page .nav-right { display: flex; align-items: center; gap: 12px; }
.notes-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.notes-page .nav-link:hover { color: #fff; }
.notes-page .nav-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--indigo); color: #fff; border: none;
  font-size: 13.5px; font-weight: 600; transition: background 0.2s;
}
.notes-page .nav-btn:hover { background: var(--indigo-2); }

/* ── page wrap ── */
.notes-page .page-wrap { max-width: 1100px; margin: 0 auto; padding: 48px 28px 100px; }

/* ── page header ── */
.notes-page .page-head { margin-bottom: 32px; }
.notes-page .page-head h1 { font-size: 34px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 6px; }
.notes-page .page-head p { font-size: 14.5px; color: var(--slate); }

/* ── toolbar ── */
.notes-page .toolbar {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; flex-wrap: wrap; margin-bottom: 28px;
}
.notes-page .search-wrap {
  display: flex; align-items: center; gap: 9px;
  background: var(--panel); border: 1.5px solid var(--line);
  border-radius: 12px; padding: 10px 14px;
  flex: 1; max-width: 340px; transition: border-color 0.2s;
}
.notes-page .search-wrap:focus-within { border-color: var(--indigo); }
.notes-page .search-wrap input {
  border: none; outline: none; font-size: 14px;
  color: var(--ink); background: transparent; flex: 1;
}
.notes-page .search-wrap input::placeholder { color: var(--slate-l); }
.notes-page .search-clear { background: none; border: none; color: var(--slate-l); display: flex; padding: 1px; transition: color 0.2s; }
.notes-page .search-clear:hover { color: var(--ink); }

.notes-page .new-note-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
  flex-shrink: 0;
}
.notes-page .new-note-btn:hover { background: var(--indigo); }

/* ── tag filter ── */
.notes-page .tag-filter {
  display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 28px;
}
.notes-page .tag-btn {
  padding: 7px 16px; border-radius: 100px; border: 1.5px solid var(--line);
  background: var(--panel); font-size: 13px; font-weight: 500;
  color: var(--slate); transition: all 0.2s;
}
.notes-page .tag-btn:hover { border-color: var(--slate-l); color: var(--ink); }
.notes-page .tag-btn.active {
  background: var(--ink); color: #fff; border-color: transparent;
}

/* ── notes grid ── */
.notes-page .notes-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
}
@media (max-width: 560px) { .notes-page .notes-grid { grid-template-columns: 1fr; } }

/* ── note card ── */
.notes-page .note-card {
  border-radius: 20px; padding: 22px;
  border: 1.5px solid transparent;
  position: relative; transition: transform 0.22s, box-shadow 0.22s;
  display: flex; flex-direction: column; gap: 12px;
}
.notes-page .note-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px -12px rgba(12,15,23,0.18);
}
.notes-page .note-card-top {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;
}
.notes-page .note-tag {
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; color: var(--slate);
  font-family: "IBM Plex Mono", monospace;
}
.notes-page .note-actions { display: flex; gap: 4px; opacity: 0; transition: opacity 0.2s; }
.notes-page .note-card:hover .note-actions { opacity: 1; }
.notes-page .note-action-btn {
  width: 28px; height: 28px; border-radius: 8px;
  border: none; background: rgba(12,15,23,0.07);
  display: flex; align-items: center; justify-content: center;
  color: var(--slate); transition: background 0.2s, color 0.2s;
}
.notes-page .note-action-btn:hover { background: rgba(12,15,23,0.15); color: var(--ink); }
.notes-page .note-action-btn.pinned { color: var(--indigo); background: rgba(79,70,229,0.12); }
.notes-page .note-action-btn.danger:hover { background: #fee2e2; color: #dc2626; }

.notes-page .note-title { font-size: 15.5px; font-weight: 700; line-height: 1.35; font-family: "Space Grotesk", sans-serif; }
.notes-page .note-body {
  font-size: 13px; color: var(--slate); line-height: 1.6;
  white-space: pre-wrap; word-break: break-word;
  display: -webkit-box; -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; overflow: hidden;
}
.notes-page .note-footer {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11.5px; color: var(--slate-l); margin-top: auto;
}
.notes-page .pin-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 10.5px; font-weight: 700; color: var(--indigo);
}

/* ── empty ── */
.notes-page .empty {
  text-align: center; padding: 60px 20px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 22px; grid-column: 1 / -1;
}
.notes-page .empty-icon { font-size: 48px; margin-bottom: 14px; }
.notes-page .empty h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; font-family: "Space Grotesk", sans-serif; }
.notes-page .empty p { color: var(--slate); font-size: 14.5px; margin-bottom: 20px; }
.notes-page .empty-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 22px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.notes-page .empty-btn:hover { background: var(--indigo); }

/* ── modal ── */
.notes-page .modal-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.45);
  backdrop-filter: blur(4px); display: flex;
  align-items: center; justify-content: center;
  z-index: 500; padding: 20px;
}
.notes-page .modal-box {
  background: #fff; border-radius: 24px;
  width: 100%; max-width: 560px;
  box-shadow: 0 24px 60px -12px rgba(12,15,23,0.35);
  display: flex; flex-direction: column; gap: 16px;
  padding: 28px; max-height: 90vh; overflow-y: auto;
}
.notes-page .modal-header {
  display: flex; align-items: center; justify-content: space-between;
}
.notes-page .modal-header h2 { font-size: 20px; font-weight: 700; font-family: "Space Grotesk", sans-serif; }
.notes-page .modal-close {
  width: 32px; height: 32px; border-radius: 9px;
  border: none; background: var(--paper);
  display: flex; align-items: center; justify-content: center;
  color: var(--slate); transition: background 0.2s;
}
.notes-page .modal-close:hover { background: var(--paper-2); }
.notes-page .modal-title-input {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); font-size: 15.5px;
  font-weight: 700; color: var(--ink); outline: none;
  font-family: "Space Grotesk", sans-serif;
  transition: border-color 0.2s;
}
.notes-page .modal-title-input:focus { border-color: var(--indigo); }
.notes-page .modal-body-input {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); font-size: 14px;
  color: var(--ink); outline: none; resize: vertical;
  min-height: 180px; line-height: 1.65;
  transition: border-color 0.2s;
}
.notes-page .modal-body-input:focus { border-color: var(--indigo); }
.notes-page .modal-footer {
  display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
}
.notes-page .modal-footer-left { display: flex; align-items: center; gap: 12px; }
.notes-page .tag-select {
  padding: 8px 12px; border-radius: 10px;
  border: 1.5px solid var(--line); font-size: 13.5px;
  color: var(--ink); background: var(--paper); outline: none;
}
.notes-page .color-row { display: flex; gap: 6px; }
.notes-page .color-dot {
  width: 20px; height: 20px; border-radius: 50%;
  transition: transform 0.2s; outline-offset: 2px;
}
.notes-page .color-dot.active { transform: scale(1.3); outline: 2px solid var(--indigo); }
.notes-page .modal-save-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 22px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
}
.notes-page .modal-save-btn:hover:not(:disabled) { background: var(--indigo); }
.notes-page .modal-save-btn:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── confirm delete ── */
.notes-page .confirm-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 600; padding: 20px;
}
.notes-page .confirm-box {
  background: #fff; border-radius: 20px; padding: 28px;
  max-width: 360px; width: 100%;
  box-shadow: 0 20px 50px -12px rgba(12,15,23,0.35);
  text-align: center;
}
.notes-page .confirm-box h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; font-family: "Space Grotesk", sans-serif; }
.notes-page .confirm-box p { font-size: 14px; color: var(--slate); margin-bottom: 24px; line-height: 1.55; }
.notes-page .confirm-btns { display: flex; gap: 10px; justify-content: center; }
.notes-page .confirm-cancel {
  padding: 10px 22px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 14px; font-weight: 600; transition: all 0.2s;
}
.notes-page .confirm-cancel:hover { background: var(--paper-2); }
.notes-page .confirm-delete {
  padding: 10px 22px; border-radius: 100px;
  background: #dc2626; color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.notes-page .confirm-delete:hover { background: #b91c1c; }
`}</style>

      {/* ── NAV ── */}
      <nav>
        <Link to="/" className="brand">
          <span className="brand-mark">N</span> NexusRAG
        </Link>
        <div className="nav-right">
          <Link to="/dashboard" className="nav-link">← Dashboard</Link>
          <Link to="/chat"      className="nav-link">Chat</Link>
          <button className="nav-btn" onClick={() => setEditing("new")}>
            <Icon name="plus" size={14} /> New Note
          </button>
        </div>
      </nav>

      <div className="page-wrap">
        {/* Header */}
        <div className="page-head">
          <h1>📝 Notes</h1>
          <p>{notes.length} notes · {pinnedCount} pinned</p>
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="search-wrap">
            <Icon name="search" size={16} />
            <input
              placeholder="Search notes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch("")}>
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
          <button className="new-note-btn" onClick={() => setEditing("new")}>
            <Icon name="plus" size={15} /> New Note
          </button>
        </div>

        {/* Tag filter */}
        <div className="tag-filter">
          {TAGS.map((t) => (
            <button
              key={t}
              className={`tag-btn${activeTag === t ? " active" : ""}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Notes grid */}
        <div className="notes-grid">
          {filtered.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">🗒️</div>
              <h3>No notes found</h3>
              <p>
                {search
                  ? `No notes match "${search}"`
                  : "Start by creating your first note."}
              </p>
              <button className="empty-btn" onClick={() => setEditing("new")}>
                <Icon name="plus" size={15} /> Create Note
              </button>
            </div>
          ) : (
            filtered.map((note) => (
              <div
                key={note.id}
                className="note-card"
                style={{ background: note.color, borderColor: note.border }}
              >
                <div className="note-card-top">
                  <span className="note-tag">{note.tag}</span>
                  <div className="note-actions">
                    <button
                      className={`note-action-btn${note.pinned ? " pinned" : ""}`}
                      title={note.pinned ? "Unpin" : "Pin"}
                      onClick={() => togglePin(note.id)}
                    >
                      <Icon name="pin" size={14} />
                    </button>
                    <button
                      className="note-action-btn"
                      title="Edit"
                      onClick={() => setEditing(note)}
                    >
                      <Icon name="pencil" size={14} />
                    </button>
                    <button
                      className="note-action-btn danger"
                      title="Delete"
                      onClick={() => setDeleteId(note.id)}
                    >
                      <Icon name="trash" size={14} />
                    </button>
                  </div>
                </div>

                <div className="note-title">{note.title}</div>
                {note.body && <div className="note-body">{note.body}</div>}

                <div className="note-footer">
                  <span>{note.updatedAt}</span>
                  {note.pinned && (
                    <span className="pin-badge">
                      <Icon name="pin" size={11} /> Pinned
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Edit / New modal ── */}
      {editing && (
        <div className="notes-page">
          <NoteModal
            note={editing === "new" ? null : editing}
            onSave={handleSave}
            onClose={() => setEditing(null)}
          />
        </div>
      )}

      {/* ── Delete confirm ── */}
      {deleteId && (
        <div className="confirm-overlay" onClick={() => setDeleteId(null)}>
          <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
            <h3>Delete note?</h3>
            <p>This action cannot be undone. The note will be permanently removed.</p>
            <div className="confirm-btns">
              <button className="confirm-cancel" onClick={() => setDeleteId(null)}>Cancel</button>
              <button className="confirm-delete" onClick={() => deleteNote(deleteId)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
