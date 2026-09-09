import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute
 *   adminOnly={true}  → only role:"admin" can enter; others → /admin-login
 *   (default)         → any logged-in user can enter; guests → /login
 */
export default function ProtectedRoute({ children, adminOnly = false }) {
  const { isLoggedIn, isAdmin } = useAuth();
  const location = useLocation();

  if (adminOnly) {
    // Must be logged in AND be an admin
    if (!isLoggedIn || !isAdmin) {
      return <Navigate to="/admin-login" state={{ from: location }} replace />;
    }
  } else {
    // Any logged-in user (user or admin) can access regular routes
    if (!isLoggedIn) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  return children;
}
