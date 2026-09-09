/**
 * SourceCitation — renders a single retrieved-source tag.
 * Used in Chat.jsx under every RAG answer.
 *
 * Props:
 *   index   {number}  — 1-based position
 *   title   {string}  — document / dataset name
 *   page    {string}  — page ref, e.g. "p. 42" or "Rule 195"
 *   score   {number}  — relevance score 0–1
 *   href    {string?} — optional external link
 */
export default function SourceCitation({ index, title, page, score, href }) {
  const pct = Math.round((score ?? 0) * 100);

  const inner = (
    <>
      <style>{`
        .src-citation {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 12px; border-radius: 10px;
          background: #f5f3ff; border: 1px solid #c7d2fe;
          font-size: 12.5px; width: 100%;
          transition: background 0.2s, border-color 0.2s;
          cursor: default; text-decoration: none; color: inherit;
        }
        a.src-citation { cursor: pointer; }
        .src-citation:hover { background: #eef2ff; border-color: #a5b4fc; }
        .src-num {
          width: 22px; height: 22px; border-radius: 6px;
          background: #4f46e5; color: #fff;
          font-size: 10.5px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .src-title { flex: 1; font-weight: 600; }
        .src-page {
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px; color: #9296a6;
        }
        .src-score {
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px; color: #22c55e; font-weight: 600;
        }
      `}</style>
      <span className="src-num">{index}</span>
      <span className="src-title">{title}</span>
      {page  && <span className="src-page">{page}</span>}
      {score != null && <span className="src-score">{pct}%</span>}
    </>
  );

  if (href) {
    return (
      <a className="src-citation" href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <div className="src-citation">{inner}</div>;
}
