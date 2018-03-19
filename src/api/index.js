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

export async function createPost(values) {
	return await axios.post('/api/newpost',values)
		.then(response=>response);
}

export async function loadArticlesAdmin() {
	return await axios.get('/api/adminpost')
		.then(response=>response);
}

export async function removePost(id) {
	return await axios.post('/api/deletepost',{id})
		.then(response=>response);
}