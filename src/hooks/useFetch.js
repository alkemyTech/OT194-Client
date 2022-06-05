import api from '../axios';
import { useEffect, useState } from 'react';

// baseURL = http://localhost:8080/api/v1

export const useFetch = (url, method, body = null) => {
	const [state, setState] = useState({
		response: null,
		error: null,
		loading: true
	});

	useEffect(() => {
		fetchData();
	}, [method, url, body]);

	const fetchData = async () => {
		const token = localStorage.getItem('token');
		try {
			const { data } = await api[method](
				url,
				{
					headers: {
						authorization: `Bearer ${token}`
					}
				},
				body
			);
			setState({
				loading: false,
				error: null,
				response: data
			});
		} catch (error) {
			setState({
				loading: false,
				error: error.message,
				response: null
			});
		}
	};

	return { state };
};
