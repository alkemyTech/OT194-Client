import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserData } from '../../features/auth/authSlice';

export const CardDeleteUser = ({ title, icon }) => {
	const [isHovering, setisHovering] = useState(false);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleUserDelete = () => {
		Swal.fire({
			icon: 'warning',
			title: '¿Quieres eliminar tu cuenta?',
			text: 'No podrás recuperarla una vez eliminada',
			showCancelButton: true
		}).then((dismiss) => {
			if (dismiss.isConfirmed) {
				Swal.fire({
					icon: 'question',
					title: '¿Confirmas querer eliminar tu cuenta?',
					text: 'Recuerda que no podrás recuperarla una vez eliminada',
					showCancelButton: true
				}).then((dismiss) => {
					if (dismiss.isConfirmed) dispatch(deleteUserData(user));
					Swal.fire({
						icon: 'info',
						title: 'Cuenta eliminada',
						text: 'La cuenta ha sido eliminada con éxito'
					});
				});
			};
		});
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
