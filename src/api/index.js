import axios from "axios/index";

export const createUser = values => {
	return axios.post('/api/newuser',values)
		.then(response=>response);
};

// export async loginUser = values => {
// 	return axios.post('/api/login',values)
// 		.then(response=>response);
// };

export async function loginUser(values) {
	console.log('loginUser', values);
	const data = await axios.post('/api/login',values)
		.then(response=>response);
	return data;
}
