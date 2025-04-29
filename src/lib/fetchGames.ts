import { Games } from "../interfaces/Games";

export async function fetchGames(platform: string = ""): Promise<Games[]> {
  const baseUrl = "https://api.allorigins.win/raw?url=https://www.gamerpower.com/api/giveaways";

  const url = platform.trim()
    ? `${baseUrl}?platform=${platform}`
    : baseUrl;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  const data: Games[] = await response.json();
  return data;
}
