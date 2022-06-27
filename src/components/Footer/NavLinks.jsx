import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks () {
	const navLinks = [
		{ title: 'Inicio', route: '/' },
		{ title: 'Nosotros', route: '/nosotros' },
		{ title: 'Novedades', route: '/news' },
		{ title: 'Testimonios', route: '/testimonios' },
		{ title: 'Contacto', route: '/contacto' }
	];

	return (
		<div className="flex flex-col sm:flex-row mx-auto mb-6 gap-5">
			{navLinks.map((section, i) => (
				<NavLink
					style={{ textUnderlineOffset: '2px' }}
					className={({ isActive }) => {
						return isActive
							? 'text-blueOng text-lg cursor-default pointer-events-none font-extrabold'
							: 'text-black text-lg hover:text-redOng no-underline';
					}}
					key={`${i}${section.title}`}
					to={section.route}
				>{section.title}</NavLink>
			))}
		</div>
	);
}

export default NavLinks;
