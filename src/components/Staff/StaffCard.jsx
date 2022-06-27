import React from 'react';
import PropTypes from 'prop-types';

export const StaffCard = ({ data }) => {
	return (
		<div
			className='bg-no-repeat bg-cover bg-center object-contain text-center flex flex-col justify-end text-white rounded-2xl'
			style={{
				backgroundImage: `url(${data.imageUrl})`,
				minHeight: '200px',
				minWidth: '200px'
			}}
		>
			<span className='text-xl font-bold'> {data.name}</span>
			<span className='pb-2'> {data.position}</span>
		</div>
	);
};

StaffCard.propTypes = {
	data: PropTypes.object
};
