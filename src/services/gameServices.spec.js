import {
    newCardDeck, 
    deal, 
    selectedCardsAreSet, 
    getAllPairs, 
    missingNumber,
    missingColor,
    missingShape,
    missingFill,
    findSets} from "./gameServices"
import {colors, numbers, shapes, fills} from "./gameConstants"

let fixtures = {}
beforeAll(() => {
    fixtures.deck = newCardDeck()
    fixtures.oneColor1= 
    {
        id: `1|${colors[0]}|circle|solid`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneColor2 =
    {
        id: `1|${colors[1]}|circle|solid`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneColor3 =
    {
        id: `1|${colors[2]}|circle|solid`,
        number: [1],
        color: colors[2],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoColor1 = 
    {
        id: `2|${colors[0]}|circle|solid`,
        number: [1,2],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoColor2 =
    {
        id: `2|${colors[1]}|circle|solid`,
        number: [1,2],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoColor3 =
    {
        id: `2|${colors[2]}|circle|solid`,
        number: [1,2],
        color: colors[2],
        shape: "circle",
        fill: "solid"
    }
    fixtures.threeColor1 = 
    {
        id: `3|${colors[0]}|circle|solid`,
        number: [1,2,3],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
    fixtures.threeColor2 =
    {
        id: `3|${colors[1]}|circle|solid`,
        number: [1,2,3],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneCircle =
    {
        id: `1|${colors[1]}|circle|solid`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoCircle =
    {
        id: `2|${colors[1]}|circle|solid`,
        number: [1,2],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneSquare =
    {
        id: `1|${colors[1]}|square|solid`,
        number: [1],
        color: colors[1],
        shape: "square",
        fill: "solid"
    }
    fixtures.twoSquare =
    {
        id: `2|${colors[1]}|square|solid`,
        number: [1,2],
        color: colors[1],
        shape: "square",
        fill: "solid"
    }
    fixtures.oneOval =
    {
        id: `1|${colors[1]}|oval|solid`,
        number: [1],
        color: colors[1],
        shape: "oval",
        fill: "solid"
    }
    fixtures.twoOval =
    {
        id: `2|${colors[1]}|oval|solid`,
        number: [1,2],
        color: colors[1],
        shape: "oval",
        fill: "solid"
    }
    fixtures.oneSolid =
    {
        id: `1|${colors[1]}|circle|solid`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoSolid =
    {
        id: `2|${colors[1]}|circle|solid`,
        number: [1,2],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneEmpty =
    {
        id: `1|${colors[1]}|square|empty`,
        number: [1],
        color: colors[1],
        shape: "square",
        fill: "empty"
    }
    fixtures.twoEmpty =
    {
        id: `2|${colors[1]}|square|empty`,
        number: [1,2],
        color: colors[1],
        shape: "square",
        fill: "empty"
    }
    fixtures.oneFill =
    {
        id: `1|${colors[1]}|oval|fill`,
        number: [1],
        color: colors[1],
        shape: "oval",
        fill: "fill"
    }
    fixtures.twoFill =
    {
        id: `2|${colors[1]}|oval|fill`,
        number: [1,2],
        color: colors[1],
        shape: "oval",
        fill: "fill"
    }
    fixtures.oneColor1CircleSolid = 
    {
        id: `1|${colors[0]}|circle|solid`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneColor1CircleEmpty = 
    {
        id: `1|${colors[0]}|circle|empty`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "empty"
    }
    fixtures.oneColor1CircleFill = 
    {
        id: `1|${colors[0]}|circle|fill`,
        number: [1],
        color: colors[0],
        shape: "circle",
        fill: "fill"
    }
    fixtures.oneColor2CircleSolid = 
    {
        id: `1|${colors[1]}|circle|solid`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.oneColor2CircleEmpty = 
    {
        id: `1|${colors[1]}|circle|empty`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "empty"
    }
    fixtures.oneColor2CircleFill = 
    {
        id: `1|${colors[1]}|circle|fill`,
        number: [1],
        color: colors[1],
        shape: "circle",
        fill: "fill"
    }
    fixtures.twoColor1CircleSolid = 
    {
        id: `2|${colors[0]}|circle|solid`,
        number: [1,2],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoColor2CircleSolid = 
    {
        id: `2|${colors[1]}|circle|solid`,
        number: [1,2],
        color: colors[1],
        shape: "circle",
        fill: "solid"
    }
    fixtures.twoColor3CircleSolid = 
    {
        id: `2|${colors[2]}|circle|solid`,
        number: [1,2],
        color: colors[2],
        shape: "circle",
        fill: "solid"
    }
    fixtures.threeColor1CircleSolid = 
    {
        id: `3|${colors[0]}|circle|solid`,
        number: [1,2,3],
        color: colors[0],
        shape: "circle",
        fill: "solid"
    }
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
        const selectedCards = [`1|${colors[0]}|circle|solid`,`1|${colors[1]}|circle|solid`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
    })
    it("returns false when exactly 2 of 3 cards have same number", () => {
        let selectedCards = [`1|${colors[0]}|circle|fill`,`1|${colors[0]}|circle|solid`,`2|${colors[0]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[0]}|circle|fill`,`2|${colors[0]}|circle|solid`,`2|${colors[0]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[0]}|circle|fill`,`3|${colors[0]}|circle|solid`,`3|${colors[0]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`2|${colors[0]}|circle|fill`,`3|${colors[0]}|circle|solid`,`3|${colors[0]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`2|${colors[0]}|circle|fill`,`2|${colors[0]}|circle|solid`,`3|${colors[0]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
    })
    it("returns false when exactly 2 of 3 three colors are the same", () => {
        let selectedCards = [`1|${colors[0]}|circle|fill`,`1|${colors[1]}|circle|solid`,`1|${colors[1]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[1]}|circle|fill`,`2|${colors[0]}|circle|solid`,`3|${colors[1]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[1]}|circle|fill`,`2|${colors[0]}|circle|solid`,`3|${colors[0]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
    })
    it("returns false when exactly 2 of 3 shapes are the same", () => {
        let selectedCards = [`1|${colors[2]}|circle|fill`,`1|${colors[2]}|circle|solid`,`1|${colors[2]}|square|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[2]}|circle|fill`,`1|${colors[2]}|square|solid`,`1|${colors[2]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[2]}|square|fill`,`1|${colors[2]}|circle|solid`,`1|${colors[2]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)

    })
    it("returns false when exactly 2 of the 3 fills are the same",() => {
        let selectedCards = [`1|${colors[2]}|circle|fill`,`1|${colors[2]}|oval|fill`,`1|${colors[2]}|square|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[2]}|circle|fill`,`1|${colors[2]}|oval|empty`,`1|${colors[2]}|square|fill`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)
        selectedCards = [`1|${colors[2]}|circle|fill`,`1|${colors[2]}|oval|empty`,`1|${colors[2]}|square|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(false)

    })
    it("returns true when we have 3 like numbers, 3 like colors, 3 like shapes, 3 different fills", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`1|${colors[2]}|circle|fill`,`1|${colors[2]}|circle|empty`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like numbers, 3 like colors, 3 like fills, 3 different shapes", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`1|${colors[2]}|oval|solid`,`1|${colors[2]}|square|solid`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like numbers, 3 like shapes, 3 like fills, 3 different colors", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`1|${colors[0]}|circle|solid`,`1|${colors[1]}|circle|solid`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like colors, 3 like shapes, 3 like fills, 3 different numbers", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`2|${colors[2]}|circle|solid`,`3|${colors[2]}|circle|solid`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different numbers, 3 different colors, 3 different shapes, 3 like fills", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`2|${colors[0]}|square|solid`,`3|${colors[1]}|oval|solid`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different numbers, 3 different colors, 3 different fills, 3 like shapes", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`2|${colors[0]}|circle|empty`,`3|${colors[1]}|circle|fill`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different numbers, 3 different shapes, 3 different fills, 3 like colors", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`2|${colors[2]}|square|empty`,`3|${colors[2]}|oval|fill`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different colors, 3 different shapes, 3 different fills, 3 like numbers", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`1|${colors[0]}|square|empty`,`1|${colors[1]}|oval|fill`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 like colors, 3 different shapes, 3 like fills, 3 different numbers", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`2|${colors[2]}|square|solid`,`3|${colors[2]}|oval|solid`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
    it("returns true when we have 3 different colors, 3 like shapes, 3 different fills, 3 like numbers", () => {
        const selectedCards = [`1|${colors[2]}|circle|solid`,`1|${colors[0]}|circle|empty`,`1|${colors[1]}|circle|fill`]
        expect(selectedCardsAreSet(selectedCards)).toEqual(true)
    })
})
describe("findAllPairs", () => {
    it("should return empty set if empty array passed in", () => {
        expect(getAllPairs([]).length).toEqual(0)
    })
    describe("should return n!/2!(n-2)! number of pairs for any array of cards of length n", () => {
        it("should return 36 pairs for 9 cards", () => {
            expect(getAllPairs(fixtures.deck.slice(0,9)).length).toEqual(36)
        })
        it("should return 66 pairs for 12 cards", () => {
            expect(getAllPairs(fixtures.deck.slice(0,12)).length).toEqual(66)
        })
        it("should return 105 pairs for 15 cards", () => {
            expect(getAllPairs(fixtures.deck.slice(0,15)).length).toEqual(105)
        })
    })
})
describe("missingNumber", () => {
    it("should return 1 if both pairs have 1", () => {
        expect(missingNumber([fixtures.oneColor1,fixtures.oneColor2])).toEqual(1)
    })
    it("should return 2 if both pairs have 2", () => {
        expect(missingNumber([fixtures.twoColor1,fixtures.twoColor2])).toEqual(2)
    })
    it("should return 3 if both pairs have 3", () => {
        expect(missingNumber([fixtures.threeColor1,fixtures.threeColor2])).toEqual(3)
    })
    it("should return 3 if one card has 1 and one has 2", () => {
        expect(missingNumber([fixtures.oneColor1,fixtures.twoColor1])).toEqual(3)
    })
    it("should return 2 if one card has 1 and one has 3", () => {
        expect(missingNumber([fixtures.oneColor1,fixtures.threeColor1])).toEqual(2)
    })
    it("should return 1 if one card has 2 and one has 3", () => {
        expect(missingNumber([fixtures.twoColor1,fixtures.threeColor1])).toEqual(1)
    })
})
describe("missingColor", () => {
    it("should return color1 if both pairs have color1", () => {
        expect(missingColor([fixtures.oneColor1,fixtures.twoColor1])).toEqual(colors[0])
    })
    it("should return color2 if both pairs have color2", () => {
        expect(missingColor([fixtures.oneColor2,fixtures.twoColor2])).toEqual(colors[1])
    })
    it("should return color3 if both pairs have color3", () => {
        expect(missingColor([fixtures.oneColor3,fixtures.twoColor3])).toEqual(colors[2])
    })
    it("should return color1 if one has color2 and one has color3", () => {
        expect(missingColor([fixtures.oneColor2,fixtures.oneColor3])).toEqual(colors[0])
    })
    it("should return color2 if one has color1 and one has color3", () => {
        expect(missingColor([fixtures.oneColor1,fixtures.oneColor3])).toEqual(colors[1])
    })
    it("should return color3 if one has color1 and one has color2", () => {
        expect(missingColor([fixtures.oneColor1,fixtures.oneColor2])).toEqual(colors[2])
    })
})
describe("missingShape", () => {
    it("should return circle if both pairs have circle", () => {
        expect(missingShape([fixtures.oneCircle,fixtures.twoCircle])).toEqual("circle")
    })
    it("should return square if both pairs have square", () => {
        expect(missingShape([fixtures.oneSquare,fixtures.twoSquare])).toEqual("square")
    })
    it("should return oval if both pairs have oval", () => {
        expect(missingShape([fixtures.oneOval,fixtures.twoOval])).toEqual("oval")
    })
    it("should return circle if one has square and one has oval", () => {
        expect(missingShape([fixtures.oneSquare,fixtures.oneOval])).toEqual("circle")
    })
    it("should return square if one has circle and one has oval", () => {
        expect(missingShape([fixtures.oneCircle,fixtures.oneOval])).toEqual("square")
    })
    it("should return oval if one has circle and one has square", () => {
        expect(missingShape([fixtures.oneCircle,fixtures.oneSquare])).toEqual("oval")
    })
})
describe("missingFill", () => {
    it("should return solid if both pairs have solid", () => {
        expect(missingFill([fixtures.oneSolid,fixtures.twoSolid])).toEqual("solid")
    })
    it("should return empty if both pairs have empty", () => {
        expect(missingFill([fixtures.oneEmpty,fixtures.twoEmpty])).toEqual("empty")
    })
    it("should return fill if both pairs have fill", () => {
        expect(missingFill([fixtures.oneFill,fixtures.twoFill])).toEqual("fill")
    })
    it("should return solid if one has empty and one has fill", () => {
        expect(missingFill([fixtures.oneEmpty,fixtures.oneFill])).toEqual("solid")
    })
    it("should return empty if one has solid and one has fill", () => {
        expect(missingFill([fixtures.oneSolid,fixtures.oneFill])).toEqual("empty")
    })
    it("should return fill if one has solid and one has empty", () => {
        expect(missingFill([fixtures.oneSolid,fixtures.oneEmpty])).toEqual("fill")
    })
})
describe("findSets", () => {
    it("returns an empty array when there are no cards in play", () => {
        expect(findSets([])).toEqual([])
    })
    describe("returns an empty array when there are no sets", () => {
        it("returns an empty array when there are ", () => {
            const cards = [fixtures.oneColor1CircleEmpty, fixtures.oneColor1CircleFill,fixtures.threeColor1CircleSolid]
            expect(findSets(cards)).toEqual([])
        })
    })
})