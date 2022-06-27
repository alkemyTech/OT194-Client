import React from 'react';
import PropTypes from 'prop-types';
const parse = require('html-react-parser');

export const TestimonyCard = ({ data }) => {
	return (
		<div key={data.name} className='bg-yellow-100 overflow-hidden flex flex-col text-black w-48 h-60 p-3 box-border rounded-2xl border-solid border-2 border-yellow-200 text-justify'>
			<img className='bg-neutral-100 object-cover rounded-full flex justify-center items-center overflow-hidden' src={data.image} alt={data.name} style={{ minHeight: '64px', width: '64px' }} />
			<span className='text-l font-mulish pb-2 font-bold mt-4'>{data.name}</span>
			<span className='h-full text-sm special-p text-ellipsis overflow-auto'>{parse(data.content)}</span>
		</div>
	);
};

TestimonyCard.propTypes = {
	data: PropTypes.object
};
