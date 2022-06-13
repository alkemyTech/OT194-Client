import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks () {
	const navLinks = [
		{ title: 'Inicio', route: '/' },
		{ title: 'Nosotros', route: '/nosotros' },
		{ title: 'Novedades', route: '/news' },
		{ title: 'Testimonios', route: '/testimonios' },
		{ title: 'Contacto', route: '/contacto' },
		{ title: 'Contribuye', route: '/contribuye' }
	];

	return (
		<div className="flex flex-col sm:flex-row mx-auto sm:gap-5">
			{navLinks.map((section, i) => (
				<Link
					className="hover:scale-105 transition-transform font-medium no-underline visited:text-gray-500"
					key={`${i}${section.title}`}
					to={section.route}
				>{section.title}</Link>
			))}
		</div>
	);
}

export default NavLinks;
