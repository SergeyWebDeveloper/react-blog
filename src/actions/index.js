import {
	FETCH_USER__REQUEST,
	CURRENT_USER_REQUEST
} from '../constants';

export const signInUser = value => {
	return {
		type: FETCH_USER__REQUEST,
		payload: value
	}
};

export const currentUser = () => {
	return{
		type: CURRENT_USER_REQUEST
	}
};