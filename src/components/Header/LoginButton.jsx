import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeNav } from '../../features/components/componentsSlice';

function LoginButton () {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(closeNav());
		navigate('/login');
	};

	return (
		<button
			className='mx-2 font-englebert w-30 text-base hover:text-redOng focus:text-blueOng bg-white border-2 hover:border-redOng focus:border-blueOng rounded-full py-1 px-4 cursor-pointer mb-5 sm:mb-0'
			onClick={handleLogin}
		>Iniciar sesión</button>
	);
}

export default LoginButton;
