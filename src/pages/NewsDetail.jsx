import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import { getNews } from '../features/news/newsSlice';
const parse = require('html-react-parser');

export const NewsDetail = () => {
	const dispatch = useDispatch();
	const newsDetails = useSelector(state => state.news.openedNews);

	const { id: newsId } = useParams();

	useEffect(() => {
		dispatch(getNews(newsId));
	}, [newsId]);
	const title = newsDetails?.name ? newsDetails?.name.trim().replace(/^\w/, (c) => c.toUpperCase()) : 'Se ha producido un error inesperado';
	return (

		<div className="flex flex-col mx-auto" style={{ maxWidth: '1200px' }} >
			<h1 className="mx-auto font-sans">Detalles de la novedad</h1>
			<div className="my-2 w-full overflow-hidden flex items-center " style={{ height: 'fit-content', maxHeight: '500px' }}>
				<Slider arr={newsDetails?.Slides || []}/>
			</div>
			<div className="flex flex-col px-5 md:px-8 w-1/2 mx-auto items-start">
				<h2 className="font-sans">{title}</h2>
				<div className="special-p w-full text-left overflow-hidden">{newsDetails ? parse(newsDetails?.content) : 'La novedad solicitad no fue encontrada.'}</div>
				<a className="sm:mx-0 mb-4 mt-8" href={'/'}>
					<button className="hover:scale-105 transition-transform appearance-none border border-transparent text-base w-44 text rounded-lg cursor-pointer bg-redOng text-white py-3">
            Volver al inicio
					</button>
				</a>
			</div>
		</div>
	);
};
