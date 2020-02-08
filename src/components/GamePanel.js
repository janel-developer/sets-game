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
    const {score, cardsInPlay, deck, setsFound, showInstructions} = store

    // Get locally stored high scores
    function getLocalHighScores() {
        return localStorage.highScores ? JSON.parse(localStorage.highScores)
                : []
    }

    // Set high scores in local storage
    function setLocalHighScores(scores) {
        localStorage.setItem("highScores",JSON.stringify(scores))
    }

    // Update the high scores
    function updateHighScores() {
        let scores = getLocalHighScores()
        console.log("scores from local storage", scores)
        // This is the first high score stored
        if(scores.length === 0) {
            scores[0] = score 
        } 
        // if not the first, is it higher than the highest?
        else if (score > scores[0]) {
            scores.unshift(score)
        }
        // Only store the 3 highest scores
        scores.length > 3 && scores.pop()
        console.log("scores after updating", scores)
        // Save in state
        dispatch({
            type: "setHighScores",
            data: scores
        })    

        // Set in local storage
        setLocalHighScores(scores)
        return scores[0]
    }
    
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
            type: "resetGame"
        })
    }

    function dealThreeCards() {
        if(deck.length === 0) {
            // check for high score
            const highestScore = updateHighScores()

            let message = `Game over! You found ${setsFound} sets!`
            if(score === highestScore) {
                message = `${message}\n And you beat your highest score!!`
            }
            // The game is over!
            dispatch({
                type: "setPlayerMessage",
                data: message
            })
            dispatch({
                type: "setEndOfGame"
            })
        }
        let newCards = deal(deck,3)
        dispatch({
            type: "addCardsToPlay",
            data: newCards
        })

    }

    function addCards () {
        if (showInstructions) return
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
        if(cardsInPlay.length === 0 || showInstructions) return
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
            <Button className="button" onClick={startNewGame}>New Game</Button>
            <Score>{score}</Score>
            <Button className="button" onClick={addCards}>Add Cards</Button>
            <HintButton onClick={showHint}>Hint</HintButton>
        </ControlPanel>
    )

}

export default GamePanel