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
			className='mx-2 font-englebert w-30 text-base hover:text-redOng focus:text-blueOng bg-white border-2 hover:border-redOng focus:border-blueOng rounded-full py-1 px-4 cursor-pointer'
			onClick={handleLogout}
		>Cerrar sesión</button>
	);
}

export default LogoutButton;
