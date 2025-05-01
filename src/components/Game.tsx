/*
    Pinhan Zhao is responsible for this component.
    This component renders a grid of game giveaways cards using data
    fetched from the API.
 */

    import styled from "styled-components";
    import {Games} from "../interfaces/Games.ts";
    
    // container for all game cards
    const AllCharsDiv=styled.div`
        display: flex;
        flex-flow: row wrap;  
        justify-content: space-evenly;
    `;
    
    // Individual card styling
    const Card = styled.div`
      background-color: #1f1f1f;
      border-radius: 8px;
      overflow: hidden;
      width: 250px;
      margin: 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
    `;
    
    const GameImage = styled.img`
      width: 100%;
      height: 140px;
      object-fit: cover;
    `;
    
    const CardContent = styled.div`
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    `;
    
    const Title = styled.h2`
      font-size: 1rem;
      color: white;
      text-align: left;
    `;
    
    const Description = styled.p`
      font-size: 0.8rem;
      color: #ccc;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* show 3 lines max */
      -webkit-box-orient: vertical;
    `;
    
    const Button = styled.a`
      background-color: #4caf50;
      color: white;
      text-align: center;
      padding: 0.5rem;
      margin-top: auto;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
    
      &:hover {
        background-color: #45a049;
      }
    `;
    
    
    export default function Game(props: { data: Games[] }) { // receives an array of Games
        return (
            <AllCharsDiv>
                {/* Map over each game object and render a styled card */}
                {props.data.map((game: Games) => (
                    <Card key={game.id}>
                        {/* Display game image */}
                        <GameImage src={game.image} alt={`image of ${game.title}`} />
                        <CardContent>
                            {/* Game title */}
                            <Title>{game.title}</Title>
                            {/* Game description */}
                            <Description>{game.description}</Description>
                            {/* Link to claim the giveaway */}
                            <Button href={game.gamerpower_url} target="_blank" rel="noopener noreferrer">
                                Claim Giveaway
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </AllCharsDiv>
        );
    }
    
    