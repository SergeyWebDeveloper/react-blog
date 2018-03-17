import {takeEvery} from 'redux-saga';
import {FETCH_USER__REQUEST} from '../constants';

import {userInfo} from './user';

export function* rootSaga() {
	yield takeEvery(FETCH_USER__REQUEST,userInfo);
}
