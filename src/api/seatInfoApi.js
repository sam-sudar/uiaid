export async function getSeatInfo() {
  const response = await fetch("https://viaje.ai/seatinfo_api/");
  if (!response.ok) throw new Error("Failed to fetch seat info");
  return response.json();
}
