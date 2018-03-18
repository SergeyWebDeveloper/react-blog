import {
	LOAD_ARTICLES_ADMIN_REQUEST,
	LOAD_ARTICLES_ADMIN_SUCCESS
} from '../constants';

const initialState = {
	loading: false,
	post: []
};

export const articles = (state = initialState, {type, payload}) => {
	switch (type) {
		case LOAD_ARTICLES_ADMIN_REQUEST:
			return Object.assign({},state,{loading: true});
		case LOAD_ARTICLES_ADMIN_SUCCESS:
			return Object.assign({},state, {loading: false, post: payload});
		default:
			return state;
	}
};