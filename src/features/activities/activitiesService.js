import axios from 'axios';

// Post activity
const createActivity = async (data) => {
	const response = await axios.post('/activities', data);

	if (!response.data.token) {
		throw new Error(response.data.message);
	};

	return response.data;
};

// Patch activity
const updateActivity = async (data, id) => {
	const response = await axios.post(`/activity/${id}`, data);

	if (!response.data.token) {
		throw new Error(response.data.message);
	};

	return response.data;
};

const activityService = {
	createActivity,
	updateActivity
};

export default activityService;
