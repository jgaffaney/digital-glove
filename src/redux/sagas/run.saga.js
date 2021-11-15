import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* beginRun(action) {
    try{
        console.log('action in beginRun: ', action);
        console.log('action.payload.id: ', action.payload.id);
        
        yield axios.post('/api/run/begin', action.payload);
        const response = yield axios.get(`/api/run/${action.payload.id}`)
        console.log('response.data: ', response.data);
        
        yield put({type: 'SET_RUNS', payload: response.data})
    }catch (err) {
        console.log('Error on beginRun: ', err);
    }
}



function* runSaga() {
    yield takeLatest('BEGIN_RUN', beginRun)
}

export default runSaga;