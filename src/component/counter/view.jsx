import React from 'react'
import { PropTypes } from 'prop-types'
import './style.css'
import { Error, Loader } from '../../shared/components'

export const View = ({ selectValue, increment, decrement }) => {

  const { idle, loading, data, error } = selectValue

  if (idle || loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  return (
    <>
      <div>Value : {data}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

View.propTypes = {
  selectValue: PropTypes.object.isRequired,
}




