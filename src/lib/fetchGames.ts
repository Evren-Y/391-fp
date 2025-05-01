// lib/fetchGames.ts
/*
  Pinhan Zhao is responsible for this component.
  This component retrieves a list of game giveaways from the GamePower API
 */
  import { Games } from "../interfaces/Games";

  export async function fetchGames(platform: string = ""): Promise<Games[]> {
    const baseUrl = "https://api.allorigins.win/raw?url=https://www.gamerpower.com/api/giveaways";
  
    /* Apply a dynamic url platform which users can customize by themselves
    Use trim() to cutoff the whit space before and after the input
    If it is non-empty, then append it in the query param. Otherwise, just the baseUrl simply
    fetching all the data.
     */
    const url = platform.trim()
      ? `${baseUrl}?platform=${platform}`
      : baseUrl;
  
    const response = await fetch(url);// Perform the HTTP response
    if (!response.ok) {
      throw new Error("Failed to fetch games"); // If we didn't get 2xx response, throw error
    }
    const data: Games[] = await response.json(); // Parse the JSON body into Game[] type
    return data; // return the array of games to the caller.
  }
  