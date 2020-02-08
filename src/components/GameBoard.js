import React from "react"
import SetsCard from "./SetsCard"
import {useCardContext} from "../config/store"
import {Board, Cards} from "./StyledComponents"

const GameBoard = () => {

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