import React from "react"
import styled from "styled-components"
import Game from "./Game"

const App = () => {

    // Creates the grid for the app
    const GameLayout = styled.div `
        display: grid;
        border-size: 3px;
        grid-template-areas: 
            "Heading"
            "GamePanel"
            "GameBoard";
    `
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

    return (
        <GameLayout>
            <Heading >
                <Detail className="fill"/>
                <Title> Sets </Title>
                <Detail className="fill"/>
            </Heading>
            <Game />
            <Detail />
        </GameLayout>
    )
}

export default App