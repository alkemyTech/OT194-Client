import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { showAlert } from '../../features/alert/alertSlice';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../../features/auth/authSlice';

export const CardDeleteUser = ({ title, icon }) => {
	const dispatch = useDispatch();
	const [isHovering, setisHovering] = useState(false);

	const handleUserDelete = () => {
		const alert = {
			show: true,
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			action: () => {
				dispatch(deleteUserData());
			}
		};
		dispatch(showAlert(alert));
	};

	return (
		<div
			onMouseEnter={ () => setisHovering(true) }
			onMouseLeave={ () => setisHovering(false) }
			onClick={handleUserDelete}
			className='overflow-hidden relative cursor-pointer hover:scale-105 transition-all w-40 h-40 flex flex-col justify-center items-center bg-white font-bold rounded-md p-9 drop-shadow-md hover:drop-shadow-lg'
		>
			<h3 className='text-red-400'>{ title }</h3>
			<span className={ `transition-colors ${isHovering ? 'text-red-400' : 'text-gray-700'}` }>
				{icon}
			</span>
			<div className={`transition-all bottom-0 rounded-t-sm justify-end px-3 box-border items-center gap-1.5 absolute flex from-red-300 to-red-400 bg-gradient-to-r w-full ${isHovering ? 'h-7' : 'h-0'}`}>
				<p className='top-0 m-0 p-0 text-white'>Delete</p>
				<FaArrowRight color="white" />
			</div>
		</div>
	);
};

CardDeleteUser.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object
};
