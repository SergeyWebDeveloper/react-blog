import {
	ADD_POST_SUCCESS,
	ADD_POST_FAIL
} from '../constants';
import {createPost} from '../api';

import {call, put} from 'redux-saga/effects';

export function* addPost(action) {
	const {data} = yield call(createPost, action.payload);
	if (!data.error) {
		yield put({
			type: ADD_POST_SUCCESS
		});
	} else {
		yield put({
			type: ADD_POST_FAIL
		});
	}
}
