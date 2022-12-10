import React from "react";
import { useState, useReducer,useContext } from "react";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',

}

const AppContext = React.createContext();

const AppProvider = 