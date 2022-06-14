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
			className='mx-2 font-englebert text-base w-30 bg-redOng hover:bg-white focus:bg-white text-white hover:text-redOng focus:text-blueOng rounded-full border-2 border-transparent hover:border-redOng focus:border-blueOng py-1 px-4 cursor-pointer'
			onClick={handleRegister}
		>Registrarse</button>
	);
}

export default RegisterButton;
