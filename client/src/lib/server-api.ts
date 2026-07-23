//Next - Express comunication
const API_URL = process.env.API_URL || "http://localhost:5000";

export async function fetchBackend(endpoint: string, options?: RequestInit) {
 const response = await fetch(`${API_URL}${endpoint}`, {
  cache: "no-store",
  ...options,
 });

 return response;
}
