import {
	EXIT_ACCOUNT_SUCCESS,
	LOAD_ARTICLES_SUCCESS,
	LOAD_ARTICLES_FAIL,
	LOAD_ARTICLES_REQUEST,
	LOAD_ARTICLES_ADMIN_REQUEST
} from '../constants';

const initialState = {
	loading: false,
	post: []
};

export const articles = (state = initialState, {type, payload}) => {
	switch (type) {
		case LOAD_ARTICLES_REQUEST:
		case LOAD_ARTICLES_ADMIN_REQUEST:
			return Object.assign({},state,{loading: true});
		case LOAD_ARTICLES_SUCCESS:
			return Object.assign({},state, {loading: false, post: payload});
		case EXIT_ACCOUNT_SUCCESS:
			return initialState;
		case LOAD_ARTICLES_FAIL:
			return initialState;
		default:
			return state;
	}
};