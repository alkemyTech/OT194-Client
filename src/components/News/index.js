import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllNews } from '../../features/news/newsSlice';

const Card = ({ data }) => (
	<div className="w-5/6 mb-3 shadow-lg rounded-3xl border-solid border border-blue-700" style={{ backgroundColor: '#7E9AFD' }}>
		<div className="">
			<img
				alt={data.name}
				className="block mx-auto rounded-3xl p-2 h-44 w-fit"
				src={data.image}
			/>
		</div>
		<div className="flex flex-col justify-between">
			<p className="font-medium px-1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue augue.  varius laoreet nibh.
			</p>
			<Link to={`/news/${data.id}`} >
				<button className=' mb-2 w-11/12 font-mulish  appearance-none border rounded-xl border-transparent text-white p-2 py-2.5 text-center no-underline bg-blue-700 ease-in-out duration-200  hover:bg-white hover:border-blue-700 hover:text-black ' style={{ boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
						Ver Novedad
				</button>
			</Link>
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
		<div className="p-4">
			<h1 className="flex justify-start font-bold ">Últimas novedades</h1>
			<div className="flex flex-wrap ">
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
