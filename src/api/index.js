import axios from "axios/index";

export const createUser = value => {
	return axios.post('/api/newuser',value)
		.then(response=>response);
};