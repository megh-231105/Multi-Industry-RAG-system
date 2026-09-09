/**
 * api.js — NexusRAG frontend API client
 * All backend calls go through here. Swap BASE_URL for production.
 */

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || "Request failed");
  }
  return res.json();
}

// ── Auth ────────────────────────────────────────────
export const login = (email, password) =>
  request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });

export const signup = (data) =>
  request("/auth/signup", { method: "POST", body: JSON.stringify(data) });

// ── RAG Query ───────────────────────────────────────
export const query = (industry, question) =>
  request("/rag/query", {
    method: "POST",
    body: JSON.stringify({ industry, question }),
  });

// ── Collections ─────────────────────────────────────
export const getCollections = () => request("/collections");

export const deleteCollection = (industry) =>
  request(`/collections/${industry}`, { method: "DELETE" });

// ── Upload ──────────────────────────────────────────
export const uploadDocuments = (industry, files) => {
  const form = new FormData();
  form.append("industry", industry);
  files.forEach((f) => form.append("files", f));
  return fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: form,
  }).then((r) => r.json());
};

// ── Stats ───────────────────────────────────────────
export const getStats = () => request("/stats");
