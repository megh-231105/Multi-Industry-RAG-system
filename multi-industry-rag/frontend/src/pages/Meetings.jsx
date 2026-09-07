import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ─── Helpers ─────────────────────────────────────────────── */
const TODAY = new Date();
const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
const fmtTime12 = (t) => {
  if (!t) return "";
  const [h, m] = t.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};
const todayISO = () => TODAY.toISOString().slice(0, 10);
const addDays = (d, n) => {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
};

/* ─── Industries ──────────────────────────────────────────── */
const INDUSTRY_OPTIONS = [
  "🏥 Healthcare",   "💰 Finance",      "🚦 Traffic",
  "🔬 Research",     "💻 IT & AI",      "⚖️ Legal",
  "🛒 Retail",       "⚡ Energy",        "🎓 Education",
  "🏭 Manufacturing","🌾 Agriculture",  "🚚 Logistics",
  "✈️ Aviation",     "🏢 Real Estate",  "🎮 Entertainment",
  "🛡️ Insurance",   "🏛️ Government",  "🚗 Automotive",
];

const DURATION_OPTIONS = ["15 min", "30 min", "45 min", "60 min", "90 min", "2 hrs", "3 hrs"];

/* ─── Initial meetings ────────────────────────────────────── */
const INITIAL = [
  {
    id: "m1", title: "RAG System Demo — Healthcare Sector",
    date: fmtDate(addDays(TODAY, 0)), time: "10:00 AM",
    duration: "45 min", status: "upcoming",
    attendees: ["You", "Dr. Priya S.", "Rahul M."],
    industry: "🏥 Healthcare", link: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "m2", title: "Finance Q&A Pipeline Review",
    date: fmtDate(addDays(TODAY, 0)), time: "3:30 PM",
    duration: "60 min", status: "upcoming",
    attendees: ["You", "Aman K.", "Shruti P."],
    industry: "💰 Finance", link: "https://zoom.us/j/123456789",
  },
  {
    id: "m3", title: "Traffic Dataset Indexing Walkthrough",
    date: fmtDate(addDays(TODAY, -1)), time: "11:00 AM",
    duration: "30 min", status: "done",
    attendees: ["You", "Neha R."],
    industry: "🚦 Traffic", link: null,
  },
  {
    id: "m4", title: "Final Year Project Guide Review",
    date: fmtDate(addDays(TODAY, -2)), time: "2:00 PM",
    duration: "90 min", status: "done",
    attendees: ["You", "Prof. Desai", "Meera S."],
    industry: "🔬 Research", link: null,
  },
  {
    id: "m5", title: "MiniLM Reranker Evaluation Meeting",
    date: fmtDate(addDays(TODAY, 2)), time: "10:30 AM",
    duration: "60 min", status: "upcoming",
    attendees: ["You", "Vikram T.", "Ananya B."],
    industry: "💻 IT & AI", link: "https://teams.microsoft.com/l/meetup",
  },
];

/* ─── Icon set ────────────────────────────────────────────── */
function Icon({ name, size = 18 }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "calendar": return <svg {...p}><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>;
    case "clock":    return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>;
    case "users":    return <svg {...p}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.87 2.69-7 6-7h.5"/><circle cx="16" cy="10" r="2.5"/><path d="M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5"/></svg>;
    case "video":    return <svg {...p}><path d="M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M22 8.5l-5 3.5 5 3.5z"/></svg>;
    case "plus":     return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case "check":    return <svg {...p}><path d="M5 12.5l4.5 4.5L19 7"/></svg>;
    case "close":    return <svg {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case "chat":     return <svg {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"/></svg>;
    case "trash":    return <svg {...p}><path d="M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"/></svg>;
    case "link":     return <svg {...p}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
    case "person":   return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></svg>;
    default: return null;
  }
}

/* ─── Schedule Modal ──────────────────────────────────────── */
function ScheduleModal({ onSave, onClose }) {
  const [title,     setTitle]     = useState("");
  const [industry,  setIndustry]  = useState("🏥 Healthcare");
  const [date,      setDate]      = useState(todayISO());
  const [time,      setTime]      = useState("10:00");
  const [duration,  setDuration]  = useState("30 min");
  const [link,      setLink]      = useState("");
  const [attendeeInput, setAttendeeInput] = useState("");
  const [attendees, setAttendees] = useState(["You"]);
  const [error,     setError]     = useState("");

  const addAttendee = () => {
    const v = attendeeInput.trim();
    if (!v) return;
    if (attendees.includes(v)) { setAttendeeInput(""); return; }
    setAttendees((a) => [...a, v]);
    setAttendeeInput("");
  };
  const removeAttendee = (name) =>
    name !== "You" && setAttendees((a) => a.filter((x) => x !== name));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) { setError("Title is required."); return; }
    if (!date)         { setError("Please choose a date."); return; }
    setError("");
    onSave({
      id: `m${Date.now()}`,
      title: title.trim(),
      industry,
      date: fmtDate(date),
      time: fmtTime12(time),
      duration,
      attendees,
      link: link.trim() || null,
      status: "upcoming",
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-hd">
          <h2>📅 Schedule New Meeting</h2>
          <button className="modal-x" onClick={onClose} aria-label="Close">
            <Icon name="close" size={16} />
          </button>
        </div>

        {error && (
          <div className="modal-error">⚠️ {error}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Title */}
          <div className="mfield">
            <label>Meeting Title *</label>
            <input
              type="text"
              placeholder="e.g. RAG System Demo — Healthcare"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError(""); }}
              autoFocus
              required
            />
          </div>

          {/* Industry */}
          <div className="mfield">
            <label>Industry / Topic</label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
              {INDUSTRY_OPTIONS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          {/* Date + Time */}
          <div className="mfield-row">
            <div className="mfield">
              <label>Date *</label>
              <input
                type="date"
                value={date}
                min={todayISO()}
                onChange={(e) => { setDate(e.target.value); setError(""); }}
                required
              />
            </div>
            <div className="mfield">
              <label>Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          {/* Duration */}
          <div className="mfield">
            <label>Duration</label>
            <div className="duration-chips">
              {DURATION_OPTIONS.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`dur-chip${duration === d ? " active" : ""}`}
                  onClick={() => setDuration(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Attendees */}
          <div className="mfield">
            <label>Attendees</label>
            <div className="attendee-input-row">
              <input
                type="text"
                placeholder="Type a name and press Enter"
                value={attendeeInput}
                onChange={(e) => setAttendeeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { e.preventDefault(); addAttendee(); }
                }}
              />
              <button type="button" className="add-attendee-btn" onClick={addAttendee}>
                <Icon name="plus" size={14} /> Add
              </button>
            </div>
            {attendees.length > 0 && (
              <div className="attendee-list">
                {attendees.map((a) => (
                  <span key={a} className="attendee-tag">
                    <Icon name="person" size={12} />
                    {a}
                    {a !== "You" && (
                      <button
                        type="button"
                        className="remove-att"
                        onClick={() => removeAttendee(a)}
                        aria-label={`Remove ${a}`}
                      >
                        <Icon name="close" size={10} />
                      </button>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Meeting link */}
          <div className="mfield">
            <label>Meeting Link (optional)</label>
            <div className="link-input-wrap">
              <Icon name="link" size={16} />
              <input
                type="url"
                placeholder="https://zoom.us/j/..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">
              <Icon name="check" size={15} /> Schedule Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function Meetings() {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState(INITIAL);
  const [filter,   setFilter]   = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [deleteId,  setDeleteId]  = useState(null);
  const [toast,     setToast]     = useState("");

  const shown = meetings
    .filter((m) => filter === "all" || m.status === filter)
    .sort((a, b) => (a.status === "upcoming" ? -1 : 1));

  const upcomingCount = meetings.filter((m) => m.status === "upcoming").length;

  const handleSave = (m) => {
    setMeetings((prev) => [m, ...prev]);
    showToast("Meeting scheduled successfully! 🎉");
  };

  const handleDelete = (id) => {
    setMeetings((prev) => prev.filter((m) => m.id !== id));
    setDeleteId(null);
    showToast("Meeting removed.");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="meetings-page">
      <style>{`
/* ===== Meetings Page ===== */
.meetings-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --green: #22c55e; --amber: #f59e0b; --coral: #ef4444;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--bg, var(--paper)); color: var(--text, var(--ink));
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.meetings-page *, .meetings-page *::before, .meetings-page *::after { box-sizing: border-box; margin: 0; }
.meetings-page h1,.meetings-page h2,.meetings-page h3 { font-family: "Space Grotesk", sans-serif; }
.meetings-page a { color: inherit; text-decoration: none; }
.meetings-page button, .meetings-page select { font-family: inherit; cursor: pointer; }
.meetings-page input, .meetings-page textarea, .meetings-page select { font-family: inherit; }
.meetings-page label { display: block; }

/* ── nav ── */
.meetings-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--nav-bg, var(--navy));
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.meetings-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.meetings-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.meetings-page .nav-right { display: flex; align-items: center; gap: 14px; }
.meetings-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.meetings-page .nav-link:hover { color: #fff; }
.meetings-page .nav-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--indigo); color: #fff; border: none;
  font-size: 13.5px; font-weight: 600; transition: background 0.2s;
}
.meetings-page .nav-btn:hover { background: var(--indigo-2); }

/* ── toast ── */
.meetings-page .toast {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  background: var(--ink); color: #fff; padding: 12px 22px;
  border-radius: 100px; font-size: 14px; font-weight: 600;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 8px 24px -6px rgba(12,15,23,0.4);
  z-index: 9999; white-space: nowrap;
  animation: toast-in 0.3s ease;
}
@keyframes toast-in { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

/* ── page ── */
.meetings-page .page-wrap { max-width: 900px; margin: 0 auto; padding: 52px 28px 100px; }
.meetings-page .page-head { margin-bottom: 36px; }
.meetings-page .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo); margin-bottom: 12px;
}
.meetings-page .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber); box-shadow: 0 0 0 4px rgba(245,158,11,0.2);
}
.meetings-page .page-head h1 { font-size: 36px; font-weight: 700; letter-spacing: -0.01em; }
.meetings-page .head-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; flex-wrap: wrap; margin-top: 8px;
}
.meetings-page .head-sub { font-size: 15px; color: var(--slate); }
.meetings-page .new-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.meetings-page .new-btn:hover { background: var(--indigo); }

/* ── filter tabs ── */
.meetings-page .filter-tabs {
  display: inline-flex; gap: 4px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 4px; margin-bottom: 28px;
}
.meetings-page .ftab {
  padding: 8px 18px; border-radius: 9px; border: none;
  background: transparent; font-size: 13.5px; font-weight: 500;
  color: var(--slate); transition: all 0.2s;
}
.meetings-page .ftab.active { background: var(--ink); color: #fff; }
.meetings-page .ftab:hover:not(.active) { background: var(--paper-2); color: var(--ink); }

/* ── meeting cards ── */
.meetings-page .meetings-list { display: flex; flex-direction: column; gap: 16px; }
.meetings-page .meeting-card {
  background: var(--surface, var(--panel)); border: 1.5px solid var(--line);
  border-radius: 22px; padding: 26px 28px;
  transition: box-shadow 0.25s, border-color 0.25s;
}
.meetings-page .meeting-card:hover { box-shadow: 0 8px 28px -10px rgba(12,15,23,0.15); border-color: rgba(79,70,229,0.2); }
.meetings-page .meeting-card.upcoming { border-left: 4px solid var(--indigo); padding-left: 24px; }
.meetings-page .meeting-card.done { opacity: 0.75; }

.meetings-page .mc-top {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 16px;
}
.meetings-page .mc-title-row { flex: 1; }
.meetings-page .mc-industry { font-size: 12px; font-weight: 600; color: var(--slate); font-family: "IBM Plex Mono", monospace; margin-bottom: 7px; }
.meetings-page .mc-title { font-size: 17px; font-weight: 700; line-height: 1.3; font-family: "Space Grotesk", sans-serif; }
.meetings-page .mc-top-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

.meetings-page .status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 12px; border-radius: 100px; font-size: 12px; font-weight: 700;
}
.meetings-page .status-pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.meetings-page .status-pill.upcoming { background: #ede9fe; color: #6d28d9; }
.meetings-page .status-pill.done { background: #f1f5f9; color: var(--slate); }

.meetings-page .del-btn {
  width: 30px; height: 30px; border-radius: 8px;
  border: 1px solid var(--line); background: var(--paper);
  display: flex; align-items: center; justify-content: center;
  color: var(--slate-l); transition: all 0.2s;
}
.meetings-page .del-btn:hover { border-color: #fca5a5; background: #fef2f2; color: #dc2626; }

.meetings-page .mc-meta { display: flex; flex-wrap: wrap; gap: 18px; margin-bottom: 18px; }
.meetings-page .mc-meta-item { display: flex; align-items: center; gap: 7px; font-size: 13.5px; color: var(--slate); }
.meetings-page .attendee-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.meetings-page .attendee-chip { background: var(--paper-2); border-radius: 100px; padding: 3px 10px; font-size: 12px; font-weight: 600; }

.meetings-page .mc-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.meetings-page .mc-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 13px; font-weight: 600; color: var(--ink);
  transition: all 0.2s; text-decoration: none;
}
.meetings-page .mc-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.meetings-page .mc-btn.primary { background: var(--indigo); color: #fff; border-color: transparent; }
.meetings-page .mc-btn.primary:hover { background: var(--indigo-2); }

/* ── empty ── */
.meetings-page .empty { text-align: center; padding: 60px; background: var(--surface, var(--panel)); border: 1px solid var(--line); border-radius: 22px; }
.meetings-page .empty-icon { font-size: 48px; margin-bottom: 16px; }
.meetings-page .empty h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; font-family: "Space Grotesk", sans-serif; }
.meetings-page .empty p { color: var(--slate); font-size: 14.5px; margin-bottom: 20px; }
.meetings-page .empty-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 22px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.meetings-page .empty-btn:hover { background: var(--indigo); }

/* ── confirm delete ── */
.meetings-page .confirm-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 600; padding: 20px;
}
.meetings-page .confirm-box {
  background: #fff; border-radius: 20px; padding: 28px;
  max-width: 360px; width: 100%;
  box-shadow: 0 20px 50px -12px rgba(12,15,23,0.35); text-align: center;
}
.meetings-page .confirm-box h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; font-family: "Space Grotesk", sans-serif; }
.meetings-page .confirm-box p { font-size: 14px; color: var(--slate); margin-bottom: 24px; line-height: 1.55; }
.meetings-page .confirm-btns { display: flex; gap: 10px; justify-content: center; }
.meetings-page .confirm-cancel { padding: 10px 22px; border-radius: 100px; border: 1.5px solid var(--line); background: var(--paper-2); font-size: 14px; font-weight: 600; transition: all 0.2s; }
.meetings-page .confirm-cancel:hover { background: var(--paper); }
.meetings-page .confirm-delete { padding: 10px 22px; border-radius: 100px; background: #dc2626; color: #fff; border: none; font-size: 14px; font-weight: 600; transition: background 0.2s; }
.meetings-page .confirm-delete:hover { background: #b91c1c; }

/* ══════════ MODAL ══════════ */
.meetings-page .modal-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.5);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  z-index: 500; padding: 20px;
}
.meetings-page .modal-box {
  background: #fff; border-radius: 24px;
  width: 100%; max-width: 560px;
  box-shadow: 0 24px 60px -12px rgba(12,15,23,0.4);
  padding: 28px; max-height: 92vh; overflow-y: auto;
  display: flex; flex-direction: column; gap: 0;
  animation: modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes modal-pop { from { opacity:0; transform: scale(0.93); } to { opacity:1; transform: scale(1); } }

.meetings-page .modal-hd {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px;
}
.meetings-page .modal-hd h2 { font-size: 19px; font-weight: 700; font-family: "Space Grotesk", sans-serif; }
.meetings-page .modal-x {
  width: 32px; height: 32px; border-radius: 9px;
  border: none; background: #f1f0fa;
  display: flex; align-items: center; justify-content: center;
  color: var(--slate); transition: background 0.2s;
}
.meetings-page .modal-x:hover { background: #e8e6f6; }
.meetings-page .modal-error {
  background: #fff1f1; border: 1px solid #fecaca;
  border-radius: 10px; padding: 10px 14px;
  font-size: 13.5px; color: #dc2626; margin-bottom: 16px;
}

/* form fields */
.meetings-page .mfield { margin-bottom: 18px; }
.meetings-page .mfield > label {
  font-size: 13px; font-weight: 600; color: var(--ink);
  margin-bottom: 7px; display: block;
}
.meetings-page .mfield input[type="text"],
.meetings-page .mfield input[type="url"],
.meetings-page .mfield input[type="date"],
.meetings-page .mfield input[type="time"],
.meetings-page .mfield select {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); background: #f8f7fc;
  font-size: 14px; color: var(--ink); outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.meetings-page .mfield input:focus,
.meetings-page .mfield select:focus {
  border-color: var(--indigo); box-shadow: 0 0 0 3px rgba(79,70,229,0.1);
  background: #fff;
}
.meetings-page .mfield-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 480px) { .meetings-page .mfield-row { grid-template-columns: 1fr; } }

/* duration chips */
.meetings-page .duration-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.meetings-page .dur-chip {
  padding: 7px 14px; border-radius: 100px;
  border: 1.5px solid var(--line); background: #f8f7fc;
  font-size: 13px; font-weight: 500; color: var(--slate);
  transition: all 0.2s;
}
.meetings-page .dur-chip:hover { border-color: var(--indigo); color: var(--indigo); }
.meetings-page .dur-chip.active { background: var(--indigo); color: #fff; border-color: transparent; }

/* attendees */
.meetings-page .attendee-input-row { display: flex; gap: 8px; margin-bottom: 10px; }
.meetings-page .attendee-input-row input { flex: 1; }
.meetings-page .add-attendee-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 10px 14px; border-radius: 12px;
  background: var(--ink); color: #fff; border: none;
  font-size: 13px; font-weight: 600; white-space: nowrap; transition: background 0.2s;
}
.meetings-page .add-attendee-btn:hover { background: var(--indigo); }
.meetings-page .attendee-list { display: flex; flex-wrap: wrap; gap: 7px; }
.meetings-page .attendee-tag {
  display: inline-flex; align-items: center; gap: 5px;
  background: #eef2ff; border: 1px solid #c7d2fe;
  border-radius: 100px; padding: 4px 10px;
  font-size: 12.5px; font-weight: 600; color: var(--indigo);
}
.meetings-page .remove-att {
  background: none; border: none; color: var(--indigo); display: flex;
  padding: 0; margin-left: 2px; opacity: 0.6; transition: opacity 0.2s;
}
.meetings-page .remove-att:hover { opacity: 1; }

/* link input */
.meetings-page .link-input-wrap {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); background: #f8f7fc;
  transition: border-color 0.2s;
}
.meetings-page .link-input-wrap:focus-within { border-color: var(--indigo); background: #fff; }
.meetings-page .link-input-wrap svg { color: var(--slate-l); flex-shrink: 0; }
.meetings-page .link-input-wrap input {
  border: none; outline: none; background: transparent;
  font-size: 14px; color: var(--ink); flex: 1; padding: 0;
}
.meetings-page .link-input-wrap input::placeholder { color: var(--slate-l); }

/* modal footer */
.meetings-page .modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 22px; }
.meetings-page .cancel-btn {
  padding: 11px 22px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper-2);
  font-size: 14px; font-weight: 600; transition: all 0.2s;
}
.meetings-page .cancel-btn:hover { background: var(--paper); border-color: var(--slate-l); }
.meetings-page .save-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 22px; border-radius: 100px;
  background: var(--indigo); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
}
.meetings-page .save-btn:hover { background: var(--indigo-2); }
`}</style>

      {/* ── Toast ── */}
      {toast && <div className="toast">✅ {toast}</div>}

      {/* ── Nav ── */}
      <nav>
        <Link to="/" className="brand">
          <span className="brand-mark">N</span> NexusRAG
        </Link>
        <div className="nav-right">
          <Link to="/dashboard" className="nav-link">← Dashboard</Link>
          <Link to="/chat"      className="nav-link">Chat</Link>
          <button className="nav-btn" onClick={() => setShowModal(true)}>
            <Icon name="plus" size={14} /> Schedule Meeting
          </button>
        </div>
      </nav>

      <div className="page-wrap">
        {/* Header */}
        <div className="page-head">
          <div className="eyebrow">Scheduled</div>
          <h1>My Meetings</h1>
          <div className="head-row">
            <p className="head-sub">
              {upcomingCount} upcoming · {meetings.length - upcomingCount} past · {meetings.length} total
            </p>
            <button className="new-btn" onClick={() => setShowModal(true)}>
              <Icon name="plus" size={15} /> Schedule New Meeting
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          {[["all", "All"], ["upcoming", "Upcoming"], ["done", "Past"]].map(([v, l]) => (
            <button
              key={v}
              className={`ftab${filter === v ? " active" : ""}`}
              onClick={() => setFilter(v)}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Meeting list */}
        <div className="meetings-list">
          {shown.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">📅</div>
              <h3>No meetings found</h3>
              <p>{filter !== "all" ? `No ${filter} meetings.` : "Start by scheduling your first meeting."}</p>
              <button className="empty-btn" onClick={() => setShowModal(true)}>
                <Icon name="plus" size={15} /> Schedule Meeting
              </button>
            </div>
          ) : (
            shown.map((m) => (
              <div key={m.id} className={`meeting-card ${m.status}`}>
                <div className="mc-top">
                  <div className="mc-title-row">
                    <div className="mc-industry">{m.industry}</div>
                    <div className="mc-title">{m.title}</div>
                  </div>
                  <div className="mc-top-right">
                    <span className={`status-pill ${m.status}`}>
                      {m.status === "upcoming" ? "Upcoming" : "Completed"}
                    </span>
                    <button
                      className="del-btn"
                      title="Remove meeting"
                      onClick={() => setDeleteId(m.id)}
                    >
                      <Icon name="trash" size={14} />
                    </button>
                  </div>
                </div>

                <div className="mc-meta">
                  <div className="mc-meta-item">
                    <Icon name="calendar" size={15} /> {m.date}
                  </div>
                  <div className="mc-meta-item">
                    <Icon name="clock" size={15} /> {m.time} · {m.duration}
                  </div>
                  {m.attendees?.length > 0 && (
                    <div className="mc-meta-item">
                      <Icon name="users" size={15} />
                      <div className="attendee-chips">
                        {m.attendees.map((a) => (
                          <span key={a} className="attendee-chip">{a}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mc-actions">
                  {m.status === "upcoming" && m.link && (
                    <a href={m.link} className="mc-btn primary" target="_blank" rel="noopener noreferrer">
                      <Icon name="video" size={14} /> Join Meeting
                    </a>
                  )}
                  <button className="mc-btn" onClick={() => navigate("/chat")}>
                    <Icon name="chat" size={14} /> Open Chat
                  </button>
                  {m.status === "done" && (
                    <button className="mc-btn">View Notes</button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Schedule modal ── */}
      {showModal && (
        <div className="meetings-page">
          <ScheduleModal
            onSave={handleSave}
            onClose={() => setShowModal(false)}
          />
        </div>
      )}

      {/* ── Delete confirm ── */}
      {deleteId && (
        <div className="confirm-overlay" onClick={() => setDeleteId(null)}>
          <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
            <h3>Remove meeting?</h3>
            <p>This will permanently delete the meeting from your schedule.</p>
            <div className="confirm-btns">
              <button className="confirm-cancel" onClick={() => setDeleteId(null)}>Cancel</button>
              <button className="confirm-delete" onClick={() => handleDelete(deleteId)}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
