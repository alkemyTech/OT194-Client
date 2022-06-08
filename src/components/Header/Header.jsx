import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeNav } from '../../features/components/componentsSlice';
import BurguerButton from './BurguerButton';
import BurguerMenu from './BurguerMenu';
import LargeScreenMenu from './LargeScreenMenu';

export function Header () {
	const { openNav } = useSelector((state) => state.components);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogo = () => {
		dispatch(closeNav());
		navigate('/');
	};

	return (
		<nav className="h-24 relative flex items-center justify-between flex-wrap bg-white px-6 py-0">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<img
					className="cursor-pointer mx-auto w-24 h-24"
					src='/logo-fundacion.png'
					onClick={handleLogo}
				/>
			</div>
			<BurguerButton />
			{openNav && <BurguerMenu />}
			<LargeScreenMenu />
		</nav>);
};
