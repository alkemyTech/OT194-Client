import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { closeNav } from '../../features/components/componentsSlice';

function LogoutButton () {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		dispatch(closeNav());
		navigate('/');
	};

	return (
		<button
			className='mx-2 bg-white border-1 focus:outline-4 focus:ring focus:black rounded-full focus:border-0 py-3 px-6 cursor-pointer hover:opacity-50'
			onClick={handleLogout}
		>Logout</button>
	);
}

export default LogoutButton;
