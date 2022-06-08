import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenNav } from '../../features/components/componentsSlice';

function BurguerButton () {
	const { openNav } = useSelector((state) => state.components);
	const dispatch = useDispatch();

	const handleMenu = () => {
		dispatch(changeOpenNav());
	};

	return (
		<div className="block lg:hidden">
			<button
				className="lg:hidden flex bg-white cursor-pointer items-center px-3 py-2 border-0 rounded text-teal-200 hover:text-white"
				onClick={handleMenu}
			>{openNav
					? <img className="mx-auto w-5 h-5" src='/close.png'/>
					: <img className="mx-auto w-5 h-5" src='/menu.png'/>
				}
			</button>
		</div>
	);
}

export default BurguerButton;
