import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeNav } from '../../features/components/componentsSlice';

function RegisterButton () {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleRegister = () => {
		dispatch(closeNav());
		navigate('/register');
	};

	return (
		<button
			className='mx-2 text-white bg-redOng hover:bg-redOng focus:ring rounded-full border-0 py-3 px-6 cursor-pointer hover:opacity-50'
			onClick={handleRegister}
		>Registrate</button>
	);
}

export default RegisterButton;
