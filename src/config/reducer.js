export default function reducer(state, action) {
    switch(action.type) {
        case "setDeck":
            return {
                ...state,
                deck: action.data
            }
        case "setCardsInPlay":
            return {
                ...state,
                cardsInPlay: action.data
            }
        case "addCardsToPlay":
            return {
                ...state,
                cardsInPlay: [...state.cardsInPlay, ...action.data]
            }
        case "removeSetFromPlay":
            return {
                ...state,
                cardsInPlay: state.cardsInPlay.filter((card) => !action.data.includes(card.id))
            }
        case "addSelectedCard":
            return {
                ...state,
                selectedCards: [...state.selectedCards,action.data]
            }
        case "removeSelectedCard":
            return {
                ...state,
                selectedCards: state.selectedCards.filter((card) => card !==action.data)
            }
        case "clearSelectedCards":
            return {
                ...state,
                selectedCards: []
            }
        case "updateScore":
            return {
                ...state,
                score: state.score + action.data
            }
        case "setPlayerMessage":
            return {
                ...state,
                playerMessage: action.data
            }
        case "incrementSetsFound":
            return {
                ...state,
                setsFound: state.setsFound + 1
            }
        case "resetGame":
            return {
                ...state,
                score: 0,
                playerMessage: null,
                setsFound: 0
            }
        default:
            return state
    }
}