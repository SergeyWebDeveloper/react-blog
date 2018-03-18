import axios from "axios/index";

export const createUser = values => {
	return axios.post('/api/newuser',values)
		.then(response=>response);
};

export async function loginUser(values) {
	return await axios.post('/api/login',values)
		.then(response=>response);
}

export async function checkCurrentUser() {
	return await axios.get('/api/login')
		.then(response=>response);
}

export async function exitUser() {
	return await axios.get('/api/logout')
		.then(response=>response);
}

export async function addPost(values) {
	return await axios.post('/api/newpost',values)
		.then(response=>response);
}