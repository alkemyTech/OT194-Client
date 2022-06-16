import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginFormik } from '../components/Login';
import Spinner from '../components/Spinner';

export const Login = () => {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			{isLoading && <Spinner />}
			<div className='flex items-center justify-center w-full box-content'>
				<div className='flex flex-col items-center justify-center w-full h-full md:w-6/12 my-14 md:my-0 p-2'>
					<div className='flex flex-col justify-center items-start sm:w-4/6'>
						<p className='mb-0'>Bienvenido</p>
						<h1 className='text-2xl xs:text-3xl mt-0'>Inicia sesión en tu cuenta!</h1>
						<LoginFormik />
					</div>
					<p className='text-lg mt-12'>
           ¿No tienes cuenta?{' '}
						<Link className='text-redOng text-lg no-underline cursor-pointer' to='/register' >
              Registrate
						</Link>
					</p>
				</div>
				<div className='hidden md:flex md:w-6/12 max-height-screen object-cover'>
					<img
						className='w-full h-full object-cover object-left max-height-screen'
						src='images/login-hands.png'
						alt='manos unidas'
					/>
				</div>
			</div>
		</>
	);
};
