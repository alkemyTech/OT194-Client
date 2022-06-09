import axios from 'axios';

// Get organization Data
const getOrganizationData = async () => {
	const response = await axios.get('/organizations/1/public');

	if (!response.data.name) {
		throw new Error(response.data.message);
	};

	return response.data;
};

const organizationService = {
	getOrganizationData
};

export default organizationService;
