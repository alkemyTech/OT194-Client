import axios from 'axios';

export const axiosInstance = (endpoint, data = {}, method = 'GET') => {
	const token = localStorage.getItem('token') || '';
	return axios({
		method,
		url: `${endpoint}`,
		data,
		headers: {
			'x-token': token
		}
	})
		.then((response) =>
			response
		)
		.catch((error) =>
			error.response
		);
};
