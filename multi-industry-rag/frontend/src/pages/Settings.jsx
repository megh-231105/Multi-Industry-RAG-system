import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth }  from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function Icon({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "user":     return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></svg>;
    case "lock":     return <svg {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>;
    case "bell":     return <svg {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
    case "palette":  return <svg {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21"/></svg>;
    case "database": return <svg {...p}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>;
    case "logout":   return <svg {...p}><path d="M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"/><path d="M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"/></svg>;
    case "check":    return <svg {...p}><path d="M5 12.5l4.5 4.5L19 7"/></svg>;
    case "chevron":  return <svg {...p}><path d="M9 6l6 6-6 6"/></svg>;
    default: return null;
  }
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        width: 44, height: 24, borderRadius: 100, border: "none", cursor: "pointer",
        background: checked ? "#4f46e5" : "#d1d5db",
        position: "relative", transition: "background 0.25s", flexShrink: 0,
      }}
    >
      <span style={{
        position: "absolute", top: 3, left: checked ? 23 : 3,
        width: 18, height: 18, borderRadius: "50%", background: "#fff",
        transition: "left 0.25s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
      }} />
    </button>
  );
}

const SECTIONS = [
  { key: "profile",  icon: "user",     label: "Profile" },
  { key: "security", icon: "lock",     label: "Security" },
  { key: "notifs",   icon: "bell",     label: "Notifications" },
  { key: "appearance", icon: "palette", label: "Appearance" },
  { key: "data",     icon: "database", label: "Data & Privacy" },
];

export default function Settings() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [active, setActive] = useState("profile");
  const [saved, setSaved]   = useState(false);

  // avatar
  const fileInputRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState(
    () => localStorage.getItem("nexus-avatar") || null
  );
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target.result;
      setAvatarUrl(url);
      localStorage.setItem("nexus-avatar", url);
    };
    reader.readAsDataURL(file);
  };
  const removeAvatar = () => {
    setAvatarUrl(null);
    localStorage.removeItem("nexus-avatar");
  };

  // profile
  const [name,  setName]  = useState(user?.name  || "Matthew Johnson");
  const [email, setEmail] = useState(user?.email || "user@example.com");
  const [bio,   setBio]   = useState("Final year project — Multi-Industry RAG System");

  // security
  const [curPw,  setCurPw]  = useState("");
  const [newPw,  setNewPw]  = useState("");
  const [confPw, setConfPw] = useState("");

  // notifications
  const [notifs, setNotifs] = useState({
    uploadDone: true, queryAlert: false, weeklyDigest: true, systemUpdates: true,
  });

  // appearance — use global ThemeContext
  const { theme, setLight, setDark } = useTheme();
  const [compact, setCompact] = useState(false);

  const saveToast = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <div className="settings-page">
      <style>{`
.settings-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --amber: #f59e0b; --green: #22c55e; --coral: #ef4444;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--paper); color: var(--ink);
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.settings-page *, .settings-page *::before, .settings-page *::after { box-sizing: border-box; margin: 0; }
.settings-page h1, .settings-page h2, .settings-page h3 { font-family: "Space Grotesk", sans-serif; }
.settings-page a { color: inherit; text-decoration: none; }
.settings-page button { font-family: inherit; cursor: pointer; }
.settings-page input, .settings-page textarea { font-family: inherit; }

/* nav */
.settings-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.settings-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.settings-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.settings-page .nav-right { display: flex; align-items: center; gap: 14px; }
.settings-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.settings-page .nav-link:hover { color: #fff; }

/* toast */
.settings-page .toast {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  background: var(--ink); color: #fff; padding: 12px 22px;
  border-radius: 100px; font-size: 14px; font-weight: 600;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 8px 24px -6px rgba(12,15,23,0.4);
  z-index: 999; animation: fade-in-up 0.3s ease;
}
@keyframes fade-in-up { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

/* layout */
.settings-page .layout {
  display: grid; grid-template-columns: 240px 1fr;
  max-width: 1000px; margin: 48px auto; gap: 28px; padding: 0 28px 80px;
}
@media (max-width: 760px) {
  .settings-page .layout { grid-template-columns: 1fr; }
}

/* sidebar */
.settings-page .settings-nav {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; padding: 18px 14px;
  height: fit-content; position: sticky; top: 100px;
}
.settings-page .settings-nav-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--slate-l); padding: 0 10px; margin-bottom: 12px;
}
.settings-page .sn-item {
  display: flex; align-items: center; gap: 10px;
  width: 100%; text-align: left; border: none; background: none;
  padding: 10px 12px; border-radius: 12px; font-size: 14px;
  color: var(--slate); transition: all 0.2s; margin-bottom: 2px;
}
.settings-page .sn-item:hover { background: var(--paper-2); color: var(--ink); }
.settings-page .sn-item.active { background: #eef2ff; color: var(--indigo); font-weight: 600; }

.settings-page .sn-divider { height: 1px; background: var(--line); margin: 14px 0; }
.settings-page .logout-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; text-align: left; border: none; background: none;
  padding: 10px 12px; border-radius: 12px; font-size: 14px;
  color: #dc2626; transition: background 0.2s;
}
.settings-page .logout-btn:hover { background: #fef2f2; }

/* content */
.settings-page .settings-content {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; padding: 32px;
}
.settings-page .sec-title { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
.settings-page .sec-desc { font-size: 14px; color: var(--slate); margin-bottom: 28px; line-height: 1.6; }

/* form fields */
.settings-page .field { margin-bottom: 22px; }
.settings-page .field label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 7px; }
.settings-page .field input, .settings-page .field textarea {
  width: 100%; padding: 12px 16px; border-radius: 12px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 14.5px; color: var(--ink); outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.settings-page .field input:focus, .settings-page .field textarea:focus {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.settings-page .field textarea { resize: vertical; min-height: 80px; }
.settings-page .field-hint { font-size: 12px; color: var(--slate-l); margin-top: 5px; }

.settings-page .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 600px) { .settings-page .two-col { grid-template-columns: 1fr; } }

/* avatar */
.settings-page .avatar-row {
  display: flex; align-items: center; gap: 18px; margin-bottom: 28px;
  padding-bottom: 28px; border-bottom: 1px solid var(--line);
}
.settings-page .avatar-wrap {
  position: relative; width: 80px; height: 80px; flex-shrink: 0; cursor: pointer;
}
.settings-page .avatar-circle {
  width: 80px; height: 80px; border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 28px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  overflow: hidden; border: 3px solid transparent;
  transition: border-color 0.2s;
}
.settings-page .avatar-wrap:hover .avatar-circle { border-color: var(--indigo); }
.settings-page .avatar-circle img { width: 100%; height: 100%; object-fit: cover; display: block; }
.settings-page .avatar-overlay {
  position: absolute; inset: 0; border-radius: 50%;
  background: rgba(12,15,23,0.55);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.2s;
  pointer-events: none;
}
.settings-page .avatar-wrap:hover .avatar-overlay { opacity: 1; }
.settings-page .avatar-overlay svg { color: #fff; }
.settings-page .avatar-file-input { display: none; }
.settings-page .avatar-info { flex: 1; }
.settings-page .avatar-info h3 { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
.settings-page .avatar-info p { font-size: 13px; color: var(--slate); margin-bottom: 12px; }
.settings-page .avatar-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.settings-page .avatar-btn {
  padding: 8px 16px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper-2);
  font-size: 13px; font-weight: 600; transition: all 0.2s; cursor: pointer;
}
.settings-page .avatar-btn:hover { background: var(--paper); border-color: var(--indigo); color: var(--indigo); }
.settings-page .avatar-btn.danger { border-color: #fca5a5; color: #dc2626; }
.settings-page .avatar-btn.danger:hover { background: #fef2f2; border-color: #dc2626; }

/* toggle rows */
.settings-page .toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 0; border-bottom: 1px solid var(--line);
}
.settings-page .toggle-row:last-child { border-bottom: none; }
.settings-page .toggle-meta .tl { font-size: 14px; font-weight: 600; margin-bottom: 3px; }
.settings-page .toggle-meta .ts { font-size: 12.5px; color: var(--slate); }

/* theme cards */
.settings-page .theme-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; }
.settings-page .theme-card {
  border: 2px solid var(--line); border-radius: 14px;
  padding: 18px; cursor: pointer; transition: all 0.2s; text-align: center;
}
.settings-page .theme-card.selected { border-color: var(--indigo); background: #eef2ff; }
.settings-page .theme-preview {
  width: 100%; height: 52px; border-radius: 9px; margin-bottom: 10px;
}
.settings-page .theme-preview.light { background: linear-gradient(135deg, #f1f0fa, #fff); border: 1px solid var(--line); }
.settings-page .theme-preview.dark  { background: linear-gradient(135deg, #0a1730, #1e2740); }
.settings-page .theme-label { font-size: 13.5px; font-weight: 700; }

/* save btn */
.settings-page .save-btn {
  padding: 12px 28px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
  margin-top: 8px;
}
.settings-page .save-btn:hover { background: var(--indigo); }
`}</style>

      {saved && (
        <div className="toast">
          <Icon name="check" size={16} /> Changes saved successfully
        </div>
      )}

      <nav>
        <Link to="/" className="brand"><span className="brand-mark">N</span> NexusRAG</Link>
        <div className="nav-right">
          <Link to="/dashboard" className="nav-link">← Dashboard</Link>
          <Link to="/chat" className="nav-link">Chat</Link>
        </div>
      </nav>

      <div className="layout">
        {/* Settings nav */}
        <div className="settings-nav">
          <div className="settings-nav-label">Settings</div>
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              className={`sn-item${active === s.key ? " active" : ""}`}
              onClick={() => setActive(s.key)}
            >
              <Icon name={s.icon} size={16} /> {s.label}
            </button>
          ))}
          <div className="sn-divider" />
          <button className="logout-btn" onClick={handleLogout}>
            <Icon name="logout" size={16} /> Sign Out
          </button>
        </div>

        {/* Content */}
        <div className="settings-content">

          {active === "profile" && (
            <>
              <h2 className="sec-title">Profile</h2>
              <p className="sec-desc">Manage your personal information and how others see you.</p>

              <div className="avatar-row">
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="avatar-file-input"
                  onChange={handleAvatarChange}
                />

                {/* Clickable avatar circle */}
                <div className="avatar-wrap" onClick={() => fileInputRef.current?.click()} title="Click to change photo">
                  <div className="avatar-circle">
                    {avatarUrl
                      ? <img src={avatarUrl} alt="Profile" />
                      : name.charAt(0).toUpperCase()
                    }
                  </div>
                  {/* Camera icon overlay on hover */}
                  <div className="avatar-overlay">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                </div>

                <div className="avatar-info">
                  <h3>{name}</h3>
                  <p>{email}</p>
                  <div className="avatar-actions">
                    <button className="avatar-btn" onClick={() => fileInputRef.current?.click()}>
                      📷 Upload Photo
                    </button>
                    {avatarUrl && (
                      <button className="avatar-btn danger" onClick={removeAvatar}>
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="two-col">
                <div className="field">
                  <label>Full Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                  <label>Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label>Bio</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
                <div className="field-hint">Brief description shown on your profile.</div>
              </div>
              <button className="save-btn" onClick={saveToast}>Save Profile</button>
            </>
          )}

          {active === "security" && (
            <>
              <h2 className="sec-title">Security</h2>
              <p className="sec-desc">Update your password to keep your account safe.</p>
              <div className="field">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" value={curPw} onChange={(e) => setCurPw(e.target.value)} />
              </div>
              <div className="two-col">
                <div className="field">
                  <label>New Password</label>
                  <input type="password" placeholder="Min 8 characters" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
                </div>
                <div className="field">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Repeat new password" value={confPw} onChange={(e) => setConfPw(e.target.value)} />
                </div>
              </div>
              <button className="save-btn" onClick={saveToast}>Update Password</button>
            </>
          )}

          {active === "notifs" && (
            <>
              <h2 className="sec-title">Notifications</h2>
              <p className="sec-desc">Choose which events send you alerts.</p>
              {[
                { key: "uploadDone",    label: "Upload complete",     desc: "When document indexing finishes" },
                { key: "queryAlert",    label: "Query alerts",         desc: "Unusual query patterns detected" },
                { key: "weeklyDigest",  label: "Weekly digest",        desc: "Summary of usage every Monday" },
                { key: "systemUpdates", label: "System updates",       desc: "Pipeline config or model changes" },
              ].map((n) => (
                <div key={n.key} className="toggle-row">
                  <div className="toggle-meta">
                    <div className="tl">{n.label}</div>
                    <div className="ts">{n.desc}</div>
                  </div>
                  <Toggle
                    checked={notifs[n.key]}
                    onChange={(v) => setNotifs((prev) => ({ ...prev, [n.key]: v }))}
                  />
                </div>
              ))}
              <button className="save-btn" style={{ marginTop: 24 }} onClick={saveToast}>Save Preferences</button>
            </>
          )}

          {active === "appearance" && (
            <>
              <h2 className="sec-title">Appearance</h2>
              <p className="sec-desc">Customise how NexusRAG looks for you. Changes apply to the whole website instantly.</p>
              <div style={{ marginBottom: 16, fontSize: 13.5, fontWeight: 600 }}>Theme</div>
              <div className="theme-cards">
                {["light", "dark"].map((t) => (
                  <div
                    key={t}
                    className={`theme-card${theme === t ? " selected" : ""}`}
                    onClick={() => t === "dark" ? setDark() : setLight()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && (t === "dark" ? setDark() : setLight())}
                  >
                    <div className={`theme-preview ${t}`} />
                    <div className="theme-label">
                      {t === "light" ? "☀️ Light" : "🌙 Dark"}
                    </div>
                    {theme === t && (
                      <div style={{ fontSize: 11, color: "var(--indigo)", fontWeight: 700, marginTop: 4 }}>Active</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="toggle-row">
                <div className="toggle-meta">
                  <div className="tl">Compact mode</div>
                  <div className="ts">Reduce spacing for denser layout</div>
                </div>
                <Toggle checked={compact} onChange={setCompact} />
              </div>
              <button className="save-btn" onClick={saveToast}>Save Appearance</button>
            </>
          )}

          {active === "data" && (
            <>
              <h2 className="sec-title">Data &amp; Privacy</h2>
              <p className="sec-desc">Manage your chat history and data preferences.</p>
              {[
                { label: "Save chat history", desc: "Retain conversation history across sessions" },
                { label: "Share analytics", desc: "Help improve NexusRAG with anonymous usage data" },
              ].map((n) => (
                <div key={n.label} className="toggle-row">
                  <div className="toggle-meta">
                    <div className="tl">{n.label}</div>
                    <div className="ts">{n.desc}</div>
                  </div>
                  <Toggle checked={true} onChange={() => {}} />
                </div>
              ))}
              <div style={{ marginTop: 28, padding: 20, background: "#fef2f2", borderRadius: 14, border: "1px solid #fecaca" }}>
                <div style={{ fontWeight: 700, color: "#dc2626", marginBottom: 6, fontSize: 14 }}>Danger Zone</div>
                <p style={{ fontSize: 13.5, color: "#7f1d1d", marginBottom: 14 }}>
                  Deleting your account is permanent and cannot be undone.
                </p>
                <button style={{ padding: "9px 18px", borderRadius: 100, border: "1.5px solid #fca5a5", background: "transparent", color: "#dc2626", fontWeight: 700, fontSize: 13 }}>
                  Delete Account
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
