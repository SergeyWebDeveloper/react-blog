import {
	FETCH_USER__REQUEST
} from '../constants';

export const signInUser = value => {
	return {
		type: FETCH_USER__REQUEST,
		payload: value
	}
};
