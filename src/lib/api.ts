// lib/api.ts
export async function apiPost<T = unknown, B = Record<string, unknown>>(path: string, body: B): Promise<T> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""; // set this in Vercel
  const res = await fetch(`${BASE_URL}/api/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API error: ${res.status} ${errorText}`);
  }

  return res.json() as Promise<T>;
}
