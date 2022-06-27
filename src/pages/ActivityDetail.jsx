import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { activitiesActions, getActivity } from '../features/activities/activitiesSlice';
const parse = require('html-react-parser');

export const ActivityDetail = () => {
	const dispatch = useDispatch();
	const activityDetails = useSelector(state => state.activities.activity);

	const { id: newsId } = useParams();

	useEffect(() => {
		return () => {
			dispatch(activitiesActions.resetActivities());
		};
	}, []);

	useEffect(() => {
		dispatch(getActivity(newsId));
	}, [newsId]);
	const title = activityDetails?.name ? activityDetails?.name.trim().replace(/^\w/, (c) => c.toUpperCase()) : 'Se ha producido un error inesperado';

	return (
		<div className="flex flex-col mx-auto" style={{ maxWidth: '1200px' }} >
			<h1 className="mx-auto font-sans">Detalles de la novedad</h1>
			<div className="my-2 w-full rounded-lg overflow-hidden flex items-center bg-neutral-300" style={{ height: 'fit-content', maxHeight: '500px' }}>
				{
					activityDetails?.image
						? <img className="flex" src={activityDetails?.image} alt={`Imagen sobre ${activityDetails?.name}`} width={'100%'}/>
						: <div className="flex bg-neutral-800 font-sans text-white w-full items-center justify-center" style={{ height: '500px' }}>
							<p>Imagen no encontrada</p>
						</div>
				}
			</div>
			<div className="flex flex-col px-5 md:px-8 w-3/4 mx-auto items-start">
				<h2 className="font-sans">{title}</h2>
				<div className="special-p w-full text-left overflow-hidden">{activityDetails?.content ? parse(activityDetails?.content) : 'La novedad solicitad no fue encontrada.'}</div>
				<a className="sm:mx-0 mb-4 mt-8" href={'/'}>
					<button className="hover:scale-105 transition-transform appearance-none border border-transparent text-base w-44 text rounded-lg cursor-pointer bg-redOng text-white py-3">
            Volver al inicio
					</button>
				</a>
			</div>
		</div>
	);
};
