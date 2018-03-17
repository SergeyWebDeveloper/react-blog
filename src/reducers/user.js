import {
	FETCH_USER__SUCCESS,
	CURRENT_USER_SUCCESS,
	EXIT_ACCOUNT_SUCCESS
} from '../constants';

const initialState= {
	auth: false,
	info: {}
};

export const user = (state=initialState,{type,payload}) => {
	switch (type){
		case FETCH_USER__SUCCESS:
			return Object.assign({},state,{auth: true, info: payload}) || false;
		case CURRENT_USER_SUCCESS:
			return Object.assign({},state,{auth: true, info: payload}) || false;
		case EXIT_ACCOUNT_SUCCESS:
			return Object.assign({},state,initialState);
		default:
			return state;
	}
};
