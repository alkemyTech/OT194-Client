import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		console.log('ckic');
		setMenuOpen(!menuOpen);
	};

	// TODO: Links=> object Array
	const navLinks = [
		{
			text: 'Inicio',
			route: '/'
		},
		{
			text: 'Nosotros',
			route: '/nosotros'
		},
		{
			text: 'Novedades',
			route: '/novedades'
		},
		{
			text: 'Testimonios',
			route: '/testimonios'
		},
		{
			text: 'Contacto',
			route: '/contacto'
		},
		{
			text: 'Contribuye',
			route: '/contribuye'
		}
	];
	return (<nav className="h-24 relative flex items-center justify-between flex-wrap bg-white px-6 py-0">
		<div className="flex items-center flex-shrink-0 text-white mr-6">
			<img className="mx-auto w-24 h-24" src='/logo-fundacion.png'/>
		</div>
		<div className="block lg:hidden">
			<button onClick={handleMenu} className="flex bg-white cursor-pointer items-center px-3 py-2 border-0 rounded text-teal-200 hover:text-white">
				{
					menuOpen ? <img className="mx-auto w-5 h-5" src='/close.png'/> : <img className="mx-auto w-5 h-5" src='/menu.png'/>
				}
			</button>
		</div>
		{
			menuOpen &&
			<div className="w-full h-screen absolute menuTop left-0 right-0 bottom-0 block flex-grow lg:flex lg:items-center lg:w-auto ">
				<div className="flex flex-col items-center justify-center text-sm lg:flex-grow opacity-100 lg:opacity-100 ">
					<ul className='list-none my-5 text-center p-0'>
						{
							navLinks.map((link, i) => (
								<li key={i} className='my-10 text-lg first:font-bold '>
									<Link className='text-black hover:text-redOng no-underline' to={`${link.route}`}>{link.text}</Link>
								</li>))
						}
					</ul>
				</div>
				<div className='text-center p-0'>
					<button className='mx-2 bg-white border-1 border focus:outline-4 cursor-pointer hover:opacity-50 focus:ring focus:black rounded-full border-0 py-3 px-6'>Login</button>
					<button className='mx-2 text-white bg-redOng cursor-pointer hover:opacity-50 focus:ring rounded-full border-0 py-3 px-6'>Registrate</button>
				</div>
			</div>
		}
		<div className="hidden flex-grow lg:flex lg:items-center ">
			<div className="flex items-center justify-end text-sm lg:flex-grow opacity-100 lg:opacity-100 ">
				<ul className='flex list-none text-center p-0'>
					{
						navLinks.map((link, i) => (
							<li key={i} className=' text-sm first:font-bold px-3'>
								<a className='text-black hover:text-redOng no-underline' href={`${link.route}`}>{link.text}</a>
							</li>))
					}
				</ul>
			</div>
			<div className='text-center p-0'>
				<button className='mx-2 bg-white border-1 border focus:outline-4 focus:ring focus:black rounded-full border-0 py-3 px-6 cursor-pointer hover:opacity-50'>Login</button>
				<button className='mx-2 text-white bg-redOng hover:bg-redOng focus:ring rounded-full border-0 py-3 px-6 cursor-pointer hover:opacity-50'>Registrate</button>
			</div>
		</div>
	</nav>);
};
