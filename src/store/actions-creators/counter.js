import { CounterType } from "../constants/actions-types/counter"

export const incrementCounterByOne = _ => {
    return {
        type: CounterType.BYONE.INCREMENT
    }
}

export const decrementCounterByOne = _ => {
    return {
        type: CounterType.BYONE.DECREMENT
    }
}

export const startActionCreator = _ => {
    return {
        type: CounterType.BYONE.GET.START
    }
}

export const successActionCreator = data => {
    return {
        type: CounterType.BYONE.GET.SUCCESS,
        payload: data
    }
}

export const errorActionCreator = error => {
    return {
        type: CounterType.BYONE.GET.FAIL,
        payload: error
    }
}
