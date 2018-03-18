import {
	FETCH_USER__REQUEST,
	CURRENT_USER_REQUEST,
	EXIT_ACCOUNT_REQUEST,
	ADD_POST_REQUEST,
	LOAD_ARTICLES_ADMIN_REQUEST
} from '../constants';

export const signInUser = value => {
	return {
		type: FETCH_USER__REQUEST,
		payload: value
	}
};

export const currentUser = () => {
	return {
		type: CURRENT_USER_REQUEST
	}
};

export const exitAccount = () => {
	return {
		type: EXIT_ACCOUNT_REQUEST
	}
};

export const addPost = (info) => {
	return {
		type: ADD_POST_REQUEST,
		payload: info
	}
};

export const loadArticlesAdmin = (id) => {
	return {
		type: LOAD_ARTICLES_ADMIN_REQUEST,
		payload: id
	}
};