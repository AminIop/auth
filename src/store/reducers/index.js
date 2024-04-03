import { combineReducers } from "redux";
import { StoreTypes } from "../constants/stores-types";
import { counter } from "./counter";




const rootReducer = combineReducers(
    {
         [StoreTypes.COUNTER] : counter
    }
)

export default rootReducer