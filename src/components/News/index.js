import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';

export const News = () => {
	const news = useFetch('/news', 'get', {});
	// const news = [{ id: '123', name: 'Novedad', image: 'https://source.unsplash.com/WLUHO9A_xik/1600x900' }, { id: '124', name: 'Novedad2', image: 'https://source.unsplash.com/WLUHO9A_xik/1600x900' }, { id: '125', name: 'Novedad3', image: 'https://source.unsplash.com/WLUHO9A_xik/1600x900' }];

	const Card = ({ data }) => (
		<div className="w-max shadow-lg flex bg-blueOng rounded-3xl mx-5">
			<div className="flex-no-shrink w-1/2">
				<img
					alt={data.name}
					className="block mx-auto rounded-3xl p-2 h-32 w-32"
					src={data.image}
				/>
			</div>
			<div className="max-w-lg">
				<div>
					<h3 className="font-medium p-2">{data.name}</h3>
					<Link to={`news/${data.id}`}>
						<button className="w-32 m-2 bg-bluePure hover:bg-blueOng text-white font-bold py-2 px-4 border border-bluePure rounded">
Ver Novedad
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
	return (
		<div className="p-4">
			<h1 className="flex justify-start font-bold p-4">Ultimas Novedades</h1>
			<div className="grid grid-cols-4 gap-4">
				{news.map(data => (
					<Card key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

News.propTypes = {
	data: PropTypes.object,
	name: PropTypes.string,
	image: PropTypes.string,
	id: PropTypes.string
};
