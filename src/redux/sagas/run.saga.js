import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* beginRun(action) {
    try{
        yield axios.post('/api/run/begin', action.payload)
    }catch (err) {
        console.log('Error on beginRun: ', err);
    }
}



function* runSaga() {
    yield takeLatest('BEGIN_RUN', beginRun)
}

export default runSaga;