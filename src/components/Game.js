import React,{Fragment, useReducer, useEffect} from "react"
import GamePanel from "./GamePanel"
import GameBoard from "./GameBoard"
import {newCardDeck, shuffle} from "../services/gameServices"
import reducer from "../config/reducer"
import {CardContext} from "../config/store"

const Game = () => {

    const initialState = {
        deck: [],
        cardsInPlay: []
    }
    const [store,dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: "setDeck",
            data: shuffle(newCardDeck()) })
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