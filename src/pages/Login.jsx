import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginFormik } from '../components/Login';
import Spinner from '../components/Spinner';

export const Login = () => {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<div className="h-full">
			{isLoading && <Spinner />}
			<div className="flex justify-center items-center md:grid md:grid-cols-2">
				<div className="m-auto ">
					<p className="form-login">Bienvenido</p>
					<h2>Inicia sesón en tu cuenta!</h2>
					<LoginFormik />
					<p className="mt-17">
            No tienes cuenta?{' '}
						<Link className="text-redPure no-underline cursor-pointer" to='/register' >
              Registrate
						</Link>
					</p>
				</div>

				<div className="hidden sm:hidden md:flex md:place-items-end md:h-full md:w-full">
					<img
						className=" md:h-screen md:w-full "
						src="images/login-hands.png"
						alt="manos unidas"
					/>
				</div>
			</div>
		</div>
	);
};
