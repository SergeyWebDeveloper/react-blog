import {
	ADD_POST_SUCCESS,
	ADD_POST_FAIL,
	DELETE_POST_SUCCESS,
	DELETE_POST_FAIL,
	LOAD_ARTICLES_SUCCESS,
	LOAD_ARTICLES_FAIL,
	LOAD_ARTICLES_ADMIN_REQUEST,
	EDIT_POST_SUCCESS,
	EDIT_POST_FAILURE
} from '../constants';
import {
	createPost,
	removePost,
	loadArticles,
	changePost
} from '../api';

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

export function* loadPost() {
	const {data} = yield call(loadArticles);
	if(!data.error){
		yield put({
			type: LOAD_ARTICLES_SUCCESS,
			payload: data.posts
		});
	} else {
		yield put({
			type: LOAD_ARTICLES_FAIL
		});
	}
}

export function* editPost(action) {
	const {data} = yield call(changePost,action.payload.id,action.payload.data);
	if(!data.error){
		yield put({
			type: EDIT_POST_SUCCESS,
			payload: {id:action.payload.id,post: action.payload.data}
		});
	} else {
		yield put({
			type: EDIT_POST_FAILURE
		});
	}
}