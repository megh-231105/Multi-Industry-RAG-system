import { Link, useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Query",       href: "/chat" },
  { label: "Collections", href: "/collections" },
  { label: "Upload",      href: "/upload" },
  { label: "Admin",       href: "/admin" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .nexus-nav {
          position: sticky; top: 0; z-index: 200;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 40px;
          background: #0a1730;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nexus-nav .brand {
          display: flex; align-items: center; gap: 10px;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700; font-size: 18px; color: #fff;
          text-decoration: none;
        }
        .nexus-nav .brand-mark {
          width: 28px; height: 28px; border-radius: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c74ff);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 14px; font-weight: 700;
        }
        .nexus-nav .links {
          display: flex; align-items: center; gap: 6px;
        }
        .nexus-nav .nav-a {
          padding: 7px 14px; border-radius: 100px;
          font-size: 13.5px; color: rgba(255,255,255,0.65);
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .nexus-nav .nav-a:hover { color: #fff; }
        .nexus-nav .nav-a.active {
          background: rgba(79,70,229,0.3); color: #fff;
        }
        .nexus-nav .nav-right { display: flex; gap: 10px; align-items: center; }
        .nexus-nav .nav-btn {
          padding: 8px 18px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.35);
          background: transparent; color: #fff;
          font-size: 13.5px; font-weight: 500; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
        }
        .nexus-nav .nav-btn:hover { background: #fff; color: #000; }
        .nexus-nav .nav-btn.primary {
          background: #4f46e5; border-color: transparent;
        }
        .nexus-nav .nav-btn.primary:hover { background: #7c74ff; color: #fff; }
        @media (max-width: 760px) {
          .nexus-nav .links { display: none; }
          .nexus-nav { padding: 14px 20px; }
        }
      `}</style>

      <nav className="nexus-nav">
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          NexusRAG
        </Link>

        <div className="links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-a${location.pathname === l.href ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link to="/notifications" className="nav-btn">🔔</Link>
          <Link to="/login" className="nav-btn">Sign in</Link>
          <Link to="/signup" className="nav-btn primary">Get started</Link>
        </div>
      </nav>
    </>
  );
}
