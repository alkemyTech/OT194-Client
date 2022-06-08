import React from 'react';
import { NavRoutes } from './NavRoutes';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function LargeScreenMenu () {
	const { user } = useSelector((state) => state.auth);

	return (
		<div className="hidden flex-grow lg:flex lg:items-center ">
			<div className="flex items-center justify-end lg:flex-grow opacity-100 lg:opacity-100 ">
				<ul className='flex list-none text-center p-0'>
					<NavRoutes />
				</ul>
			</div>
			<div className='text-center p-0'>
				{user
					? <LogoutButton />
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
