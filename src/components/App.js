import React from "react"
import styled from "styled-components"
import GameBoard from "./GameBoard"

const App = () => {

    // Creates the grid for the app
    const Game = styled.div `
        display: grid;
        border-size: 3px;
        grid-template-areas: 
            "Heading"
            "GamePanel"
            "GameBoard";
    `
    const accentColor = "rgba(0,200,255,.5)"
    // Styles the heading
    const Heading = styled.div `
        display: flex;
        justify-content: center;
        height: 10vh;
        grid-area: Heading;
    `
    const Title = styled.div `
        text-align: center;
        font-family: 'Amarante', cursive;
        align-self: center;
        font-size: 3em;
        //height: 10vh;
        width: 25vw;
    `
    const Detail = styled.div `
        background-color: darkblue; 
        color: darkblue;
        margin: .5em;
        width: 30vw;
        mask-position: contain;
        mask-repeat: no-repeat;
        mask-size: 100%;
    `
    const Button = styled.button `
        width: 25vw;
        background: url("img/sacred-geo.svg");
        background-size: 70%;
        font-size: 1em;
        border-radius: 3px;
        color: darkblue;
        font-family: 'Amarante', cursive;
        border: 2px solid ${accentColor};
        margin: 5px;
        padding: 2px;
        transition: 0.5s all ease-out;
        &:hover {
            background: url("img/sacred-geo.svg");
            background-size: 40%;
            background-color: ${accentColor};
            color: black;
            border: 2px solid darkblue;
        }
    `

    const Score = styled.div `
        width: 25vw;
        border 2px solid darkblue;
        margin: 5px;
        color: darkblue;
        padding: 2px;
        font-family: 'Amarante', cursive;
        font-size: 1.5em;
        text-align: center;
    `
    const GamePanel = styled.div `
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        grid-area: GamePanel;
        margin-bottom: 2px;
    `

    return (
        <Game>
            <Heading >
                <Detail className="fill"/>
                <Title> Sets </Title>
                <Detail className="fill"/>
            </Heading>
            <GamePanel>
                <Button>New Game</Button>
                <Score>350</Score>
                <Button>Add Cards</Button>
            </GamePanel>
        <GameBoard />
        <Detail />
        </Game>
    )
}

export default App