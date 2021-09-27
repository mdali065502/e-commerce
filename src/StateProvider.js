// Setup data Layer
// WE need this to track the basket
import React,{createContext,useContext,useReducer} from "react"
// This is the Data Layer
export const StateContext = createContext();

// Build A Provider
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);