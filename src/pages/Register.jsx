import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterFormik } from '../components/Register/index';
import Spinner from '../components/Spinner';

function Register () {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			{isLoading && <Spinner />}
			<RegisterFormik />
			<p className="mt-17">
            Ya estas registrado?
				<Link className="text-redPure no-underline cursor-pointer" to='/login' >
              Iniciar Sesion
				</Link>
			</p>
		</>
	);
}

export {
	Register
};
