import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeNav } from '../../features/components/componentsSlice';

function UserButton () {
	const { user } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleUserButton = () => {
		dispatch(closeNav());
		navigate('/backoffice');
	};

	return (
		<button
			className='mx-2 font-englebert text-base w-30 bg-blueOng hover:bg-white focus:bg-white text-white hover:text-blueOng focus:text-blueOng rounded-full border-2 border-transparent hover:border-blueOng focus:border-blueOng py-1 px-4 cursor-pointer'
			onClick={handleUserButton}
		>{user.firstName}</button>
	);
}

export default UserButton;
