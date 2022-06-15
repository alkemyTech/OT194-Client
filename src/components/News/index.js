import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllNews } from '../../features/news/newsSlice';

const Card = ({ data }) => (
	<div className="w-max shadow-lg flex bg-blueOng rounded-3xl mx-5 border-solid border  border-blue-700" style={{ backgroundColor: '#7E9AFD' }}>
		<div className="flex-no-shrink w-1/2">
			<img
				alt={data.name}
				className="block mx-auto rounded-3xl p-2 h-32 w-32"
				src={data.image}
			/>
		</div>
		<div className="max-w-lg flex flex-wrap-reverse justify-between">
			<div>
				<h3 className="font-medium p-2">{data.name}</h3>
				<Link to={`/news/${data.id}`}>
					<button className="w-32 m-2 font-englebert bg-blue-700  text-white font-mulish appearance-none py-2 px-4 border rounded-xl border-transparent  roundedbg-blue-700 ease-in-out duration-200  hover:bg-white hover:border-blue-700 hover:text-black" style={{ boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
						Ver Novedad
					</button>
				</Link>
			</div>
		</div>
	</div>
);

export const News = () => {
	const dispatch = useDispatch();
	const allNews = useSelector(state => state.news.allNews);
	useEffect(() => {
		dispatch(getAllNews());
	}, []);

	return (
		<div className="p-4 justify-center">
			<h1 className="flex justify-center font-bold ">Últimas novedades</h1>
			<div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{allNews.map(data => (
					<Card key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object
};
