import axios from 'axios';

export const axiosInstance = (endpoint, data = {}, method = 'GET') => {
	const token = localStorage.getItem('token');
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
