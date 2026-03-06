const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetcher = async (endpoint, options = {}) => {
  const url = `${BASE_URL}/api${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token") || "",
    "space-token": localStorage.getItem("spaceToken") || "",
    ...options.headers, // Allow overriding headers if needed
  };

  const response = await fetch(url, { ...options, headers });

  // TanStack Query needs the promise to reject on 4xx/5xx errors
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error: ${response.status}`);
  }

  // Handle empty responses (like 204 No Content)
  if (response.status === 204) return null;

  return response.json();
};
