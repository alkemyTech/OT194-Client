import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import { getNews } from '../features/news/newsSlice';

export const NewsDetail = () => {
	const dispatch = useDispatch();
	const newsDetails = useSelector(state => state.news.openedNews);

	const { id: newsId } = useParams();

	useEffect(() => {
		dispatch(getNews(newsId));
	}, [newsId]);

	return (

		<div className="flex flex-col mx-auto" style={{ maxWidth: '1200px' }} >
			<h1 className="mx-auto font-sans">Detalles de la novedad</h1>
			<div className="my-2 w-full overflow-hidden flex items-center " style={{ height: 'fit-content', maxHeight: '500px' }}>
				<Slider arr={newsDetails?.Slides || []}/>
			</div>
			<div className="flex flex-col px-5 md:px-8">
				<h2 className="font-sans">{ newsDetails?.name || 'Se ha producido un error inesperado'}</h2>
				<p className="m-0 p-0">{ newsDetails?.content || 'La novedad solicitad no fue encontrada.'}</p>
				<a className="mx-auto sm:mx-0 mb-4 mt-8" href={'/'}>
					<button className="hover:scale-105 transition-transform appearance-none border border-transparent text-base w-44 text rounded-lg cursor-pointer bg-redOng text-white py-3">
            Volver al inicio
					</button>
				</a>
			</div>
		</div>
	);
};
