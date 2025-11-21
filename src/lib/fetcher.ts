export async function apiPost<T = unknown>(path: string, body: Record<string, unknown>): Promise<T> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${BASE_URL}/api/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json() as Promise<T>;
}
