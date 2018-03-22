import {
	EXIT_ACCOUNT_SUCCESS,
	LOAD_ARTICLES_SUCCESS,
	LOAD_ARTICLES_FAIL,
	LOAD_ARTICLES_REQUEST,
	LOAD_ARTICLES_ADMIN_REQUEST,
	EDIT_POST_SUCCESS
} from '../constants';

const initialState = {
	loading: false,
	post: []
};

const editPost = (state,payload) => {
	return state.post.map((post) => {
		if (post._id === payload.id) {
			return Object.assign(
				{},
				post,
				{
					body: payload.post.body,
					date: payload.post.date,
					title: payload.post.title
				});
		} else {
			return post;
		}
	});
};

const sortPostDate = (posts) => {
	return posts.sort((a,b)=>{
		return b.date-a.date;
	});
};

export const articles = (state = initialState, {type, payload}) => {
	switch (type) {
		case LOAD_ARTICLES_REQUEST:
		case LOAD_ARTICLES_ADMIN_REQUEST:
			return Object.assign({}, state, {loading: true});
		case LOAD_ARTICLES_SUCCESS:
			return Object.assign({}, state, {loading: false, post: payload});
		case EXIT_ACCOUNT_SUCCESS:
			return initialState;
		case LOAD_ARTICLES_FAIL:
			return initialState;
		case EDIT_POST_SUCCESS:
			const newStorePost = editPost(state,payload);
			const newSortPost = sortPostDate(newStorePost);
			return Object.assign({}, state, {post: newSortPost});
		default:
			return state;
	}
};