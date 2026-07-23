//Client component because of Reacts Hooks useState and useEffect only run on navegator
"use client";

import { useEffect, useState } from "react";
import { getHealth } from "@/lib/api";

//Shape of JSON response
type HealthResponse = {
 status: string;
 message: string;
};

//Principal React component for this page
export default function Home() {
 const [health, setHealth] = useState<HealthResponse | null>(null);
 //State to save backend data starting as null
 const [error, setError] = useState<string | null>(null);

 //API call only runs on page load because of empty []
 useEffect(() => {
  async function checkBackend() {
   try {
    const data = await getHealth();
    setHealth(data); //sets health to data json response
   } catch {
    console.error(error);
    setError("Could not connect to backend");
   }
  }

  checkBackend();
 }, []);

 //Returns marked HTML/JSX
 return (
  <main className="flex min-h-screen flex-col items-center justify-center p-8">
   <h1 className="mb-8 text-4xl font-bold">FullStack Developer Portfolio</h1>

   <div className="rounded-lg border p-6">
    <h2 className="mb-4 text-xl font-semibold">Backend Status</h2>

    {health && ( //Only renders if health != null, otherwise empty
     <div>
      <p>Status: {health.status}</p>
      <p>{health.message}</p>
     </div>
    )}

    {error && (
     <div>
      <p className="text-red-500"> {error} </p>
     </div>
    )}

    {!health && !error && (
     <div>
      <p>Checking backend...</p>
     </div>
    )}
   </div>
  </main>
 );
}
