import React from "react"
import styled from "styled-components"

const SetsCard = ({color, number, shape, fill}) => {
    // Get inner width of the window
    const innerWidth = window.innerWidth
    // Cards are 150px wide for md/large screen, and 75px wide for sm/xs screen
    const cardWidth = innerWidth > 500 ? 150 : 75
    // Cards are 300px high for md/large screen, and 150px high for sm/xs screen
    const cardHeight = innerWidth > 500 ? 300 : 150
    // Card shapes are 100px wide for md/large screen and 50px wide for sm/xs screen
    // If there are 2 shapes, divide width by 2 (below)
    // If there are 3 shapes, divide width by 3 (below)
    let shapeWidth = innerWidth > 500 ? 100 : 50
    // If a rectangle or oval, width is half of height
    if (shape !== "circle") 
        shapeWidth = shapeWidth / 2
    // Card shapes are 100px tall for md/large screen and 50px tall for sm/xs screen
    // If there are 2 shapes, divide height by 2 (below)
    // If there are 3 shapes, divide height by 3 (below)
    const shapeHeight = innerWidth > 500 ? 100: 50 
    // Set border radius for circle and oval
    const borderRadius = (shape === "circle") ? "50%" : "50px / 100px"

    // Styles the card with a black border
    // Centers shapes on the card
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

    // Creates the card shapes and fill
    // Uses mask to fill with svg of the appropriate color
    // SVG image is defined in style sheet
    const CardShape = styled.span `
        height: ${shapeHeight/number.length}px;
        width: ${shapeWidth/number.length}px;
        background: ${(fill === "empty") ? "white" : color};
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