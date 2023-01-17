//import {createStore} from 'redux'; //this is deprecated
import { configureStore } from '@reduxjs/toolkit'
//let x = require("@reduxjs/toolkit")

const counterReducer = (state={mylist:[]},action)=>{

    // console.log("here..")
    // if(action.type==="increment")
    // {     
    //     return {...state ,counter : state.counter+1 };
    // }
    // if(action.type==="decrement")
    // {
        
    //     return { ...state,counter: state.counter -1};
    // }
    if(action.type === "add")
    {
        let temp = [...state.mylist]
        temp.push(action.data)
        return {...state,mylist:temp}
    }
    return {mylist:[]}
} 

//const store = x.configureStore({
    const store = configureStore({
    reducer:counterReducer,
  })

export default store;


