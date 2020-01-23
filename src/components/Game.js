import React,{Fragment, useReducer} from "react"
import GamePanel from "./GamePanel"
import GameBoard from "./GameBoard"
import reducer from "../config/reducer"
import {CardContext} from "../config/store"

const Game = () => {

    const initialState = {
        deck: [],
        cardsInPlay: []
    }
    const [store,dispatch] = useReducer(reducer, initialState)

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