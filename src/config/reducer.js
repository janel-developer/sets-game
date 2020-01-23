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
        default:
            return state
    }
}