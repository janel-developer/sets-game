import {colors, numbers, shapes, fills} from "./gameConstants"

// newCardDeck - generates card deck (81 cards)
export function newCardDeck() {
    let cardDeck = []
    for (let number of numbers) {
       for (let color of colors) {
           for (let shape of shapes) {
               for (let fill of fills) {
                   
                   const faceValue = number.length
                   const key=`${faceValue}|${color}|${shape}|${fill}`
                   cardDeck.push({
                       id: key,
                       number: number,
                       color: color,
                       shape: shape,
                       fill: fill
                   })
               }
           }
       } 
    }
    return cardDeck
}

// Returns true if the card with id is selected
export function isCardSelected(selectedCardIds, id) {
    for(let cardId of selectedCardIds) {
        if(cardId === id) {
            return true
        }
    }
    return false
}

// Returns true if there are 3 selected cards and they 
// make up a valid set according to game rules
// Card ids are in the form: "number|color|shape|fill"
export function selectedCardsAreSet(selectedCardIds) {
    // If not 3 cards, return false
    if (selectedCardIds.length !== 3) return false
    const card1 = selectedCardIds[0].split("|")
    const card2 = selectedCardIds[1].split("|")
    const card3 = selectedCardIds[2].split("|")

    // If the sum of the numbers is divisible by 3, the numbers are either all alike, or all different (try it!)
    const sumNumbers = parseInt(card1[0]) + parseInt(card2[0]) + parseInt(card3[0])
    if (sumNumbers % 3 !== 0) return false

    // Check the colors
    // 1 and 2 are the same, and 3 is different
    if(card1[1] === card2[1] && card2[1] !== card3[1]) return false
    // 1 and 3 are the same, and 2 is different
    if(card1[1] === card3[1] && card2[1] !== card3[1]) return false
    // 2 and 3 are the same, and 1 is different
    if(card2[1] === card3[1] && card3[1] !== card1[1]) return false

    // Check the shapes
    // 1 and 2 are the same, and 3 is different
    if(card1[2] === card2[2] && card2[2] !== card3[2]) return false
    // 1 and 3 are the same, and 2 is different
    if(card1[2] === card3[2] && card2[2] !== card3[2]) return false
    // 2 and 3 are the same, and 1 is different
    if(card2[2] === card3[2] && card3[2] !== card1[2]) return false

    // Check the fills
    // 1 and 2 are the same, and 3 is different
    if(card1[3] === card2[3] && card2[3] !== card3[3]) return false
    // 1 and 3 are the same, and 2 is different
    if(card1[3] === card3[3] && card2[3] !== card3[3]) return false
    // 2 and 3 are the same, and 1 is different
    if(card2[3] === card3[3] && card3[3] !== card1[3]) return false

    // Otherwise - we have a set!
    return true

}


// shuffle - randomises deck
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
export function shuffle(cards) {

	var currentIndex = cards.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = temporaryValue;
	}

	return cards;
}

// deal(num) - returns num cards from the top of the deck (and removes them from the deck)
export function deal(cards, numberOfCards) {
    return cards.splice(0,numberOfCards)

}

// Used by findSets to find all pair permutations in cardsInPlay
export function getAllPairs(cardsInPlay) {
    let allPairs = []
    for(let ind in cardsInPlay) {
        // for each index, make a pair with card at this index and all cards after this index
        for(let otherInd = parseInt(ind)+1; otherInd < cardsInPlay.length; otherInd++) {
            const pair = [cardsInPlay[ind],cardsInPlay[otherInd]]
            allPairs.push(pair)
        }
    }
    return allPairs
}

// finds number for missing card in set
export function missingNumber(pair) {
    const card1 = pair[0]
    const card2 = pair[1]
    let setCardNumber = card1.number.length
    if (card1.number.length !== card2.number.length) {
        const sum = card1.number.length + card2.number.length
        setCardNumber = sum > 3 
                        ? Math.abs(card1.number.length - card2.number.length)
                        : 3
    }
    return setCardNumber
}

// finds color for missing card in set
export function missingColor(pair) {
    const card1 = pair[0]
    const card2 = pair[1]
    let setCardColor = card1.color
    if(card1.color !== card2.color) {
        setCardColor = colors.filter((color) => color !== card1.color && color !== card2.color)[0]
    }
    return setCardColor
}

// finds shape for missing card in set
export function missingShape(pair) {
    const card1 = pair[0]
    const card2 = pair[1]
    let setCardShape = card1.shape
    if(card1.shape !== card2.shape) {
        setCardShape = shapes.filter((shape) => shape !== card1.shape && shape !== card2.shape)[0]
    }
    return setCardShape
}

// finds fill for missing card in set
export function missingFill(pair) {
    const card1 = pair[0]
    const card2 = pair[1]
    let setCardFill = card1.fill
    if(card1.fill !== card2.fill) {
        setCardFill = fills.filter((fill) => fill !== card1.fill && fill !== card2.fill)[0]
    }
    return setCardFill

}

// findSets(cards) - given a list of cards, returns all possible sets in those cards
// return an array of sets with card ids
export function findSets(cardsInPlay) {
    // Find all permutations of 2 cards
    const allPairs = getAllPairs(cardsInPlay)
    let allSets = []
    // For each pair, there is one card that makes a set. If that card is in play, store the set
    for(let pair of allPairs) {
        // Get id (the number|color|shape|fill) of the missing card for each set
        let missingId = `${missingNumber(pair)}|${missingColor(pair)}|${missingShape(pair)}|${missingFill(pair)}`
        // See if there is a card in play with that id
        let set = cardsInPlay.find(card => card.id === missingId)
        set && allSets.push(set.id) 
    }
    return allSets.sort()
}

export function updateHighestScores(highScores, score) {
    highScores.push(score);
    highScores.sort().reverse()
    return highScores.length > 3 ? highScores.slice(0,3) : highScores
}