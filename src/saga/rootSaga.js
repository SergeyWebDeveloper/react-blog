import {takeEvery} from 'redux-saga';
import {
	FETCH_USER__REQUEST,
	CURRENT_USER_REQUEST
} from '../constants';

import {userInfo,currentUser} from './user';

export function* rootSaga() {
	yield takeEvery(FETCH_USER__REQUEST,userInfo);
	yield takeEvery(CURRENT_USER_REQUEST,currentUser);
}
