import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTreatments(action) {
    const category = action.payload.toLowerCase();
    
    try {
        const response = yield axios.get(`/api/treatments/${category}`);
        console.log('response: ', response.data);
        
        yield put({type: 'SET_TREATMENTS', payload: response.data});
    } catch (error) {
        console.log('Error on fetchTreatments: ', error);
        
    }
}

function* addTxEvent(action) {
    try {
        yield axios.post(`/api/treatments/${action.payload.id}`, action.run)
    } catch (error) {
        console.log('Error on addTxEvent: ', error);
        
    }
}

function* treatmentsSaga() {
    yield takeLatest('FETCH_TREATMENTS', fetchTreatments)
    yield takeLatest('ADD_TX_EVENT', addTxEvent)
}

export default treatmentsSaga;