import { createStore } from "@reduxjs/toolkit";
import RootReducers from "./RootReducer"; 

const store = createStore(RootReducers);
export default store; 