import { combineReducers } from "redux";
import { ActionTypesTodos } from "../constants/actions-types";

const initialState = {
    placeholder: {
        get: {
            idle: true,
            loading: false,
            data: [],
            error: null,
        }
    }
}
export const todosPlaceHolderReducer = (state = initialState.placeholder.get, action) => {
    switch (action.type) {
        case ActionTypesTodos.PLACEHOLDER.GET.START: {
            const query = {
                idle: false,
                loading: true
            }
            return {
                ...state,
                ...query
            }
        }
        case ActionTypesTodos.PLACEHOLDER.GET.SUCCESS: {
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
        case ActionTypesTodos.PLACEHOLDER.GET.FAIL: {
            const query = {
                loading: false,
                error: action.payload
            }
            return {
                ...state,
                ...query
            }
        }
        default:
            return state

    }
}



export const todos = combineReducers({
    placeholder: todosPlaceHolderReducer
})

