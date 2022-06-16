import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RegisterFormik } from '../components/Register';
import Spinner from '../components/Spinner';

export const Register = () => {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			{isLoading && <Spinner />}
			<div className='flex items-center justify-center w-full box-content'>
				<div className='hidden md:flex md:w-6/12 overflow-hidden'>
					<img
						style={{ transform: 'scaleX(-1)', minHeight: '800px' }}
						className='w-full h-full object-cover max-height-screen rounded-l-lg'
						src='images/login-hands.png'
						alt='manos unidas'
					/>
				</div>
				<div className='flex flex-col items-center justify-center w-full h-full md:w-6/12 my-8 p-2 md:my-0'>
					<div
						className='flex flex-col justify-center items-start w-full'
						style={{
							width: '90%',
							maxWidth: '450px'
						}}
					>
						<p className='mb-0'>Bienvenido</p>
						<h1 className='text-2xl xs:text-3xl mt-0 text-left'>Registra un nuevo usuario!</h1>
						<RegisterFormik />
					</div>
					<p className='text-lg mt-12'>
           ¿Ya estás registrado?{' '}
						<Link className='text-redOng text-lg no-underline cursor-pointer' to='/login' >
              Iniciar sesión
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};
