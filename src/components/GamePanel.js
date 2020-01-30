import React from "react"
import styled from "styled-components"
import {useCardContext} from "../config/store"
import {deal, shuffle, newCardDeck, findSets} from "../services/gameServices"
import {pointsLostForMissingSet} from "../services/gameConstants"

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
    const HintButton = styled(Button) `
        width: 50vw;
        background: darkblue;
        color: white;
        &:hover {
            background: ${accentColor};
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
    const {score, cardsInPlay, deck, setsFound} = store
    
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
        dispatch({
            type: "resetScore"
        })
        dispatch({
            type: "setPlayerMessage",
            data: null
        })
    }

    function dealThreeCards() {
        if(deck.length === 0) {
            // The game is over!
            dispatch({
                type: "setPlayerMessage",
                data: `Game over! You found ${setsFound} sets!`
            })
        }
        let newCards = deal(deck,3)
        dispatch({
            type: "addCardsToPlay",
            data: newCards
        })

    }

    function addCards () {
        // If there are any sets on the board, decrement points
        if(findSets(cardsInPlay).length > 0) {
            dispatch({
                type: "updateScore",
                data: pointsLostForMissingSet
            })
        }
        // If there aren't more sets, deal 3 more cards
        else {
            dealThreeCards()
        }
    }

    function showHint() {
        // Make sure there are cards in play
        if(cardsInPlay.length === 0) return
        // See if there are any sets in play
        const sets = findSets(cardsInPlay)
        if(sets.length > 0) {
            // If there is at least one set, select the first card of that set as a hint
            dispatch({
                type: "clearSelectedCards",
            })
            // Not worried about publishing the select event here because it is the only selected card
            dispatch({
                type: "addSelectedCard",
                data: sets[0]
            })
            // And deduct a point
            dispatch({
                type: "updateScore",
                data: pointsLostForMissingSet
            })
        }
        else {
            // If there are no sets in play, just deal three more cards
            dealThreeCards()
        }
    }
     
    return (

        <ControlPanel>
            <Button onClick={startNewGame}>New Game</Button>
            <Score>{score}</Score>
            <Button onClick={addCards}>Add Cards</Button>
            <HintButton onClick={showHint}>Hint</HintButton>
        </ControlPanel>
    )

}

export default GamePanel