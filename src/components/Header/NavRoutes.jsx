import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeNav } from '../../features/components/componentsSlice';

export function NavRoutes () {
	const dispatch = useDispatch();
	const navLinks = [
		{ text: 'Inicio', route: '/' },
		{ text: 'Nosotros', route: '/nosotros' },
		{ text: 'Novedades', route: '/news' },
		{ text: 'Testimonios',	route: '/testimonios' },
		{ text: 'Contacto', route: '/contacto' },
		{ text: 'Contribuye', route: '/contribuye' }
	];

	return (
		<>
			{navLinks.map((link, i) => (
				<li key={i} className='m-2 text-lg first:font-extrabold'>
					<Link
						className='text-black hover:text-redOng no-underline'
						onClick={() => dispatch(closeNav())}
						to={`${link.route}`}
					>{link.text}</Link>
				</li>))
			}
		</>
	);
}

// <ul className='list-none my-5 text-center p-0'></ul>
