import {takeEvery} from 'redux-saga';
import {
	FETCH_USER__REQUEST,
	CURRENT_USER_REQUEST,
	EXIT_ACCOUNT_REQUEST,
	ADD_POST_REQUEST,
	LOAD_ARTICLES_ADMIN_REQUEST
} from '../constants';

import {
	userInfo,
	currentUser,
	exitAccount,
	fetchArticlesAdmin
} from './user';

import {addPost} from './article';

export function* rootSaga() {
	yield takeEvery(FETCH_USER__REQUEST,userInfo);
	yield takeEvery(CURRENT_USER_REQUEST,currentUser);
	yield takeEvery(EXIT_ACCOUNT_REQUEST,exitAccount);
	yield takeEvery(ADD_POST_REQUEST,addPost);
	yield takeEvery(LOAD_ARTICLES_ADMIN_REQUEST,fetchArticlesAdmin);
}
