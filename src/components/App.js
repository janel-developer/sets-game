import React from "react"
import styled from "styled-components"
import GameBoard from "./GameBoard"

const App = () => {

    // Centers the gameboard horizontally on the screen
    // and gives it a border
    const Game = styled.div `
        display: grid;
        border-size: 3px;
    `

    // Styles the heading
    const Heading = styled.div `
        text-align: center;
        font-family: 'Amarante', cursive;
        font-size: 3em;
        background: url("img/sacred-geo.svg");
        background-size: 40%;
        background-color: rgba(0,200,255,.5);
        color: darkblue;
        margin: .5em;
        height: 10vh;
    `

    return (
        <Game>
            <Heading >Sets</Heading>
        <GameBoard />
        <Heading />
        </Game>
    )
}

export default App