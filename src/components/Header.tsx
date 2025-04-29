import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #2c2c2c;
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #bbbbbb;
  margin-top: 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Title>GamerPower Giveaways</Title>
      <Subtitle>Find free games by platform!</Subtitle>
    </StyledHeader>
  );
}
