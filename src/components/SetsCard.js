import React from "react"
import styled from "styled-components"
import {useCardContext} from "../config/store"
import EventEmitter from "../config/EventEmitter"
import {isCardSelected} from "../services/gameServices"

const SetsCard = ({id, color, number, shape, fill}) => {
    // Get inner width of the window
    const innerWidth = window.innerWidth

    const shapeMargin = innerWidth > 500 ? 0.8 : 0.5
    // Cards are 150px wide for md/large screen, and 75px wide for sm/xs screen
    const cardWidth = innerWidth > 500 ? 200 : 100
    // Cards are 300px high for md/large screen, and 150px high for sm/xs screen
    const cardHeight = innerWidth > 500 ? 150 : 80
    // Card shapes are 100px wide for md/large screen and 50px wide for sm/xs screen
    // If there are 2 shapes, divide width by 2 (below)
    // If there are 3 shapes, divide width by 3 (below)
    let shapeWidth = innerWidth > 500 ? 100 : 50
    // If a rectangle or diamond, width is half of height
    if (shape === "square") 
        shapeWidth = shapeWidth / 2
    // Card shapes are 100px tall for md/large screen and 50px tall for sm/xs screen
    // If there are 2 shapes, divide height by 2 (below)
    // If there are 3 shapes, divide height by 3 (below)
    let shapeHeight = innerWidth > 500 ? 100 : 50
    
    //scale diamonds down by 20%
    if(shape === "diamond"){
        shapeHeight = shapeHeight * 0.8;
        shapeWidth = shapeWidth * 0.8;
    }

    // Set border radius for circle
    const borderRadius = (shape === "circle") ? "50%" : "50px / 100px";
    //spin diamond so it's actually a diamond
    const turn = (shape === "diamond") ? "rotate(45deg)" : "0";

    const selectedColor = "rgba(0,200,255,.3)"
    const {store,dispatch} = useCardContext()
    const {selectedCards,showInstructions} = store
    // If card is selected, set background color to show selected
    const cardSelected = isCardSelected(selectedCards,id)
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
        transition: 0.5s all ease-out;
        background-color: ${cardSelected ? selectedColor : "white"};
    `

    // Creates the card shapes and fill
    // Uses mask to fill with svg of the appropriate color
    // SVG image is defined in style sheet
    const CardShape = styled.span `
        height: ${shapeHeight/number.length}px;
        width: ${shapeWidth/number.length}px;
        background: ${(fill === "empty") ? "white" : color};
        border: 2px solid ${color};
        border-radius: ${(shape === "square" || shape === "diamond") ? "0" : borderRadius};
        mask-size: 200%;
        mask-position: center;
        margin: ${shapeMargin}em;
        transform: ${turn};
    
    // Sets selected on the card that is selected    `
    function selectCardAction(id) {
        if(showInstructions) return
        if (selectedCards.includes(id) ) {
            // If card is currently selected, deselect it
            dispatch({
                type: "removeSelectedCard",
                data: id
            })
        }
        else {
            // Otherwise add this to selected cards and publish an event
            // so the game logic will react when 3 cards are selected
            dispatch({
                type: "addSelectedCard",
                data: id
            })
            EventEmitter.publish("cardSelected", [...selectedCards,id])
        }
    }

    return (
        <Card className="card" onClick={() => selectCardAction(id)} >
            { number.map((key) => 
                (fill === "fill") 
                ? <CardShape key={key} className="fill" /> 
                : <CardShape key={key} />
            )}
        </Card>
   )          
}

export default SetsCard