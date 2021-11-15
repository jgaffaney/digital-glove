import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* beginRun() {
    try{
        yield axios.post('/api/run/begin')
    }catch (err) {
        console.log('Error on beginRun: ', err);
    }
}



function* runSaga() {
    yield takeLatest('BEGIN_RUN', beginRun)
}

export default runSaga;