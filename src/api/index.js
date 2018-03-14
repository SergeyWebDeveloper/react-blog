import axios from "axios/index";

export const createUser = values => {
	return axios.post('/api/newuser',values)
		.then(response=>response);
};

export const loginUser = values => {
	return axios.post('/api/loginuser',values)
		.then(response=>response);
}