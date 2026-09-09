import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

/**
 * Two roles: "user" | "admin"
 *
 * Hardcoded credentials for demo:
 *   USER  → any email + any password → role: "user"
 *   ADMIN → admin@nexusrag.com + admin@1234 → role: "admin"
 */

const ADMIN_EMAIL    = "admin@nexusrag.com";
const ADMIN_PASSWORD = "admin@1234";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // { name, email, role: "user"|"admin" }

  /** Returns { ok: true } or { ok: false, error: string } */
  const login = (email, password, asAdmin = false) => {
    if (asAdmin) {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        setUser({ name: "Admin", email, role: "admin" });
        return { ok: true };
      }
      return { ok: false, error: "Invalid admin credentials." };
    }
    // Regular user — accept any non-empty email+password
    if (!email || !password) {
      return { ok: false, error: "Please fill in all fields." };
    }
    const name = email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    setUser({ name, email, role: "user" });
    return { ok: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn: !!user,
        isAdmin: user?.role === "admin",
        isUser: user?.role === "user",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
