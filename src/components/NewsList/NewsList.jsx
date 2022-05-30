import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ cb, text, className }) => {
	return <button className={ className } onClick={cb}> {text}</button>;
};

export const NewsList = () => {
	const data = [
		{
			id: 1,
			name: 'News 1',
			image: 'https://images.pexels.com/users/avatars/745299/sushant-photographyy-733.jpeg?auto=compress&fit=crop&h=256&w=256',
			cratedAt: new Date().getFullYear()
		},
		{
			id: 2,
			name: 'News 2',
			image: 'https://images.pexels.com/users/avatars/22734895/wencheng-jiang-379.jpeg?auto=compress&fit=crop&h=256&w=256',
			cratedAt: new Date().getFullYear()
		},
		{
			id: 3,
			name: 'News 3',
			image: 'https://images.pexels.com/users/avatars/22470218/darina-belonogova-982.jpeg?auto=compress&fit=crop&h=256&w=256',
			cratedAt: new Date().getFullYear()
		},
		{
			id: 4,
			name: 'News 4',
			image: 'https://images.pexels.com/users/avatars/18908569/oliver-li-973.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1',
			cratedAt: new Date().getFullYear()
		},
		{
			id: 5,
			name: 'News 5',
			image: 'https://images.pexels.com/users/avatars/30354857/tomas-wells-871.jpeg?auto=compress&fit=crop&h=256&w=256',
			cratedAt: new Date().getFullYear()
		},
		{
			id: 6,
			name: 'News 6',
			image: 'https://images.pexels.com/users/avatars/78564297/flow-agency-158.jpeg?auto=compress&fit=crop&h=256&w=256',
			cratedAt: new Date().getFullYear()
		}
	];

	const handleNewsUpdate = (id) => {
		console.log('Update id: ', id);
	};
	const handleNewsDelete = (id) => {
		console.log('Delete id: ', id);
	};
	return (<div className='container mx-auto my-20 relative overflow-x-auto' style={{ overflow: scroll }}>
		<table className="mx-auto shadow-lg bg-white  border border-slate-400 ">
			<thead className='bg-redOng'>
				<tr>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Nombre</th>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Imagen</th>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Fecha Creación</th>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Editar</th>
					<th className='bg-blue-100 border text-left px-8 py-4 text-sm'>Eliminar</th>
				</tr>
			</thead>
			<tbody>
				{
					data.map((item, i) =>	(
						<tr key={i}>
							<td className='border px-8 py-4 text-sm'>{item.name}</td>
							<td className='border px-8 py-4 text-sm'><img className='rounded-full h-12 w-12' src={item.image}/></td>
							<td className='border px-8 py-4 text-sm'>{item.cratedAt}</td>
							<td className='text-center'><Button className='border-0 px-6 py-2 rounded bg-blueOng text-white cursor-pointer text-sm' cb={handleNewsUpdate.bind(null, item.id)} text='Editar'/></td>
							<td className='text-center'><Button className='border-0 px-6 py-2 rounded bg-redOng text-white cursor-pointer text-sm' cb={handleNewsDelete.bind(null, item.id)} text='Eliminar'/></td>
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
