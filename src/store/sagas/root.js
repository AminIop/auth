import { call, put, takeLatest } from 'redux-saga/effects';
import CommonType from '../constants/actions-types/common';


function* handleApiCall(action) {
    const { subType, api } = action
    const startAction = () => ({ type: subType.START })

    yield put(startAction())

    try {
        const response = yield call(api)
        const data = response?.data
        const successAction = () => ({ type: subType.SUCCESS, payload: data })
        yield put(successAction())

    } catch (error) {
        const failAction = () => ({ type: subType.FAIL, payload: error })
        console.log(error)
        yield put(failAction())
        console.log(error)
    }
}

export function* sagaWatcher() {
    yield takeLatest(
        CommonType.API_CALL,
        handleApiCall
    )
}