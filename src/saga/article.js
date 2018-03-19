import {
	ADD_POST_SUCCESS,
	ADD_POST_FAIL,
	LOAD_ARTICLES_ADMIN_REQUEST,
	DELETE_POST_SUCCESS,
	DELETE_POST_FAIL
} from '../constants';
import {createPost,removePost} from '../api';

import {call, put} from 'redux-saga/effects';

export function* addPost(action) {
	const {data} = yield call(createPost, action.payload);
	if (!data.error) {
		yield put({
			type: ADD_POST_SUCCESS
		});
		yield put({
			type: LOAD_ARTICLES_ADMIN_REQUEST
		});
	} else {
		yield put({
			type: ADD_POST_FAIL
		});
	}
}

export function* deletePost(action) {
	const {data} = yield call(removePost,action.payload)
	if(!data.error){
		yield put({
			type: DELETE_POST_SUCCESS
		});
		yield put({
			type: LOAD_ARTICLES_ADMIN_REQUEST
		});
	} else {
		yield put({
			type: DELETE_POST_FAIL
		});
	}
}