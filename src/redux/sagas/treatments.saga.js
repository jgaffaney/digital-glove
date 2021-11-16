import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTreatments(action) {
    try {
        const response = yield axios.get('/treatments', action.payload)
        yield put({type: 'SET_TREATMENTS', payload: response.data})
    } catch (error) {
        console.log('Error on fetchTreatments: ', error);
        
    }
}

function* treatmentsSaga() {
    yield takeLatest('FETCH_TREATMENTS', fetchTreatments)
}

export default treatmentsSaga;