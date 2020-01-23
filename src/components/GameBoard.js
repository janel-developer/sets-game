import React, {useState, useEffect} from "react"
import styled from "styled-components"
import SetsCard from "./SetsCard"
import {newCardDeck, shuffle} from "../services/gameServices"

const GameBoard = () => {

    const innerWidth = window.innerWidth;
    let width = "100vw"

    const [cardsInPlay,setCardsInPlay] = useState([])

    useEffect(() => {
        setCardsInPlay(shuffle(newCardDeck()))
        return () => {}
    },[])    

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
    return (
        <Board >
        <Cards>
            {cardsInPlay.map((card) => {
                const {number, color, shape, fill} = card
                const faceValue = number[number.length-1]
                const key=`${faceValue}|${color}|${shape}|${fill}`
                return <SetsCard key={key} color={color} shape={shape} number={number} fill={fill} />
            })}
        </Cards>
        </Board>

    )
}

export default GameBoard