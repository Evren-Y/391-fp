/* Evren Yaman
  App.tsx – Entry point of the app.
  - Manages global state (games data + errors)
  - Renders all major UI components (Header, SearchBar, Game list)
  - Handles user search input and fetches filtered game data from the backend
*/
import { useState, useEffect } from "react";
import { Games } from "./interfaces/Games";
import { fetchGames } from "./lib/fetchGames";
import SearchBar from "./components/SearchBar";
import Game from "./components/Game";
import styled from "styled-components";
import Header from "./components/Header.tsx";

// Main wrapper styling for the page
const ParentDiv = styled.div`
  padding: 2rem;
  background-color: #121212;
  min-height: 100vh;
`;

// Styling for error messages displayed to the user
const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
`;

// List of valid platform strings allowed by the API
const allowedPlatforms = [
  "steam",
  "epic-games-store",
  "origin",
  "gog",
  "itch.io",
  "playstation",
  "xbox",
  "switch",
  "android",
  "ios",
  "pc"
];

export default function App() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState<string | null>(null);

  /* 
  handleSearch - Called when the user submits a platform.
  Validates the input and fetches the appropriate game data from the server.
   */
  async function handleSearch(platform: string) {
    const formattedPlatform = platform.toLowerCase().trim();

    // If the input platform isn't supported, show error
    if (formattedPlatform && !allowedPlatforms.includes(formattedPlatform)) {
      setError(`Invalid platform "${platform}". Please enter a valid platform.`);
      setGames([]);
      return;
    }

    // Try fetching data for the given platform
    try {
      const fetchedGames = await fetchGames(formattedPlatform);
      if (fetchedGames.length === 0) {
        setError(`No giveaways found for platform "${platform}".`);
        setGames([]);
      } else {
        setGames(fetchedGames);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching games:", error);
      setError("Something went wrong fetching data.");
    }
  }

  // On initial page load, fetch all available games
  useEffect(() => {
    handleSearch("");
  }, []);

  //Rendering
  return (
    <ParentDiv>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Game data={games} />
    </ParentDiv>
  );
}
