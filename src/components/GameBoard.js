import React from "react"
import styled from "styled-components"
import SetsCard from "./SetsCard"

const GameBoard = () => {

    const innerWidth = window.innerWidth;
    let width = "100vw"

    // If a medium/large screen, use 620px wide board
    // If small/xs screen, use 100vw
    if(innerWidth > 620)
        width = "750px"

    // Centers the cards horizonally on the gameboard
    const Board= styled.div `
        display: flex;
        justify-content: center;
    `

    // Centers cards horizontally and vertically and
    // places them in columns of 4 cards in all resolutions
    const Cards = styled.div `
        display: flex;
        flex-wrap: wrap;
        width: ${width};
        justify-content: center;
        align-items: center;
        align-content: center;
    `
    return (
        <Board >
        <Cards>
            <SetsCard color="darkblue" shape="circle" number={[1]} fill="solid" />
            <SetsCard color="red" shape="square" number={[1,2]} fill="empty" />
            <SetsCard color="black" shape="circle" number={[1,2]} fill="fill" />
            <SetsCard color="darkblue" shape="oval" number={[1]} fill="fill" />
            <SetsCard color="red" shape="circle" number={[1,2,3]} fill="empty" />
            <SetsCard color="black" shape="square" number={[1,2,3]} fill="solid" />
            <SetsCard color="darkblue" shape="square" number={[1]} fill="fill" />
            <SetsCard color="red" shape="oval" number={[1,2,3]} fill="solid" />
            <SetsCard color="black" shape="circle" number={[1,2,3]} fill="empty" />
            <SetsCard color="darkblue" shape="oval" number={[1,2]} fill="fill" />
            <SetsCard color="black" shape="circle" number={[1,2,3]} fill="fill" />
            <SetsCard color="red" shape="oval" number={[1,2,3]} fill="fill" />

        </Cards>
        </Board>

    )
}

export default GameBoard