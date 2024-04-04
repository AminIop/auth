import { combineReducers } from "redux";
import { StoreTypes } from "../constants/stores-types";
import { counter } from "./counter";
import { todos } from "./todos";




const rootReducer = combineReducers(
    {
        [StoreTypes.COUNTER]: counter,
        [StoreTypes.TODOS]: todos
    }
)

export default rootReducer