import React from "react"
import {Message,Title} from "./StyledComponents"
import {useCardContext} from "../config/store"

const HighScores = () => {
    const {store} = useCardContext()
    const {highScores} = store

    return (
        <Message>
            <Title>High Scores</Title>
            {highScores.map((score) => <div key={score}>{score}</div>)}
        </Message>
    )
}

export default HighScores