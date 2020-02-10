import styled from "styled-components"

const accentColor = "rgba(0,200,255,.5)"

const innerWidth = window.innerWidth;
let width = "100vw"
// If a medium/large screen, use 750px wide gameboard
// If small/xs screen, use 100vw
if(innerWidth > 620)
    width = "750px"

// Centered flex layout
const CenteredFlex = styled.div `
    display: flex;
    justify-content: center;
`

// Game board styling
// Centers the cards horizonally on the gameboard
export const Board= styled(CenteredFlex) `
    grid-area: GameBoard;
`

// Centers cards horizontally and vertically and
// places them in columns of 3 cards in all resolutions
export const Cards = styled(CenteredFlex) `
    flex-wrap: wrap;
    width: ${width};
    align-items: center;
    align-content: center;
`

// Text styling 
export const Text = styled.div `
    color: darkblue;
    font-family: 'Amarante', cursive;
    font-size: 1.5em;
`
export const Title = styled(Text) `
    font-size: 2em;
`

export const InstructionText = styled(Text) `
    align-self: center;
    margin-top: .5em;
`

export const MessageText = styled(Text) `
    padding: 2px;
    text-align: center;
`


// Game panel components styling
export const Score = styled(Text) `
    width: 25vw;
    border 2px solid darkblue;
    margin: 5px;
    padding: 2px;
    text-align: center;
`
export const ControlPanel = styled(CenteredFlex) `
    width: 100vw;
    flex-wrap: wrap;
    grid-area: GamePanel;
    margin-bottom: 2px;
`

// Button styling
export const Button = styled.button `
    width: 25vw;
    background: url("img/sacred-geo.svg");
    background-size: 70%;
    font-size: 1em;
    border-radius: 3px;
    color: darkblue;
    font-family: 'Amarante', cursive;
    border: 2px solid ${accentColor};
    margin: 5px;
    padding: 2px;
    transition: 0.5s all ease-out;
`
export const HintButton = styled(Button) `
    width: 50vw;
    background: darkblue;
    color: white;
    &:hover {
        background: ${accentColor};
        color: black;
        border: 2px solid darkblue;
    }
`
// Instructions page styling
export const Page = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 90vw;
`
export const Row = styled(CenteredFlex) `
    margin-top: .5em;
`

// Score board styling
export const ScoreBoard = styled(MessageText) `
    border: 2px darkblue solid;
    margin: 5px auto;
`
export const ScoreTitle = styled(Text) `
    border-bottom: 2px darkblue solid; 
    margin-top: 0;
`