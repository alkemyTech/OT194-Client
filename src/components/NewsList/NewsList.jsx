import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews, getAllNews } from '../../features/news/newsSlice';
import { Link, useNavigate } from 'react-router-dom';
import {
	faPenToSquare,
	faSquareMinus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showAlert } from '../../features/alert/alertSlice';

export const NewsList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const news = useSelector(state => state.news.allNews);
	useEffect(() => {
		dispatch(getAllNews());
	}, []);

	const handleNewsDelete = (id) => {
		const alert = {
			show: true,
			text: `¿Esta seguro que desa eliminar la novedad ${id}?`,
			title: `Eliminar la novedad ${id}`,
			showCancelButton: true,
			action: () => {
				dispatch(deleteNews(id));
				navigate('/backoffice/news');
			}
		};
		dispatch(showAlert(alert));
	};
	return (
		<div className='mb-10'>
			<div
				className='container mx-auto mt-20 mb-10 relative overflow-x-auto'
				style={{ overflow: scroll }}
			>
				<table className='mx-auto shadow-lg bg-white  border border-slate-400 '>
					<thead className='bg-redOng'>
						<tr>
							<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>
							Nombre
							</th>
							<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>
							Imagen
							</th>
							<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>
							Fecha Creación
							</th>
							<th className='bg-blue-100 border text-left px-8 py-4 text-sm hidden sm:table-cell'>
							Editar
							</th>
							<th className='bg-blue-100 border text-left px-8 py-4 text-sm hidden sm:table-cell'>
							Eliminar
							</th>
						</tr>
					</thead>
					<tbody>
						{news.length && news.map((item, i) => (
							<tr key={i}>
								<td className='border px-4 py-4 text-sm'>{item.name}</td>
								<td className='border py-4 text-sm'>
									<img className='rounded-full h-12 w-12' src={item.image} />
								</td>
								<td className='border px-4 py-4 text-sm relative'>
									{item.createdAt.slice(0, 10)}
									<span className=' absolute top-0 right-1 sm:hidden'>
										<Link to={`/backoffice/news/${item.id}`}>
											<FontAwesomeIcon className='mx-2 text-lg text-blue-600' icon={faPenToSquare} />
										</Link>
										<span onClick={() => handleNewsDelete(item.id)} className='p-0.5'>
											<FontAwesomeIcon className='text-lg text-red-600' icon={faSquareMinus} />
										</span>
									</span>
								</td>
								<td className='text-center hidden sm:table-cell'>
									<Link
										className='border-0 px-6 py-2 rounded bg-blueOng text-white cursor-pointer text-md no-underline'
										to={`/backoffice/news/${item.id}`}
									>Editar</Link>
								</td>
								<td className='text-center hidden sm:table-cell'>
									<button
										className='border-0 px-6 py-2.5 rounded bg-redOng text-white cursor-pointer text-md no-underline'
										onClick={() => handleNewsDelete(item.id)}
									>Eliminar</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Link
				className='border-0 px-6 py-2 rounded bg-green-400 text-white cursor-pointer text-md no-underline'
				to={'/backoffice/news/create'}
			>Crear Entry</Link>
		</div>
	);
};
