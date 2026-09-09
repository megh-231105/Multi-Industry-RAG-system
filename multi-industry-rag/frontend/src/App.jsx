import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider }  from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

// Public pages
import Home          from "./pages/Home";
import Login         from "./pages/Login";
import Signup        from "./pages/Signup";
import AdminLogin    from "./pages/AdminLogin";

// User pages (protected)
import UserDashboard from "./pages/UserDashboard";
import Chat          from "./pages/Chat";
import Notifications from "./pages/Notifications";
import Meetings      from "./pages/Meetings";
import Notes         from "./pages/Notes";
import Settings      from "./pages/Settings";
import HelpSupport   from "./pages/HelpSupport";

// Admin pages (protected + adminOnly)
import AdminDashboard from "./pages/AdminDashboard";
import Upload         from "./pages/Upload";
import Collections    from "./pages/Collections";

// Guard
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            {/* ── Public ─────────────────────────────── */}
            <Route path="/"            element={<Home />} />
            <Route path="/login"       element={<Login />} />
            <Route path="/signup"      element={<Signup />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* ── User (any logged-in) ─────────────── */}
            <Route path="/dashboard"
              element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
            <Route path="/chat"
              element={<ProtectedRoute><Chat /></ProtectedRoute>} />
            <Route path="/notifications"
              element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/meetings"
              element={<ProtectedRoute><Meetings /></ProtectedRoute>} />
            <Route path="/notes"
              element={<ProtectedRoute><Notes /></ProtectedRoute>} />
            <Route path="/settings"
              element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/help"
              element={<ProtectedRoute><HelpSupport /></ProtectedRoute>} />

            {/* ── Admin only ───────────────────────── */}
            <Route path="/admin"
              element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
            <Route path="/upload"
              element={<ProtectedRoute adminOnly><Upload /></ProtectedRoute>} />
            <Route path="/collections"
              element={<ProtectedRoute adminOnly><Collections /></ProtectedRoute>} />

            {/* ── Catch-all ───────────────────────── */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}