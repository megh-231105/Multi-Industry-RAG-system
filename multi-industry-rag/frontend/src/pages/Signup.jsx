import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const INDUSTRIES = ["Healthcare", "Finance", "Traffic", "Manufacturing", "Agriculture", "Legal Services"];

/** Rotating word, same cycler used on the homepage hero. */
function IndustryCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % INDUSTRIES.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="cyc-word">
      <span className="active" key={index}>
        {INDUSTRIES[index]}
      </span>
    </span>
  );
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted]           = useState(false);
  const [industry, setIndustry]         = useState("");
  const [firstName, setFirstName]       = useState("");
  const [lastName, setLastName]         = useState("");
  const [email, setEmail]               = useState("");
  const [password, setPassword]         = useState("");
  const [error, setError]               = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const res = login(email.trim(), password, false);
    if (res.ok) {
      navigate("/dashboard");
    } else {
      setError(res.error);
    }
  };

  return (
    <div className={`meridian-auth${mounted ? " mounted" : ""}`}>
      <style>{`
.meridian-auth {
  --ink: #0c0f17;
  --ink-2: #141928;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --line-dark: rgba(255, 255, 255, 0.12);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.meridian-auth *,
.meridian-auth *::before,
.meridian-auth *::after {
  box-sizing: border-box;
}

.meridian-auth h1,
.meridian-auth h2,
.meridian-auth .display {
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
}

.meridian-auth .mono {
  font-family: "IBM Plex Mono", monospace;
}

.meridian-auth a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .meridian-auth * {
    animation: none !important;
    transition: none !important;
  }
}

.meridian-auth :focus-visible {
  outline: 2px solid var(--indigo);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ===== shell ===== */
.meridian-auth .auth-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
@media (max-width: 900px) {
  .meridian-auth .auth-shell {
    grid-template-columns: 1fr;
  }
  .meridian-auth .auth-visual {
    display: none;
  }
}

/* ===== left / visual panel ===== */
.meridian-auth .auth-visual {
  position: relative;
  background: linear-gradient(120deg, #0a1730, #1a2140, #221a45, #0a1730);
  background-size: 300% 300%;
  animation: meridian-aurora-shift 18s ease-in-out infinite;
  color: #fff;
  overflow: hidden;
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@keyframes meridian-aurora-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.meridian-auth .auth-visual::before {
  content: "";
  position: absolute;
  inset: -20%;
  background-image: radial-gradient(circle at 20% 25%, rgba(79, 70, 229, 0.45), transparent 42%),
    radial-gradient(circle at 82% 78%, rgba(255, 176, 32, 0.22), transparent 38%),
    radial-gradient(circle at 75% 20%, rgba(255, 100, 82, 0.18), transparent 35%);
  animation: meridian-blob-drift 14s ease-in-out infinite alternate;
  pointer-events: none;
}
@keyframes meridian-blob-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(3%, -4%) scale(1.08);
  }
  100% {
    transform: translate(-3%, 3%) scale(1);
  }
}
.meridian-auth .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 19px;
  position: relative;
  z-index: 1;
}
.meridian-auth .brand .mark {
  width: 22px;
  height: 22px;
}
.meridian-auth .brand .mark svg {
  width: 100%;
  height: 100%;
}

.meridian-auth .auth-visual-mid {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.meridian-auth.mounted .auth-visual-mid {
  opacity: 1;
  transform: translateY(0);
}
.meridian-auth .auth-visual-mid .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--indigo-2);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.meridian-auth .auth-visual-mid .eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255, 176, 32, 0.2);
}
.meridian-auth .auth-visual-mid h1 {
  font-size: clamp(30px, 3.4vw, 44px);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -0.01em;
  max-width: 420px;
}
.meridian-auth .auth-visual-mid .thin {
  color: var(--slate-l);
  font-weight: 400;
}
.meridian-auth .auth-cycler {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  color: var(--slate-l);
}
.meridian-auth .cyc-word {
  color: #fff;
  font-weight: 500;
  min-width: 140px;
  display: inline-block;
  position: relative;
  height: 20px;
  overflow: hidden;
}
.meridian-auth .cyc-word span {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.meridian-auth .cyc-word span.active {
  opacity: 1;
  transform: translateY(0);
}

.meridian-auth .auth-stats {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--line-dark);
  padding-top: 22px;
  display: flex;
  gap: 40px;
}
.meridian-auth .auth-stats .stat .num {
  font-size: 30px;
  font-weight: 600;
  font-family: "Space Grotesk", sans-serif;
  line-height: 1;
}
.meridian-auth .auth-stats .stat .lbl {
  font-size: 12px;
  color: var(--slate-l);
  margin-top: 6px;
}

/* floating bubbles, echoing the homepage "behind the scenes" section */
.meridian-auth .bubble {
  position: absolute;
  background: #fff;
  color: var(--ink);
  border-radius: 14px 14px 14px 4px;
  padding: 7px 12px;
  font-size: 11.5px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  z-index: 1;
  opacity: 0;
}
.meridian-auth.mounted .bubble {
  animation: meridian-float 5s ease-in-out infinite, meridian-bubble-in 0.7s ease forwards;
}
.meridian-auth .bubble.tag {
  border-radius: 100px;
  background: var(--indigo);
  color: #fff;
}
@keyframes meridian-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes meridian-bubble-in {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.meridian-auth .b1 {
  top: 18%;
  right: 14%;
  animation-delay: 0.3s;
}
.meridian-auth .b2 {
  top: 34%;
  right: 8%;
  background: var(--amber);
  animation-delay: 0.9s;
}
.meridian-auth .b3 {
  bottom: 30%;
  left: 10%;
  animation-delay: 1.3s;
}

/* soft ring decoration */
.meridian-auth .auth-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--line-dark);
  z-index: 0;
  animation: meridian-ring-pulse 9s ease-in-out infinite;
}
@keyframes meridian-ring-pulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.06) rotate(8deg);
    opacity: 1;
  }
}
.meridian-auth .ring-a {
  width: 380px;
  height: 380px;
  top: -120px;
  right: -140px;
}
.meridian-auth .ring-b {
  width: 240px;
  height: 240px;
  bottom: -80px;
  right: 60px;
  animation-delay: 1.5s;
}

/* ===== right / form panel ===== */
.meridian-auth .auth-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  overflow-y: auto;
}
.meridian-auth .auth-form-wrap {
  width: 100%;
  max-width: 400px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s;
  padding: 24px 0;
}
.meridian-auth.mounted .auth-form-wrap {
  opacity: 1;
  transform: translateY(0);
}
.meridian-auth .mobile-brand {
  display: none;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 40px;
}
.meridian-auth .mobile-brand .mark {
  width: 20px;
  height: 20px;
  color: var(--ink);
}
.meridian-auth .mobile-brand .mark svg {
  width: 100%;
  height: 100%;
}
@media (max-width: 900px) {
  .meridian-auth .mobile-brand {
    display: flex;
  }
}

.meridian-auth .auth-form-wrap .sec-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--indigo);
  margin-bottom: 12px;
  display: block;
}
.meridian-auth .auth-form-wrap h2 {
  font-size: clamp(32px, 4vw, 42px);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
}
.meridian-auth .auth-form-wrap .sub {
  font-size: 16px;
  color: var(--slate);
  line-height: 1.55;
  margin-bottom: 32px;
}
.meridian-auth .auth-form-wrap .sub a {
  color: var(--indigo);
  font-weight: 500;
}
.meridian-auth .auth-form-wrap .sub a:hover {
  text-decoration: underline;
}

.meridian-auth .field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.meridian-auth .field {
  margin-bottom: 20px;
}
.meridian-auth .field label {
  display: block;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0.02em;
}
.meridian-auth .field-input {
  position: relative;
}
.meridian-auth .field input,
.meridian-auth .field select {
  width: 100%;
  padding: 14px 15px;
  font-size: 16.5px;
  font-family: "Inter", sans-serif;
  color: var(--ink);
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  appearance: none;
}
.meridian-auth .field select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%235b6270'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 38px;
  color: var(--ink);
}
.meridian-auth .field select:invalid {
  color: var(--slate-l);
}
.meridian-auth .field input::placeholder {
  color: var(--slate-l);
}
.meridian-auth .field input:focus,
.meridian-auth .field select:focus {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
}
.meridian-auth .field-toggle {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 11.5px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--slate);
  cursor: pointer;
  padding: 4px;
}
.meridian-auth .field-toggle:hover {
  color: var(--indigo);
}
.meridian-auth .field-hint {
  font-size: 13px;
  color: var(--slate-l);
  margin-top: 7px;
}

.meridian-auth .terms-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 26px;
  font-size: 14px;
  color: var(--slate);
  line-height: 1.5;
}
.meridian-auth .terms-row input {
  accent-color: var(--indigo);
  width: 15px;
  height: 15px;
  margin-top: 2px;
  flex-shrink: 0;
}
.meridian-auth .terms-row a {
  color: var(--indigo);
  font-weight: 500;
}
.meridian-auth .terms-row a:hover {
  text-decoration: underline;
}

.meridian-auth .submit-btn {
  width: 100%;
  padding: 15px;
  background: var(--ink);
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 16.5px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s, transform 0.3s;
}
.meridian-auth .submit-btn:hover {
  background: var(--indigo);
  transform: translateY(-1px);
}
.meridian-auth .submit-btn:active {
  transform: translateY(0);
}

.meridian-auth .divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 26px 0;
  color: var(--slate-l);
  font-size: 13px;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.meridian-auth .divider::before,
.meridian-auth .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--line);
}

.meridian-auth .social-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.meridian-auth .social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  background: #fff;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}
.meridian-auth .social-btn:hover {
  border-color: var(--ink);
  background: var(--paper-2);
}

.meridian-auth .back-home {
  margin-top: 36px;
  font-size: 14.5px;
  color: var(--slate);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.meridian-auth .back-home:hover {
  color: var(--indigo);
}
`}</style>

      <div className="auth-shell">
        {/* LEFT VISUAL PANEL */}
        <div className="auth-visual">
          <div className="auth-ring ring-a" />
          <div className="auth-ring ring-b" />

          <Link to="/" className="brand">
            <span className="mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 21 L21 3 L21 21 Z" fill="currentColor" />
              </svg>
            </span>
            NexusRAG
          </Link>

          <div className="auth-visual-mid">
              <span className="eyebrow">Join NexusRAG</span>
              <h1>
                One platform,
                <br />
                <span className="thin">every</span> industry.
              </h1>
              <div className="auth-cycler">
                RAG-powered answers for
                <IndustryCycler />
              </div>
            </div>

          <div className="bubble b1">"RAG pipeline ready"</div>
          <div className="bubble tag b2">Arjun</div>
          <div className="bubble b3">"query time: 0.3s"</div>

          <div className="auth-stats">
            <div className="stat">
              <div className="num">25</div>
              <div className="lbl">industries covered</div>
            </div>
            <div className="stat">
              <div className="num">10M+</div>
              <div className="lbl">documents indexed</div>
            </div>
            <div className="stat">
              <div className="num">99%</div>
              <div className="lbl">answer accuracy</div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="auth-form-side">
          <div className="auth-form-wrap">
            <Link to="/" className="mobile-brand">
              <span className="mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 21 L21 3 L21 21 Z" fill="currentColor" />
                </svg>
              </span>
              NexusRAG
            </Link>

            <span className="sec-label">Create account</span>
            <h2>Start querying smarter</h2>
            <div className="sub">
              Already have an account? <Link to="/login">Sign in</Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="signup-first">First name</label>
                  <div className="field-input">
                    <input
                      id="signup-first" type="text" placeholder="Priya"
                      required autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => { setFirstName(e.target.value); setError(""); }}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="signup-last">Last name</label>
                  <div className="field-input">
                    <input
                      id="signup-last" type="text" placeholder="Nadar"
                      required autoComplete="family-name"
                      value={lastName}
                      onChange={(e) => { setLastName(e.target.value); setError(""); }}
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="signup-email">Work email</label>
                <div className="field-input">
                  <input
                    id="signup-email" type="email" placeholder="you@company.com"
                    required autoComplete="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="signup-industry">Industry</label>
                <div className="field-input">
                  <select
                    id="signup-industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="signup-password">Password</label>
                <div className="field-input">
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    minLength={8}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  />
                  <button
                    type="button"
                    className="field-toggle"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
                <div className="field-hint">At least 8 characters.</div>
              </div>

              <div className="terms-row">
                <input type="checkbox" id="signup-terms" required />
                <label htmlFor="signup-terms">
                  I agree to NexusRAG's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </label>
              </div>

              {error && (
                <div style={{ background: "#fff1f1", border: "1px solid #fecaca", borderRadius: 10, padding: "10px 14px", fontSize: 13.5, color: "#dc2626", marginBottom: 16 }}>
                  ⚠️ {error}
                </div>
              )}

              <button type="submit" className="submit-btn">
                Create account →
              </button>
            </form>

            <div className="divider">or continue with</div>

            <div className="social-row">
              <button type="button" className="social-btn">
                Google
              </button>
              <button type="button" className="social-btn">
                GitHub
              </button>
            </div>

            <Link to="/" className="back-home">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}