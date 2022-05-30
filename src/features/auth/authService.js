import axios from 'axios';

// Register user
const register = async (userData) => {
	const response = await axios.post('/auth/register', userData);

	if (!response.data.token) {
		throw new Error(response.data.message);
	};

	return response.data;
};

// Login user
const login = async (userData) => {
	const response = await axios.post('/auth/login', userData);

	if (!response.data.token) {
		throw new Error(response.data.message);
	};

	return response.data;
};

const authService = {
	register,
	login
};

export default authService;
