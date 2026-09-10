import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

/* ──────────────────────────────────────────────
   Mock user data — replace with real API later
   ────────────────────────────────────────────── */
const MOCK_USERS = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@company.com", role: "user", status: "online", lastActive: "Just now", joined: "Jan 15, 2026", queries: 342, avatar: "SC", industry: "Healthcare" },
  { id: 2, name: "James Rodriguez", email: "james.rod@gmail.com", role: "user", status: "online", lastActive: "2 min ago", joined: "Feb 3, 2026", queries: 218, avatar: "JR", industry: "Finance" },
  { id: 3, name: "Aisha Patel", email: "aisha.patel@research.org", role: "admin", status: "online", lastActive: "5 min ago", joined: "Dec 10, 2025", queries: 891, avatar: "AP", industry: "Healthcare" },
  { id: 4, name: "Michael Kim", email: "m.kim@techcorp.io", role: "user", status: "offline", lastActive: "3 hours ago", joined: "Mar 22, 2026", queries: 156, avatar: "MK", industry: "Traffic" },
  { id: 5, name: "Emma Wilson", email: "emma.w@university.edu", role: "user", status: "online", lastActive: "Just now", joined: "Apr 1, 2026", queries: 423, avatar: "EW", industry: "Legal" },
  { id: 6, name: "David Okonkwo", email: "david.o@hospital.ng", role: "user", status: "offline", lastActive: "1 day ago", joined: "Jan 28, 2026", queries: 67, avatar: "DO", industry: "Healthcare" },
  { id: 7, name: "Lina Zhang", email: "lina.z@finserv.cn", role: "user", status: "away", lastActive: "30 min ago", joined: "May 15, 2026", queries: 189, avatar: "LZ", industry: "Finance" },
  { id: 8, name: "Carlos Mendez", email: "carlos@legal.mx", role: "user", status: "online", lastActive: "1 min ago", joined: "Jun 5, 2026", queries: 301, avatar: "CM", industry: "Legal" },
  { id: 9, name: "Fatima Al-Rashid", email: "fatima.r@transport.ae", role: "user", status: "offline", lastActive: "2 days ago", joined: "Feb 18, 2026", queries: 44, avatar: "FR", industry: "Traffic" },
  { id: 10, name: "Noah Bennett", email: "noah.b@datalab.com", role: "admin", status: "online", lastActive: "Just now", joined: "Nov 30, 2025", queries: 1204, avatar: "NB", industry: "Finance" },
  { id: 11, name: "Priya Sharma", email: "priya.s@medtech.in", role: "user", status: "away", lastActive: "15 min ago", joined: "Jul 10, 2026", queries: 98, avatar: "PS", industry: "Healthcare" },
  { id: 12, name: "Alex Turner", email: "alex.t@govtransport.uk", role: "user", status: "offline", lastActive: "5 days ago", joined: "Aug 2, 2026", queries: 12, avatar: "AT", industry: "Traffic" },
];

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #fccb90, #d57eeb)",
  "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
  "linear-gradient(135deg, #f5576c, #ff6a88)",
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #89f7fe, #66a6ff)",
  "linear-gradient(135deg, #fddb92, #d1fdff)",
];

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search": return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>;
    case "filter": return <svg {...common}><path d="M3 4h18M7 9h10M10 14h4" /></svg>;
    case "users": return <svg {...common}><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.87 2.69-7 6-7h.5" /><circle cx="16" cy="10" r="2.5" /><path d="M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5" /></svg>;
    case "chart": return <svg {...common}><path d="M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4" /></svg>;
    case "database": return <svg {...common}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>;
    case "upload": return <svg {...common}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" /></svg>;
    case "settings": return <svg {...common}><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9" /></svg>;
    case "chevron": return <svg {...common}><path d="M9 6l6 6-6 6" /></svg>;
    case "logout": return <svg {...common}><path d="M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5" /><path d="M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9" /></svg>;
    case "mail": return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
    case "clock": return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>;
    case "shield": return <svg {...common}><path d="M12 3l8 4v5c0 4.42-3.36 8.54-8 9.5C7.36 20.54 4 16.42 4 12V7l8-4z" /></svg>;
    case "activity": return <svg {...common}><path d="M3 12h4l3-9 4 18 3-9h4" /></svg>;
    case "eye": return <svg {...common}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "ban": return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M5.7 5.7l12.6 12.6" /></svg>;
    case "refresh": return <svg {...common}><path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>;
    case "download": return <svg {...common}><path d="M12 4v12M8 12l4 4 4-4" /><path d="M5 18h14" /></svg>;
    case "userplus": return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>;
    default: return null;
  }
}

export default function AdminUsers() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(MOCK_USERS);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Simulate random online/offline changes
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev.map(u => {
        if (Math.random() > 0.92) {
          const statuses = ["online", "offline", "away"];
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
          return { ...u, status: newStatus };
        }
        return u;
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(u => {
      const matchesSearch = !search ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || u.status === statusFilter;
      const matchesRole = roleFilter === "all" || u.role === roleFilter;
      const matchesIndustry = industryFilter === "all" || u.industry === industryFilter;
      return matchesSearch && matchesStatus && matchesRole && matchesIndustry;
    });
  }, [users, search, statusFilter, roleFilter, industryFilter]);

  const stats = useMemo(() => ({
    total: users.length,
    online: users.filter(u => u.status === "online").length,
    offline: users.filter(u => u.status === "offline").length,
    away: users.filter(u => u.status === "away").length,
    admins: users.filter(u => u.role === "admin").length,
    totalQueries: users.reduce((a, u) => a + u.queries, 0),
  }), [users]);

  return (
    <div className={`rag-admin-users${mounted ? " mounted" : ""}`}>
      <style>{`
/* ===== Admin Users Page ===== */
.rag-admin-users {
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
.rag-admin-users *, .rag-admin-users *::before, .rag-admin-users *::after { box-sizing: border-box; }
.rag-admin-users h1, .rag-admin-users h2, .rag-admin-users h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-admin-users a { color: inherit; text-decoration: none; }
.rag-admin-users button { font-family: inherit; cursor: pointer; }

/* ===== shell ===== */
.rag-admin-users .shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}
@media (max-width: 900px) {
  .rag-admin-users .shell { grid-template-columns: 1fr; }
  .rag-admin-users .sidebar { display: none; }
}

/* ===== sidebar ===== */
.rag-admin-users .sidebar {
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
.rag-admin-users .sb-brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 36px; padding-bottom: 28px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.rag-admin-users .sb-brand-mark {
  width: 34px; height: 34px; border-radius: 10px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 700;
}
.rag-admin-users .sb-section { margin-bottom: 28px; }
.rag-admin-users .sb-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.35); margin-bottom: 10px; padding: 0 8px;
}
.rag-admin-users .sb-item {
  display: flex; align-items: center; gap: 11px;
  padding: 10px 12px; border-radius: 11px;
  font-size: 14px; color: rgba(255,255,255,0.65);
  cursor: pointer; transition: all 0.2s;
  background: none; border: none; width: 100%; text-align: left;
  margin-bottom: 2px;
}
.rag-admin-users .sb-item:hover { background: rgba(255,255,255,0.08); color: #fff; }
.rag-admin-users .sb-item.active { background: rgba(79,70,229,0.35); color: #fff; }
.rag-admin-users .sb-spacer { flex: 1; }
.rag-admin-users .sb-user {
  display: flex; align-items: center; gap: 10px;
  padding: 12px; border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
}
.rag-admin-users .sb-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo), #b8a6ff);
  flex-shrink: 0;
}
.rag-admin-users .sb-name { font-size: 13.5px; font-weight: 600; }
.rag-admin-users .sb-role { font-size: 11.5px; color: rgba(255,255,255,0.45); }

/* ===== main ===== */
.rag-admin-users .main {
  min-width: 0;
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.rag-admin-users.mounted .main { opacity: 1; transform: none; }

/* ===== topbar ===== */
.rag-admin-users .topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 36px;
  border-bottom: 1px solid var(--line);
  background: var(--panel);
  position: sticky; top: 0; z-index: 10;
}
.rag-admin-users .topbar h1 { font-size: 22px; font-weight: 700; }
.rag-admin-users .topbar-right { display: flex; gap: 12px; align-items: center; }
.rag-admin-users .topbar-badge {
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px; padding: 4px 10px; border-radius: 100px;
  background: #dcfce7; color: #15803d; font-weight: 600;
}
.rag-admin-users .topbar-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 13.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-admin-users .topbar-btn:hover { background: var(--indigo); }

/* ===== content ===== */
.rag-admin-users .content { padding: 36px; }

/* ===== stat cards ===== */
.rag-admin-users .stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 18px; margin-bottom: 32px;
}
@media (max-width: 1100px) { .rag-admin-users .stats-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .rag-admin-users .stats-row { grid-template-columns: 1fr; } }

.rag-admin-users .u-stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px;
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}
.rag-admin-users .u-stat-card::before {
  content: "";
  position: absolute; top: 0; left: 0;
  width: 100%; height: 3px;
  background: var(--accent, var(--indigo));
}
.rag-admin-users .u-stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px -10px rgba(12,15,23,0.18);
}
.rag-admin-users .u-stat-icon {
  width: 42px; height: 42px; border-radius: 12px;
  background: color-mix(in srgb, var(--accent, var(--indigo)) 12%, white);
  display: flex; align-items: center; justify-content: center;
  color: var(--accent, var(--indigo));
  margin-bottom: 16px;
}
.rag-admin-users .u-stat-val {
  font-size: 32px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.02em; line-height: 1;
  margin-bottom: 6px;
}
.rag-admin-users .u-stat-label { font-size: 13.5px; font-weight: 600; margin-bottom: 4px; }
.rag-admin-users .u-stat-sub { font-size: 12px; color: var(--slate-l); }

/* ===== search & filter bar ===== */
.rag-admin-users .toolbar {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px; flex-wrap: wrap;
}
.rag-admin-users .search-box {
  display: flex; align-items: center; gap: 10px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 10px 16px;
  flex: 1; min-width: 240px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.rag-admin-users .search-box:focus-within {
  border-color: var(--indigo);
  box-shadow: 0 0 0 3px rgba(79,70,229,0.12);
}
.rag-admin-users .search-box input {
  border: none; outline: none; background: none;
  font-size: 14px; font-family: inherit; width: 100%;
  color: var(--ink);
}
.rag-admin-users .search-box input::placeholder { color: var(--slate-l); }
.rag-admin-users .filter-select {
  padding: 10px 14px; border-radius: 12px;
  border: 1px solid var(--line); background: var(--panel);
  font-size: 13.5px; font-family: inherit; color: var(--ink);
  cursor: pointer; transition: border-color 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%235b6270' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
}
.rag-admin-users .filter-select:focus {
  outline: none; border-color: var(--indigo);
  box-shadow: 0 0 0 3px rgba(79,70,229,0.12);
}
.rag-admin-users .live-dot {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 600; color: var(--green);
  padding: 6px 14px; border-radius: 100px;
  background: #dcfce7;
  animation: livePulse 2s ease-in-out infinite;
}
@keyframes livePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.rag-admin-users .live-dot::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 6px var(--green);
}

/* ===== users table ===== */
.rag-admin-users .table-wrap {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; overflow: hidden;
}
.rag-admin-users table { width: 100%; border-collapse: collapse; }
.rag-admin-users th {
  text-align: left; padding: 14px 20px;
  font-size: 11.5px; font-weight: 600;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--slate-l); background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.rag-admin-users td {
  padding: 14px 20px; font-size: 13.5px;
  border-bottom: 1px solid var(--line);
  transition: background 0.15s;
}
.rag-admin-users tr:last-child td { border-bottom: none; }
.rag-admin-users tbody tr { cursor: pointer; }
.rag-admin-users tbody tr:hover td { background: var(--paper); }

.rag-admin-users .user-cell {
  display: flex; align-items: center; gap: 12px;
}
.rag-admin-users .user-avatar {
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; color: #fff;
  flex-shrink: 0; position: relative;
}
.rag-admin-users .user-avatar .status-dot {
  position: absolute; bottom: -1px; right: -1px;
  width: 12px; height: 12px; border-radius: 50%;
  border: 2.5px solid var(--panel);
  transition: background 0.3s;
}
.rag-admin-users .status-dot.online { background: #22c55e; }
.rag-admin-users .status-dot.offline { background: #94a3b8; }
.rag-admin-users .status-dot.away { background: #f59e0b; }
.rag-admin-users .user-info-name { font-weight: 600; font-size: 14px; }
.rag-admin-users .user-info-email { font-size: 12px; color: var(--slate-l); }

.rag-admin-users .status-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 12px; font-weight: 600; padding: 4px 12px;
  border-radius: 100px; text-transform: capitalize;
}
.rag-admin-users .status-badge.online { background: #dcfce7; color: #15803d; }
.rag-admin-users .status-badge.offline { background: #f1f5f9; color: #64748b; }
.rag-admin-users .status-badge.away { background: #fef3c7; color: #92400e; }
.rag-admin-users .status-badge::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: currentColor;
}

.rag-admin-users .role-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 11.5px; font-weight: 600; padding: 3px 10px;
  border-radius: 100px; text-transform: capitalize;
}
.rag-admin-users .role-badge.admin { background: #ede9fe; color: #6d28d9; }
.rag-admin-users .role-badge.user { background: #dbeafe; color: #1d4ed8; }

.rag-admin-users .action-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 8px;
  border: 1px solid var(--line); background: var(--panel);
  color: var(--slate); transition: all 0.2s;
  margin-right: 4px;
}
.rag-admin-users .action-btn:hover { background: var(--paper-2); color: var(--ink); border-color: var(--slate-l); }
.rag-admin-users .action-btn.danger:hover { background: #fee2e2; color: #dc2626; border-color: #fca5a5; }

/* ===== user detail modal / panel ===== */
.rag-admin-users .user-detail-overlay {
  position: fixed; inset: 0;
  background: rgba(10,23,48,0.5);
  backdrop-filter: blur(6px);
  z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.rag-admin-users .user-detail-panel {
  background: var(--panel);
  border-radius: 24px;
  width: 100%; max-width: 520px;
  padding: 36px;
  box-shadow: 0 25px 60px -15px rgba(0,0,0,0.35);
  animation: slideUp 0.3s ease;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}
.rag-admin-users .detail-close {
  position: absolute; top: 18px; right: 18px;
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid var(--line); background: var(--paper);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; cursor: pointer; transition: all 0.2s;
  color: var(--slate);
}
.rag-admin-users .detail-close:hover { background: var(--paper-2); color: var(--ink); }
.rag-admin-users .detail-avatar {
  width: 72px; height: 72px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; font-weight: 700; color: #fff;
  margin: 0 auto 20px;
  position: relative;
}
.rag-admin-users .detail-avatar .status-dot {
  position: absolute; bottom: 2px; right: 2px;
  width: 16px; height: 16px; border-radius: 50%;
  border: 3px solid var(--panel);
}
.rag-admin-users .detail-name { text-align: center; font-size: 22px; font-weight: 700; margin-bottom: 4px; }
.rag-admin-users .detail-email { text-align: center; font-size: 14px; color: var(--slate-l); margin-bottom: 20px; }
.rag-admin-users .detail-badges { display: flex; justify-content: center; gap: 8px; margin-bottom: 28px; }
.rag-admin-users .detail-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 14px; margin-bottom: 28px;
}
.rag-admin-users .detail-item {
  background: var(--paper); border-radius: 14px;
  padding: 16px;
}
.rag-admin-users .detail-item-label {
  font-size: 11.5px; font-weight: 600;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--slate-l); margin-bottom: 6px;
}
.rag-admin-users .detail-item-val { font-size: 16px; font-weight: 700; }
.rag-admin-users .detail-actions {
  display: flex; gap: 10px;
}
.rag-admin-users .detail-btn {
  flex: 1; padding: 12px; border-radius: 12px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 13.5px; font-weight: 600; cursor: pointer;
  transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 7px;
}
.rag-admin-users .detail-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.rag-admin-users .detail-btn.primary { background: var(--indigo); color: #fff; border-color: transparent; }
.rag-admin-users .detail-btn.primary:hover { background: #4338ca; }
.rag-admin-users .detail-btn.danger { color: #dc2626; }
.rag-admin-users .detail-btn.danger:hover { background: #fee2e2; border-color: #fca5a5; }

/* ===== empty state ===== */
.rag-admin-users .empty-state {
  text-align: center; padding: 60px 20px; color: var(--slate-l);
}
.rag-admin-users .empty-state .empty-icon {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--paper-2); display: flex;
  align-items: center; justify-content: center;
  margin: 0 auto 16px; color: var(--slate);
}
.rag-admin-users .empty-state h3 { color: var(--ink); margin-bottom: 6px; }

/* ===== responsive ===== */
@media (max-width: 768px) {
  .rag-admin-users .content { padding: 20px; }
  .rag-admin-users .toolbar { flex-direction: column; }
  .rag-admin-users .search-box { min-width: 100%; }
  .rag-admin-users th:nth-child(4),
  .rag-admin-users td:nth-child(4),
  .rag-admin-users th:nth-child(5),
  .rag-admin-users td:nth-child(5) { display: none; }
}
      `}</style>

      <div className="shell">
        {/* ── SIDEBAR (mirrors AdminDashboard) ── */}
        <aside className="sidebar">
          <div className="sb-brand">
            <div className="sb-brand-mark">N</div>
            NexusRAG
          </div>

          <div className="sb-section">
            <div className="sb-label">Admin</div>
            <Link to="/admin" className="sb-item">
              <Icon name="chart" size={16} /> Overview
            </Link>
            <Link to="/admin" className="sb-item">
              <Icon name="database" size={16} /> Collections
            </Link>
            <Link to="/upload" className="sb-item">
              <Icon name="upload" size={16} /> Upload Docs
            </Link>
            <Link to="/admin" className="sb-item">
              <Icon name="settings" size={16} /> Pipeline Config
            </Link>
            <Link to="/admin/users" className="sb-item active">
              <Icon name="users" size={16} /> Users
            </Link>
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
            <h1>User Management</h1>
            <div className="topbar-right">
              <span className="topbar-badge">● {stats.online} Online</span>
              <button className="topbar-btn">
                <Icon name="userplus" size={14} /> Invite User
              </button>
            </div>
          </div>

          <div className="content">
            {/* ── STAT CARDS ── */}
            <div className="stats-row">
              <div className="u-stat-card" style={{ "--accent": "#4f46e5" }}>
                <div className="u-stat-icon"><Icon name="users" size={20} /></div>
                <div className="u-stat-val">{stats.total}</div>
                <div className="u-stat-label">Total Users</div>
                <div className="u-stat-sub">{stats.admins} admins · {stats.total - stats.admins} members</div>
              </div>
              <div className="u-stat-card" style={{ "--accent": "#22c55e" }}>
                <div className="u-stat-icon"><Icon name="activity" size={20} /></div>
                <div className="u-stat-val">{stats.online}</div>
                <div className="u-stat-label">Online Now</div>
                <div className="u-stat-sub">Active & connected</div>
              </div>
              <div className="u-stat-card" style={{ "--accent": "#f59e0b" }}>
                <div className="u-stat-icon"><Icon name="clock" size={20} /></div>
                <div className="u-stat-val">{stats.away}</div>
                <div className="u-stat-label">Away</div>
                <div className="u-stat-sub">Idle sessions</div>
              </div>
              <div className="u-stat-card" style={{ "--accent": "#94a3b8" }}>
                <div className="u-stat-icon"><Icon name="users" size={20} /></div>
                <div className="u-stat-val">{stats.offline}</div>
                <div className="u-stat-label">Offline</div>
                <div className="u-stat-sub">Last seen varies</div>
              </div>
            </div>

            {/* ── SEARCH & FILTER ── */}
            <div className="toolbar">
              <div className="search-box">
                <Icon name="search" size={16} />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="all">All Status</option>
                <option value="online">Online</option>
                <option value="away">Away</option>
                <option value="offline">Offline</option>
              </select>
              <select className="filter-select" value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <select className="filter-select" value={industryFilter} onChange={e => setIndustryFilter(e.target.value)}>
                <option value="all">All Industries</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Traffic">Traffic</option>
                <option value="Legal">Legal</option>
              </select>
              <span className="live-dot">Live Updates</span>
            </div>

            {/* ── USERS TABLE ── */}
            <div className="table-wrap">
              {filteredUsers.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Status</th>
                      <th>Role</th>
                      <th>Industry</th>
                      <th>Queries</th>
                      <th>Last Active</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u, i) => (
                      <tr key={u.id} onClick={() => setSelectedUser(u)}>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar" style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}>
                              {u.avatar}
                              <span className={`status-dot ${u.status}`} />
                            </div>
                            <div>
                              <div className="user-info-name">{u.name}</div>
                              <div className="user-info-email">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={`status-badge ${u.status}`}>{u.status}</span></td>
                        <td><span className={`role-badge ${u.role}`}>{u.role === "admin" ? "⚡ Admin" : "User"}</span></td>
                        <td style={{ fontSize: 13 }}>{u.industry}</td>
                        <td style={{ fontWeight: 600 }}>{u.queries.toLocaleString()}</td>
                        <td style={{ fontSize: 12.5, color: "var(--slate-l)" }}>{u.lastActive}</td>
                        <td onClick={e => e.stopPropagation()}>
                          <button className="action-btn" title="View Profile" onClick={() => setSelectedUser(u)}>
                            <Icon name="eye" size={14} />
                          </button>
                          <button className="action-btn" title="Send Email">
                            <Icon name="mail" size={14} />
                          </button>
                          <button className="action-btn danger" title="Ban User">
                            <Icon name="ban" size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="empty-state">
                  <div className="empty-icon"><Icon name="users" size={28} /></div>
                  <h3>No users found</h3>
                  <p>Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── USER DETAIL MODAL ── */}
      {selectedUser && (
        <div className="user-detail-overlay" onClick={() => setSelectedUser(null)}>
          <div className="user-detail-panel" onClick={e => e.stopPropagation()}>
            <button className="detail-close" onClick={() => setSelectedUser(null)}>✕</button>
            <div
              className="detail-avatar"
              style={{ background: AVATAR_GRADIENTS[users.findIndex(u => u.id === selectedUser.id) % AVATAR_GRADIENTS.length] }}
            >
              {selectedUser.avatar}
              <span className={`status-dot ${selectedUser.status}`} />
            </div>
            <div className="detail-name">{selectedUser.name}</div>
            <div className="detail-email">{selectedUser.email}</div>
            <div className="detail-badges">
              <span className={`status-badge ${selectedUser.status}`}>{selectedUser.status}</span>
              <span className={`role-badge ${selectedUser.role}`}>{selectedUser.role === "admin" ? "⚡ Admin" : "User"}</span>
            </div>
            <div className="detail-grid">
              <div className="detail-item">
                <div className="detail-item-label">Joined</div>
                <div className="detail-item-val">{selectedUser.joined}</div>
              </div>
              <div className="detail-item">
                <div className="detail-item-label">Last Active</div>
                <div className="detail-item-val">{selectedUser.lastActive}</div>
              </div>
              <div className="detail-item">
                <div className="detail-item-label">Total Queries</div>
                <div className="detail-item-val">{selectedUser.queries.toLocaleString()}</div>
              </div>
              <div className="detail-item">
                <div className="detail-item-label">Industry</div>
                <div className="detail-item-val">{selectedUser.industry}</div>
              </div>
            </div>
            <div className="detail-actions">
              <button className="detail-btn primary">
                <Icon name="mail" size={14} /> Send Message
              </button>
              <button className="detail-btn">
                <Icon name="shield" size={14} /> Change Role
              </button>
              <button className="detail-btn danger">
                <Icon name="ban" size={14} /> Ban
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
