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
			className='mx-2 bg-white border-1 border focus:outline-4 focus:ring focus:black rounded-full focus:border-0 py-3 px-6 cursor-pointer hover:opacity-50'
			onClick={handleLogin}
		>Login</button>
	);
}

export default LoginButton;
