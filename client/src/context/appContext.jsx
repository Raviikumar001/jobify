import React from "react";
import { useState, useReducer,useContext } from "react";

import { DISPLAY_ALERT } from "./Action";
import reducer  from "./Reducer";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',

}

const AppContext = React.createContext();

const AppProvider = ( {children }) =>{
    const [state, dispatch]= useReducer(reducer,initialState);

    return(
        <AppContext.Provider value={{...state}} >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext= ()=>
{
    return useContext(AppContext);
}

export {AppProvider, initialState, useAppContext}