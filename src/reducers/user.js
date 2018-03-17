import {FETCH_USER__SUCCESS} from '../constants';

const initialState= {
	auth: false
};

export const user = (state=initialState,{type,payload}) => {
	switch (type){
		case FETCH_USER__SUCCESS:
			return Object.assign({},state,{auth: true},payload) || false;
		default:
			return state;
	}
};
