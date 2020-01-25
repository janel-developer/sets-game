import {newCardDeck, deal, selectedCardsAreSet} from "./gameServices"
import {colors, numbers, shapes, fills} from "./gameConstants"

let fixtures = {}
beforeAll(() => {
    fixtures.deck = newCardDeck()
})
describe("newCardDeck", () => {
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
        const faceValue = number.length
        it(`contains 27 ${faceValue} cards`, () => {
            expect(fixtures.deck.filter((card) => card.number.length === faceValue).length).toEqual(27)
        })
    }
})
describe("deal", () => {
    beforeEach(() => {
        fixtures.deck = newCardDeck()
    })
    it("deals 3 and removes from deck", () => {
        let dealtCards = []
        dealtCards = deal(fixtures.deck,3)
        expect(dealtCards.length).toEqual(3)
        expect(fixtures.deck.length).toEqual(81-3)
    })
    it("deals 12 and removes from deck", () => {
        let dealtCards = []
        dealtCards = deal(fixtures.deck,12)
        expect(dealtCards.length).toEqual(12)
        expect(fixtures.deck.length).toEqual(81-12)
    })
})
describe("selectedCardsAreSet", () => {
    it("returns false when less than 3 cards", () => {
        const selectedCards = ["1|red|circle|solid","1|black|circle|solid"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
    })
    it("returns false when exactly 2 of 3 cards have same number", () => {
        let selectedCards = ["1|black|circle|fill","1|black|circle|solid","2|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","2|black|circle|solid","2|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","3|black|circle|solid","3|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["2|black|circle|fill","3|black|circle|solid","3|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["2|black|circle|fill","2|black|circle|solid","3|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
    })
    it("returns false when exactly 2 of 3 three colors are the same", () => {
        let selectedCards = ["1|red|circle|fill","1|black|circle|solid","1|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","2|red|circle|solid","3|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","2|red|circle|solid","3|red|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
    })
    it("returns false when exactly 2 of 3 shapes are the same", () => {
        let selectedCards = ["1|black|circle|fill","1|black|circle|solid","1|black|square|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","1|black|square|solid","1|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|square|fill","1|black|circle|solid","1|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)

    })
    it("returns false when exactly 2 of the 3 fills are the same",() => {
        let selectedCards = ["1|black|circle|fill","1|black|oval|fill","1|black|square|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","1|black|oval|empty","1|black|square|fill"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = ["1|black|circle|fill","1|black|oval|empty","1|black|square|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)

    })
    it("returns true when we have 3 like numbers, 3 like colors, 3 like shapes, 3 different fills", () => {
        const selectedCards = ["1|black|circle|solid","1|black|circle|fill","1|black|circle|empty"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like numbers, 3 like colors, 3 like fills, 3 different shapes", () => {
        const selectedCards = ["1|black|circle|solid","1|black|oval|solid","1|black|square|solid"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like numbers, 3 like shapes, 3 like fills, 3 different colors", () => {
        const selectedCards = ["1|black|circle|solid","1|red|circle|solid","1|darkblue|circle|solid"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like colors, 3 like shapes, 3 like fills, 3 different numbers", () => {
        const selectedCards = ["1|black|circle|solid","2|black|circle|solid","3|black|circle|solid"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different numbers, 3 different colors, 3 different shapes, 3 like fills", () => {
        const selectedCards = ["1|black|circle|solid","2|red|square|solid","3|darkblue|oval|solid"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different numbers, 3 different colors, 3 different fills, 3 like shapes", () => {
        const selectedCards = ["1|black|circle|solid","2|red|circle|empty","3|darkblue|circle|fill"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different numbers, 3 different shapes, 3 different fills, 3 like colors", () => {
        const selectedCards = ["1|black|circle|solid","2|black|square|empty","3|black|oval|fill"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different colors, 3 different shapes, 3 different fills, 3 like numbers", () => {
        const selectedCards = ["1|black|circle|solid","1|red|square|empty","1|darkblue|oval|fill"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like colors, 3 different shapes, 3 like fills, 3 different numbers", () => {
        const selectedCards = ["1|black|circle|solid","2|black|square|solid","3|black|oval|solid"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different colors, 3 like shapes, 3 different fills, 3 like numbers", () => {
        const selectedCards = ["1|black|circle|solid","1|red|circle|empty","1|darkblue|circle|fill"]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
})