import { call, put } from "redux-saga/effects";
import { getCounterRequestValue } from "../requests/counter";
import { errorActionCreator, successActionCreator } from "../../actions-creators/counter";

export function* counterHandler() {
    try {
        const api = yield call(getCounterRequestValue)
        const value = api?.data?.value
        yield put(successActionCreator(value))
    } catch (err) {
        yield put(errorActionCreator(err))
    }
}