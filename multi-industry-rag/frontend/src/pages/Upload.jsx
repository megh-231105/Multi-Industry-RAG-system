import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const INDUSTRIES = [
  { key: "healthcare", emoji: "🏥", label: "Healthcare", desc: "PubMedQA, clinical notes, diagnostics" },
  { key: "finance", emoji: "💰", label: "Banking & Finance", desc: "FinQA, TAT-QA, market analysis" },
  { key: "traffic", emoji: "🚦", label: "Traffic & Transport", desc: "Driving rules, government docs, route data" },
  { key: "legal", emoji: "⚖️", label: "Legal Services", desc: "Contracts, regulations, case law" },
  { key: "retail", emoji: "🛒", label: "Retail & E-commerce", desc: "Product docs, inventory, customer support" },
  { key: "energy", emoji: "⚡", label: "Energy & Utilities", desc: "Grid management, renewable energy docs" },
  { key: "education", emoji: "🎓", label: "Education", desc: "Curriculum, student records, research papers" },
  { key: "insurance", emoji: "🛡️", label: "Insurance", desc: "Policies, claims, risk assessment documents" },
  { key: "custom", emoji: "➕", label: "Add New Sector", desc: "Onboard a completely new industry" },
];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 15V4M8 8l4-4 4 4" />
          <path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z" />
          <path d="M14 3.5V8h4.5" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h3.6l1.4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2z" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case "warning":
      return (
        <svg {...common}>
          <path d="M10.3 3.5 2 19h20L13.7 3.5a2 2 0 0 0-3.4 0z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    default:
      return null;
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function Upload() {
  const [mounted, setMounted] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [customSector, setCustomSector] = useState("");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState(1); // 1: select industry, 2: upload files, 3: confirm
  const [uploading, setUploading] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    addFiles(dropped);
  };

  const addFiles = (newFiles) => {
    setFiles((prev) => [
      ...prev,
      ...newFiles.map((f) => ({
        id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`,
        file: f,
        status: "pending",
      })),
    ]);
  };

  const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));

  const handleIndustrySelect = (key) => {
    setSelectedIndustry(key);
    if (key !== "custom") setStep(2);
  };

  const handleConfirmUpload = () => {
    if (files.length === 0) return;
    setStep(3);
    setUploading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setUploading(false);
        setUploadDone(true);
      }
      setProgress(Math.min(p, 100));
    }, 180);
  };

  const industryLabel =
    selectedIndustry === "custom"
      ? customSector || "Custom Sector"
      : INDUSTRIES.find((i) => i.key === selectedIndustry)?.label || "";

  return (
    <div className={`rag-upload${mounted ? " mounted" : ""}`}>
      <style>{`
/* ===== RAG Upload Page ===== */
.rag-upload {
  --ink: #0c0f17;
  --ink-2: #141928;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --green: #22c55e;
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
.rag-upload *, .rag-upload *::before, .rag-upload *::after { box-sizing: border-box; }
.rag-upload h1, .rag-upload h2, .rag-upload h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-upload a { color: inherit; text-decoration: none; }
.rag-upload button { font-family: inherit; cursor: pointer; }

@media (prefers-reduced-motion: reduce) {
  .rag-upload * { animation: none !important; transition: none !important; }
}

/* ===== nav ===== */
.rag-upload nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.rag-upload .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-upload .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-upload .nav-right {
  display: flex; align-items: center; gap: 16px;
}
.rag-upload .nav-link {
  color: rgba(255,255,255,0.65); font-size: 14px;
  transition: color 0.2s;
}
.rag-upload .nav-link:hover { color: #fff; }
.rag-upload .nav-btn {
  padding: 9px 18px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.4);
  background: transparent; color: #fff;
  font-size: 14px; font-weight: 500;
  transition: all 0.25s;
}
.rag-upload .nav-btn:hover { background: #fff; color: #000; }

/* ===== page layout ===== */
.rag-upload .page-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 32px 100px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.rag-upload.mounted .page-wrap { opacity: 1; transform: none; }

.rag-upload .page-head {
  margin-bottom: 50px;
}
.rag-upload .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo);
  margin-bottom: 14px;
}
.rag-upload .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255,176,32,0.2);
}
.rag-upload .page-head h1 {
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 700; letter-spacing: -0.02em;
  line-height: 1.1; margin-bottom: 12px;
}
.rag-upload .page-head p {
  font-size: 16px; color: var(--slate);
  line-height: 1.6; max-width: 560px;
}

/* ===== step progress ===== */
.rag-upload .steps {
  display: flex; align-items: center; gap: 0;
  margin-bottom: 52px;
}
.rag-upload .step-item {
  display: flex; align-items: center; gap: 12px;
  flex: 1;
}
.rag-upload .step-item:last-child { flex: 0; }
.rag-upload .step-dot {
  width: 38px; height: 38px; border-radius: 50%;
  border: 2px solid var(--line);
  display: flex; align-items: center; justify-content: center;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px; font-weight: 600;
  background: #fff; color: var(--slate-l);
  flex-shrink: 0;
  transition: all 0.35s;
}
.rag-upload .step-item.active .step-dot {
  border-color: var(--indigo);
  background: var(--indigo); color: #fff;
}
.rag-upload .step-item.done .step-dot {
  border-color: var(--green);
  background: var(--green); color: #fff;
}
.rag-upload .step-meta { flex: 1; }
.rag-upload .step-label {
  font-size: 13.5px; font-weight: 600; margin-bottom: 2px;
}
.rag-upload .step-desc { font-size: 12px; color: var(--slate-l); }
.rag-upload .step-connector {
  height: 2px; background: var(--line);
  flex: 1; margin: 0 16px;
  border-radius: 2px;
  transition: background 0.4s;
}
.rag-upload .step-connector.done { background: var(--green); }

/* ===== industry grid ===== */
.rag-upload .industry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}
@media (max-width: 860px) {
  .rag-upload .industry-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .rag-upload .industry-grid { grid-template-columns: 1fr; }
}
.rag-upload .ind-card {
  background: #fff;
  border: 2px solid var(--line);
  border-radius: 18px;
  padding: 22px;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  text-align: left;
}
.rag-upload .ind-card:hover {
  border-color: var(--indigo-2);
  box-shadow: 0 8px 30px -8px rgba(79,70,229,0.25);
  transform: translateY(-3px);
}
.rag-upload .ind-card.selected {
  border-color: var(--indigo);
  background: #f5f3ff;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.rag-upload .ind-card.custom-card {
  border-style: dashed;
  background: var(--paper);
}
.rag-upload .ind-emoji {
  font-size: 30px; margin-bottom: 12px;
  display: block;
}
.rag-upload .ind-label {
  font-size: 15px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 5px;
}
.rag-upload .ind-desc {
  font-size: 12.5px; color: var(--slate);
  line-height: 1.5;
}

/* ===== custom sector input ===== */
.rag-upload .custom-field {
  margin-top: 16px;
}
.rag-upload .custom-field input {
  width: 100%; padding: 14px 16px;
  border: 1.5px solid var(--line); border-radius: 12px;
  font-size: 15px; font-family: "Inter", sans-serif;
  background: #fff; color: var(--ink); outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.rag-upload .custom-field input:focus {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.rag-upload .custom-field input::placeholder { color: var(--slate-l); }

/* ===== upload zone ===== */
.rag-upload .upload-zone {
  border: 2px dashed var(--line);
  border-radius: 22px;
  padding: 60px 32px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
  background: #fff;
  margin-bottom: 32px;
}
.rag-upload .upload-zone.drag-over {
  border-color: var(--indigo);
  background: #f5f3ff;
}
.rag-upload .upload-zone .zone-icon {
  width: 64px; height: 64px; border-radius: 18px;
  background: var(--paper-2);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  color: var(--indigo);
  transition: transform 0.3s;
}
.rag-upload .upload-zone:hover .zone-icon { transform: scale(1.08); }
.rag-upload .upload-zone h3 {
  font-size: 20px; font-weight: 700; margin-bottom: 8px;
}
.rag-upload .upload-zone p {
  font-size: 14.5px; color: var(--slate); line-height: 1.5; margin-bottom: 24px;
}
.rag-upload .zone-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 15px; font-weight: 500;
  transition: background 0.25s, transform 0.25s;
}
.rag-upload .zone-btn:hover { background: var(--indigo); transform: translateY(-2px); }
.rag-upload .zone-hint {
  margin-top: 14px; font-size: 12.5px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--slate-l); letter-spacing: 0.03em;
}

/* ===== file list ===== */
.rag-upload .file-list-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 14px;
}
.rag-upload .file-list-head h3 {
  font-size: 16px; font-weight: 700;
}
.rag-upload .clear-btn {
  background: none; border: none; font-size: 13px;
  color: var(--slate); cursor: pointer;
  transition: color 0.2s;
}
.rag-upload .clear-btn:hover { color: var(--coral); }
.rag-upload .file-list {
  display: flex; flex-direction: column; gap: 8px;
  margin-bottom: 32px;
  max-height: 320px; overflow-y: auto;
}
.rag-upload .file-row {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px;
  background: #fff; border: 1px solid var(--line);
  border-radius: 12px;
  transition: background 0.2s;
}
.rag-upload .file-row:hover { background: var(--paper-2); }
.rag-upload .file-icon {
  width: 36px; height: 36px; border-radius: 10px;
  background: var(--paper-2);
  display: flex; align-items: center; justify-content: center;
  color: var(--indigo); flex-shrink: 0;
}
.rag-upload .file-meta { flex: 1; min-width: 0; }
.rag-upload .file-name {
  font-size: 13.5px; font-weight: 600;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.rag-upload .file-size { font-size: 12px; color: var(--slate-l); }
.rag-upload .file-remove {
  background: none; border: none; color: var(--slate-l);
  padding: 4px; border-radius: 6px;
  cursor: pointer; display: flex;
  transition: color 0.2s, background 0.2s;
}
.rag-upload .file-remove:hover {
  color: var(--coral); background: #fdf1f0;
}

/* ===== warning / info banner ===== */
.rag-upload .info-banner {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 18px; border-radius: 14px;
  background: #fffbeb; border: 1px solid #f9d84a;
  margin-bottom: 28px;
  font-size: 13.5px; line-height: 1.5;
  color: #7a5800;
}
.rag-upload .info-banner svg { flex-shrink: 0; margin-top: 1px; }

/* ===== action bar ===== */
.rag-upload .action-bar {
  display: flex; align-items: center; gap: 14px;
  flex-wrap: wrap;
}
.rag-upload .btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 15.5px; font-weight: 600;
  transition: background 0.25s, transform 0.25s;
}
.rag-upload .btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
.rag-upload .btn-primary:disabled {
  opacity: 0.4; cursor: not-allowed; transform: none;
}
.rag-upload .btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 22px; border-radius: 100px;
  border: 1.5px solid var(--line);
  background: #fff; color: var(--ink);
  font-size: 15px; font-weight: 500;
  transition: background 0.2s, border-color 0.2s;
}
.rag-upload .btn-secondary:hover { background: var(--paper-2); border-color: var(--slate-l); }

/* ===== selected industry chip ===== */
.rag-upload .industry-chip {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 18px; border-radius: 100px;
  background: #eef2ff; border: 1.5px solid #c7d2fe;
  font-size: 14px; font-weight: 600; color: var(--indigo);
  margin-bottom: 30px;
}
.rag-upload .industry-chip .chip-change {
  background: none; border: none; font-size: 12px;
  color: var(--slate); cursor: pointer;
  margin-left: 4px; padding: 2px;
  transition: color 0.2s;
}
.rag-upload .industry-chip .chip-change:hover { color: var(--indigo); }

/* ===== progress / uploading ===== */
.rag-upload .upload-progress {
  background: #fff; border: 1px solid var(--line);
  border-radius: 22px; padding: 48px 36px;
  text-align: center;
}
.rag-upload .progress-ring {
  width: 100px; height: 100px;
  margin: 0 auto 28px;
  position: relative;
}
.rag-upload .progress-ring svg { transform: rotate(-90deg); }
.rag-upload .progress-ring .track {
  fill: none; stroke: var(--paper-2); stroke-width: 8;
}
.rag-upload .progress-ring .fill {
  fill: none; stroke: var(--indigo); stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 251.3;
  transition: stroke-dashoffset 0.4s ease;
}
.rag-upload .progress-ring .ring-text {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
}
.rag-upload .upload-progress h2 {
  font-size: 26px; font-weight: 700; margin-bottom: 10px;
}
.rag-upload .upload-progress p {
  font-size: 15px; color: var(--slate); line-height: 1.6; margin-bottom: 28px;
}
.rag-upload .file-summary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 16px; border-radius: 100px;
  background: var(--paper-2); font-size: 13px;
  font-family: "IBM Plex Mono", monospace;
  margin-bottom: 28px;
}

/* ===== success state ===== */
.rag-upload .success-icon {
  width: 90px; height: 90px; border-radius: 50%;
  background: #dcfce7; border: 3px solid #86efac;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 28px;
  color: var(--green);
  animation: rag-pop 0.5s cubic-bezier(0.3,1.4,0.4,1) forwards;
}
@keyframes rag-pop {
  from { transform: scale(0.4); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`}</style>

      {/* ── NAV ── */}
      <nav>
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          NexusRAG
        </Link>
        <div className="nav-right">
          <Link to="/admin" className="nav-link">Dashboard</Link>
          <Link to="/dashboard" className="nav-link">User View</Link>
          <Link to="/" className="nav-btn">← Home</Link>
        </div>
      </nav>

      <div className="page-wrap">
        {/* ── PAGE HEADER ── */}
        <div className="page-head">
          <span className="eyebrow">Admin · Document Management</span>
          <h1>Bulk Document Upload</h1>
          <p>
            Tag an entire folder with one industry label. The pipeline handles chunking, embedding,
            and storage automatically — no code changes needed to add a new sector.
          </p>
        </div>

        {/* ── STEP PROGRESS ── */}
        <div className="steps">
          <div className={`step-item ${step >= 1 ? (step > 1 ? "done" : "active") : ""}`}>
            <div className="step-dot">
              {step > 1 ? <Icon name="check" size={16} /> : "01"}
            </div>
            <div className="step-meta">
              <div className="step-label">Select Industry</div>
              <div className="step-desc">Tag this batch</div>
            </div>
          </div>
          <div className={`step-connector ${step > 1 ? "done" : ""}`} />
          <div className={`step-item ${step >= 2 ? (step > 2 ? "done" : "active") : ""}`}>
            <div className="step-dot">
              {step > 2 ? <Icon name="check" size={16} /> : "02"}
            </div>
            <div className="step-meta">
              <div className="step-label">Upload Files</div>
              <div className="step-desc">Drag or browse</div>
            </div>
          </div>
          <div className={`step-connector ${step > 2 ? "done" : ""}`} />
          <div className={`step-item ${step >= 3 ? "active" : ""}`}>
            <div className="step-dot">{uploadDone ? <Icon name="check" size={16} /> : "03"}</div>
            <div className="step-meta">
              <div className="step-label">Confirm & Index</div>
              <div className="step-desc">Embed & store</div>
            </div>
          </div>
        </div>

        {/* ── STEP 1: INDUSTRY SELECTION ── */}
        {step === 1 && (
          <>
            <div className="industry-grid">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.key}
                  className={`ind-card${ind.key === "custom" ? " custom-card" : ""}${selectedIndustry === ind.key ? " selected" : ""}`}
                  onClick={() => handleIndustrySelect(ind.key)}
                >
                  <span className="ind-emoji">{ind.emoji}</span>
                  <div className="ind-label">{ind.label}</div>
                  <div className="ind-desc">{ind.desc}</div>
                </button>
              ))}
            </div>

            {selectedIndustry === "custom" && (
              <>
                <div className="custom-field">
                  <input
                    type="text"
                    placeholder="Enter sector name (e.g. Mining, Aquaculture…)"
                    value={customSector}
                    onChange={(e) => setCustomSector(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="action-bar" style={{ marginTop: "16px" }}>
                  <button
                    className="btn-primary"
                    disabled={!customSector.trim()}
                    onClick={() => setStep(2)}
                  >
                    Continue →
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* ── STEP 2: UPLOAD FILES ── */}
        {step === 2 && (
          <>
            <div className="industry-chip">
              <span>{INDUSTRIES.find((i) => i.key === selectedIndustry)?.emoji || "📁"}</span>
              <span>{industryLabel}</span>
              <button
                className="chip-change"
                onClick={() => { setStep(1); setFiles([]); }}
              >
                Change ✕
              </button>
            </div>

            <div
              className={`upload-zone${isDragging ? " drag-over" : ""}`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="zone-icon">
                <Icon name="folder" size={30} />
              </div>
              <h3>Drop your folder here</h3>
              <p>
                Drag an entire folder — or click to browse individual files.<br />
                Supported: PDF, DOCX, TXT, MD, CSV, JSON
              </p>
              <button
                className="zone-btn"
                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
              >
                <Icon name="upload" size={16} />
                Browse Files
              </button>
              <div className="zone-hint">PDF · DOCX · TXT · MD · CSV · JSON supported</div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.docx,.txt,.md,.csv,.json"
                style={{ display: "none" }}
                onChange={(e) => { addFiles(Array.from(e.target.files)); e.target.value = ""; }}
              />
            </div>

            {files.length > 0 && (
              <>
                <div className="file-list-head">
                  <h3>{files.length} file{files.length !== 1 ? "s" : ""} selected</h3>
                  <button className="clear-btn" onClick={() => setFiles([])}>Clear all</button>
                </div>
                <div className="file-list">
                  {files.map((f) => (
                    <div key={f.id} className="file-row">
                      <div className="file-icon">
                        <Icon name="file" size={18} />
                      </div>
                      <div className="file-meta">
                        <div className="file-name">{f.file.name}</div>
                        <div className="file-size">{formatFileSize(f.file.size)}</div>
                      </div>
                      <button className="file-remove" onClick={() => removeFile(f.id)}>
                        <Icon name="close" size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="info-banner">
                  <Icon name="warning" size={18} />
                  <div>
                    Every file in this batch will be tagged as <strong>{industryLabel}</strong>.
                    If any file belongs to a different industry, remove it before confirming.
                  </div>
                </div>
              </>
            )}

            <div className="action-bar">
              <button
                className="btn-primary"
                disabled={files.length === 0}
                onClick={handleConfirmUpload}
              >
                Confirm & Index {files.length > 0 ? `(${files.length} files)` : ""}  →
              </button>
              <button className="btn-secondary" onClick={() => setStep(1)}>
                ← Back
              </button>
            </div>
          </>
        )}

        {/* ── STEP 3: UPLOAD PROGRESS / SUCCESS ── */}
        {step === 3 && (
          <div className="upload-progress">
            {!uploadDone ? (
              <>
                <div className="progress-ring">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle className="track" cx="50" cy="50" r="40" />
                    <circle
                      className="fill"
                      cx="50" cy="50" r="40"
                      style={{ strokeDashoffset: 251.3 * (1 - progress / 100) }}
                    />
                  </svg>
                  <div className="ring-text">{Math.round(progress)}%</div>
                </div>
                <h2>Indexing documents…</h2>
                <p>
                  Chunking, embedding, and storing your {files.length} files into the{" "}
                  <strong>{industryLabel}</strong> knowledge base.
                  <br />This may take a few moments.
                </p>
                <div className="file-summary">
                  <Icon name="file" size={14} />
                  {files.length} files · {industryLabel}
                </div>
              </>
            ) : (
              <>
                <div className="success-icon">
                  <Icon name="check" size={40} />
                </div>
                <h2>Upload Complete!</h2>
                <p>
                  {files.length} document{files.length !== 1 ? "s" : ""} have been chunked, embedded,
                  and indexed into the <strong>{industryLabel}</strong> knowledge base.
                  <br />Users can now query this sector immediately.
                </p>
                <div className="action-bar" style={{ justifyContent: "center" }}>
                  <button className="btn-primary" onClick={() => { setStep(1); setFiles([]); setSelectedIndustry(null); setProgress(0); setUploadDone(false); }}>
                    Upload More Files
                  </button>
                  <Link to="/admin" className="btn-secondary">
                    View Collections →
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
