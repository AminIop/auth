import React from 'react'
import PropTypes from 'prop-types'

import { Loader } from '../../shared/components/loading/loader'
import { Error } from '../../shared/components/error/error'

import './style.css'
import { useTranslation } from 'react-i18next'


export const View = ({ todosSelect }) => {
    
    const { idle, loading, data, error } = todosSelect
    const { t } = useTranslation()
    console.log(t('hello.msg'))
    if (idle || loading) return <Loader />
    if (error) return <Error />

    return (
        <>
            <div>{JSON.stringify(data)}</div>
            <div>
                <p>Welcome message : {t('hello.msg')}</p>
            </div>
        </>
    )
}

/*View.propTypes = {
    todosSelect: PropTypes.function
}*/

export default View