import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavRoutes } from './NavRoutes';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function BurguerMenu () {
	const { user } = useSelector((state) => state.auth);

	return (
		<div className="lg:hidden w-full h-screen absolute z-50 menuTop left-0 right-0 bottom-0 block flex-grow lg:flex lg:items-center lg:w-auto bg-white ">
			<div className="flex flex-col items-center justify-center text-sm lg:flex-grow opacity-100 lg:opacity-100 ">
				<ul className='flex flex-col justify-space-between list-none my-5 text-center p-0'>
					<NavRoutes />
				</ul>
			</div>
			<div className='text-center p-0'>
				{user
					? <>
						<div className='flex justify-center mb-4'>
							<div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full no-underline'>
								<Link
									className='text-white hover:text-redOng no-underline'
									to="/backoffice"
								>
									{user.firstName}
								</Link>
							</div>
						</div>
						<LogoutButton />
					</>
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
