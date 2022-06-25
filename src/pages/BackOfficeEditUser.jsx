import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EditUserFormik } from '../components/EditUser';
import Spinner from '../components/Spinner';

function BackOfficeEditUser () {
	const { isLoading } = useSelector((state) => state.auth);

	return (
		<>
			{isLoading && <Spinner />}
			<div className='flex items-center justify-center w-full box-content'>
				<div className='hidden md:flex md:w-6/12 overflow-hidden'>
					<img
						style={{ transform: 'scaleX(-1)', minHeight: '800px' }}
						className='w-full h-full object-cover max-height-screen'
						src='/images/login-hands.png'
						alt='manos unidas'
					/>
				</div>
				<div className='flex flex-col items-center justify-center w-full h-full md:w-6/12 my-8 p-2 md:my-0'>
					<div
						className='flex flex-col justify-center items-center w-full'
						style={{
							width: '90%',
							maxWidth: '450px'
						}}
					>
						<h1 className='text-2xl xs:text-3xl mt-0 text-left'>¡Edita el usuario!</h1>
						<EditUserFormik />
					</div>
					<p className='text-lg mt-12'>
						¿No quieres modificar el usuario?{' '}
						<Link className='text-redOng text-lg no-underline cursor-pointer' to='/backoffice' >
							Volver
						</Link>
					</p>
				</div>
			</div>
		</>

	);
}

export default BackOfficeEditUser;
