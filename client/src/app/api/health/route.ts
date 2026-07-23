//Endpoint of next server
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function GET() {
 try {
  const response = await fetch(`${API_URL}/api/health`, {
   cache: "no-store",
  });

  if (!response.ok) {
   return Response.json({ error: "Backend unavailable" }, { status: 502 });
  }

  const data = await response.json();

  return Response.json(data);
 } catch {
  return Response.json({ error: "Cannot reach backend" }, { status: 500 });
 }
}
