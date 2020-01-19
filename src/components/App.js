import React from "react"
import styled from "styled-components"
import SetsCard from "./SetsCard"

const App = () => {
    const innerWidth = window.innerWidth;
    let width = "100vw"
    if(innerWidth > 620)
        width = "620px"

    const Game = styled.div `
        display: grid;
        border-size: 3px;
    `
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
    const GameBoard = styled.div `
        display: flex;
        justify-content: center;
    `
    const Cards = styled.div `
        display: flex;
        flex-wrap: wrap;
        width: ${width};
        justify-content: center;
        align-items: center;
        align-content: center;
    `
    return (
        <Game>
            <Heading >Sets</Heading>
        <GameBoard >
        <Cards>
            <SetsCard color="darkblue" shape="circle" number={[1]} fill="solid" />
            <SetsCard color="red" shape="square" number={[1,2]} fill="empty" />
            <SetsCard color="black" shape="circle" number={[1,2]} fill="fill" />
            <SetsCard color="darkblue" shape="oval" number={[1]} fill="fill" />
            <SetsCard color="red" shape="circle" number={[1,2,3]} fill="empty" />
            <SetsCard color="black" shape="square" number={[1,2,3]} fill="empty" />
            <SetsCard color="darkblue" shape="square" number={[1]} fill="fill" />
            <SetsCard color="red" shape="oval" number={[1,2,3]} fill="empty" />
            <SetsCard color="black" shape="circle" number={[1,2,3]} fill="empty" />
            <SetsCard color="darkblue" shape="oval" number={[1,2]} fill="fill" />
            <SetsCard color="black" shape="circle" number={[1,2,3]} fill="fill" />
            <SetsCard color="red" shape="oval" number={[1,2,3]} fill="fill" />

        </Cards>
        </GameBoard>
        <Heading />
        </Game>
    )
}

export default App