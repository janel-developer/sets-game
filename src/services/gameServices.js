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

// findSets(cards) - given a list of cards, returns all possible sets in those cards
export function findSets(cardsInPlay) {

}