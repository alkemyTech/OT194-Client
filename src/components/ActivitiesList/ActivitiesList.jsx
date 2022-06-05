import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';

const Button = ({ cb, text, className }) => {
	return <button className={ className } onClick={cb}> {text}</button>;
};

export const ActivitiesList = () => {
	const activities = useFetch('/activities', ' get', {});

	const handleUpdate = (id) => {
		console.log('Update id: ', id);
	};
	const handleDelete = (id) => {
		console.log('Delete id: ', id);
	};
	return (<div className='container mx-auto my-20 relative overflow-x-auto' style={{ overflow: scroll }}>
		<table className="mx-auto shadow-lg bg-white  border border-slate-400 ">
			<thead className='bg-redOng'>
				<tr>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Actividad</th>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Editar</th>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Eliminar</th>
				</tr>
			</thead>
			<tbody>
				{
					activities.map((activity) =>	(
						<tr key={activity.id}>
							<td className='border px-8 py-4 text-sm'>{activity.name}</td>
							<td className='text-center'><Button className='border-0 px-6 py-2 rounded bg-blueOng text-white cursor-pointer text-sm' cb={handleUpdate.bind(null, activity.id)} text='Editar'/></td>
							<td className='text-center'><Button className='border-0 px-6 py-2 rounded bg-redOng text-white cursor-pointer text-sm' cb={handleDelete.bind(null, activity.id)} text='Eliminar'/></td>
						</tr>))
				}

			</tbody>
		</table>
	</div>
	);
};

Button.propTypes = {
	cb: PropTypes.func,
	text: PropTypes.string,
	className: PropTypes.string
};
