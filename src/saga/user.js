import {put,call} from 'redux-saga/effects';
import {
	FETCH_USER__SUCCESS
} from '../constants';

import {loginUser} from "../api";


export function* userInfo(action) {
	const {data} = yield call(loginUser,action.payload);
	if(data){
		yield put({
			type: FETCH_USER__SUCCESS,
			payload: data
		});
	}
}

