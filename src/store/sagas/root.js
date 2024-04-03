import { takeLatest } from 'redux-saga/effects';
import { CounterType } from '../constants/actions-types/counter';
import { counterHandler } from './handlers/counter';


export function* sagaWatcher(){
    yield takeLatest(
        CounterType.BYONE.GET.START,
        counterHandler
    )
}