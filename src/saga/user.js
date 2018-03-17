import {put, call} from 'redux-saga/effects';
import {
	FETCH_USER__SUCCESS,
	CURRENT_USER_SUCCESS,
	EXIT_ACCOUNT_SUCCESS
} from '../constants';

import {
	loginUser,
	checkCurrentUser,
	exitUser
} from "../api";


export function* userInfo(action) {
	const {data} = yield call(loginUser, action.payload);
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

export function* exitAccount() {
	const {data} = yield call(exitUser);
	if(data.exit){
		yield put({
			type: EXIT_ACCOUNT_SUCCESS
		});
	}

}