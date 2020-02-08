import React from "react"
import {ScoreBoard, ScoreTitle} from "./StyledComponents"
import {useCardContext} from "../config/store"

const HighScores = () => {
    const {store} = useCardContext()
    const {highScores} = store

    return (
        <ScoreBoard>
            <ScoreTitle>High Scores</ScoreTitle>
            {highScores.map((score) => <div key={score}>{score}</div>)}
        </ScoreBoard>
    )
}

export default HighScores