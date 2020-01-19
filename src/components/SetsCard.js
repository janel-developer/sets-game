import React from "react"
import styled from "styled-components"

const SetsCard = ({color, number, shape, fill}) => {
    const innerWidth = window.innerWidth
    const cardWidth = innerWidth > 500 ? 150 : 75
    const cardHeight = innerWidth > 500 ? 300 : 150
    let shapeWidth = innerWidth > 500 ? 100 : 50
    if (shape !== "circle") 
        shapeWidth = shapeWidth / 2
    const shapeHeight = innerWidth > 500 ? 100: 50 
    const borderRadius = (shape === "circle") ? "50%" : "50px / 100px"

    const Card = styled.div `
        border: 2px solid black;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: ${cardHeight}px;
        width: ${cardWidth}px;
    `
    const CardShape = styled.span `
        height: ${shapeHeight/number.length}px;
        width: ${shapeWidth/number.length}px;
        background: ${color};
        border: 2px solid ${color};
        border-radius: ${(shape === "square") ? "0" : borderRadius};
        mask-size: 200%;
        mask-position: center;
        margin: .5em;
    `
   return (
    <Card>
        { number.map((key) => 
            (fill === "fill") 
            ? <CardShape key={key} className="fill" /> 
            : <CardShape key={key} />
        )}
    </Card>
   )          
}

export default SetsCard