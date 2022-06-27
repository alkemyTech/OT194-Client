import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const parse = require('html-react-parser');

export const ActivityCard = ({ data }) => {
	let dots = '...';
	if (data.content.length <= 135) dots = '';

	return (
		<div
			className="shadow-lg flex flex-col md:flex-row w-[233px] h-[448px] md:w-[448px] md:h-[233px] p-3 gap-2 overflow-hidden bg-redOng rounded-3xl box-border border-solid border border-red-700"
			style={{ maxWidth: '448px', maxHeight: '448px' }}
		>
			<div className="box-content overflow-hidden h-1/2 md:h-full md:w-1/2">
				<img
					alt={data.name}
					className="rounded-3xl h-full w-full bg-neutral-100 flex justify-center items-center overflow-hidden object-cover"
					src={data.image}
				/>
			</div>
			<div className="flex flex-col justify-between box-border p-2.5 h-1/2 md:h-full md:w-1/2">
				<div className="m-0 font-medium text-base text-left special-p" >
					{parse(data.content.slice(0, 135))}{dots}
				</div>
				<Link to={`/actividades/${data.id}`}>
					<button className="cursor-pointer drop-shadow-md w-full bg-red-700 text-white appearance-none py-2.5 border rounded-lg border-transparent ease-in-out duration-200 hover:bg-white hover:border-blue-700 hover:text-black">
            Ver Actividad
					</button>
				</Link>
			</div>
		</div>
	);
};

ActivityCard.propTypes = {
	data: PropTypes.object
};
