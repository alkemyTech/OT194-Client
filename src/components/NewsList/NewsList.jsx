import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, deleteNews } from '../../features/news/newsSlice';
import { Link } from 'react-router-dom';
import {
	faPenToSquare,
	faSquareMinus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NewsList = () => {
	const dispatch = useDispatch();
	const news = useSelector(state => state.news.allNews);
	useEffect(() => {
		dispatch(getAllNews());
	}, []);

	const handleNewsDelete = (id) => {
		dispatch(deleteNews(id));
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
						{news.map((item, i) => (
							<tr key={i}>
								<td className='border px-8 py-4 text-sm'>{item.name}</td>
								<td className='border px-8 py-4 text-sm'>
									<img className='rounded-full h-12 w-12' src={item.image} />
								</td>
								<td className='border px-8 py-4 text-sm relative'>
									{item.createdAt}
									<span className=' absolute top-0 right-1 sm:hidden'>
										<Link to={`/backoffice/news/${item.id}`}>
											<FontAwesomeIcon className='mx-2 text-lg text-blue-600' icon={faPenToSquare} />
										</Link>
										<Link onClick={() => handleNewsDelete(item.id)} to={'#'}>
											<FontAwesomeIcon className='text-lg text-red-600' icon={faSquareMinus} />
										</Link>
									</span>
								</td>
								<td className='text-center hidden sm:table-cell'>
									<Link
										className='border-0 px-6 py-2 rounded bg-blueOng text-white cursor-pointer text-md no-underline'
										to={`/backoffice/news/${item.id}`}
									>Editar</Link>
								</td>
								<td className='text-center hidden sm:table-cell'>
									<Link
										className='border-0 px-6 py-2 rounded bg-redOng text-white cursor-pointer text-md no-underline'
										onClick={() => handleNewsDelete(item.id)}
										to={'#'}
									>Eliminar</Link>
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
