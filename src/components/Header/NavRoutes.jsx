import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeNav } from '../../features/components/componentsSlice';

export function NavRoutes () {
	const dispatch = useDispatch();
	const navLinks = [
		{ text: 'Inicio', route: '/' },
		{ text: 'Nosotros', route: '/nosotros' },
		{ text: 'Novedades', route: '/news' },
		{ text: 'Actividades', route: '/actividades' },
		{ text: 'Testimonios',	route: '/testimonios' },
		{ text: 'Contacto', route: '/contacto' }
	];

	return (
		<>
			{navLinks.map((link, i) => (
				<li key={i} className='m-2 text-lg'>
					<NavLink
						style={{ textUnderlineOffset: '2px' }}
						className={({ isActive }) => {
							return isActive
								? 'text-blueOng cursor-default pointer-events-none font-extrabold'
								: 'text-black hover:text-redOng no-underline';
						}}
						onClick={() => dispatch(closeNav())}
						to={`${link.route}`}
					>{link.text}</NavLink>
				</li>))
			}
		</>
	);
}

// <ul className='list-none my-5 text-center p-0'></ul>
