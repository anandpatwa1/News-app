import { createContext, useReducer } from "react";
import NewsReduser from "./NewsReduser";

const NewsContext = createContext()


const initialState = {
    allNews: null
}
export const NewsProvider = ({ children }) => {     

    const [state, dispatch] = useReducer(NewsReduser, initialState)

    return (
        <NewsContext.Provider value={{
            ...state,
            dispatch ,
            // ...initialState
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext