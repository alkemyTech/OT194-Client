import axios from 'axios';

export const axiosInstance = (endpoint, data = {}, method = 'GET') => {
	const baseUrl = process.env.API_URL;
	const token = localStorage.getItem('token') || '';
	return axios({
		method,
		url: `${baseUrl}${endpoint}`,
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
