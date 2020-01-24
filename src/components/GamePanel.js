import React from "react"
import styled from "styled-components"
import {useCardContext} from "../config/store"
import {deal, shuffle, newCardDeck} from "../services/gameServices"

const GamePanel = () => {

    const accentColor = "rgba(0,200,255,.5)"
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
    const ControlPanel = styled.div `
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        grid-area: GamePanel;
        margin-bottom: 2px;
    `

    const {store,dispatch} = useCardContext()
    const {score} = store
    
    function startNewGame () {
        // create a new shuffled deck
        let newDeck = shuffle(newCardDeck())
        let firstHand = deal(newDeck,12)
        dispatch({
            type: "setDeck",
            data: newDeck
        })
        // deal 12 cards
        dispatch({
            type: "setCardsInPlay",
            data: firstHand
        })
    }
    
    return (

        <ControlPanel>
            <Button onClick={startNewGame}>New Game</Button>
            <Score>{score}</Score>
            <Button>Add Cards</Button>
        </ControlPanel>
    )

}

export default GamePanel