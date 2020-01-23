import {newCardDeck} from "./gameServices"
import {colors, numbers, shapes, fills} from "./gameConstants"

let fixtures = {}
describe("newCardDeck", () => {
    beforeAll(() => {
        fixtures.deck = newCardDeck()
    })
    it("generates 81 cards", () => {
        expect(fixtures.deck.length).toEqual(81)
    })
    for(let color of colors){
        it(`contains 27 ${color} cards`, () => {
            expect(fixtures.deck.filter((card) => card.color === color).length).toEqual(27)
        })
    }
    for(let shape of shapes){
        it(`contains 27 ${shape} cards`, () => {
            expect(fixtures.deck.filter((card) => card.shape === shape).length).toEqual(27)
        })
    }
    for(let fill of fills){
        it(`contains 27 ${fill} cards`, () => {
            expect(fixtures.deck.filter((card) => card.fill === fill).length).toEqual(27)
        })
    }
    for(let number of numbers){
        const faceValue = number[number.length-1]
        it(`contains 27 ${faceValue} cards`, () => {
            expect(fixtures.deck.filter((card) => card.number[card.number.length-1] === faceValue).length).toEqual(27)
        })
    }
})