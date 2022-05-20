import React, { useState } from 'react';
// import { Link } from 'react-router';

import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

//TiThMenu
import {
	HeaderContainer,
	Link,
	Logo,
	MenuHambIcon,
	MenuItem,
	MenuList,
	MenuMobile,
	MenuMobileList,
} from './StyledHeader';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const mockedLinks = ['About', 'Contact', 'More Info'];

	const handleMenu = () => {
		console.log('ckic');
		setMenuOpen(!menuOpen);
	};

	//TODO: Links=> object Array
	// const navLinks = [
	// 	{
	// 		text: 'About',
	// 		route: '/about',
	// 	},
	// 	{
	// 		text: 'Contact',
	// 		route: '/contact',
	// 	},
	// 	,
	// 	{
	// 		text: 'More Info',
	// 		route: '/info',
	// 	},
	// ];
	return (
		<HeaderContainer>
			<Logo style={{ backgroundImage: 'url(/images/assets/logo.png)' }} />
			<MenuList>
				{mockedLinks.map((link) => (
					<MenuItem key={link}>
						<Link href='https://www.google.com'>{link}</Link>
					</MenuItem>
				))}

				{/* TODO: LINKS FROM REACT ROUTER */}
				{/* {navLinks.map((link,i) => (
					<MenuItem key={i}>
                         <Link to={link.route}>
                        	 {link.text}
                         </Link>
                    </MenuItem>
				))} */}
			</MenuList>
			<MenuHambIcon>
				{menuOpen ? (
					<GrClose fontSize={25} onClick={handleMenu} />
				) : (
					<GiHamburgerMenu fontSize={25} onClick={handleMenu} />
				)}
			</MenuHambIcon>
			{menuOpen && (
				<MenuMobile>
					<MenuMobileList>
						{mockedLinks.map((link) => (
							<MenuItem key={link}>
								<Link href='https://www.google.com'>{link}</Link>
							</MenuItem>
						))}
					</MenuMobileList>
				</MenuMobile>
			)}
		</HeaderContainer>
	);
};
