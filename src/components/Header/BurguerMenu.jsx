import React from 'react';
import { Dropdown } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { NavRoutes } from './NavRoutes';
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

function BurguerMenu () {
	const { user } = useSelector((state) => state.auth);
	const [menuBackOffice, setMenuBackOficce] = React.useState([]);

	console.log('user', user);
	React.useEffect(() => {
		if (user && user.role.name === 'administrador') {
			setMenuBackOficce(navBackofficeAdminLinks);
		} else if (user) {
			setMenuBackOficce(navLinkUser);
		}
	}, [user]);

	return (
		<div className="lg:hidden w-full h-screen absolute z-50 menuTop left-0 right-0 bottom-0 block flex-grow lg:flex lg:items-center lg:w-auto bg-white ">
			<div className="flex flex-col items-center justify-center text-sm lg:flex-grow opacity-100 lg:opacity-100 ">
				<ul className='flex flex-col justify-space-between list-none my-5 text-center p-0'>
					<NavRoutes />
				</ul>
			</div>
			<div className='text-center p-0'>
				{user
					? (
						<>
							<div className='flex justify-center mb-4'>
								<Dropdown className='text-center p-0 cursor-pointer' label={user.firstName}>
									{
										menuBackOffice.map((link, i) => (
											<Dropdown.Item key={i}>
												<Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-underline" to={`${link.route}`}>{link.text}</Link>
											</Dropdown.Item>
										))
									}
								</Dropdown>
							</div>
							<LogoutButton />
						</>
					)
					: <>
						<LoginButton />
						<RegisterButton />
					</>
				}
			</div>
		</div>
	);
}

export default BurguerMenu;

// <div className="hidden flex-grow lg:flex lg:items-center">
// <div className="flex items-center justify-end text-sm lg:flex-grow opacity-100 lg:opacity-100 ">
