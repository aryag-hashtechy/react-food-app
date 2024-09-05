import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const handleFetch = async (path, token) => {
    try{
        const response = await axios.get(path, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(response && response.status === 200){
            return response.data
        }
    }catch(err){
        return err?.message;
    }
}

function * fetchCart ({ payload }){
    try{
        const response = yield call(handleFetch, payload?.apiURL, payload.token);
        yield put({ type: 'fetch_cart_success', payload: response })
    }catch(err){
        yield put({ type: 'fetch_cart_fail'  ,payload: err.message })
    }
}

export function * mySaga (){
    yield takeLatest("fetch_cart_request", fetchCart)
}
