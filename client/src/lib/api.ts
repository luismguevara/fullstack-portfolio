//Comunica desde React hacia NEXT
export async function getHealth() {
 const response = await fetch("/api/health");

 if (!response.ok) {
  throw new Error("Failed to fetch API health");
 }

 return response.json();
}
