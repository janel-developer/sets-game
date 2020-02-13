import React from "react"
import {useCardContext} from "../config/store"
import {deal, shuffle, newCardDeck, findSets, updateHighestScores} from "../services/gameServices"
import {pointsLostForMissingSet} from "../services/gameConstants"
import {Button,HintButton,Score,ControlPanel} from "./StyledComponents"

const GamePanel = () => {

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
        let currentHighestScores = getLocalHighScores()
        const highestScores = updateHighestScores(currentHighestScores, score)

        // Save in state
        dispatch({
            type: "setHighScores",
            data: highestScores
        })    

        // Set in local storage
        setLocalHighScores(highestScores)

        // return the highest score
        return highestScores[0]
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
        // Save in state
        dispatch({
            type: "setHighScores",
            data: getLocalHighScores()
        })    
    }

    function endOfGame() {
        // check for bonus points for perfect game
        if(score === setsFound * 10) {
            dispatch({
               type: "updateScore",
               data: 20 
            })
        }

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

    function dealThreeCards() {
        if(deck.length === 0) {
            endOfGame()
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