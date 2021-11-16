import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* beginRun(action) {
    try{
        console.log('action in beginRun: ', action);
        console.log('action.payload.id: ', action.payload.id);
        
        const currentRun = yield axios.post('/api/run/begin', action.payload);
        console.log('currentRun id in beginRun: ', currentRun.data.rows[0].id);
        
        yield put({type: 'SET_CURRENT_RUN', payload: currentRun.data.rows[0].id})
        const response = yield axios.get(`/api/run/${action.payload.id}`)
        console.log('response.data: ', response.data);
        
        yield put({type: 'SET_RUNS', payload: response.data})
    }catch (err) {
        console.log('Error on beginRun: ', err);
    }
}

function* fetchUserRuns(action) {
    try{
        const response = yield axios.get(`/api/run/${action.payload.id}`)
        yield put({type: 'SET_RUNS', payload: response.data})
    } catch (err) {
        console.log('Error in fetchUserRuns: ', err);
    }
}

function* deleteRun(action) {
    try{
        yield axios.delete(`/api/run/${action.payload}`)
        yield put({type: 'FETCH_USER_RUNS', payload: action.user})
    } catch (err) {
        console.log('Error on delete: ', err);
        
    }
}


function* runSaga() {
    yield takeLatest('BEGIN_RUN', beginRun);
    yield takeLatest('FETCH_USER_RUNS', fetchUserRuns);
    yield takeLatest('DELETE_RUN', deleteRun)
}

export default runSaga;