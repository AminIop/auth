import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllTodosRequest } from '../../store/actions-creators'
import { getAllTodosPlaceHolderSelector } from '../../store/selectors'

import  View  from './view'


const Todos = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodosRequest())
    }, [])

    const todosSelect = useSelector(getAllTodosPlaceHolderSelector)

    return (
        <>
            <View {...{ todosSelect }} />
        </>
    )
}

export default Todos