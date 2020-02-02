import React from "react"
import styled from "styled-components"
import SetsCard from "./SetsCard"
import {colors, pointsForSet, pointsLostForMissingSet,pointsLostForNoSet} from "../services/gameConstants"

const Instructions = () => {
    const Text = styled.div `
        color: darkblue;
        font-family: 'Amarante', cursive;
        align-self: center;
        font-size: 1.5em;
        margin-top: .5em;
    `
    const Title = styled(Text) `
        font-size: 3em;
    `
    const Page = styled.div `
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 90vw;
    `
    const Row = styled.div `
        display: flex;
        justify-content: center;
        margin-top: .5em;
    `
    const oneColor1CircleSolid = {
        id: `1|${colors[0]}|circle|solid`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
    const oneColor1CircleEmpty = {
        id: `1|${colors[0]}|circle|empty`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "empty"
    }
    const oneColor1CircleFill = {
        id: `1|${colors[0]}|circle|fill`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "fill"
    }
    const oneColor2CircleSolid = {
        id: `1|${colors[1]}|circle|solid`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    const oneColor3CircleSolid = {
        id: `1|${colors[2]}|circle|solid`,
        number: [1],
        color: colors[2],
        shape: "circle",
        fill: "solid"
    }
    const oneColor2SquareSolid = {
        id: `1|${colors[1]}|square|solid`,
        number: [1],
        color: colors[1],
        shape: "square",
        fill: "solid"
    }
    const twoColor2SquareSolid = {
        id: `2|${colors[1]}|square|solid`,
        number: [1,2],
        color: colors[1],
        shape: "square",
        fill: "solid"
    }
    const oneColor3OvalSolid = {
        id: `1|${colors[2]}|oval|solid`,
        number: [1],
        color: colors[2],
        shape: "oval",
        fill: "solid"
    }
    const threeColor3OvalSolid = {
        id: `3|${colors[2]}|oval|solid`,
        number: [1,2,3],
        color: colors[2],
        shape: "oval",
        fill: "solid"
    }
    return (
        <Page>
            <div>
            <Title>How to play</Title>
            <Text>Press the New Game button to start a new game.</Text>
            <Text>Make sets of three cards. For each set you select, you will earn {pointsForSet} points. 
                If you select 3 cards that do not make a set, you will lose {-1*pointsLostForNoSet} points.
                Cards in a set meet the following criteria:</Text>
            <Text>1. All colors are the same, or all colors are different.</Text>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor1CircleEmpty} />
                <SetsCard {...oneColor1CircleFill} />
            </Row>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor2CircleSolid} />
                <SetsCard {...oneColor3CircleSolid} />
            </Row>
            <Text>2. All shapes are the same, or all shapes are different.</Text>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor1CircleEmpty} />
                <SetsCard {...oneColor1CircleFill} />
            </Row>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor2SquareSolid} />
                <SetsCard {...oneColor3OvalSolid} />
            </Row>
            <Text>3. All fill types are the same, or all fill types are different.</Text>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor2SquareSolid} />
                <SetsCard {...oneColor3OvalSolid} />
            </Row>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor1CircleEmpty} />
                <SetsCard {...oneColor1CircleFill} />
            </Row>
            <Text>4. All have the same number of shapes, or all have a different number of shapes.</Text>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...oneColor1CircleEmpty} />
                <SetsCard {...oneColor1CircleFill} />
            </Row>
            <Row>
                <SetsCard {...oneColor1CircleSolid} />
                <SetsCard {...twoColor2SquareSolid} />
                <SetsCard {...threeColor3OvalSolid} />
            </Row>
            <Title>Add Cards</Title>
            <Text>When you think there are no more sets on the board, use the Add Cards button to add three more cards to the board. If there are still more sets on the board, {-1*pointsLostForMissingSet} points will be taken from your score and no new cards will be added.</Text>
            <Title>Hint</Title>
            <Text>If you get stuck, the Hint button will display one card that is in a set on the board. It will also cost you {-1*pointsLostForMissingSet} points, but if there are no sets on the board, 3 new cards will be added (without a hint) and no points will be lost.</Text>
            </div>
        </Page>

    )
}

export default Instructions