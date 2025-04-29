import { useState, useEffect } from "react";
import { Games } from "./interfaces/Games";
import { fetchGames } from "./lib/fetchGames";
import SearchBar from "./components/SearchBar";
import Game from "./components/Game";
import styled from "styled-components";
import Header from "./components/Header.tsx";


const ParentDiv = styled.div`
  padding: 2rem;
  background-color: #121212;
  min-height: 100vh;
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
`;

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

  async function handleSearch(platform: string) {
    const formattedPlatform = platform.toLowerCase().trim();

    if (formattedPlatform && !allowedPlatforms.includes(formattedPlatform)) {
      setError(`Invalid platform "${platform}". Please enter a valid platform.`);
      setGames([]);
      return;
    }

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

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <ParentDiv>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Game data={games} />
    </ParentDiv>
  );
}
