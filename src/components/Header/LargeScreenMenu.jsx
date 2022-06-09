import React from 'react';
import { NavRoutes } from './NavRoutes';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { Link } from 'react-router-dom';

const navBackofficeAdminLinks = [
	{
		text: 'BO Novedades',
		route: '/'
	},
	{
		text: 'BO Categorías',
		route: '/'
	},
	{
		text: 'BO Testimonios',
		route: '/'
	},
	{
		text: 'BO Actividades',
		route: '/'
	},
	{
		text: 'BO Organización',
		route: '/'
	},
	{
		text: 'Editar Perfil',
		route: '/backoffice/edit-organization'
	}
];

const navLinkUser = [
	{
		text: 'Editar Perfil',
		route: '/backoffice/edit-organization'
	}
];

function LargeScreenMenu () {
	const { user } = useSelector((state) => state.auth);
	const [menuBackOffice, setMenuBackOficce] = React.useState([]);
	const [menuBackOfficeOpen, setMenuBackOficceOpen] = React.useState(false);

	React.useEffect(() => {
		if (user && user.role.name === 'administrador') {
			setMenuBackOficce(navBackofficeAdminLinks);
		} else if (user) {
			setMenuBackOficce(navLinkUser);
		}
	}, [user]);

	function openBOMenu () {
		setMenuBackOficceOpen(!menuBackOfficeOpen);
	}

	return (
		<div className="hidden flex-grow lg:flex lg:items-center ">
			<div className="flex items-center justify-end lg:flex-grow opacity-100 lg:opacity-100 ">
				<ul className='flex list-none text-center p-0'>
					<NavRoutes />
				</ul>
			</div>
			<div className='text-center p-0 flex'>
				{user
					? (
						<>
							<button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={openBOMenu}>
								{user.firstName}
								<svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
								</svg>
							</button>
							{menuBackOfficeOpen && (
								<div className="origin-top-right absolute right-10 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
									<div className="py-1" role="none">
										{
											menuBackOffice.map((link, i) => (
												<Link key={i} className="text-gray-700 block px-4 py-2 text-sm" to={`${link.route}`}>{link.text}</Link>
											))
										}
									</div>
								</div>
							)}
							<LogoutButton />
						</>
					)
					: <>
						<RegisterButton />
						<LoginButton />
					</>
				}
			</div>
		</div>
	);
}

export default LargeScreenMenu;
