/**
 * StatCard — a single stat tile used in dashboards.
 *
 * Props:
 *   icon    {ReactNode} — icon element
 *   label   {string}    — short label below value
 *   value   {string}    — big number / text
 *   sub     {string?}   — small subtext
 *   accent  {string?}   — CSS color for the icon bg tint
 *   onClick {fn?}       — optional click handler
 */
export default function StatCard({ icon, label, value, sub, accent = "#4f46e5", onClick }) {
  return (
    <>
      <style>{`
        .stat-card-wrap {
          background: #fff;
          border: 1px solid rgba(12,15,23,0.1);
          border-radius: 18px;
          padding: 24px;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .stat-card-wrap[data-clickable="true"] { cursor: pointer; }
        .stat-card-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -10px rgba(12,15,23,0.18);
        }
        .sc-icon {
          width: 42px; height: 42px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .sc-val {
          font-size: 30px; font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          letter-spacing: -0.02em; line-height: 1;
          margin-bottom: 6px;
        }
        .sc-label { font-size: 13.5px; font-weight: 600; margin-bottom: 4px; }
        .sc-sub { font-size: 12px; color: #9296a6; }
      `}</style>

      <div
        className="stat-card-wrap"
        data-clickable={!!onClick}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <div
          className="sc-icon"
          style={{
            background: `color-mix(in srgb, ${accent} 14%, white)`,
            color: accent,
          }}
        >
          {icon}
        </div>
        <div className="sc-val">{value}</div>
        <div className="sc-label">{label}</div>
        {sub && <div className="sc-sub">{sub}</div>}
      </div>
    </>
  );
}
