import axios from 'axios';

const url = axios.create({
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
});

export default url;
