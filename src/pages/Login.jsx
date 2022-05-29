import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginFormik } from '../components/Login';
import Spiner from '../components/Spiner';

export const Login = () => {
	const { isLoading } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const handleGoToRegister = () => navigate('/register');

	return (
		<div className="h-full">
			{isLoading && <Spiner />}
			<div className="flex justify-center items-center md:grid md:grid-cols-2">
				<div className="m-auto ">
					<p className="form-login">Bienvenido</p>
					<h2 className="form-title">Inicia sesón en tu cuenta!</h2>
					<LoginFormik />
					<p className="form-footer mt-17">
            No tienes cuenta?{' '}
						<a className="text-redPure no-underline cursor-pointer" onClick={handleGoToRegister}>
              Registrate
						</a>
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
