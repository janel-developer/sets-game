import React,{Fragment, useReducer, useEffect} from "react"
import GamePanel from "./GamePanel"
import GameBoard from "./GameBoard"
import reducer from "../config/reducer"
import {CardContext} from "../config/store"
import EventEmitter from "../config/EventEmitter"
import {selectedCardsAreSet} from "../services/gameServices"

const Game = () => {

    const initialState = {
        deck: [],
        cardsInPlay: [],
        selectedCards: [],
        score: 0,
        playerMessage: null
    }
    const [store,dispatch] = useReducer(reducer, initialState)

    // We only need to subscribe once to game events, so do it as an effect.
    // Define the event handler in the scope of useEffect so it isn't a dependency.
    useEffect(() => {
        // Updates state as appropriate when three cards are selected
        // Gets called when a card is selected on the gameboard by subscribing to the "cardSelected" event.
        // Selection events are published by the cards themselves (in SetsCard).
        function cardsSelectedEventHandler(selectedCardIds) {
            // See if we have three selected cards, and if so, see if it's a set
            if(selectedCardIds.length === 3) {
                if(selectedCardsAreSet(selectedCardIds)) {
                    // We have a set! Increment score and remove cards from cardsInPlay
                    // TBD
                }
                else {
                    // We don't have a set. Decrement score and display something to the player
                    // TBD
                }
            }
        }
        // Subscribe to game events for card selections
        EventEmitter.subscribe("cardSelected", cardsSelectedEventHandler)
        return () => {}
    },[])

    return (
        <Fragment>
            <CardContext.Provider value={{store,dispatch}} >
                <GamePanel />
                <GameBoard />
            </CardContext.Provider>
        </Fragment>
    )
}

export default Game