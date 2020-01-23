import React from "react"
import styled from "styled-components"
import SetsCard from "./SetsCard"
import {useCardContext} from "../config/store"

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
        grid-area: GameBoard;
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

    const {store} = useCardContext()
    const {cardsInPlay} = store

    return (
        <Board >
        <Cards>
            {cardsInPlay && cardsInPlay.map((card) => {
                return <SetsCard key={card.id} {...card} />
            })}
        </Cards>
        </Board>

    )
}

export default GameBoard