import React from 'react';
import { useSelector } from 'react-redux';
import { RegisterFormik } from '../components/Register/index';
import Spinner from '../components/Spinner';

function Register () {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			{isLoading && <Spinner />}
			<RegisterFormik />
		</>
	);
}

export {
	Register
};
