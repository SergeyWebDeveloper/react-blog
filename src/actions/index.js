import {
	FETCH_USER__REQUEST,
	CURRENT_USER_REQUEST,
	EXIT_ACCOUNT_REQUEST,
	ADD_POST_REQUEST,
	LOAD_ARTICLES_ADMIN_REQUEST,
	DELETE_POST_REQUEST,
	LOAD_ARTICLES_REQUEST,
	EDIT_POST_REQUEST
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

export const loadArticlesAdmin = () => {
	return {
		type: LOAD_ARTICLES_ADMIN_REQUEST
	}
};

export const deletePost = (id) => {
	return {
		type: DELETE_POST_REQUEST,
		payload: id
	}
};

export const loadArticles = () => {
	return {
		type: LOAD_ARTICLES_REQUEST
	}
};

export const editPost = (id,data) => {
	return {
		type: EDIT_POST_REQUEST,
		payload: {id,data}
	}
};
