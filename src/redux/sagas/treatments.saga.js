import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTreatments(action) {
    const category = action.payload.category.toLowerCase();
    
    try {
        const response = yield axios.get(`/api/treatments/${category}`);
        console.log('response: ', response.rows);
        
        yield put({type: 'SET_TREATMENTS', payload: response.rows});
    } catch (error) {
        console.log('Error on fetchTreatments: ', error);
        
    }
}

function* treatmentsSaga() {
    yield takeLatest('FETCH_TREATMENTS', fetchTreatments)
}

export default treatmentsSaga;