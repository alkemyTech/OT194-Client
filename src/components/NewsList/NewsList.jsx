import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';

const Button = ({ cb, text, className }) => {
	return (
		<button className={className} onClick={cb}>
			{' '}
			{text}
		</button>
	);
};

export const NewsList = () => {
	const news = useFetch('/news', 'get', {});

	const handleNewsUpdate = (id) => {
		console.log('Update id: ', id);
	};
	const handleNewsDelete = (id) => {
		console.log('Delete id: ', id);
	};
	return (
		<div
			className='container mx-auto my-20 relative overflow-x-auto'
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
						<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>
							Editar
						</th>
						<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>
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
							<td className='border px-8 py-4 text-sm'>{item.createdAt}</td>
							<td className='text-center'>
								<Button
									className='border-0 px-6 py-2 rounded bg-blueOng text-white cursor-pointer text-sm'
									cb={handleNewsUpdate.bind(null, item.id)}
									text='Editar'
								/>
							</td>
							<td className='text-center'>
								<Button
									className='border-0 px-6 py-2 rounded bg-redOng text-white cursor-pointer text-sm'
									cb={handleNewsDelete.bind(null, item.id)}
									text='Eliminar'
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

Button.propTypes = {
	cb: PropTypes.func,
	text: PropTypes.string,
	className: PropTypes.string,
};
