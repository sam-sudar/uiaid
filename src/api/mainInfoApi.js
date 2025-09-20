export async function getMainInfo() {
  const response = await fetch("https://viaje.ai/mainvia_api/");
  if (!response.ok) throw new Error("Failed to fetch main info");
  return response.json();
}
