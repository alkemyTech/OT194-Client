import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const parse = require('html-react-parser');

export const NewsCard = ({ data }) => {
	return (
		<div
			className="shadow-lg flex flex-col md:flex-row w-[233px] h-[448px] md:w-[448px] md:h-[233px] p-3 gap-2 overflow-hidden bg-blueOng rounded-3xl box-border border-solid border border-blue-700"
			style={{ backgroundColor: '#7E9AFD', maxWidth: '448px', maxHeight: '448px' }}
		>
			<div className="box-content overflow-hidden h-1/2 md:h-full md:w-1/2">
				<img
					alt={data.name}
					className="rounded-3xl h-full w-full bg-neutral-100 flex justify-center items-center overflow-hidden"
					src={data.image}
				/>
			</div>
			<div className="flex flex-col justify-between box-border p-2.5 h-1/2 md:h-full md:w-1/2">
				<div className="m-0 font-medium text-base text-left special-p" >
					{parse(data.content.slice(0, 135))}
				</div>
				<Link to={`/news/${data.id}`}>
					<button className="cursor-pointer drop-shadow-md w-full bg-blue-700 text-white appearance-none py-2.5 border rounded-lg border-transparent ease-in-out duration-200 hover:bg-white hover:border-blue-700 hover:text-black">
            Ver Novedad
					</button>
				</Link>
			</div>
		</div>
	);
};

NewsCard.propTypes = {
	data: PropTypes.object
};
