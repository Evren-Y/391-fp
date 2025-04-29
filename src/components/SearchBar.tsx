"use client";

import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.7rem 1rem;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #222;
  color: #fff;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

const StyledButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

export default function SearchBar({ onSearch }: { onSearch: (platform: string) => void }) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(input.trim());
  }

  return (
    <StyledContainer onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Enter platform (e.g. steam, pc, epic-games-store)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <StyledButton type="submit">Search</StyledButton>
    </StyledContainer>
  );
}
