import React from "react"
import styled from "styled-components"

const PlayerMessage = ({message}) => {
    const Message = styled.div `
        color: darkblue;
        padding: 2px;
        font-family: 'Amarante', cursive;
        font-size: 1.5em;
        text-align: center;
    `
    return (
        <Message>{message}</Message>
    )
}

export default PlayerMessage