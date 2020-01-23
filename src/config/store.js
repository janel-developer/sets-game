import {createContext,useContext} from "react"

export const CardContext = createContext()

export const useCardContext = () => useContext(CardContext)