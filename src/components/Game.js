import React,{Fragment, useReducer, useEffect} from "react"
import GamePanel from "./GamePanel"
import GameBoard from "./GameBoard"
import PlayerMessage from "./PlayerMessage"
import reducer from "../config/reducer"
import {CardContext} from "../config/store"
import EventEmitter from "../config/EventEmitter"
import {selectedCardsAreSet} from "../services/gameServices"
import {pointsForSet,pointsLostForNoSet} from "../services/gameConstants"

const Game = () => {

    const initialState = {
        deck: [],
        cardsInPlay: [],
        selectedCards: [],
        score: 0,
        playerMessage: null,
        setsFound: 0
    }
    const [store,dispatch] = useReducer(reducer, initialState)
    const {playerMessage} = store

    // Updates state as appropriate when three cards are selected
    // Gets called when a card is selected on the gameboard by subscribing to the "cardSelected" event.
    // Selection events are published by the cards themselves (in SetsCard).
    function cardsSelectedEventHandler(selectedCardIds) {
        // See if we have three selected cards, and if so, see if it's a set
        if(selectedCardIds.length === 3) {
            if(selectedCardsAreSet(selectedCardIds)) {
                // We have a set! Increment score and remove cards from cardsInPlay
                dispatch({
                    type: "updateScore",
                    data: pointsForSet
                })
                dispatch({
                    type: "removeSetFromPlay",
                    data: selectedCardIds
                })
                dispatch({
                    type: "incrementSetsFound"
                })
            }
            else {
                // We don't have a set. Decrement score and display something to the player
                // TBD: display indication to the player (other than score)
                dispatch({
                    type: "updateScore",
                    data: pointsLostForNoSet
                })
            }
            dispatch({
                type: "clearSelectedCards"
            })
        }
    }
    // We only need to subscribe once to game events, so do it as an effect.
    useEffect(() => {
        // Subscribe to game events for card selections
        EventEmitter.subscribe("cardSelected", cardsSelectedEventHandler)
        return () => {}
    },[])

    return (
        <Fragment>
            <CardContext.Provider value={{store,dispatch}} >
                <GamePanel />
                {playerMessage && <PlayerMessage message={playerMessage} />}
                <GameBoard />
            </CardContext.Provider>
        </Fragment>
    )
}

export default Game