import axios from 'axios';

export const axiosInstance = (endpoint, data = {}, method = 'GET') => {
	const user = localStorage.getItem('user');
	const token = (JSON.parse(user).token);
	return axios({
		method,
		url: `${endpoint}`,
		data,
		headers: {
			authorization: `Bearer ${token}`
		}
	})
		.then((response) =>
			response
		)
		.catch((error) =>
			error.response
		);
};
