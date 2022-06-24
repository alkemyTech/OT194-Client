import axios from 'axios';

export const axiosInstance = async (endpoint, data = {}, method = 'GET') => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = user ? user.token : '';

	const response = await axios({
		method,
		url: `${endpoint}`,
		data,
		headers: {
			authorization: `Bearer ${token}`
		}
	});

	if (response.status >= 400) throw new Error(response.error);

	return response.data;
};
