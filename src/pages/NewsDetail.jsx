import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNews } from '../features/news/newsSlice';
// import { useParams } from 'react-router-dom';
// import { useFetch } from '../hooks/useFetch';

export const NewsDetail = () => {
	// No se utilizo el Slider porque renderiza las imagenes estiradas y sin posibilidad de corregirlo ademas de que tiene un bug que desaparece la imagen
	// Deberian sacarse los argumentos "text" y "campo" del Slider ya que este componente solo debe encargarse de imagenes

	const dispatch = useDispatch();
	const newsDetails = useSelector(state => state.news.openedNews);

	const { id: newsId } = useParams();

	useEffect(() => {
		dispatch(getNews(newsId));
	}, [newsId]);

	return (
		<div className="flex flex-col mx-auto" style={{ maxWidth: '1200px' }} >
			<h1 className="mx-auto font-sans">Detalles de la novedad</h1>
			<div className="my-2 w-full overflow-hidden flex items-center bg-neutral-300" style={{ height: 'fit-content', maxHeight: '500px' }}>
				{
					newsDetails?.images?.length > 0
						? <img className="flex" src={newsDetails?.images[1]} alt={`Imagen sobre ${newsDetails?.titulo}`} width={'100%'}/>
						: <div className="flex bg-neutral-800 font-sans text-white w-full items-center justify-center" style={{ height: '500px' }}>
							<p>Imagen no encontrada</p>
						</div>
				}

			</div>
			<div className="flex flex-col px-5 md:px-8">
				<h2 className="font-sans">{newsDetails.length > 0 ? newsDetails?.titulo : 'Se ha producido un error inesperado'}</h2>
				<p className="m-0 p-0">{newsDetails.length > 0 ? newsDetails?.descripcion : 'La novedad solicitad no fue encontrada.'}</p>
				<a className="mx-auto sm:mx-0 mb-4 mt-8" href={'/'}>
					<button className="hover:scale-105 transition-transform appearance-none border border-transparent text-base w-44 text rounded-lg cursor-pointer bg-redOng text-white py-3">
            Volver al inicio
					</button>
				</a>
			</div>
		</div>
	);
};
