import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

export const OptionCard = ({ title, icon }) => {
	const [isHovering, setisHovering] = useState(false);

	return (
		<div
			onMouseEnter={ () => setisHovering(true) }
			onMouseLeave={ () => setisHovering(false) }
			className='overflow-hidden relative cursor-pointer hover:scale-105 transition-all w-40 h-40 flex flex-col justify-center items-center bg-white font-bold rounded-md p-9 drop-shadow-md hover:drop-shadow-lg'
		>
			<h3 className='text-blue-400'>{ title }</h3>
			<span className={ `transition-colors ${isHovering ? 'text-blue-400' : 'text-gray-700'}` }>
				{icon}
			</span>
			<div className={`transition-all bottom-0 rounded-t-sm justify-end px-3 box-border items-center gap-1.5 absolute flex from-blue-300 to-blue-400 bg-gradient-to-r w-full ${isHovering ? 'h-7' : 'h-0'}`}>
				<p className='top-0 m-0 p-0 text-white'>Abrir</p>
				<FaArrowRight color="white" />
			</div>
		</div>
	);
};

OptionCard.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object
};
