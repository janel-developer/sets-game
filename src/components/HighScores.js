import React from "react"
import styled from "styled-components"
import {Message,Text} from "./StyledComponents"
import {useCardContext} from "../config/store"

const HighScores = () => {
    const {store} = useCardContext()
    const {highScores} = store
    const ScoreBoard = styled(Message) `
        border: 2px darkblue solid;
        width: 50%;
        margin: auto;
    `
    const ScoreTitle = styled(Text) `
        border-bottom: 2px darkblue solid; 
        margin-top: 0;
    `
    return (
        <ScoreBoard>
            <ScoreTitle>High Scores</ScoreTitle>
            {highScores.map((score) => <div key={score}>{score}</div>)}
        </ScoreBoard>
    )
}

export default HighScores