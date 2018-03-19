import {
	ADD_POST_SUCCESS,
	ADD_POST_FAIL,
	LOAD_ARTICLES_ADMIN_REQUEST
} from '../constants';
import {createPost} from '../api';

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
