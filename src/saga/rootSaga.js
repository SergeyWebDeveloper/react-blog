import {takeEvery} from 'redux-saga';
import {
	FETCH_USER__REQUEST,
	CURRENT_USER_REQUEST,
	EXIT_ACCOUNT_REQUEST,
	ADD_POST_REQUEST,
	DELETE_POST_REQUEST,
	LOAD_ARTICLES_REQUEST
} from '../constants';

import {
	userInfo,
	currentUser,
	exitAccount
} from './user';

import {addPost,deletePost,loadPost} from './article';

export function* rootSaga() {
	yield takeEvery(FETCH_USER__REQUEST,userInfo);
	yield takeEvery(CURRENT_USER_REQUEST,currentUser);
	yield takeEvery(EXIT_ACCOUNT_REQUEST,exitAccount);
	yield takeEvery(ADD_POST_REQUEST,addPost);
	yield takeEvery(DELETE_POST_REQUEST,deletePost);
	yield takeEvery(LOAD_ARTICLES_REQUEST,loadPost);
}
