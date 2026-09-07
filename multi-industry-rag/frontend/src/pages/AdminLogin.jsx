import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState("");
  const [mounted, setMounted]   = useState(false);
  const [loading, setLoading]   = useState(false);

  const { login, isAdmin, isLoggedIn } = useAuth();
  const navigate  = useNavigate();
  const location  = useLocation();
  const from      = location.state?.from?.pathname || "/admin";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Already logged in as admin → redirect
  useEffect(() => {
    if (isLoggedIn && isAdmin) navigate(from, { replace: true });
  }, [isLoggedIn, isAdmin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      const res = login(email.trim(), password, true /* asAdmin */);
      if (res.ok) {
        navigate(from, { replace: true });
      } else {
        setError(res.error);
      }
      setLoading(false);
    }, 600);
  };

  function Icon({ name, size = 18 }) {
    const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
    switch (name) {
      case "shield": return <svg {...p}><path d="M12 3l8 3.5V11c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6.5z"/></svg>;
      case "eye":    return <svg {...p}><ellipse cx="12" cy="12" rx="9" ry="5"/><circle cx="12" cy="12" r="2.5"/></svg>;
      case "eyeoff": return <svg {...p}><path d="M3 3l18 18M10.5 10.7A3 3 0 0 0 13.3 13.5M6.5 6.7A9 9 0 0 0 3 12c2 4 5.5 6 9 6a9 9 0 0 0 4.5-1.2M9.5 5.2A9 9 0 0 1 21 12a10 10 0 0 1-.9 2.1"/></svg>;
      case "lock":   return <svg {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>;
      case "mail":   return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
      default: return null;
    }
  }

  return (
    <div className={`admin-login${mounted ? " mounted" : ""}`}>
      <style>{`
.admin-login {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff4f4f;
  --line: rgba(12,15,23,0.1);
  --slate: #5b6270;
  --slate-l: #9296a6;
  font-family: "Inter", sans-serif;
  min-height: 100vh; display: flex;
  -webkit-font-smoothing: antialiased;
}
.admin-login *, .admin-login *::before, .admin-login *::after { box-sizing: border-box; margin: 0; }
.admin-login h1, .admin-login h2 { font-family: "Space Grotesk", sans-serif; }
.admin-login a { color: inherit; text-decoration: none; }
.admin-login button { font-family: inherit; cursor: pointer; }

/* split */
.admin-login .left-pane {
  width: 420px; flex-shrink: 0;
  background: var(--navy);
  display: flex; flex-direction: column;
  padding: 48px 40px;
  position: relative; overflow: hidden;
}
@media (max-width: 860px) { .admin-login .left-pane { display: none; } }
.admin-login .left-pane::before {
  content: ""; position: absolute;
  width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%);
  top: -80px; right: -120px; pointer-events: none;
}
.admin-login .lp-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700; font-size: 20px; color: #fff; margin-bottom: 60px;
}
.admin-login .lp-mark {
  width: 36px; height: 36px; border-radius: 10px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 800; color: #fff;
}
.admin-login .lp-shield {
  width: 80px; height: 80px; border-radius: 24px;
  background: rgba(79,70,229,0.25);
  border: 2px solid rgba(79,70,229,0.5);
  display: flex; align-items: center; justify-content: center;
  color: var(--indigo-2); margin-bottom: 32px;
}
.admin-login .lp-title { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 14px; line-height: 1.2; }
.admin-login .lp-desc { font-size: 14.5px; color: rgba(255,255,255,0.5); line-height: 1.65; margin-bottom: 40px; }
.admin-login .lp-creds {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px; padding: 20px;
}
.admin-login .lp-creds-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4); margin-bottom: 12px;
}
.admin-login .lp-cred-row { display: flex; flex-direction: column; gap: 8px; }
.admin-login .lp-cred {
  font-family: "IBM Plex Mono", monospace; font-size: 13px;
  color: rgba(255,255,255,0.75);
  display: flex; gap: 12px; align-items: center;
}
.admin-login .lp-cred span:first-child { color: rgba(255,255,255,0.35); width: 70px; flex-shrink: 0; }
.admin-login .lp-spacer { flex: 1; }
.admin-login .lp-user-link {
  display: inline-flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.5); font-size: 13.5px;
  transition: color 0.2s;
}
.admin-login .lp-user-link:hover { color: #fff; }

/* right pane */
.admin-login .right-pane {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 40px 24px; background: var(--paper);
  opacity: 0; transform: translateX(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.admin-login.mounted .right-pane { opacity: 1; transform: none; }
.admin-login .form-box { width: 100%; max-width: 400px; }

.admin-login .admin-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 100px;
  background: #fff; border: 1px solid var(--line);
  font-size: 12.5px; font-weight: 600; color: var(--indigo);
  margin-bottom: 28px;
  box-shadow: 0 2px 8px -2px rgba(79,70,229,0.12);
}
.admin-login .admin-badge span { color: var(--slate-l); font-weight: 400; }

.admin-login .form-box h1 { font-size: 30px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 8px; }
.admin-login .form-box p { font-size: 14.5px; color: var(--slate); line-height: 1.6; margin-bottom: 36px; }

.admin-login .field { margin-bottom: 18px; }
.admin-login label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 7px; color: var(--ink); }
.admin-login .input-wrap {
  display: flex; align-items: center; gap: 10px;
  border: 1.5px solid var(--line); border-radius: 14px;
  padding: 12px 16px; background: #fff;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.admin-login .input-wrap:focus-within {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.admin-login .input-wrap.error-ring { border-color: var(--coral); }
.admin-login .input-wrap svg { color: var(--slate-l); flex-shrink: 0; }
.admin-login .input-wrap input {
  flex: 1; border: none; outline: none; font-size: 14.5px;
  color: var(--ink); background: transparent;
}
.admin-login .input-wrap input::placeholder { color: var(--slate-l); }
.admin-login .pw-toggle { background: none; border: none; color: var(--slate-l); display: flex; padding: 2px; transition: color 0.2s; }
.admin-login .pw-toggle:hover { color: var(--ink); }

.admin-login .error-msg {
  background: #fff1f1; border: 1px solid #fecaca;
  border-radius: 12px; padding: 12px 16px;
  font-size: 13.5px; color: #dc2626; margin-bottom: 18px;
  display: flex; align-items: center; gap: 8px;
}

.admin-login .submit-btn {
  width: 100%; padding: 14px;
  background: var(--ink); color: #fff; border: none;
  border-radius: 14px; font-size: 15px; font-weight: 700;
  transition: background 0.25s, transform 0.15s;
  margin-top: 6px;
}
.admin-login .submit-btn:hover:not(:disabled) { background: var(--indigo); }
.admin-login .submit-btn:active:not(:disabled) { transform: scale(0.985); }
.admin-login .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

.admin-login .divider {
  text-align: center; font-size: 13px; color: var(--slate-l);
  margin: 24px 0; position: relative;
}
.admin-login .divider::before {
  content: ""; position: absolute; left: 0; top: 50%;
  width: 100%; height: 1px; background: var(--line);
}
.admin-login .divider span { background: var(--paper); padding: 0 12px; position: relative; }

.admin-login .user-link-btn {
  display: block; width: 100%; padding: 13px;
  background: transparent; color: var(--ink);
  border: 1.5px solid var(--line); border-radius: 14px;
  font-size: 14.5px; font-weight: 600; text-align: center;
  text-decoration: none; transition: all 0.2s;
}
.admin-login .user-link-btn:hover { background: #fff; border-color: var(--indigo); color: var(--indigo); }
`}</style>

      {/* LEFT PANEL */}
      <div className="left-pane">
        <div className="lp-brand">
          <div className="lp-mark">N</div>
          NexusRAG
        </div>

        <div className="lp-shield"><Icon name="shield" size={36} /></div>
        <div className="lp-title">Admin Portal<br />Access Only</div>
        <div className="lp-desc">
          This portal is restricted to system administrators. Regular users must
          log in through the standard sign-in page.
        </div>

        <div className="lp-creds">
          <div className="lp-creds-label">Demo Admin Credentials</div>
          <div className="lp-cred-row">
            <div className="lp-cred">
              <span>Email</span>
              <span>admin@nexusrag.com</span>
            </div>
            <div className="lp-cred">
              <span>Password</span>
              <span>admin@1234</span>
            </div>
          </div>
        </div>

        <div className="lp-spacer" />
        <Link to="/login" className="lp-user-link">← Regular user login</Link>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-pane">
        <div className="form-box">
          <div className="admin-badge">
            🛡️ Admin Access <span>· Restricted</span>
          </div>
          <h1>Admin Sign In</h1>
          <p>Enter your administrator credentials to access the NexusRAG admin panel.</p>

          {error && (
            <div className="error-msg">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="admin-email">Admin Email</label>
              <div className={`input-wrap${error ? " error-ring" : ""}`}>
                <Icon name="mail" size={17} />
                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@nexusrag.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="admin-password">Password</label>
              <div className={`input-wrap${error ? " error-ring" : ""}`}>
                <Icon name="lock" size={17} />
                <input
                  id="admin-password"
                  type={showPw ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  autoComplete="current-password"
                  required
                />
                <button type="button" className="pw-toggle" onClick={() => setShowPw((s) => !s)}>
                  <Icon name={showPw ? "eyeoff" : "eye"} size={16} />
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Verifying…" : "Sign in as Admin →"}
            </button>
          </form>

          <div className="divider"><span>or</span></div>

          <Link to="/login" className="user-link-btn">
            Continue as Regular User
          </Link>
        </div>
      </div>
    </div>
  );
}
