import React from 'react';
import { useSelector } from 'react-redux';
import { RegisterFormik } from '../components/Register/index';
import Spiner from '../components/Spiner';

function Register () {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			{isLoading && <Spiner />}
			<RegisterFormik />
		</>
	);
}

export {
	Register
};
