import React from 'react'
import PropTypes from 'prop-types'

import { Loader } from '../../shared/components/loading/loader'
import { Error } from '../../shared/components/error/error'

import './style.css'


export const View = ({ todosSelect }) => {
    const { idle, loading, data, error } = todosSelect

    if (idle || loading) return <Loader />
    if (error) return <Error />

    return (
        <div>{JSON.stringify(data)}</div>
    )
}

/*View.propTypes = {
    todosSelect : PropTypes.object.requi
}*/

export default View