import {put, call} from 'redux-saga/effects';
import {
	FETCH_USER__SUCCESS,
	CURRENT_USER_SUCCESS
} from '../constants';

import {
	loginUser,
	checkCurrentUser
} from "../api";


export function* userInfo(action) {
	const {data} = yield call(loginUser, action.payload);
	console.log(data);
	if (data) {
		yield put({
			type: FETCH_USER__SUCCESS,
			payload: data
		});
	}
}


export function* currentUser() {
	const {data} = yield call(checkCurrentUser);
	if (data) {
		yield put({
			type: CURRENT_USER_SUCCESS,
			payload: data
		})
	}
}