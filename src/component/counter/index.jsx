import React, { useEffect } from 'react'
import { View } from './view'
import { useDispatch, useSelector } from 'react-redux'
import { selectCounterValue } from '../../store/selectors/counter'
import { decrementCounterByOne, incrementCounterByOne, startActionCreator } from '../../store/actions-creators/counter'

export const CounterByOne = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startActionCreator())
    }, [])

    const increment = _ => {
        dispatch(incrementCounterByOne())
    }
    const decrement = _ => {
        dispatch(decrementCounterByOne())
    }

    const selectValue = useSelector(selectCounterValue)

    return (
        <View {...{ selectValue, increment, decrement }} />
    )
}
