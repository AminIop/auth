import { combineReducers } from "redux";
import { CounterType } from "../constants/actions-types/counter";


const initialState = {
    byOne: {
        get: {
            idle: true,
            loading: false,
            data: [],
            error: null,
        }
    }
}
export const byOne = (state = initialState.byOne.get, action) => {
    switch (action.type) {
        case CounterType.BYONE.GET.START: {
            const query = {
                idle: false,
                loading: true
            }
            return {
                ...state,
                ...query
            }
        }
        case CounterType.BYONE.GET.SUCCESS: {
            const query = {
                loading: false,
                data: action.payload,
                error: null
            }
            return {
                ...state,
                ...query
            }
        }
        case CounterType.BYONE.GET.FAIL: {
            const query = {
                loading: false,
                error: action.payload
            }
            return {
                ...state,
                ...query
            }
        }
        case CounterType.BYONE.INCREMENT: {
            return {
                ...state,
                data: state.data + 1
            }
        }
        case CounterType.BYONE.DECREMENT: {
            return {
                ...state,
                data: state.data - 1
            }
        }
        default:
            return state

    }
}



export const counter = combineReducers({
    byOne
})

