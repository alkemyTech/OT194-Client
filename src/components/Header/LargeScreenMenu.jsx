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
			<div className="flex items-center justify-end lg:flex-grow">
				<ul className='flex list-none text-center p-0 m-0'>
					<NavRoutes />
				</ul>
			</div>
			<div className='text-center p-0'>
				{user
					? <LogoutButton />
					: <>
						<LoginButton />
						<RegisterButton />
					</>
				}
			</div>
		</div>
	);
}

export default LargeScreenMenu;
